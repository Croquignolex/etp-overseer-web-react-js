import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import {apiPostRequest} from "../../functions/axiosFunctions";
import {EDIT_SETTING_API_PATH} from "../../constants/apiConstants";
import {EMIT_SETTINGS_UPDATE, storeSetSettingsData} from "./actions";
import {setLocaleStorageItem,} from "../../functions/localStorageFunctions";
import {LOCAL_STORAGE_SETTINGS} from "../../constants/localStorageConstants";
import {
    storeSettingsRequestInit,
    storeSettingsRequestFailed,
    storeSettingsRequestSucceed
} from "../requests/settings/actions";

// Update settings from API
export function* emitSettingsUpdate() {
    yield takeLatest(EMIT_SETTINGS_UPDATE, function*({cards, charts, bars, sound, session, description}) {
        try {
            // Fire event for request
            yield put(storeSettingsRequestInit());
            const data = {cards, charts, bars, sound, session, description};
            // API call
            const apiResponse = yield call(apiPostRequest, EDIT_SETTING_API_PATH, data);
            // Set user data into local storage
            yield call(setLocaleStorageItem, LOCAL_STORAGE_SETTINGS, data);
            // Fire event to redux
            yield put(storeSetSettingsData(data));
            // Fire event for request
            yield put(storeSettingsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSettingsRequestFailed({message}));
        }
    });
}

// Combine to export all functions at once
export default function* sagaSettings() {
    yield all([
        fork(emitSettingsUpdate),
    ]);
}