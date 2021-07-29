import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {APPROVE} from "../../constants/typeConstants";
import {PROFILE_SCOPE} from "../../constants/defaultConstants";
import {apiGetRequest, getImageFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_ADMINISTRATOR_FETCH,
    EMIT_ADMINISTRATORS_FETCH,
    storeSetAdministratorData,
    storeSetAdministratorsData,
    EMIT_ALL_ADMINISTRATORS_FETCH,
    EMIT_NEXT_ADMINISTRATORS_FETCH,
    storeSetNextAdministratorsData,
    storeStopInfiniteScrollAdministratorData
} from "./actions";
import {
    storeAdministratorRequestInit,
    storeAdministratorsRequestInit,
    storeAdministratorRequestFailed,
    storeAdministratorsRequestFailed,
    storeAdministratorRequestSucceed,
    storeAllAdministratorsRequestInit,
    storeAdministratorsRequestSucceed,
    storeNextAdministratorsRequestInit,
    storeAllAdministratorsRequestFailed,
    storeNextAdministratorsRequestFailed,
    storeAllAdministratorsRequestSucceed,
    storeNextAdministratorsRequestSucceed,
} from "../requests/administrators/actions";

// Fetch all administrators from API
export function* emitAllAdministratorsFetch() {
    yield takeLatest(EMIT_ALL_ADMINISTRATORS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllAdministratorsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_ADMINISTRATORS_API_PATH);
            // Extract data
            const administrators = extractAdministratorsData(apiResponse.data.administrateurs);
            // Fire event to redux
            yield put(storeSetAdministratorsData({administrators, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllAdministratorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllAdministratorsRequestFailed({message}));
        }
    });
}

// Fetch administrators from API
export function* emitAdministratorsFetch() {
    yield takeLatest(EMIT_ADMINISTRATORS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAdministratorsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ADMINISTRATORS_API_PATH}?page=1`);
            // Extract data
            const administrators = extractAdministratorsData(apiResponse.data.administrateurs);
            // Fire event to redux
            yield put(storeSetAdministratorsData({administrators, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAdministratorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAdministratorsRequestFailed({message}));
        }
    });
}

// Fetch next administrators from API
export function* emitNextAdministratorsFetch() {
    yield takeLatest(EMIT_NEXT_ADMINISTRATORS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextAdministratorsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ADMINISTRATORS_API_PATH}?page=${page}`);
            // Extract data
            const administrators = extractAdministratorsData(apiResponse.data.administrateurs);
            // Fire event to redux
            yield put(storeSetNextAdministratorsData({administrators, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextAdministratorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextAdministratorsRequestFailed({message}));
            yield put(storeStopInfiniteScrollAdministratorData());
        }
    });
}

// Fetch administrator from API
export function* emitAdministratorFetch() {
    yield takeLatest(EMIT_ADMINISTRATOR_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeAdministratorRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ADMINISTRATOR_DETAILS_API_PATH}/${id}`);
            // Extract data
            const administrator = extractAdministratorData(
                apiResponse.data.user,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetAdministratorData({administrator}));
            // Fire event for request
            yield put(storeAdministratorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAdministratorRequestFailed({message}));
        }
    });
}

// Extract administrator data
function extractAdministratorData(apiAdministrator, apiCreator) {
    let administrator = {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        creator: {id: '', name: ''},
    };

    if(apiCreator) {
        administrator.creator = {
            name: apiCreator.name,
            id: apiCreator.id.toString(),
        }
    }
    if(apiAdministrator) {
        administrator.actionLoader = false;
        administrator.toggleLoader = false;
        administrator.name = apiAdministrator.name;
        administrator.phone = apiAdministrator.phone;
        administrator.email = apiAdministrator.email;
        administrator.address = apiAdministrator.adresse;
        administrator.id = apiAdministrator.id.toString();
        administrator.creation = apiAdministrator.created_at;
        administrator.description = apiAdministrator.description;
        administrator.status = apiAdministrator.statut === APPROVE;
        administrator.avatar = getImageFromServer(apiAdministrator.avatar, PROFILE_SCOPE);
    }
    return administrator;
}

// Extract administrators data
function extractAdministratorsData(apiAdministrators) {
    const administrators = [];
    if(apiAdministrators) {
        apiAdministrators.forEach(data => {
            administrators.push(extractAdministratorData(
                data.administrateur,
                data.createur,
            ));
        });
    }
    return administrators;
}

// Combine to export all functions at once
export default function* sagaAdministrators() {
    yield all([
        fork(emitAdministratorFetch),
        fork(emitAdministratorsFetch),
        fork(emitAllAdministratorsFetch),
        fork(emitNextAdministratorsFetch),
    ]);
}