// Reducer action types
export const STORE_HANDOVERS_REQUEST_INIT = 'STORE_HANDOVERS_REQUEST_INIT';
export const STORE_HANDOVERS_REQUEST_RESET = 'STORE_HANDOVERS_REQUEST_RESET';
export const STORE_HANDOVERS_REQUEST_FAILED = 'STORE_HANDOVERS_REQUEST_FAILED';
export const STORE_HANDOVERS_REQUEST_SUCCEEDED = 'STORE_HANDOVERS_REQUEST_SUCCEEDED';

export const STORE_NEXT_HANDOVERS_REQUEST_INIT = 'STORE_NEXT_HANDOVERS_REQUEST_INIT';
export const STORE_NEXT_HANDOVERS_REQUEST_RESET = 'STORE_NEXT_HANDOVERS_REQUEST_RESET';
export const STORE_NEXT_HANDOVERS_REQUEST_FAILED = 'STORE_NEXT_HANDOVERS_REQUEST_FAILED';
export const STORE_NEXT_HANDOVERS_REQUEST_SUCCEEDED = 'STORE_NEXT_HANDOVERS_REQUEST_SUCCEEDED';

// ======================================================== Payments
// Set handovers init data into store
export const storeHandoversRequestInit = () => ({
    type: STORE_HANDOVERS_REQUEST_INIT
});

// Set handovers failed data into store
export const storeHandoversRequestFailed = ({message}) => ({
    message,
    type: STORE_HANDOVERS_REQUEST_FAILED
});

// Set handovers succeeded data into store
export const storeHandoversRequestSucceed = ({message}) => ({
    message,
    type: STORE_HANDOVERS_REQUEST_SUCCEEDED
});

// Set handovers reset data into store
export const storeHandoversRequestReset = () => ({
    type: STORE_HANDOVERS_REQUEST_RESET
});
// ======================================================== Next handovers
// Set next handovers init data into store
export const storeNextHandoversRequestInit = () => ({
    type: STORE_NEXT_HANDOVERS_REQUEST_INIT
});

// Set next handovers failed data into store
export const storeNextHandoversRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_HANDOVERS_REQUEST_FAILED
});

// Set next handovers succeeded data into store
export const storeNextHandoversRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_HANDOVERS_REQUEST_SUCCEEDED
});

// Set next handovers reset data into store
export const storeNextHandoversRequestReset = () => ({
    type: STORE_NEXT_HANDOVERS_REQUEST_RESET
});