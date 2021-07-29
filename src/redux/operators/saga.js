import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {dateToString, shortDateToString} from "../../functions/generalFunctions";
import {
    EMIT_NEW_OPERATOR,
    EMIT_OPERATOR_FETCH,
    EMIT_OPERATORS_FETCH,
    storeSetOperatorData,
    EMIT_UPDATE_OPERATOR,
    storeSetOperatorsData,
    EMIT_ADD_OPERATOR_SIMS,
    storeSetNewOperatorData,
    EMIT_ALL_OPERATORS_FETCH,
    storeSetNextOperatorsData,
    EMIT_NEXT_OPERATORS_FETCH,
    EMIT_OPERATOR_TRANSACTIONS_FETCH,
    storeSetOperatorTransactionsData,
    storeStopInfiniteScrollOperatorData
} from "./actions";
import {
    storeOperatorsRequestInit,
    storeOperatorsRequestFailed,
    storeAddOperatorRequestInit,
    storeShowOperatorRequestInit,
    storeAllOperatorsRequestInit,
    storeOperatorsRequestSucceed,
    storeEditOperatorRequestInit,
    storeNextOperatorsRequestInit,
    storeAddOperatorRequestFailed,
    storeAllOperatorsRequestFailed,
    storeShowOperatorRequestFailed,
    storeAddOperatorRequestSucceed,
    storeEditOperatorRequestFailed,
    storeOperatorAddSimRequestInit,
    storeNextOperatorsRequestFailed,
    storeAllOperatorsRequestSucceed,
    storeShowOperatorRequestSucceed,
    storeEditOperatorRequestSucceed,
    storeNextOperatorsRequestSucceed,
    storeOperatorAddSimRequestFailed,
    storeOperatorAddSimRequestSucceed,
    storeOperatorTransactionsRequestInit,
    storeOperatorTransactionsRequestFailed,
    storeOperatorTransactionsRequestSucceed,
} from "../requests/operators/actions";

// Fetch all operators from API
export function* emitAllOperatorsFetch() {
    yield takeLatest(EMIT_ALL_OPERATORS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllOperatorsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.All_OPERATORS_API_PATH);
            // Extract data
            const operators = extractOperatorsData(apiResponse.data.flotes);
            // Fire event to redux
            yield put(storeSetOperatorsData({operators, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllOperatorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllOperatorsRequestFailed({message}));
        }
    });
}

// Fetch operators from API
export function* emitOperatorsFetch() {
    yield takeLatest(EMIT_OPERATORS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeOperatorsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OPERATORS_API_PATH}?page=1`);
            // Extract data
            const operators = extractOperatorsData(apiResponse.data.flotes);
            // Fire event to redux
            yield put(storeSetOperatorsData({operators, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeOperatorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOperatorsRequestFailed({message}));
        }
    });
}

// Fetch next operators from API
export function* emitNextOperatorsFetch() {
    yield takeLatest(EMIT_NEXT_OPERATORS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextOperatorsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OPERATORS_API_PATH}?page=${page}`);
            // Extract data
            const operators = extractOperatorsData(apiResponse.data.flotes);
            // Fire event to redux
            yield put(storeSetNextOperatorsData({operators, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextOperatorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextOperatorsRequestFailed({message}));
            yield put(storeStopInfiniteScrollOperatorData());
        }
    });
}

// New operator into API
export function* emitNewOperator() {
    yield takeLatest(EMIT_NEW_OPERATOR, function*({name, description}) {
        try {
            // Fire event for request
            yield put(storeAddOperatorRequestInit());
            // From data
            const data = {name, description}
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_OPERATOR_API_PATH, data);
            // Extract data
            const operator = extractOperatorData(apiResponse.data.flote);
            // Fire event to redux
            yield put(storeSetNewOperatorData({operator}));
            // Fire event for request
            yield put(storeAddOperatorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddOperatorRequestFailed({message}));
        }
    });
}

