import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {APPROVE} from "../../constants/typeConstants";
import {PROFILE_SCOPE} from "../../constants/defaultConstants";
import {apiGetRequest, getImageFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_OVERSEER_FETCH,
    EMIT_OVERSEERS_FETCH,
    storeSetOverseerData,
    storeSetOverseersData,
    EMIT_ALL_OVERSEERS_FETCH,
    EMIT_NEXT_OVERSEERS_FETCH,
    storeSetNextOverseersData,
    storeStopInfiniteScrollOverseerData
} from "./actions";
import {
    storeOverseerRequestInit,
    storeOverseersRequestInit,
    storeOverseerRequestFailed,
    storeOverseersRequestFailed,
    storeOverseerRequestSucceed,
    storeAllOverseersRequestInit,
    storeOverseersRequestSucceed,
    storeNextOverseersRequestInit,
    storeAllOverseersRequestFailed,
    storeNextOverseersRequestFailed,
    storeAllOverseersRequestSucceed,
    storeNextOverseersRequestSucceed,
} from "../requests/overseers/actions";

// Fetch all overseers from API
export function* emitAllOverseersFetch() {
    yield takeLatest(EMIT_ALL_OVERSEERS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllOverseersRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_OVERSEERS_API_PATH);
            // Extract data
            const overseers = extractOverseersData(apiResponse.data.controlleurs);
            // Fire event to redux
            yield put(storeSetOverseersData({overseers, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllOverseersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllOverseersRequestFailed({message}));
        }
    });
}

// Fetch overseers from API
export function* emitOverseersFetch() {
    yield takeLatest(EMIT_OVERSEERS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeOverseersRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OVERSEERS_API_PATH}?page=1`);
            // Extract data
            const overseers = extractOverseersData(apiResponse.data.controlleurs);
            // Fire event to redux
            yield put(storeSetOverseersData({overseers, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeOverseersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOverseersRequestFailed({message}));
        }
    });
}

// Fetch next overseers from API
export function* emitNextOverseersFetch() {
    yield takeLatest(EMIT_NEXT_OVERSEERS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextOverseersRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OVERSEERS_API_PATH}?page=${page}`);
            // Extract data
            const overseers = extractOverseersData(apiResponse.data.controlleurs);
            // Fire event to redux
            yield put(storeSetNextOverseersData({overseers, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextOverseersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextOverseersRequestFailed({message}));
            yield put(storeStopInfiniteScrollOverseerData());
        }
    });
}

// Fetch overseer from API
export function* emitOverseerFetch() {
    yield takeLatest(EMIT_OVERSEER_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeOverseerRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.OVERSEER_DETAILS_API_PATH}/${id}`);
            // Extract data
            const overseer = extractOverseerData(
                apiResponse.data.user,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetOverseerData({overseer}));
            // Fire event for request
            yield put(storeOverseerRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeOverseerRequestFailed({message}));
        }
    });
}

// Extract overseer data
function extractOverseerData(apiOverseer, apiCreator) {
    let overseer = {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        creator: {id: '', name: ''},
    };

    if(apiCreator) {
        overseer.creator = {
            name: apiCreator.name,
            id: apiCreator.id.toString(),
        }
    }
    if(apiOverseer) {
        overseer.actionLoader = false;
        overseer.toggleLoader = false;
        overseer.name = apiOverseer.name;
        overseer.phone = apiOverseer.phone;
        overseer.email = apiOverseer.email;
        overseer.address = apiOverseer.adresse;
        overseer.id = apiOverseer.id.toString();
        overseer.creation = apiOverseer.created_at;
        overseer.description = apiOverseer.description;
        overseer.status = apiOverseer.statut === APPROVE;
        overseer.avatar = getImageFromServer(apiOverseer.avatar, PROFILE_SCOPE);
    }
    return overseer;
}

// Extract overseers data
function extractOverseersData(apiOverseers) {
    const overseers = [];
    if(apiOverseers) {
        apiOverseers.forEach(data => {
            overseers.push(extractOverseerData(
                data.controlleur,
                data.createur,
            ));
        });
    }
    return overseers;
}

// Combine to export all functions at once
export default function* sagaOverseers() {
    yield all([
        fork(emitOverseerFetch),
        fork(emitOverseersFetch),
        fork(emitAllOverseersFetch),
        fork(emitNextOverseersFetch),
    ]);
}