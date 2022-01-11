import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {dateToString, shortDateToString} from "../../functions/generalFunctions";
import {
    EMIT_NEW_SIM,
    EMIT_SIM_FETCH,
    storeSetSimData,
    EMIT_UPDATE_SIM,
    EMIT_SIMS_FETCH,
    storeSetSimsData,
    storeSetNewSimData,
    EMIT_ALL_SIMS_FETCH,
    EMIT_NEXT_SIMS_FETCH,
    storeSetNextSimsData,
    EMIT_FLEETS_SIMS_FETCH,
    EMIT_AGENTS_SIMS_FETCH,
    EMIT_SEARCH_SIMS_FETCH,
    EMIT_MASTERS_SIMS_FETCH,
    EMIT_INTERNAL_SIMS_FETCH,
    EMIT_RESOURCES_SIMS_FETCH,
    EMIT_ALL_MASTER_SIMS_FETCH,
    EMIT_ALL_FLEETS_SIMS_FETCH,
    EMIT_COLLECTORS_SIMS_FETCH,
    EMIT_NEXT_AGENTS_SIMS_FETCH,
    EMIT_SIM_TRANSACTIONS_FETCH,
    EMIT_NEXT_FLEETS_SIMS_FETCH,
    storeSetSimTransactionsData,
    EMIT_NEXT_MASTERS_SIMS_FETCH,
    storeStopInfiniteScrollSimData,
    EMIT_NEXT_RESOURCES_SIMS_FETCH,
    EMIT_NEXT_COLLECTORS_SIMS_FETCH
} from "./actions";
import {
    storeSimsRequestInit,
    storeSimsRequestFailed,
    storeAddSimRequestInit,
    storeShowSimRequestInit,
    storeSimsRequestSucceed,
    storeAllSimsRequestInit,
    storeEditSimRequestInit,
    storeNextSimsRequestInit,
    storeAddSimRequestFailed,
    storeShowSimRequestFailed,
    storeAllSimsRequestFailed,
    storeAddSimRequestSucceed,
    storeEditSimRequestFailed,
    storeShowSimRequestSucceed,
    storeNextSimsRequestFailed,
    storeAllSimsRequestSucceed,
    storeEditSimRequestSucceed,
    storeNextSimsRequestSucceed,
    storeAllFleetSimsRequestInit,
    storeAllMasterSimsRequestInit,
    storeAllFleetSimsRequestFailed,
    storeAllInternalSimsRequestInit,
    storeSimTransactionsRequestInit,
    storeAllFleetSimsRequestSucceed,
    storeAllMasterSimsRequestFailed,
    storeAllMasterSimsRequestSucceed,
    storeAllInternalSimsRequestFailed,
    storeSimTransactionsRequestFailed,
    storeAllInternalSimsRequestSucceed,
    storeSimTransactionsRequestSucceed
} from "../requests/sims/actions";

// Fetch all sims from API
export function* emitAllSimsFetch() {
    yield takeLatest(EMIT_ALL_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.All_SIMS_API_PATH);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllSimsRequestFailed({message}));
        }
    });
}

// Fetch internal sims from API
export function* emitAllInternalSimsFetch() {
    yield takeLatest(EMIT_INTERNAL_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllInternalSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.All_INTERNAL_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAllInternalSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllInternalSimsRequestFailed({message}));
        }
    });
}

