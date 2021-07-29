// Reducer action types
export const STORE_OUTLAYS_REQUEST_INIT = 'STORE_OUTLAYS_REQUEST_INIT';
export const STORE_OUTLAYS_REQUEST_RESET = 'STORE_OUTLAYS_REQUEST_RESET';
export const STORE_OUTLAYS_REQUEST_FAILED = 'STORE_OUTLAYS_REQUEST_FAILED';
export const STORE_OUTLAYS_REQUEST_SUCCEEDED = 'STORE_OUTLAYS_REQUEST_SUCCEEDED';

export const STORE_NEXT_OUTLAYS_REQUEST_INIT = 'STORE_NEXT_OUTLAYS_REQUEST_INIT';
export const STORE_NEXT_OUTLAYS_REQUEST_RESET = 'STORE_NEXT_OUTLAYS_REQUEST_RESET';
export const STORE_NEXT_OUTLAYS_REQUEST_FAILED = 'STORE_NEXT_OUTLAYS_REQUEST_FAILED';
export const STORE_NEXT_OUTLAYS_REQUEST_SUCCEEDED = 'STORE_NEXT_OUTLAYS_REQUEST_SUCCEEDED';

export const STORE_ADD_OUTLAY_REQUEST_INIT = 'STORE_ADD_OUTLAY_REQUEST_INIT';
export const STORE_ADD_OUTLAY_REQUEST_RESET = 'STORE_ADD_OUTLAY_REQUEST_RESET';
export const STORE_ADD_OUTLAY_REQUEST_FAILED = 'STORE_ADD_OUTLAY_REQUEST_FAILED';
export const STORE_ADD_OUTLAY_REQUEST_SUCCEEDED = 'STORE_ADD_OUTLAY_REQUEST_SUCCEEDED';

// ======================================================== Outlays
// Set outlays init data into store
export const storeOutlaysRequestInit = () => ({
    type: STORE_OUTLAYS_REQUEST_INIT
});

// Set outlays failed data into store
export const storeOutlaysRequestFailed = ({message}) => ({
    message,
    type: STORE_OUTLAYS_REQUEST_FAILED
});

// Set outlays succeeded data into store
export const storeOutlaysRequestSucceed = ({message}) => ({
    message,
    type: STORE_OUTLAYS_REQUEST_SUCCEEDED
});

// Set outlays reset data into store
export const storeOutlaysRequestReset = () => ({
    type: STORE_OUTLAYS_REQUEST_RESET
});
// ======================================================== Next outlays
// Set next outlays init data into store
export const storeNextOutlaysRequestInit = () => ({
    type: STORE_NEXT_OUTLAYS_REQUEST_INIT
});

// Set next outlays failed data into store
export const storeNextOutlaysRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_OUTLAYS_REQUEST_FAILED
});

// Set next outlays succeeded data into store
export const storeNextOutlaysRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_OUTLAYS_REQUEST_SUCCEEDED
});

// Set next outlays reset data into store
export const storeNextOutlaysRequestReset = () => ({
    type: STORE_NEXT_OUTLAYS_REQUEST_RESET
});
// ======================================================== Add outlay
// Set add outlay init data into store
export const storeAddOutlayRequestInit = () => ({
    type: STORE_ADD_OUTLAY_REQUEST_INIT
});

// Set add outlay failed data into store
export const storeAddOutlayRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_OUTLAY_REQUEST_FAILED
});

// Set add outlay succeeded data into store
export const storeAddOutlayRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_OUTLAY_REQUEST_SUCCEEDED
});

// Set add outlay reset data into store
export const storeAddOutlayRequestReset = () => ({
    type: STORE_ADD_OUTLAY_REQUEST_RESET
});