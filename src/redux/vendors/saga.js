import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_VENDOR,
    EMIT_VENDOR_FETCH,
    EMIT_VENDORS_FETCH,
    EMIT_UPDATE_VENDOR,
    storeSetVendorData,
    storeSetVendorsData,
    EMIT_ALL_VENDORS_FETCH,
    storeSetNewVendorData,
    EMIT_NEXT_VENDORS_FETCH,
    storeSetNextVendorsData,
    storeStopInfiniteScrollVendorData
} from "./actions";
import {
    storeVendorsRequestInit,
    storeVendorsRequestFailed,
    storeAddVendorRequestInit,
    storeShowVendorRequestInit,
    storeAllVendorsRequestInit,
    storeVendorsRequestSucceed,
    storeEditVendorRequestInit,
    storeNextVendorsRequestInit,
    storeAddVendorRequestFailed,
    storeAllVendorsRequestFailed,
    storeShowVendorRequestFailed,
    storeAddVendorRequestSucceed,
    storeEditVendorRequestFailed,
    storeNextVendorsRequestFailed,
    storeAllVendorsRequestSucceed,
    storeShowVendorRequestSucceed,
    storeEditVendorRequestSucceed,
    storeNextVendorsRequestSucceed,
} from "../requests/vendors/actions";

// Fetch all vendors from API
export function* emitAllVendorsFetch() {
    yield takeLatest(EMIT_ALL_VENDORS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllVendorsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_VENDORS_API_PATH);
            // Extract data
            const vendors = extractVendorsData(apiResponse.data.vendors);
            // Fire event to redux
            yield put(storeSetVendorsData({vendors, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllVendorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllVendorsRequestFailed({message}));
        }
    });
}

// Fetch vendors from API
export function* emitVendorsFetch() {
    yield takeLatest(EMIT_VENDORS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeVendorsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.VENDORS_API_PATH}?page=1`);
            // Extract data
            const vendors = extractVendorsData(apiResponse.data.vendors);
            // Fire event to redux
            yield put(storeSetVendorsData({vendors, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeVendorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeVendorsRequestFailed({message}));
        }
    });
}

// Fetch next vendors from API
export function* emitNextVendorsFetch() {
    yield takeLatest(EMIT_NEXT_VENDORS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextVendorsRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.VENDORS_API_PATH}?page=${page}`);
            // Extract data
            const vendors = extractVendorsData(apiResponse.data.vendors);
            // Fire event to redux
            yield put(storeSetNextVendorsData({vendors, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextVendorsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextVendorsRequestFailed({message}));
            yield put(storeStopInfiniteScrollVendorData());
        }
    });
}

// New vendor into API
export function* emitNewVendor() {
    yield takeLatest(EMIT_NEW_VENDOR, function*({name, description}) {
        try {
            // Fire event for request
            yield put(storeAddVendorRequestInit());
            // From data
            const data = {name, description}
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_VENDOR_API_PATH, data);
            // Extract data
            const vendor = extractVendorData(apiResponse.data.vendor);
            // Fire event to redux
            yield put(storeSetNewVendorData({vendor}));
            // Fire event for request
            yield put(storeAddVendorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddVendorRequestFailed({message}));
        }
    });
}

// Fetch vendor from API
export function* emitVendorFetch() {
    yield takeLatest(EMIT_VENDOR_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeShowVendorRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.VENDOR_DETAILS_API_PATH}/${id}`);
            // Extract data
            const vendor = extractVendorData(
                apiResponse.data.vendor
            );
            // Fire event to redux
            yield put(storeSetVendorData({vendor}));
            // Fire event for request
            yield put(storeShowVendorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeShowVendorRequestFailed({message}));
        }
    });
}

// Update vendor info
export function* emitUpdateVendor() {
    yield takeLatest(EMIT_UPDATE_VENDOR, function*({id, name, description}) {
        try {
            // Fire event for request
            yield put(storeEditVendorRequestInit());
            const data = {name, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_VENDOR_API_PATH}/${id}`, data);
            // Extract data
            const vendor = extractVendorData(
                apiResponse.data.vendor
            );
            // Fire event to redux
            yield put(storeSetVendorData({vendor, alsoInList: true}));
            // Fire event for request
            yield put(storeEditVendorRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeEditVendorRequestFailed({message}));
        }
    });
}

// Extract zone data
function extractVendorData(apiVendor) {
    let vendor = {
        id: '', name: '', balance: '', description: '', creation: '',
    };
    if(apiVendor) {
        vendor.actionLoader = false;
        vendor.name = apiVendor.name;
        vendor.balance = apiVendor.solde;
        vendor.id = apiVendor.id.toString();
        vendor.creation = apiVendor.created_at;
        vendor.description = apiVendor.description;
    }
    return vendor;
}

// Extract zones data
function extractVendorsData(apiVendors) {
    const vendors = [];
    if(apiVendors) {
        apiVendors.forEach(data => {
            vendors.push(extractVendorData(
                data.vendor
            ));
        });
    }
    return vendors;
}

// Combine to export all functions at once
export default function* sagaVendors() {
    yield all([
        fork(emitNewVendor),
        fork(emitVendorFetch),
        fork(emitUpdateVendor),
        fork(emitVendorsFetch),
        fork(emitAllVendorsFetch),
        fork(emitNextVendorsFetch),
    ]);
}