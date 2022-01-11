import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {APPROVE} from "../../constants/typeConstants";
import {AGENT_SCOPE, PROFILE_SCOPE} from "../../constants/defaultConstants";
import {
    apiGetRequest,
    apiPostRequest,
    getFileFromServer,
    getImageFromServer
} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_AGENT,
    EMIT_AGENT_FETCH,
    EMIT_AGENTS_FETCH,
    EMIT_NEW_RESOURCE,
    storeSetAgentData,
    storeSetAgentsData,
    EMIT_ADD_AGENT_SIMS,
    EMIT_RESOURCE_FETCH,
    storeSetNewAgentData,
    EMIT_RESOURCES_FETCH,
    EMIT_ALL_AGENTS_FETCH,
    EMIT_UPDATE_AGENT_DOC,
    EMIT_UPDATE_AGENT_CNI,
    EMIT_NEXT_AGENTS_FETCH,
    storeSetNextAgentsData,
    EMIT_UPDATE_AGENT_INFO,
    EMIT_UPDATE_AGENT_ZONE,
    storeSetAgentActionData,
    storeSetAgentToggleData,
    EMIT_SEARCH_AGENTS_FETCH,
    EMIT_TOGGLE_AGENT_STATUS,
    EMIT_UPDATE_AGENT_AGENCY,
    EMIT_NEXT_RESOURCES_FETCH,
    storeStopInfiniteScrollAgentData
} from "./actions";
import {
    storeAgentRequestInit,
    storeAgentsRequestInit,
    storeAgentRequestFailed,
    storeAgentsRequestFailed,
    storeAgentRequestSucceed,
    storeAddAgentRequestInit,
    storeAllAgentsRequestInit,
    storeAgentsRequestSucceed,
    storeAddAgentRequestFailed,
    storeNextAgentsRequestInit,
    storeAllAgentsRequestFailed,
    storeAgentAddSimRequestInit,
    storeAddAgentRequestSucceed,
    storeNextAgentsRequestFailed,
    storeAllAgentsRequestSucceed,
    storeAgentEditCniRequestInit,
    storeAgentEditDocRequestInit,
    storeNextAgentsRequestSucceed,
    storeAgentEditInfoRequestInit,
    storeAgentAddSimRequestFailed,
    storeAgentEditZoneRequestInit,
    storeAgentEditDocRequestFailed,
    storeAgentEditCniRequestFailed,
    storeAgentAddSimRequestSucceed,
    storeAgentEditInfoRequestFailed,
    storeAgentEditDocRequestSucceed,
    storeAgentEditCniRequestSucceed,
    storeAgentEditZoneRequestFailed,
    storeAgentEditInfoRequestSucceed,
    storeAgentEditZoneRequestSucceed,
    storeAgentStatusToggleRequestInit,
    storeAgentStatusToggleRequestFailed,
    storeAgentStatusToggleRequestSucceed
} from "../requests/agents/actions";

// Fetch all agents from API
export function* emitAllAgentsFetch() {
    yield takeLatest(EMIT_ALL_AGENTS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllAgentsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_AGENTS_API_PATH);
            // Extract data
            const agents = extractAgentsData(apiResponse.data.agents);
            // Fire event to redux
            yield put(storeSetAgentsData({agents, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllAgentsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllAgentsRequestFailed({message}));
        }
    });
}

