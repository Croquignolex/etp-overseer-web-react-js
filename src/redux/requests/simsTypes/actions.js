// Reducer action types
export const STORE_ALL_SIMS_TYPES_REQUEST_INIT = 'STORE_ALL_SIMS_TYPES_REQUEST_INIT';
export const STORE_ALL_SIMS_TYPES_REQUEST_RESET = 'STORE_ALL_SIMS_TYPES_REQUEST_RESET';
export const STORE_ALL_SIMS_TYPES_REQUEST_FAILED = 'STORE_ALL_SIMS_TYPES_REQUEST_FAILED';
export const STORE_ALL_SIMS_TYPES_REQUEST_SUCCEEDED = 'STORE_ALL_SIMS_TYPES_REQUEST_SUCCEEDED';

// ======================================================== All zones
// Set all sims types init data into store
export const storeAllSimsTypesRequestInit = () => ({
    type: STORE_ALL_SIMS_TYPES_REQUEST_INIT
});

// Set all sims types failed data into store
export const storeAllSimsTypesRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_SIMS_TYPES_REQUEST_FAILED
});

// Set all sims types succeeded data into store
export const storeAllSimsTypesRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_SIMS_TYPES_REQUEST_SUCCEEDED
});

// Set all sims types reset data into store
export const storeAllSimsTypesRequestReset = () => ({
    type: STORE_ALL_SIMS_TYPES_REQUEST_RESET
});