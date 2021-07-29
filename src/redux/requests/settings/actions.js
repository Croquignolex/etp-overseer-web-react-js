// Reducer action types
export const STORE_SETTINGS_REQUEST_INIT = 'STORE_SETTINGS_REQUEST_INIT';
export const STORE_SETTINGS_REQUEST_RESET = 'STORE_SETTINGS_REQUEST_RESET';
export const STORE_SETTINGS_REQUEST_FAILED = 'STORE_SETTINGS_REQUEST_FAILED';
export const STORE_SETTINGS_REQUEST_SUCCEEDED = 'STORE_SETTINGS_REQUEST_SUCCEEDED';

// Set settings init data into store
export const storeSettingsRequestInit = () => ({
    type: STORE_SETTINGS_REQUEST_INIT
});

// Set settings failed data into store
export const storeSettingsRequestFailed = ({message}) => ({
    message,
    type: STORE_SETTINGS_REQUEST_FAILED
});

// Set settings succeeded data into store
export const storeSettingsRequestSucceed = ({message}) => ({
    message,
    type: STORE_SETTINGS_REQUEST_SUCCEEDED
});

// Set settings reset data into store
export const storeSettingsRequestReset = () => ({
    type: STORE_SETTINGS_REQUEST_RESET
});