// Fetch search agents from API
export function* emitSearchAgentsFetch() {
    yield takeLatest(EMIT_SEARCH_AGENTS_FETCH, function*({needle}) {
        try {
            // Fire event for request
            yield put(storeAgentsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SEARCH_AGENTS_API_PATH}?needle=${needle}`);
            // Extract data
            const agents = extractAgentsData(apiResponse.data.agents);
            // Fire event to redux
            yield put(storeSetAgentsData({agents, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAgentsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentsRequestFailed({message}));
        }
    });
}

// Fetch agents from API
export function* emitAgentsFetch() {
    yield takeLatest(EMIT_AGENTS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAgentsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENTS_API_PATH}?page=1`);
            // Extract data
            const agents = extractAgentsData(apiResponse.data.agents);
            // Fire event to redux
            yield put(storeSetAgentsData({agents, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAgentsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentsRequestFailed({message}));
        }
    });
}

// Fetch resources from API
export function* emitResourcesFetch() {
    yield takeLatest(EMIT_RESOURCES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAgentsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.RESOURCES_API_PATH}?page=1`);
            // Extract data
            const agents = extractAgentsData(apiResponse.data.agents);
            // Fire event to redux
            yield put(storeSetAgentsData({agents, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAgentsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentsRequestFailed({message}));
        }
    });
}

// Fetch next agents from API
export function* emitNextAgentsFetch() {
    yield takeLatest(EMIT_NEXT_AGENTS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextAgentsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENTS_API_PATH}?page=${page}`);
            // Extract data
            const agents = extractAgentsData(apiResponse.data.agents);
            // Fire event to redux
            yield put(storeSetNextAgentsData({agents, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextAgentsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextAgentsRequestFailed({message}));
            yield put(storeStopInfiniteScrollAgentData());
        }
    });
}

// Fetch next resources from API
export function* emitNextResourcesFetch() {
    yield takeLatest(EMIT_NEXT_RESOURCES_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextAgentsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.RESOURCES_API_PATH}?page=${page}`);
            // Extract data
            const agents = extractAgentsData(apiResponse.data.agents);
            // Fire event to redux
            yield put(storeSetNextAgentsData({agents, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextAgentsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextAgentsRequestFailed({message}));
            yield put(storeStopInfiniteScrollAgentData());
        }
    });
}

// New agent into API
export function* emitNewAgent() {
    yield takeLatest(EMIT_NEW_AGENT, function*({name, address, phone, zone, email, description,
                                                   frontIDCard, backIDCard, document}) {
        try {
            // Fire event for request
            yield put(storeAddAgentRequestInit());
            // From data
            const data = new FormData();
            data.append('name', name);
            data.append('phone', phone);
            data.append('email', email);
            data.append('id_zone', zone);
            data.append('adresse', address);
            data.append('document', document);
            data.append('description', description);
            frontIDCard && data.append('base_64_image', frontIDCard);
            backIDCard && data.append('base_64_image_back', backIDCard);
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_AGENT_API_PATH, data);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetNewAgentData({agent}));
            // Fire event for request
            yield put(storeAddAgentRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddAgentRequestFailed({message}));
        }
    });
}

// New agent into API
export function* emitNewResource() {
    yield takeLatest(EMIT_NEW_RESOURCE, function*({name, address, phone, agency, email, description,
                                                   frontIDCard, backIDCard, document}) {
        try {
            // Fire event for request
            yield put(storeAddAgentRequestInit());
            // From data
            const data = new FormData();
            data.append('name', name);
            data.append('phone', phone);
            data.append('email', email);
            data.append('id_agency', agency);
            data.append('adresse', address);
            data.append('document', document);
            data.append('description', description);
            frontIDCard && data.append('base_64_image', frontIDCard);
            backIDCard && data.append('base_64_image_back', backIDCard);
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_RESOURCE_API_PATH, data);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetNewAgentData({agent}));
            // Fire event for request
            yield put(storeAddAgentRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddAgentRequestFailed({message}));
        }
    });
}

// Fetch agent from API
export function* emitAgentFetch() {
    yield takeLatest(EMIT_AGENT_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeAgentRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENT_API_PATH}/${id}`);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces
            );
            // Fire event to redux
            yield put(storeSetAgentData({agent}));
            // Fire event for request
            yield put(storeAgentRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentRequestFailed({message}));
        }
    });
}

