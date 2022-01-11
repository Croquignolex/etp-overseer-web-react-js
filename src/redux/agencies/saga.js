import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_AGENCY,
    EMIT_AGENCY_FETCH,
    EMIT_UPDATE_AGENCY,
    storeSetAgencyData,
    EMIT_AGENCIES_FETCH,
    EMIT_ADD_AGENCY_SIMS,
    storeSetAgenciesData,
    storeSetNewAgencyData,
    EMIT_ALL_AGENCIES_FETCH,
    EMIT_NEXT_AGENCIES_FETCH,
    storeSetNextAgenciesData,
    storeStopInfiniteScrollAgencyData
} from "./actions";
import {
    storeAgenciesRequestInit,
    storeAddAgencyRequestInit,
    storeShowAgencyRequestInit,
    storeAgenciesRequestFailed,
    storeEditAgencyRequestInit,
    storeAddAgencyRequestFailed,
    storeAllAgenciesRequestInit,
    storeAgenciesRequestSucceed,
    storeNextAgenciesRequestInit,
    storeShowAgencyRequestFailed,
    storeAgencyAddSimRequestInit,
    storeAddAgencyRequestSucceed,
    storeEditAgencyRequestFailed,
    storeAllAgenciesRequestFailed,
    storeShowAgencyRequestSucceed,
    storeEditAgencyRequestSucceed,
    storeNextAgenciesRequestFailed,
    storeAllAgenciesRequestSucceed,
    storeAgencyAddSimRequestFailed,
    storeNextAgenciesRequestSucceed,
    storeAgencyAddSimRequestSucceed,
} from "../requests/agencies/actions";

// Fetch all agencies from API
export function* emitAllAgenciesFetch() {
    yield takeLatest(EMIT_ALL_AGENCIES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllAgenciesRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_AGENCIES_API_PATH);
            // Extract data
            const agencies = extractAgenciesData(apiResponse.data.agencies);
            // Fire event to redux
            yield put(storeSetAgenciesData({agencies, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllAgenciesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllAgenciesRequestFailed({message}));
        }
    });
}

// Fetch agencies from API
export function* emitAgenciesFetch() {
    yield takeLatest(EMIT_AGENCIES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAgenciesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENCIES_API_PATH}?page=1`);
            // Extract data
            const agencies = extractAgenciesData(apiResponse.data.agencies);
            // Fire event to redux
            yield put(storeSetAgenciesData({agencies, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAgenciesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgenciesRequestFailed({message}));
        }
    });
}

// Fetch next agencies from API
export function* emitNextAgenciesFetch() {
    yield takeLatest(EMIT_NEXT_AGENCIES_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextAgenciesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENCIES_API_PATH}?page=${page}`);
            // Extract data
            const agencies = extractAgenciesData(apiResponse.data.agencies);
            // Fire event to redux
            yield put(storeSetNextAgenciesData({agencies, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextAgenciesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextAgenciesRequestFailed({message}));
            yield put(storeStopInfiniteScrollAgencyData());
        }
    });
}

// New agency into API
export function* emitNewAgency() {
    yield takeLatest(EMIT_NEW_AGENCY, function*({name, manager, description}) {
        try {
            // Fire event for request
            yield put(storeAddAgencyRequestInit());
            // From data
            const data = {name, manager, description}
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_AGENCY_API_PATH, data);
            // Extract data
            const agency = extractAgencyData(
                apiResponse.data.agency,
                apiResponse.data.manager,
                apiResponse.data.puces,
            );
            // Fire event to redux
            yield put(storeSetNewAgencyData({agency}));
            // Fire event for request
            yield put(storeAddAgencyRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddAgencyRequestFailed({message}));
        }
    });
}

// Fetch agency from API
export function* emitAgencyFetch() {
    yield takeLatest(EMIT_AGENCY_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeShowAgencyRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENCY_DETAILS_API_PATH}/${id}`);
            // Extract data
            const agency = extractAgencyData(
                apiResponse.data.agency,
                apiResponse.data.manager,
                apiResponse.data.puces,
            );
            // Fire event to redux
            yield put(storeSetAgencyData({agency}));
            // Fire event for request
            yield put(storeShowAgencyRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeShowAgencyRequestFailed({message}));
        }
    });
}

// Update agency info
export function* emitUpdateAgency() {
    yield takeLatest(EMIT_UPDATE_AGENCY, function*({id, name, description}) {
        try {
            // Fire event for request
            yield put(storeEditAgencyRequestInit());
            const data = {name, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_AGENCY_API_PATH}/${id}`, data);
            // Extract data
            const agency = extractAgencyData(
                apiResponse.data.agency,
                apiResponse.data.manager,
                apiResponse.data.puces,
            );
            // Fire event to redux
            yield put(storeSetAgencyData({agency, alsoInList: true}));
            // Fire event for request
            yield put(storeEditAgencyRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeEditAgencyRequestFailed({message}));
        }
    });
}

// Add agency sim
export function* emitAddAgencySims() {
    yield takeLatest(EMIT_ADD_AGENCY_SIMS, function*({id, name, reference, number, description, operator}) {
        try {
            // Fire event for request
            yield put(storeAgencyAddSimRequestInit());
            const data = {reference, nom: name, description, numero: number, id_flotte: operator,}
            const apiResponse = yield call(apiPostRequest, `${api.AGENCY_ADD_SIM}/${id}`, data);
            // Extract data
            const agency = extractAgencyData(
                apiResponse.data.agency,
                apiResponse.data.manager,
                apiResponse.data.puces,
            );
            // Fire event to redux
            yield put(storeSetAgencyData({agency, alsoInList: true}));
            // Fire event for request
            yield put(storeAgencyAddSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgencyAddSimRequestFailed({message}));
        }
    });
}

// Extract zone data
function extractAgencyData(apiAgency, apiManager, apiSims) {
    let agency = {
        id: '', name: '', description: '', creation: '',

        sims: [],
        manager: {id: '', name: ''},
    };
    if(apiSims) {
        apiSims.forEach(data => {
            agency.sims.push({
                name: data.nom,
                number: data.numero,
                balance: data.solde,
                id: data.id.toString(),
                creation: data.created_at
            })
        });
    }
    if(apiManager) {
        agency.manager = {
            name: apiManager.name,
            id: apiManager.id.toString(),
        }
    }
    if(apiAgency) {
        agency.actionLoader = false;
        agency.name = apiAgency.name;
        agency.id = apiAgency.id.toString();
        agency.creation = apiAgency.created_at;
        agency.description = apiAgency.description;
    }
    return agency;
}

// Extract zones data
function extractAgenciesData(apiAgencies) {
    const agencies = [];
    if(apiAgencies) {
        apiAgencies.forEach(data => {
            agencies.push(extractAgencyData(
                data.agency,
                data.manager,
                data.puces,
            ));
        });
    }
    return agencies;
}

// Combine to export all functions at once
export default function* sagaAgencies() {
    yield all([
        fork(emitNewAgency),
        fork(emitAgencyFetch),
        fork(emitUpdateAgency),
        fork(emitAddAgencySims),
        fork(emitAgenciesFetch),
        fork(emitAllAgenciesFetch),
        fork(emitNextAgenciesFetch),
    ]);
}
