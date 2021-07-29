import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_ZONE,
    EMIT_ZONE_FETCH,
    EMIT_UPDATE_ZONE,
    storeSetZoneData,
    EMIT_ZONES_FETCH,
    storeSetZonesData,
    storeSetNewZoneData,
    EMIT_ALL_ZONES_FETCH,
    EMIT_ADD_ZONE_AGENTS,
    storeSetNextZonesData,
    EMIT_NEXT_ZONES_FETCH,
    storeStopInfiniteScrollZoneData
} from "./actions";
import {
    storeZonesRequestInit,
    storeZonesRequestFailed,
    storeAddZoneRequestInit,
    storeAllZonesRequestInit,
    storeEditZoneRequestInit,
    storeShowZoneRequestInit,
    storeZonesRequestSucceed,
    storeNextZonesRequestInit,
    storeAddZoneRequestFailed,
    storeAddZoneRequestSucceed,
    storeAllZonesRequestFailed,
    storeShowZoneRequestFailed,
    storeEditZoneRequestFailed,
    storeShowZoneRequestSucceed,
    storeNextZonesRequestFailed,
    storeAllZonesRequestSucceed,
    storeEditZoneRequestSucceed,
    storeNextZonesRequestSucceed,
    storeZoneAddAgentRequestInit,
    storeZoneAddAgentRequestFailed,
    storeZoneAddAgentRequestSucceed
} from "../requests/zones/actions";

// Fetch all zones from API
export function* emitAllZonesFetch() {
    yield takeLatest(EMIT_ALL_ZONES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllZonesRequestInit());
            const apiResponse = yield call(apiGetRequest, api.All_ZONES_API_PATH);
            // Extract data
            const zones = extractZonesData(apiResponse.data.zones);
            // Fire event to redux
            yield put(storeSetZonesData({zones, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllZonesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllZonesRequestFailed({message}));
        }
    });
}

// Fetch zones from API
export function* emitZonesFetch() {
    yield takeLatest(EMIT_ZONES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeZonesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ZONES_API_PATH}?page=1`);
            // Extract data
            const zones = extractZonesData(apiResponse.data.zones);
            // Fire event to redux
            yield put(storeSetZonesData({zones, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeZonesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeZonesRequestFailed({message}));
        }
    });
}

// Fetch next zones from API
export function* emitNextZonesFetch() {
    yield takeLatest(EMIT_NEXT_ZONES_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextZonesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ZONES_API_PATH}?page=${page}`);
            // Extract data
            const zones = extractZonesData(apiResponse.data.zones);
            // Fire event to redux
            yield put(storeSetNextZonesData({zones, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextZonesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextZonesRequestFailed({message}));
            yield put(storeStopInfiniteScrollZoneData());
        }
    });
}

// New zone into API
export function* emitNewZone() {
    yield takeLatest(EMIT_NEW_ZONE, function*({name, reference, description}) {
        try {
            // Fire event for request
            yield put(storeAddZoneRequestInit());
            // From data
            const data = {name, reference, description}
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_ZONE_API_PATH, data);
            // Extract data
            const zone = extractZoneData(
                apiResponse.data.zone,
                apiResponse.data.agents,
                apiResponse.data.recouvreur
            );
            // Fire event to redux
            yield put(storeSetNewZoneData({zone}));
            // Fire event for request
            yield put(storeAddZoneRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddZoneRequestFailed({message}));
        }
    });
}

// Fetch zone from API
export function* emitZoneFetch() {
    yield takeLatest(EMIT_ZONE_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeShowZoneRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ZONES_DETAILS_API_PATH}/${id}`);
            // Extract data
            const zone = extractZoneData(
                apiResponse.data.zone,
                apiResponse.data.agents,
                apiResponse.data.recouvreur
            );
            // Fire event to redux
            yield put(storeSetZoneData({zone}));
            // Fire event for request
            yield put(storeShowZoneRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeShowZoneRequestFailed({message}));
        }
    });
}

// Update zone info
export function* emitUpdateZone() {
    yield takeLatest(EMIT_UPDATE_ZONE, function*({id, name, reference, description}) {
        try {
            // Fire event for request
            yield put(storeEditZoneRequestInit());
            const data = {name, reference,  description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_ZONE_API_PATH}/${id}`, data);
            // Extract data
            const zone = extractZoneData(
                apiResponse.data.zone,
                apiResponse.data.agents,
                apiResponse.data.recouvreur
            );
            // Fire event to redux
            yield put(storeSetZoneData({zone, alsoInList: true}));
            // Fire event for request
            yield put(storeEditZoneRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeEditZoneRequestFailed({message}));
        }
    });
}

// Add zone agent
export function* emitAddZoneAgents() {
    yield takeLatest(EMIT_ADD_ZONE_AGENTS, function*({id, name, address, phone, reference, email,
                                                         town, country, password, description,
                                                         backIDCard, frontIDCard, document}) {
        try {
            // Fire event for request
            yield put(storeZoneAddAgentRequestInit());
            const data = new FormData();
            data.append('name', name);
            data.append('ville', town);
            data.append('phone', phone);
            data.append('email', email);
            data.append('pays', country);
            data.append('adresse', address);
            data.append('document', document);
            data.append('password', password);
            data.append('reference', reference);
            data.append('description', description);
            frontIDCard && data.append('base_64_image', frontIDCard);
            backIDCard && data.append('base_64_image_back', backIDCard);
            const apiResponse = yield call(apiPostRequest, `${api.ZONE_ADD_AGENT_API_PATH}/${id}`, data);
            // Extract data
            const zone = extractZoneData(
                apiResponse.data.zone,
                apiResponse.data.agents,
                apiResponse.data.recouvreur
            );
            // Fire event to redux
            yield put(storeSetZoneData({zone, alsoInList: true}));
            // Fire event for request
            yield put(storeZoneAddAgentRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeZoneAddAgentRequestFailed({message}));
        }
    });
}

// Extract zone data
function extractZoneData(apiZone, apiAgents, apiCollector) {
    let zone = {
        id: '', name: '', reference: '', map: '', description: '', creation: '',

        collector: {id: '', name: '', phone: ''},

        agents: [],
    };
    if(apiAgents) {
        apiAgents.forEach(data => {
            const userData = data.user;
            const agentData = data.agent;
            zone.agents.push({
                name: userData.name,
                phone: userData.phone,
                id: userData.id.toString(),
                creation: userData.created_at,
                reference: agentData.reference
            })
        });
    }
    if(apiCollector) {
        zone.collector = {
            name: apiCollector.name,
            phone: apiCollector.phone,
            id: apiCollector.id.toString()
        }
    }
    if(apiZone) {
        zone.map = apiZone.map;
        zone.name = apiZone.nom;
        zone.actionLoader = false;
        zone.id = apiZone.id.toString();
        zone.reference = apiZone.reference;
        zone.creation = apiZone.created_at;
        zone.description = apiZone.description;
    }
    return zone;
}

// Extract zones data
function extractZonesData(apiZones) {
    const zones = [];
    if(apiZones) {
        apiZones.forEach(data => {
            zones.push(extractZoneData(
                data.zone,
                data.agents,
                data.recouvreur
            ));
        });
    }
    return zones;
}

// Combine to export all functions at once
export default function* sagaZones() {
    yield all([
        fork(emitNewZone),
        fork(emitZoneFetch),
        fork(emitUpdateZone),
        fork(emitZonesFetch),
        fork(emitAddZoneAgents),
        fork(emitAllZonesFetch),
        fork(emitNextZonesFetch),
    ]);
}