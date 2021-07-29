import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {storeUpdateSupplyData} from "../supplies/actions";
import {apiGetRequest, apiPostRequest, getFileFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_RECOVERY,
    EMIT_RECOVERIES_FETCH,
    storeSetRecoveriesData,
    EMIT_NEXT_RECOVERIES_FETCH,
    storeSetNextRecoveriesData,
    EMIT_SUPPLY_RECOVERIES_FETCH,
    storeStopInfiniteScrollRecoveryData
} from "./actions";
import {
    storeRecoverRequestInit,
    storeRecoverRequestFailed,
    storeRecoverRequestSucceed,
    storeRecoveriesRequestInit,
    storeRecoveriesRequestFailed,
    storeRecoveriesRequestSucceed,
    storeNextRecoveriesRequestInit,
    storeNextRecoveriesRequestFailed,
    storeNextRecoveriesRequestSucceed,
} from "../requests/recoveries/actions";

// Fetch recoveries from API
export function* emitRecoveriesFetch() {
    yield takeLatest(EMIT_RECOVERIES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeRecoveriesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.CASH_RECOVERIES_API_PATH}?page=1`);
            // Extract data
            const recoveries = extractRecoveriesData(apiResponse.data.recouvrements);
            // Fire event to redux
            yield put(storeSetRecoveriesData({recoveries, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeRecoveriesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeRecoveriesRequestFailed({message}));
        }
    });
}

// Fetch supply recoveries from API
export function* emitSupplyRecoveriesFetch() {
    yield takeLatest(EMIT_SUPPLY_RECOVERIES_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeRecoveriesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SUPPLY_CASH_RECOVERIES_API_PATH}/${id}`);
            // Extract data
            const recoveries = extractRecoveriesData(apiResponse.data.recouvrements);
            // Fire event to redux
            yield put(storeSetRecoveriesData({recoveries, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeRecoveriesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeRecoveriesRequestFailed({message}));
        }
    });
}

// Fetch next recoveries from API
export function* emitNextRecoveriesFetch() {
    yield takeLatest(EMIT_NEXT_RECOVERIES_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextRecoveriesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.CASH_RECOVERIES_API_PATH}?page=${page}`);
            // Extract data
            const recoveries = extractRecoveriesData(apiResponse.data.recouvrements);
            // Fire event to redux
            yield put(storeSetNextRecoveriesData({recoveries, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextRecoveriesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextRecoveriesRequestFailed({message}));
            yield put(storeStopInfiniteScrollRecoveryData());
        }
    });
}

// New recovery from API
export function* emitNewRecovery() {
    yield takeLatest(EMIT_NEW_RECOVERY, function*({supply, amount}) {
        try {
            // Fire event for request
            yield put(storeRecoverRequestInit());
            const data = {montant: amount, id_flottage: supply}
            const apiResponse = yield call(apiPostRequest, api.NEW_CASH_RECOVERIES_API_PATH, data);
            // Fire event to redux
            yield put(storeUpdateSupplyData({id: supply, amount}));
            // Fire event for request
            yield put(storeRecoverRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeRecoverRequestFailed({message}));
        }
    });
}

// Extract recovery data
function extractRecoveryData(apiRecovery, apiUser, apiAgent, apiCollector) {
    let recovery = {
        id: '', amount: '', creation: '', receipt: '',

        agent: {id: '', name: ''},
        collector: {id: '', name: ''},
    };
    if(apiAgent && apiUser) {
        recovery.agent = {
            name: apiUser.name,
            id: apiUser.id.toString()
        };
    }
    if(apiCollector) {
        recovery.collector = {
            name: apiCollector.name,
            id: apiCollector.id.toString(),
        };
    }
    if(apiRecovery) {
        recovery.actionLoader = false;
        recovery.amount = apiRecovery.montant;
        recovery.id = apiRecovery.id.toString();
        recovery.creation = apiRecovery.created_at;
        recovery.receipt = getFileFromServer(apiRecovery.recu);
    }
    return recovery;
}

// Extract recoveries data
function extractRecoveriesData(apiRecoveries) {
    const recoveries = [];
    if(apiRecoveries) {
        apiRecoveries.forEach(data => {
            recoveries.push(extractRecoveryData(
                data.recouvrement,
                data.user,
                data.agent,
                data.recouvreur,
            ));
        });
    }
    return recoveries;
}

// Combine to export all functions at once
export default function* sagaRecoveries() {
    yield all([
        fork(emitNewRecovery),
        fork(emitRecoveriesFetch),
        fork(emitNextRecoveriesFetch),
        fork(emitSupplyRecoveriesFetch),
    ]);
}