// Fetch resource from API
export function* emitResourceFetch() {
    yield takeLatest(EMIT_RESOURCE_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeAgentRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.RESOURCE_API_PATH}/${id}`);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetAgentData({agent}));
            // Fire event for request
            yield put(storeAgentRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentRequestFailed({message}));
        }
    });
}

// Toggle agent status into API
export function* emitToggleAgentStatus() {
    yield takeLatest(EMIT_TOGGLE_AGENT_STATUS, function*({id}) {
        try {
            // Fire event for request
            yield put(storeSetAgentActionData({id}));
            yield put(storeAgentStatusToggleRequestInit());
            const apiResponse = yield call(apiPostRequest, `${api.TOGGLE_AGENT_STATUS_API_PATH}/${id}`);
            // Fire event to redux
            yield put(storeSetAgentToggleData({id}));
            // Fire event for request
            yield put(storeAgentStatusToggleRequestSucceed({message: apiResponse.message}));
            yield put(storeSetAgentActionData({id}));
        } catch (message) {
            // Fire event for request
            yield put(storeSetAgentActionData({id}));
            yield put(storeAgentStatusToggleRequestFailed({message}));
        }
    });
}

// Update agent info
export function* emitUpdateAgentInfo() {
    yield takeLatest(EMIT_UPDATE_AGENT_INFO, function*({id, email, name, address, description}) {
        try {
            // Fire event for request
            yield put(storeAgentEditInfoRequestInit());
            const data = {email, name, adresse: address, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_AGENT_INFO_API_PATH}/${id}`, data);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces
            );
            // Fire event to redux
            yield put(storeSetAgentData({agent, alsoInList: true}));
            // Fire event for request
            yield put(storeAgentEditInfoRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentEditInfoRequestFailed({message}));
        }
    });
}

// Update agent zone
export function* emitUpdateAgentZone() {
    yield takeLatest(EMIT_UPDATE_AGENT_ZONE, function*({id, zone}) {
        try {
            // Fire event for request
            yield put(storeAgentEditZoneRequestInit());
            const data = {id_zone: zone};
            const apiResponse = yield call(apiPostRequest, `${api.AGENT_ZONE_UPDATE_API_PATH}/${id}`, data);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces
            );
            // Fire event to redux
            yield put(storeSetAgentData({agent, alsoInList: true}));
            // Fire event for request
            yield put(storeAgentEditZoneRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentEditZoneRequestFailed({message}));
        }
    });
}

// Update agent agency
export function* emitUpdateAgentAgency() {
    yield takeLatest(EMIT_UPDATE_AGENT_AGENCY, function*({id, agency}) {
        try {
            // Fire event for request
            yield put(storeAgentEditZoneRequestInit());
            const data = {id_agency: agency};
            const apiResponse = yield call(apiPostRequest, `${api.AGENT_AGENCY_UPDATE_API_PATH}/${id}`, data);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetAgentData({agent, alsoInList: true}));
            // Fire event for request
            yield put(storeAgentEditZoneRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentEditZoneRequestFailed({message}));
        }
    });
}

// Update agent doc
export function* emitUpdateAgentDoc() {
    yield takeLatest(EMIT_UPDATE_AGENT_DOC, function*({id, doc}) {
        try {
            // Fire event for request
            yield put(storeAgentEditDocRequestInit());
            const data = new FormData();
            data.append('document', doc);
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_AGENT_DOC_API_PATH}/${id}`, data);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces
            );
            // Fire event to redux
            yield put(storeSetAgentData({agent, alsoInList: true}));
            // Fire event for request
            yield put(storeAgentEditDocRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentEditDocRequestFailed({message}));
        }
    });
}

// Update agent cni
export function* emitUpdateAgentCNI() {
    yield takeLatest(EMIT_UPDATE_AGENT_CNI, function*({id, frontIDCard, backIDCard}) {
        try {
            // Fire event for request
            yield put(storeAgentEditCniRequestInit());
            const data = new FormData();
            data.append('base_64_image', frontIDCard);
            data.append('base_64_image_back', backIDCard);
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_AGENT_CNI_API_PATH}/${id}`, data);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces
            );
            // Fire event to redux
            yield put(storeSetAgentData({agent, alsoInList: true}));
            // Fire event for request
            yield put(storeAgentEditCniRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentEditCniRequestFailed({message}));
        }
    });
}

