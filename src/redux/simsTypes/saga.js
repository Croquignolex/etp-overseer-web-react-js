import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest} from "../../functions/axiosFunctions";
import {EMIT_ALL_SIMS_TYPES_FETCH, storeSetSimsTypesData} from "./actions";
import {AGENT_TYPE, COLLECTOR_TYPE, CORPORATE_TYPE, RESOURCE_TYPE} from "../../constants/typeConstants";
import {
    storeAllSimsTypesRequestInit,
    storeAllSimsTypesRequestFailed,
    storeAllSimsTypesRequestSucceed
} from "../requests/simsTypes/actions";

// Fetch all sims types from API
export function* emitAllSimsTypesFetch() {
    yield takeLatest(EMIT_ALL_SIMS_TYPES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllSimsTypesRequestInit());
            const apiResponse = yield call(apiGetRequest, api.All_SIMS_TYPES_API_PATH);
            // Extract data
            const simsTypes = extractSimsTypesData(apiResponse.data.types);
            // Fire event to redux
            yield put(storeSetSimsTypesData({simsTypes, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllSimsTypesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllSimsTypesRequestFailed({message}));
        }
    });
}

// Extract roles data
function extractSimsTypesData(apiSimsTypes) {
    const simsTypes = [];
    if(apiSimsTypes) {
        apiSimsTypes.forEach(data => {
            const {id, name} = data;
            const needAgent = (name === AGENT_TYPE);
            const needCompany = (name === CORPORATE_TYPE);
            const needResource = (name === RESOURCE_TYPE);
            const needCollector = (name === COLLECTOR_TYPE);
            simsTypes.push({
                id: id.toString(),
                name, needAgent, needCompany, needCollector, needResource
            });
        });
    }
    return simsTypes;
}

// Combine to export all functions at once
export default function* sagaSimsTypes() {
    yield all([
        fork(emitAllSimsTypesFetch),
    ]);
}