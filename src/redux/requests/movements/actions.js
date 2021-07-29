// Reducer action types
export const STORE_MOVEMENTS_REQUEST_INIT = 'STORE_MOVEMENTS_REQUEST_INIT';
export const STORE_MOVEMENTS_REQUEST_RESET = 'STORE_MOVEMENTS_REQUEST_RESET';
export const STORE_MOVEMENTS_REQUEST_FAILED = 'STORE_MOVEMENTS_REQUEST_FAILED';
export const STORE_MOVEMENTS_REQUEST_SUCCEEDED = 'STORE_MOVEMENTS_REQUEST_SUCCEEDED';

// ======================================================== Movements
// Set movements init data into store
export const storeMovementsRequestInit = () => ({
    type: STORE_MOVEMENTS_REQUEST_INIT
});

// Set movements failed data into store
export const storeMovementsRequestFailed = ({message}) => ({
    message,
    type: STORE_MOVEMENTS_REQUEST_FAILED
});

// Set movements succeeded data into store
export const storeMovementsRequestSucceed = ({message}) => ({
    message,
    type: STORE_MOVEMENTS_REQUEST_SUCCEEDED
});

// Set movements reset data into store
export const storeMovementsRequestReset = () => ({
    type: STORE_MOVEMENTS_REQUEST_RESET
});