// Add agent sim
export function* emitAddAgentSims() {
    yield takeLatest(EMIT_ADD_AGENT_SIMS, function*({id, name, reference, number, description, operator}) {
        try {
            // Fire event for request
            yield put(storeAgentAddSimRequestInit());
            const data = {reference, nom: name, description, numero: number, id_flotte: operator,}
            const apiResponse = yield call(apiPostRequest, `${api.AGENT_ADD_SIM}/${id}`, data);
            // Extract data
            const agent = extractAgentData(
                apiResponse.data.agent,
                apiResponse.data.user,
                apiResponse.data.zone,
                apiResponse.data.caisse,
                apiResponse.data.createur,
                apiResponse.data.puces
            );
            // Fire event to redux
            yield put(storeSetAgentData({agent, alsoInList: true}));
            // Fire event for request
            yield put(storeAgentAddSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAgentAddSimRequestFailed({message}));
        }
    });
}

// Extract sim data
function extractAgentData(apiAgent, apiUser, apiZone, apiAccount, apiCreator, apiSims, apiAgency) {
    let agent = {
        id: '', name: '', address: '',
        salePoint: '', frontIDCard: '', backIDCard: '',
        description: '', phone: '', email: '', creation: '',
        avatar: '', status: '', reference: '', town: '', country: '',

        agency: {id: '', name: ''},
        creator: {id: '', name: ''},
        account: {id: '', balance: ''},
        zone: {id: '', name: '', map: ''},

        sims: []
    };
    if(apiSims) {
        apiSims.forEach(data => {
            agent.sims.push({
                name: data.nom,
                number: data.numero,
                balance: data.solde,
                id: data.id.toString(),
                creation: data.created_at
            })
        });
    }
    if(apiZone) {
        agent.zone = {
            map: apiZone.map,
            name: apiZone.nom,
            id: apiZone.id.toString()
        }
    }
    if(apiAgency) {
        agent.agency = {
            name: apiAgency.name,
            id: apiAgency.id.toString()
        }
    }
    if(apiAccount) {
        agent.account = {
            balance: apiAccount.solde,
            id: apiAccount.id.toString(),
        }
    }
    if(apiCreator) {
        agent.creator = {
            name: apiCreator.name,
            id: apiCreator.id.toString(),
        }
    }
    if(apiAgent && apiUser) {
        agent.name = apiUser.name;
        agent.actionLoader = false;
        agent.toggleLoader = false;
        agent.phone = apiUser.phone;
        agent.email = apiUser.email;
        agent.town = apiAgent.ville;
        agent.country = apiAgent.pays;
        agent.address = apiUser.adresse;
        agent.id = apiUser.id.toString();
        agent.creation = apiUser.created_at;
        agent.reference = apiAgent.reference;
        agent.description = apiUser.description;
        agent.status = apiUser.statut === APPROVE;
        agent.document = getFileFromServer(apiAgent.dossier);
        agent.avatar = getImageFromServer(apiUser.avatar, PROFILE_SCOPE);
        agent.frontIDCard = getImageFromServer(apiAgent.img_cni, AGENT_SCOPE);
        agent.backIDCard = getImageFromServer(apiAgent.img_cni_back, AGENT_SCOPE);
    }
    return agent;
}

// Extract agents data
function extractAgentsData(apiAgents) {
    const agents = [];
    if(apiAgents) {
        apiAgents.forEach(data => {
            agents.push(extractAgentData(
                data.agent,
                data.user,
                data.zone,
                data.caisse,
                data.createur,
                data.puces,
                data.agency,
            ));
        });
    }
    return agents;
}

// Combine to export all functions at once
export default function* sagaAgents() {
    yield all([
        fork(emitNewAgent),
        fork(emitAgentFetch),
        fork(emitNewResource),
        fork(emitAgentsFetch),
        fork(emitAddAgentSims),
        fork(emitResourceFetch),
        fork(emitResourcesFetch),
        fork(emitUpdateAgentCNI),
        fork(emitUpdateAgentDoc),
        fork(emitAllAgentsFetch),
        fork(emitUpdateAgentZone),
        fork(emitNextAgentsFetch),
        fork(emitUpdateAgentInfo),
        fork(emitUpdateAgentAgency),
        fork(emitSearchAgentsFetch),
        fork(emitToggleAgentStatus),
        fork(emitNextResourcesFetch),
    ]);
}
