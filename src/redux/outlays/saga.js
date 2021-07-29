import {all, call, fork, put, takeLatest} from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {
    storeOutlaysRequestInit,
    storeOutlaysRequestFailed,
    storeAddOutlayRequestInit,
    storeOutlaysRequestSucceed,
    storeAddOutlayRequestFailed,
    storeNextOutlaysRequestInit,
    storeAddOutlayRequestSucceed,
    storeNextOutlaysRequestFailed,
    storeNextOutlaysRequestSucceed
} from "../requests/outlays/actions";
import {
    EMIT_ADD_OUTLAY,
    EMIT_OUTLAYS_FETCH,
    storeSetOutlaysData,
    storeSetNewOutlayData,
    storeSetNextOutlaysData,
    EMIT_NEXT_OUTLAYS_FETCH,
    storeStopInfiniteScrollOutlayData
} from "./actions";

// Fetch outlays from API
export function* emitOutlaysFetch() {
    yield takeLatest(EMIT_OUTLAYS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeOutlaysRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OUTLAYS_API_PATH}?page=1`);
            // Extract data
            const outlays = extractOutlaysData(apiResponse.data.versements);
            // Fire event to redux
            yield put(storeSetOutlaysData({outlays, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeOutlaysRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOutlaysRequestFailed({message}));
        }
    });
}

// Fetch next outlays from API
export function* emitNextOutlaysFetch() {
    yield takeLatest(EMIT_NEXT_OUTLAYS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextOutlaysRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OUTLAYS_API_PATH}?page=${page}`);
            // Extract data
            const outlays = extractOutlaysData(apiResponse.data.versements);
            // Fire event to redux
            yield put(storeSetNextOutlaysData({outlays, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextOutlaysRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextOutlaysRequestFailed({message}));
            yield put(storeStopInfiniteScrollOutlayData());
        }
    });
}

// Fleets new outlay from API
export function* emitAddOutlay() {
    yield takeLatest(EMIT_ADD_OUTLAY, function*({amount, collector, reason}) {
        try {
            // Fire event for request
            yield put(storeAddOutlayRequestInit());
            const data = {id_receveur: collector, montant: amount, raison: reason};
            const apiResponse = yield call(apiPostRequest, api.NEW_OUTLAY_API_PATH, data);
            // Extract data
            const outlay = extractOutlayData(
                apiResponse.data.gestionnaire,
                apiResponse.data.recouvreur,
                apiResponse.data.versement
            );
            // Fire event to redux
            yield put(storeSetNewOutlayData({outlay}))
            // Fire event for request
            yield put(storeAddOutlayRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddOutlayRequestFailed({message}));
        }
    });
}

// Extract payment data
function extractOutlayData(apiManager, apiCollector, apiOutlay) {
    let outlay = {
        id: '', amount: '', creation: '', status: '', reason: '',

        manager: {id: '', name: ''},
        collector: {id: '', name: ''},
    };
    if(apiManager) {
        outlay.manager = {
            name: apiManager.name,
            id: apiManager.id.toString()
        };
    }
    if(apiCollector) {
        outlay.collector = {
            name: apiCollector.name,
            id: apiCollector.id.toString()
        };
    }
    if(apiOutlay) {
        outlay.reason = apiOutlay.recu;
        outlay.status = apiOutlay.statut;
        outlay.amount = apiOutlay.montant;
        outlay.id = apiOutlay.id.toString();
        outlay.creation = apiOutlay.created_at;
    }
    return outlay;
}

// Extract outlays data
export function extractOutlaysData(apiOutlays) {
    const outlays = [];
    apiOutlays.forEach(data => {
        outlays.push(extractOutlayData(
            data.gestionnaire,
            data.recouvreur,
            data.versement,
        ));
    });
    return outlays;
}

// Combine to export all functions at once
export default function* sagaOutlays() {
    yield all([
        fork(emitAddOutlay),
        fork(emitOutlaysFetch),
        fork(emitNextOutlaysFetch),
    ]);
}
