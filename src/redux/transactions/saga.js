import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiPostRequest} from "../../functions/axiosFunctions";
import {EMIT_TRANSACTIONS_FETCH, storeSetTransactionsData} from "./actions";
import {dateToString, shortDateToString} from "../../functions/generalFunctions";
import {
    storeTransactionsRequestInit,
    storeTransactionsRequestFailed,
    storeTransactionsRequestSucceed
} from "../requests/transactions/actions";

// Fetch transactions from API
export function* emitTransactionsFetch() {
    yield takeLatest(EMIT_TRANSACTIONS_FETCH, function*({selectedStartDay, selectedEndDay}) {
        try {
            // Fire event for request
            yield put(storeTransactionsRequestInit());
            const data = {
                debut: shortDateToString(selectedStartDay),
                fin: shortDateToString(selectedEndDay),
            };
            const apiResponse = yield call(apiPostRequest, api.PERSONAL_TRANSACTIONS_API_PATH, data);
            // Extract data
            const transactions = extractTransactionsData(
                apiResponse.data.transactions
            );
            // Fire event to redux
            yield put(storeSetTransactionsData({transactions}));
            // Fire event for request
            yield put(storeTransactionsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeTransactionsRequestFailed({message}));
        }
    });
}

// Extract sim transactions data
function extractTransactionsData(apiTransactions) {
    let transactions = [];

    apiTransactions.forEach(transaction => {
        transactions.push({
            in: transaction.in,
            out: transaction.out,
            type: transaction.type,
            balance: transaction.balance,
            left_account: transaction.left,
            operator: transaction.operator,
            right_account: transaction.right,
            creation: dateToString(transaction.created_at),
        });
    });

    return transactions;
}

// Combine to export all functions at once
export default function* sagaSims() {
    yield all([
        fork(emitTransactionsFetch),
    ]);
}