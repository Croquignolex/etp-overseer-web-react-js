// Reducer action types
export const STORE_FLEETS_REQUEST_INIT = 'STORE_FLEETS_REQUEST_INIT';
export const STORE_FLEETS_REQUEST_RESET = 'STORE_FLEETS_REQUEST_RESET';
export const STORE_FLEETS_REQUEST_FAILED = 'STORE_FLEETS_REQUEST_FAILED';
export const STORE_FLEETS_REQUEST_SUCCEEDED = 'STORE_FLEETS_REQUEST_SUCCEEDED';

export const STORE_NEXT_FLEETS_REQUEST_INIT = 'STORE_NEXT_FLEETS_REQUEST_INIT';
export const STORE_NEXT_FLEETS_REQUEST_RESET = 'STORE_NEXT_FLEETS_REQUEST_RESET';
export const STORE_NEXT_FLEETS_REQUEST_FAILED = 'STORE_NEXT_FLEETS_REQUEST_FAILED';
export const STORE_NEXT_FLEETS_REQUEST_SUCCEEDED = 'STORE_NEXT_FLEETS_REQUEST_SUCCEEDED';

export const STORE_ALL_FLEETS_REQUEST_INIT = 'STORE_ALL_FLEETS_REQUEST_INIT';
export const STORE_ALL_FLEETS_REQUEST_RESET = 'STORE_ALL_FLEETS_REQUEST_RESET';
export const STORE_ALL_FLEETS_REQUEST_FAILED = 'STORE_ALL_FLEETS_REQUEST_FAILED';
export const STORE_ALL_FLEETS_REQUEST_SUCCEEDED = 'STORE_ALL_FLEETS_REQUEST_SUCCEEDED';

// ======================================================== Fleets
// Set fleets init data into store
export const storeFleetsRequestInit = () => ({
    type: STORE_FLEETS_REQUEST_INIT
});

// Set fleets failed data into store
export const storeFleetsRequestFailed = ({message}) => ({
    message,
    type: STORE_FLEETS_REQUEST_FAILED
});

// Set fleets succeeded data into store
export const storeFleetsRequestSucceed = ({message}) => ({
    message,
    type: STORE_FLEETS_REQUEST_SUCCEEDED
});

// Set fleets reset data into store
export const storeFleetsRequestReset = () => ({
    type: STORE_FLEETS_REQUEST_RESET
});
// ======================================================== Next fleets
// Set next fleets init data into store
export const storeNextFleetsRequestInit = () => ({
    type: STORE_NEXT_FLEETS_REQUEST_INIT
});

// Set next fleets failed data into store
export const storeNextFleetsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_FLEETS_REQUEST_FAILED
});

// Set next fleets succeeded data into store
export const storeNextFleetsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_FLEETS_REQUEST_SUCCEEDED
});

// Set next fleets reset data into store
export const storeNextFleetsRequestReset = () => ({
    type: STORE_NEXT_FLEETS_REQUEST_RESET
});
// ======================================================== All fleets
// Set all fleets init data into store
export const storeAllFleetsRequestInit = () => ({
    type: STORE_ALL_FLEETS_REQUEST_INIT
});

// Set all fleets failed data into store
export const storeAllFleetsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_FLEETS_REQUEST_FAILED
});

// Set all fleets succeeded data into store
export const storeAllFleetsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_FLEETS_REQUEST_SUCCEEDED
});

// Set all fleets reset data into store
export const storeAllFleetsRequestReset = () => ({
    type: STORE_ALL_FLEETS_REQUEST_RESET
});