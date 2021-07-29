import {all, call, fork, put, takeLatest} from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest} from "../../functions/axiosFunctions";
import {
    EMIT_HANDOVERS_FETCH,
    storeSetHandoversData,
    storeSetNextHandoversData,
    EMIT_NEXT_HANDOVERS_FETCH,
    storeStopInfiniteScrollHandoverData
} from "./actions";
import {
    storeHandoversRequestInit,
    storeHandoversRequestFailed,
    storeHandoversRequestSucceed,
    storeNextHandoversRequestInit,
    storeNextHandoversRequestFailed,
    storeNextHandoversRequestSucceed,
} from "../requests/handovers/actions";

// Fetch handovers from API
export function* emitHandoversFetch() {
    yield takeLatest(EMIT_HANDOVERS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeHandoversRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.HANDOVERS_API_PATH}?page=1`);
            // Extract data
            const handovers = extractHandoversData(apiResponse.data.versements);
            // Fire event to redux
            yield put(storeSetHandoversData({handovers, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeHandoversRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeHandoversRequestFailed({message}));
        }
    });
}

// Fetch next handovers from API
export function* emitNextHandoversFetch() {
    yield takeLatest(EMIT_NEXT_HANDOVERS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextHandoversRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.HANDOVERS_API_PATH}?page=${page}`);
            // Extract data
            const handovers = extractHandoversData(apiResponse.data.versements);
            // Fire event to redux
            yield put(storeSetNextHandoversData({handovers, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextHandoversRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextHandoversRequestFailed({message}));
            yield put(storeStopInfiniteScrollHandoverData());
        }
    });
}

// Extract handover data
function extractHandoverData(apiSender, apiReceiver, apiHandover) {
    let handover = {
        id: '', amount: '', creation: '', status: '',

        sender: {id: '', name: ''},
        receiver: {id: '', name: ''},
    };
    if(apiSender) {
        handover.sender = {
            name: apiSender.name,
            id: apiSender.id.toString()
        };
    }
    if(apiReceiver) {
        handover.receiver = {
            name: apiReceiver.name,
            id: apiReceiver.id.toString()
        };
    }
    if(apiHandover) {
        handover.status = apiHandover.statut;
        handover.amount = apiHandover.montant;
        handover.id = apiHandover.id.toString();
        handover.creation = apiHandover.created_at;
    }
    return handover;
}

// Extract handovers data
export function extractHandoversData(apiHandovers) {
    const handovers = [];
    apiHandovers.forEach(data => {
        handovers.push(extractHandoverData(
            data.emetteur,
            data.recepteur,
            data.versement,
        ));
    });
    return handovers;
}

// Combine to export all functions at once
export default function* sagaHandovers() {
    yield all([
        fork(emitHandoversFetch),
        fork(emitNextHandoversFetch),
    ]);
}
