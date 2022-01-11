import {all, call, fork, put, takeLatest} from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, getFileFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_REFUELS_FETCH,
    storeSetRefuelsData,
    storeSetNextRefuelsData,
    EMIT_NEXT_REFUELS_FETCH,
    storeStopInfiniteScrollRefuelData
} from "./actions";
import {
    storeRefuelsRequestInit,
    storeRefuelsRequestFailed,
    storeRefuelsRequestSucceed,
    storeNextRefuelsRequestInit,
    storeNextRefuelsRequestFailed,
    storeNextRefuelsRequestSucceed,
} from "../requests/refuels/actions";

// Fetch refuels from API
export function* emitRefuelsFetch() {
    yield takeLatest(EMIT_REFUELS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeRefuelsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.REFUELS_API_PATH}?page=1`);
            // Extract data
            const refuels = extractRefuelsData(apiResponse.data.destockages);
            // Fire event to redux
            yield put(storeSetRefuelsData({refuels, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeRefuelsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeRefuelsRequestFailed({message}));
        }
    });
}

// Fetch next refuels from API
export function* emitNextRefuelsFetch() {
    yield takeLatest(EMIT_NEXT_REFUELS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextRefuelsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.REFUELS_API_PATH}?page=${page}`);
            // Extract data
            const refuels = extractRefuelsData(apiResponse.data.destockages);
            // Fire event to redux
            yield put(storeSetNextRefuelsData({refuels, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextRefuelsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextRefuelsRequestFailed({message}));
            yield put(storeStopInfiniteScrollRefuelData());
        }
    });
}

// Extract refuel data
function extractRefuelData(apiRefuel) {
    let refuel = {
        id: '', amount: '', creation: '', vendor: '', receipt: '', status: '',

        agent: {id: '', name: ''},
        operator: {id: '', name: ''},
        collector: {id: '', name: ''},
        sim: {id: '', name: '', number: ''},
    };

    const apiSim = apiRefuel.puce;
    const apiUser = apiRefuel.user;
    const apiAgent = apiRefuel.agent;
    const apiOperator = apiRefuel.operateur;
    const apiCollector = apiRefuel.recouvreur;

    if(apiAgent && apiUser) {
        refuel.agent = {
            name: apiUser.name,
            id: apiUser.id.toString(),
            reference: apiAgent.reference
        };
    }
    if(apiSim) {
        refuel.sim = {
            name: apiSim.nom,
            number: apiSim.numero,
            id: apiSim.id.toString()
        };
    }
    if(apiCollector) {
        refuel.collector = {
            name: apiCollector.name,
            id: apiCollector.id.toString()
        };
    }
    if(apiOperator) {
        refuel.operator = {
            name: apiOperator.nom,
            id: apiOperator.id.toString(),
        }
    }
    if(apiRefuel) {
        refuel.actionLoader = false;
        refuel.status = apiRefuel.statut;
        refuel.amount = apiRefuel.montant;
        refuel.id = apiRefuel.id.toString();
        refuel.vendor = apiRefuel.fournisseur;
        refuel.creation = apiRefuel.created_at;
        refuel.receipt = getFileFromServer(apiRefuel.recu);
    }
    return refuel;
}

// Extract refuels data
export function extractRefuelsData(apiRefuels) {
    const refuels = [];
    apiRefuels.forEach(data => {
        refuels.push(extractRefuelData(data));
    });
    return refuels;
}

// Combine to export all functions at once
export default function* sagaRefuels() {
    yield all([
        fork(emitRefuelsFetch),
        fork(emitNextRefuelsFetch),
    ]);
}
