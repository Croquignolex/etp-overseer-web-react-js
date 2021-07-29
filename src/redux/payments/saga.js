import {all, call, fork, put, takeLatest} from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {
    EMIT_PAYMENTS_FETCH,
    storeSetPaymentsData,
    EMIT_CONFIRM_PAYMENT,
    storeUpdatePaymentData,
    EMIT_NEXT_PAYMENTS_FETCH,
    storeSetNextPaymentsData,
    storeSetPaymentActionData,
    storeStopInfiniteScrollPaymentData
} from "./actions";
import {
    storePaymentsRequestInit,
    storePaymentsRequestFailed,
    storePaymentsRequestSucceed,
    storeNextPaymentsRequestInit,
    storeNextPaymentsRequestFailed,
    storeConfirmPaymentRequestInit,
    storeNextPaymentsRequestSucceed,
    storeConfirmPaymentRequestFailed,
    storeConfirmPaymentRequestSucceed
} from "../requests/payments/actions";

// Fetch payments from API
export function* emitPaymentsFetch() {
    yield takeLatest(EMIT_PAYMENTS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storePaymentsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.PAYMENTS_API_PATH}?page=1`);
            // Extract data
            const payments = extractPaymentsData(apiResponse.data.versements);
            // Fire event to redux
            yield put(storeSetPaymentsData({payments, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storePaymentsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storePaymentsRequestFailed({message}));
        }
    });
}

// Fetch next payments from API
export function* emitNextPaymentsFetch() {
    yield takeLatest(EMIT_NEXT_PAYMENTS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextPaymentsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.PAYMENTS_API_PATH}?page=${page}`);
            // Extract data
            const payments = extractPaymentsData(apiResponse.data.versements);
            // Fire event to redux
            yield put(storeSetNextPaymentsData({payments, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextPaymentsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextPaymentsRequestFailed({message}));
            yield put(storeStopInfiniteScrollPaymentData());
        }
    });
}

// Confirm payment from API
export function* emitConfirmPayment() {
    yield takeLatest(EMIT_CONFIRM_PAYMENT, function*({id}) {
        try {
            // Fire event at redux to toggle action loader
            yield put(storeSetPaymentActionData({id}));
            // Fire event for request
            yield put(storeConfirmPaymentRequestInit());
            const apiResponse = yield call(apiPostRequest, `${api.CONFIRM_PAYMENT_API_PATH}/${id}`);
            // Fire event to redux
            yield put(storeUpdatePaymentData({id}));
            // Fire event at redux to toggle action loader
            yield put(storeSetPaymentActionData({id}));
            // Fire event for request
            yield put(storeConfirmPaymentRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSetPaymentActionData({id}));
            yield put(storeConfirmPaymentRequestFailed({message}));
        }
    });
}

// Extract payment data
function extractPaymentData(apiManager, apiCollector, apiPayment) {
    let payment = {
        id: '',  amount: '', creation: '', status: '', reason: '',

        manager: {id: '', name: ''},
        collector: {id: '', name: ''},
    };
    if(apiManager) {
        payment.manager = {
            name: apiManager.name,
            id: apiManager.id.toString()
        };
    }
    if(apiCollector) {
        payment.collector = {
            name: apiCollector.name,
            id: apiCollector.id.toString()
        };
    }
    if(apiPayment) {
        payment.actionLoader = false;
        payment.reason = apiPayment.recu;
        payment.status = apiPayment.statut;
        payment.amount = apiPayment.montant;
        payment.id = apiPayment.id.toString();
        payment.creation = apiPayment.created_at;
    }
    return payment;
}

// Extract payments data
export function extractPaymentsData(apiPayments) {
    const payments = [];
    apiPayments.forEach(data => {
        payments.push(extractPaymentData(
            data.gestionnaire,
            data.recouvreur,
            data.versement,
        ));
    });
    return payments;
}

// Combine to export all functions at once
export default function* sagaPayments() {
    yield all([
        fork(emitPaymentsFetch),
        fork(emitConfirmPayment),
        fork(emitNextPaymentsFetch),
    ]);
}
