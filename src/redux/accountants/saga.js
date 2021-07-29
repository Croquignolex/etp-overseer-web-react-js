import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {APPROVE} from "../../constants/typeConstants";
import {PROFILE_SCOPE} from "../../constants/defaultConstants";
import {apiGetRequest, apiPostRequest, getImageFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_ACCOUNTANT,
    EMIT_ACCOUNTANT_FETCH,
    storeSetAccountantData,
    EMIT_ACCOUNTANTS_FETCH,
    storeSetAccountantsData,
    storeSetNewAccountantData,
    EMIT_ALL_ACCOUNTANTS_FETCH,
    EMIT_NEXT_ACCOUNTANTS_FETCH,
    storeSetNextAccountantsData,
    EMIT_UPDATE_ACCOUNTANT_INFO,
    storeSetAccountantActionData,
    storeSetAccountantToggleData,
    EMIT_TOGGLE_ACCOUNTANT_STATUS,
    storeStopInfiniteScrollAccountantData
} from "./actions";
import {
    storeAccountantRequestInit,
    storeAccountantsRequestInit,
    storeAccountantRequestFailed,
    storeAddAccountantRequestInit,
    storeAccountantsRequestFailed,
    storeAccountantRequestSucceed,
    storeAccountantsRequestSucceed,
    storeAllAccountantsRequestInit,
    storeNextAccountantsRequestInit,
    storeAddAccountantRequestFailed,
    storeAllAccountantsRequestFailed,
    storeAddAccountantRequestSucceed,
    storeAllAccountantsRequestSucceed,
    storeNextAccountantsRequestFailed,
    storeAccountantEditInfoRequestInit,
    storeNextAccountantsRequestSucceed,
    storeAccountantEditInfoRequestFailed,
    storeAccountantEditInfoRequestSucceed,
    storeAccountantStatusToggleRequestInit,
    storeAccountantStatusToggleRequestFailed,
    storeAccountantStatusToggleRequestSucceed,
} from "../requests/accountants/actions";

// Fetch all accountants from API
export function* emitAllAccountantsFetch() {
    yield takeLatest(EMIT_ALL_ACCOUNTANTS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllAccountantsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_ACCOUNTANTS_API_PATH);
            // Extract data
            const accountants = extractAccountantsData(apiResponse.data.comptables);
            // Fire event to redux
            yield put(storeSetAccountantsData({accountants, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllAccountantsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllAccountantsRequestFailed({message}));
        }
    });
}

// Fetch accountants from API
export function* emitAccountantsFetch() {
    yield takeLatest(EMIT_ACCOUNTANTS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAccountantsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ACCOUNTANTS_API_PATH}?page=1`);
            // Extract data
            const accountants = extractAccountantsData(apiResponse.data.comptables);
            // Fire event to redux
            yield put(storeSetAccountantsData({accountants, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAccountantsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAccountantsRequestFailed({message}));
        }
    });
}

// Fetch next accountants from API
export function* emitNextAccountantsFetch() {
    yield takeLatest(EMIT_NEXT_ACCOUNTANTS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextAccountantsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ACCOUNTANTS_API_PATH}?page=${page}`);
            // Extract data
            const accountants = extractAccountantsData(apiResponse.data.comptables);
            // Fire event to redux
            yield put(storeSetNextAccountantsData({accountants, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextAccountantsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextAccountantsRequestFailed({message}));
            yield put(storeStopInfiniteScrollAccountantData());
        }
    });
}

// Toggle accountant status into API
export function* emitToggleAccountantStatus() {
    yield takeLatest(EMIT_TOGGLE_ACCOUNTANT_STATUS, function*({id}) {
        try {
            // Fire event for request
            yield put(storeSetAccountantActionData({id}));
            yield put(storeAccountantStatusToggleRequestInit());
            const apiResponse = yield call(apiPostRequest, `${api.TOGGLE_ACCOUNTANT_STATUS_API_PATH}/${id}`);
            // Fire event to redux
            yield put(storeSetAccountantToggleData({id}));
            // Fire event for request
            yield put(storeAccountantStatusToggleRequestSucceed({message: apiResponse.message}));
            yield put(storeSetAccountantActionData({id}));
        } catch (message) {
            // Fire event for request
            yield put(storeSetAccountantActionData({id}));
            yield put(storeAccountantStatusToggleRequestFailed({message}));
        }
    });
}

// New accountant into API
export function* emitNewAccountant() {
    yield takeLatest(EMIT_NEW_ACCOUNTANT, function*({name, address, phone, email, password,  description}) {
        try {
            // Fire event for request
            yield put(storeAddAccountantRequestInit());
            // From data
            const data = {name, phone, email, password, description, adresse: address}
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_ACCOUNTANT_API_PATH, data);
            // Extract data
            const accountant = extractAccountantData(
                apiResponse.data.gestionnaire,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetNewAccountantData({accountant}));
            // Fire event for request
            yield put(storeAddAccountantRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddAccountantRequestFailed({message}));
        }
    });
}

// Fetch accountant from API
export function* emitAccountantFetch() {
    yield takeLatest(EMIT_ACCOUNTANT_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeAccountantRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ACCOUNTANT_DETAILS_API_PATH}/${id}`);
            // Extract data
            const accountant = extractAccountantData(
                apiResponse.data.user,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetAccountantData({accountant}));
            // Fire event for request
            yield put(storeAccountantRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAccountantRequestFailed({message}));
        }
    });
}

// Update accountant info
export function* emitUpdateAccountantInfo() {
    yield takeLatest(EMIT_UPDATE_ACCOUNTANT_INFO, function*({id, email, name, address, description}) {
        try {
            // Fire event for request
            yield put(storeAccountantEditInfoRequestInit());
            const data = {email, name, adresse: address, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_ACCOUNTANT_API_PATH}/${id}`, data);
            // Extract data
            const accountant = extractAccountantData(
                apiResponse.data.user,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetAccountantData({accountant, alsoInList: true}));
            // Fire event for request
            yield put(storeAccountantEditInfoRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAccountantEditInfoRequestFailed({message}));
        }
    });
}

// Extract accountant data
function extractAccountantData(apiAccountant, apiCreator) {
    let accountant = {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        creator: {id: '', name: ''},
    };

    if(apiCreator) {
        accountant.creator = {
            name: apiCreator.name,
            id: apiCreator.id.toString(),
        }
    }
    if(apiAccountant) {
        accountant.actionLoader = false;
        accountant.toggleLoader = false;
        accountant.name = apiAccountant.name;
        accountant.phone = apiAccountant.phone;
        accountant.email = apiAccountant.email;
        accountant.address = apiAccountant.adresse;
        accountant.id = apiAccountant.id.toString();
        accountant.creation = apiAccountant.created_at;
        accountant.description = apiAccountant.description;
        accountant.status = apiAccountant.statut === APPROVE;
        accountant.avatar = getImageFromServer(apiAccountant.avatar, PROFILE_SCOPE);
    }
    return accountant;
}

// Extract accountants data
function extractAccountantsData(apiAccountants) {
    const accountants = [];
    if(apiAccountants) {
        apiAccountants.forEach(data => {
            accountants.push(extractAccountantData(
                data.comptable,
                data.createur,
            ));
        });
    }
    return accountants;
}

// Combine to export all functions at once
export default function* sagaAccountants() {
    yield all([
        fork(emitNewAccountant),
        fork(emitAccountantFetch),
        fork(emitAccountantsFetch),
        fork(emitAllAccountantsFetch),
        fork(emitUpdateAccountantInfo),
        fork(emitNextAccountantsFetch),
        fork(emitToggleAccountantStatus),
    ]);
}