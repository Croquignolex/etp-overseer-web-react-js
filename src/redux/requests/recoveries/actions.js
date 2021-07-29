// Reducer action types
export const STORE_RECOVERIES_REQUEST_INIT = 'STORE_RECOVERIES_REQUEST_INIT';
export const STORE_RECOVERIES_REQUEST_RESET = 'STORE_RECOVERIES_REQUEST_RESET';
export const STORE_RECOVERIES_REQUEST_FAILED = 'STORE_RECOVERIES_REQUEST_FAILED';
export const STORE_RECOVERIES_REQUEST_SUCCEEDED = 'STORE_RECOVERIES_REQUEST_SUCCEEDED';

export const STORE_NEXT_RECOVERIES_REQUEST_INIT = 'STORE_NEXT_RECOVERIES_REQUEST_INIT';
export const STORE_NEXT_RECOVERIES_REQUEST_RESET = 'STORE_NEXT_RECOVERIES_REQUEST_RESET';
export const STORE_NEXT_RECOVERIES_REQUEST_FAILED = 'STORE_NEXT_RECOVERIES_REQUEST_FAILED';
export const STORE_NEXT_RECOVERIES_REQUEST_SUCCEEDED = 'STORE_NEXT_RECOVERIES_REQUEST_SUCCEEDED';

export const STORE_RECOVER_REQUEST_INIT = 'STORE_RECOVER_REQUEST_INIT';
export const STORE_RECOVER_REQUEST_RESET = 'STORE_RECOVER_REQUEST_RESET';
export const STORE_RECOVER_REQUEST_FAILED = 'STORE_RECOVER_REQUEST_FAILED';
export const STORE_RECOVER_REQUEST_SUCCEEDED = 'STORE_RECOVER_REQUEST_SUCCEEDED';

// ======================================================== Recoveries
// Set recoveries init data into store
export const storeRecoveriesRequestInit = () => ({
    type: STORE_RECOVERIES_REQUEST_INIT
});

// Set recoveries failed data into store
export const storeRecoveriesRequestFailed = ({message}) => ({
    message,
    type: STORE_RECOVERIES_REQUEST_FAILED
});

// Set recoveries succeeded data into store
export const storeRecoveriesRequestSucceed = ({message}) => ({
    message,
    type: STORE_RECOVERIES_REQUEST_SUCCEEDED
});

// Set recoveries reset data into store
export const storeRecoveriesRequestReset = () => ({
    type: STORE_RECOVERIES_REQUEST_RESET
});
// ======================================================== Next recoveries
// Set next recoveries init data into store
export const storeNextRecoveriesRequestInit = () => ({
    type: STORE_NEXT_RECOVERIES_REQUEST_INIT
});

// Set next recoveries failed data into store
export const storeNextRecoveriesRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_RECOVERIES_REQUEST_FAILED
});

// Set next recoveries succeeded data into store
export const storeNextRecoveriesRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_RECOVERIES_REQUEST_SUCCEEDED
});

// Set next recoveries reset data into store
export const storeNextRecoveriesRequestReset = () => ({
    type: STORE_NEXT_RECOVERIES_REQUEST_RESET
});
// ======================================================== Recover
// Set recover init data into store
export const storeRecoverRequestInit = () => ({
    type: STORE_RECOVER_REQUEST_INIT
});

// Set recover failed data into store
export const storeRecoverRequestFailed = ({message}) => ({
    message,
    type: STORE_RECOVER_REQUEST_FAILED
});

// Set recover succeeded data into store
export const storeRecoverRequestSucceed = ({message}) => ({
    message,
    type: STORE_RECOVER_REQUEST_SUCCEEDED
});

// Set recover reset data into store
export const storeRecoverRequestReset = () => ({
    type: STORE_RECOVER_REQUEST_RESET
});