// Fetch sims from API
export function* emitSimsFetch() {
    yield takeLatest(EMIT_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next sims from API
export function* emitNextSimsFetch() {
    yield takeLatest(EMIT_NEXT_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch masters sims from API
export function* emitMastersSimsFetch() {
    yield takeLatest(EMIT_MASTERS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.MASTERS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}


// Fetch all master sims from API
export function* emitAllMasterSimsFetch() {
    yield takeLatest(EMIT_ALL_MASTER_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllMasterSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ALL_MASTERS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAllMasterSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllMasterSimsRequestFailed({message}));
        }
    });
}

// Fetch search sims from API
export function* emitSearchSimsFetch() {
    yield takeLatest(EMIT_SEARCH_SIMS_FETCH, function*({needle}) {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SEARCH_SIMS_API_PATH}?needle=${needle}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next masters sims from API
export function* emitNextMastersSimsFetch() {
    yield takeLatest(EMIT_NEXT_MASTERS_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.MASTERS_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch fleets sims from API
export function* emitFleetsSimsFetch() {
    yield takeLatest(EMIT_FLEETS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.FLEETS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next fleets sims from API
export function* emitNextFleetsSimsFetch() {
    yield takeLatest(EMIT_NEXT_FLEETS_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.FLEETS_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch collectors sims from API
export function* emitCollectorsSimsFetch() {
    yield takeLatest(EMIT_COLLECTORS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.COLLECTORS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next collectors sims from API
export function* emitNextCollectorsSimsFetch() {
    yield takeLatest(EMIT_NEXT_COLLECTORS_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.COLLECTORS_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch agents sims from API
export function* emitAgentsSimsFetch() {
    yield takeLatest(EMIT_AGENTS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENTS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next agents sims from API
export function* emitNextAgentsSimsFetch() {
    yield takeLatest(EMIT_NEXT_AGENTS_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.AGENTS_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch resources sims from API
export function* emitResourcesSimsFetch() {
    yield takeLatest(EMIT_RESOURCES_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.RESOURCES_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimsRequestFailed({message}));
        }
    });
}

// Fetch next resources sims from API
export function* emitNextResourcesSimsFetch() {
    yield takeLatest(EMIT_NEXT_RESOURCES_SIMS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.RESOURCES_SIMS_API_PATH}?page=${page}`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetNextSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextSimsRequestFailed({message}));
            yield put(storeStopInfiniteScrollSimData());
        }
    });
}

// Fetch sim from API
export function* emitSimFetch() {
    yield takeLatest(EMIT_SIM_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeShowSimRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.SIM_API_PATH}/${id}`);
            // Extract data
            const sim = extractSimData(
                apiResponse.data.puce,
                apiResponse.data.type,
                apiResponse.data.user,
                apiResponse.data.agent,
                apiResponse.data.corporate,
                apiResponse.data.flote,
                apiResponse.data.recouvreur,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetSimData({sim}));
            // Fire event for request
            yield put(storeShowSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeShowSimRequestFailed({message}));
        }
    });
}

// New sim into API
export function* emitNewSim() {
    yield takeLatest(EMIT_NEW_SIM, function*({name, number, operator, agent, collector, agency,
                                                 reference, description, simType, company}) {
        try {
            // Fire event for request
            yield put(storeAddSimRequestInit());
            // From data
            const data = {
                reference,
                nom: name,
                description,
                type: simType,
                numero: number,
                id_agent: agent,
                id_agency: agency,
                id_flotte: operator,
                id_corporate: company,
                id_recouvreur: collector,
            }
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_SIM_API_PATH, data);
            // Extract data
            const sim = extractSimData(
                apiResponse.data.puce,
                apiResponse.data.type,
                apiResponse.data.user,
                apiResponse.data.agent,
                apiResponse.data.corporate,
                apiResponse.data.flote,
                apiResponse.data.recouvreur,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetNewSimData({sim}));
            // Fire event for request
            yield put(storeAddSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddSimRequestFailed({message}));
        }
    });
}

// Fetch sim transactions from API
export function* emitSimTransactionsFetch() {
    yield takeLatest(EMIT_SIM_TRANSACTIONS_FETCH, function*({id, selectedStartDay, selectedEndDay}) {
        try {
            // Fire event for request
            yield put(storeSimTransactionsRequestInit());
            const data = {
                debut: shortDateToString(selectedStartDay),
                fin: shortDateToString(selectedEndDay),
            };
            const apiResponse = yield call(apiPostRequest, `${api.SIM_TRANSACTIONS_API_PATH}/${id}`, data);
            // Extract data
            const transactions = extractSimTransactionsData(
                apiResponse.data.transactions
            );
            // Fire event to redux
            yield put(storeSetSimTransactionsData({transactions}));
            // Fire event for request
            yield put(storeSimTransactionsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSimTransactionsRequestFailed({message}));
        }
    });
}

// Update sim info
export function* emitUpdateSim() {
    yield takeLatest(EMIT_UPDATE_SIM, function*({id, name, description}) {
        try {
            // Fire event for request
            yield put(storeEditSimRequestInit());
            const data = {nom: name, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_SIM_API_PATH}/${id}`, data);
            // Extract data
            const sim = extractSimData(
                apiResponse.data.puce,
                apiResponse.data.type,
                apiResponse.data.user,
                apiResponse.data.agent,
                apiResponse.data.corporate,
                apiResponse.data.flote,
                apiResponse.data.recouvreur,
                apiResponse.data.agency,
            );
            // Fire event to redux
            yield put(storeSetSimData({sim, alsoInList: true}));
            // Fire event for request
            yield put(storeEditSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeEditSimRequestFailed({message}));
        }
    });
}

// Fetch all fleets sims from API
export function* emitAllFleetSimsFetch() {
    yield takeLatest(EMIT_ALL_FLEETS_SIMS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllFleetSimsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.ALL_FLEETS_SIMS_API_PATH}?page=1`);
            // Extract data
            const sims = extractSimsData(apiResponse.data.puces);
            // Fire event to redux
            yield put(storeSetSimsData({sims, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeAllFleetSimsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllFleetSimsRequestFailed({message}));
        }
    });
}

// Extract sim transactions data
function extractSimTransactionsData(apiTransactions) {
    let transactions = [];

    apiTransactions.forEach(transaction => {
        transactions.push({
            in: transaction.in,
            out: transaction.out,
            type: transaction.type,
            user: transaction.user,
            balance: transaction.balance,
            operator: transaction.operator,
            right_account: transaction.right,
            creation: dateToString(transaction.created_at),
        });
    });

    return transactions;
}

// Extract sim data
function extractSimData(apiSim, apiType, apiUser, apiAgent, apiCompany, apiOperator, apiCollector, apiAgency) {
    let sim = {
        id: '', name: '', reference: '', number: '', balance: '', description: '', creation: '',

        type: {id: '', name: ''},
        agent: {id: '', name: ''},
        agency: {id: '', name: ''},
        company: {id: '', name: ''},
        operator: {id: '', name: ''},
        collector: {id: '', name: ''},

        transactions: []
    };
    if(apiAgent && apiUser) {
        sim.agent = {
            name: apiUser.name,
            id: apiUser.id.toString()
        };
    }
    if(apiCollector) {
        sim.collector = {
            name: apiCollector.name,
            id: apiCollector.id.toString(),
        };
    }
    if(apiCompany) {
        sim.company = {
            name: apiCompany.nom,
            id: apiCompany.id.toString()
        };
    }
    if(apiOperator) {
        sim.operator = {
            name: apiOperator.nom,
            id: apiOperator.id.toString()
        };
    }
    if(apiType) {
        sim.type = {
            name: apiType.name,
            id: apiType.id.toString()
        };
    }
    if(apiAgency) {
        sim.agency = {
            name: apiAgency.name,
            id: apiAgency.id.toString()
        };
    }
    if(apiSim) {
        sim.name = apiSim.nom;
        sim.actionLoader = false;
        sim.number = apiSim.numero;
        sim.balance = apiSim.solde;
        sim.id = apiSim.id.toString();
        sim.creation = apiSim.created_at;
        sim.reference = apiSim.reference;
        sim.description = apiSim.description;
    }
    return sim;
}

// Extract sims data
function extractSimsData(apiSims) {
    const sims = [];
    apiSims.forEach(data => {
        sims.push(extractSimData(
            data.puce,
            data.type,
            data.user,
            data.agent,
            data.corporate,
            data.flote,
            data.recouvreur,
            data.agency
        ))
    });
    return sims;
}

// Combine to export all functions at once
export default function* sagaSims() {
    yield all([
        fork(emitNewSim),
        fork(emitSimFetch),
        fork(emitUpdateSim),
        fork(emitSimsFetch),
        fork(emitAllSimsFetch),
        fork(emitNextSimsFetch),
        fork(emitSearchSimsFetch),
        fork(emitFleetsSimsFetch),
        fork(emitAgentsSimsFetch),
        fork(emitMastersSimsFetch),
        fork(emitAllFleetSimsFetch),
        fork(emitAllMasterSimsFetch),
        fork(emitResourcesSimsFetch),
        fork(emitNextFleetsSimsFetch),
        fork(emitCollectorsSimsFetch),
        fork(emitNextAgentsSimsFetch),
        fork(emitSimTransactionsFetch),
        fork(emitAllInternalSimsFetch),
        fork(emitNextMastersSimsFetch),
        fork(emitNextResourcesSimsFetch),
        fork(emitNextCollectorsSimsFetch),
    ]);
}