// Fetch operator from API
export function* emitOperatorFetch() {
    yield takeLatest(EMIT_OPERATOR_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeShowOperatorRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OPERATOR_API_PATH}/${id}`);
            // Extract data
            const operator = extractOperatorData(
                apiResponse.data.flote,
                apiResponse.data.puces,
            );
            // Fire event to redux
            yield put(storeSetOperatorData({operator}));
            // Fire event for request
            yield put(storeShowOperatorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeShowOperatorRequestFailed({message}));
        }
    });
}

// Update operator info
export function* emitUpdateOperator() {
    yield takeLatest(EMIT_UPDATE_OPERATOR, function*({id, name, description}) {
        try {
            // Fire event for request
            yield put(storeEditOperatorRequestInit());
            const data = {name, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_OPERATOR_INFO_API_PATH}/${id}`, data);
            // Extract data
            const operator = extractOperatorData(
                apiResponse.data.flote,
                apiResponse.data.puces,
            );
            // Fire event to redux
            yield put(storeSetOperatorData({operator, alsoInList: true}));
            // Fire event for request
            yield put(storeEditOperatorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeEditOperatorRequestFailed({message}));
        }
    });
}

// Add agent sim
export function* emitAddOperatorSims() {
    yield takeLatest(EMIT_ADD_OPERATOR_SIMS, function*({id, simType, name, number, description, agent, company, collector, resource, reference}) {
        try {
            // Fire event for request
            yield put(storeOperatorAddSimRequestInit());
            const data = {
                reference,
                nom: name,
                description,
                type: simType,
                numero: number,
                id_agent: agent,
                id_rz: collector,
                id_corporate: company,
                id_ressource: resource,
            }
            const apiResponse = yield call(apiPostRequest, `${api.OPERATOR_ADD_SIM}/${id}`, data);
            // Extract data
            const operator = extractOperatorData(
                apiResponse.data.flote,
                apiResponse.data.puces,
            );
            // Fire event to redux
            yield put(storeSetOperatorData({operator, alsoInList: true}));
            // Fire event for request
            yield put(storeOperatorAddSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOperatorAddSimRequestFailed({message}));
        }
    });
}

// Fetch operator transactions from API
export function* emitSimTransactionsFetch() {
    yield takeLatest(EMIT_OPERATOR_TRANSACTIONS_FETCH, function*({id, selectedStartDay, selectedEndDay}) {
        try {
            // Fire event for request
            yield put(storeOperatorTransactionsRequestInit());
            const data = {
                debut: shortDateToString(selectedStartDay),
                fin: shortDateToString(selectedEndDay),
            };
            const apiResponse = yield call(apiPostRequest, `${api.OPERATOR_TRANSACTIONS_API_PATH}/${id}`, data);
            // Extract data
            const transactions = extractOperatorTransactionsData(
                apiResponse.data.transactions
            );
            // Fire event to redux
            yield put(storeSetOperatorTransactionsData({transactions}));
            // Fire event for request
            yield put(storeOperatorTransactionsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOperatorTransactionsRequestFailed({message}));
        }
    });
}

// Extract operator transactions data
function extractOperatorTransactionsData(apiTransactions) {
    let transactions = [];

    apiTransactions.forEach(transaction => {
        transactions.push({
            in: transaction.in,
            out: transaction.out,
            type: transaction.type,
            user: transaction.user,
            left_account: transaction.left,
            right_account: transaction.right,
            creation: dateToString(transaction.created_at),
        });
    });

    return transactions;
}

// Extract operator data
function extractOperatorData(apiOperator, apiSims) {
    let operator = {
        id: '', name: '', description: '', creation: '',

        sims: [],
        transactions: []
    };
    if(apiSims) {
        apiSims.forEach(data => {
            operator.sims.push({
                name: data.nom,
                number: data.numero,
                balance: data.solde,
                id: data.id.toString(),
                creation: data.created_at
            })
        });
    }
    if(apiOperator) {
        operator.actionLoader = false;
        operator.name = apiOperator.nom;
        operator.id = apiOperator.id.toString();
        operator.creation = apiOperator.created_at;
        operator.description = apiOperator.description;
    }
    return operator;
}

// Extract zones data
function extractOperatorsData(apiOperators) {
    const operators = [];
    if(apiOperators) {
        apiOperators.forEach(data => {
            operators.push(extractOperatorData(
                data.flote,
                data.puces,
            ));
        });
    }
    return operators;
}

// Combine to export all functions at once
export default function* sagaOperators() {
    yield all([
        fork(emitNewOperator),
        fork(emitOperatorFetch),
        fork(emitUpdateOperator),
        fork(emitOperatorsFetch),
        fork(emitAddOperatorSims),
        fork(emitAllOperatorsFetch),
        fork(emitNextOperatorsFetch),
        fork(emitSimTransactionsFetch),
    ]);
}