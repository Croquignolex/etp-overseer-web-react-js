// Reducer action types
export const STORE_RETURNS_REQUEST_INIT = 'STORE_RETURNS_REQUEST_INIT';
export const STORE_RETURNS_REQUEST_RESET = 'STORE_RETURNS_REQUEST_RESET';
export const STORE_RETURNS_REQUEST_FAILED = 'STORE_RETURNS_REQUEST_FAILED';
export const STORE_RETURNS_REQUEST_SUCCEEDED = 'STORE_RETURNS_REQUEST_SUCCEEDED';

export const STORE_NEXT_RETURNS_REQUEST_INIT = 'STORE_NEXT_RETURNS_REQUEST_INIT';
export const STORE_NEXT_RETURNS_REQUEST_RESET = 'STORE_NEXT_RETURNS_REQUEST_RESET';
export const STORE_NEXT_RETURNS_REQUEST_FAILED = 'STORE_NEXT_RETURNS_REQUEST_FAILED';
export const STORE_NEXT_RETURNS_REQUEST_SUCCEEDED = 'STORE_NEXT_RETURNS_REQUEST_SUCCEEDED';

export const STORE_RETURN_REQUEST_INIT = 'STORE_RETURN_REQUEST_INIT';
export const STORE_RETURN_REQUEST_RESET = 'STORE_RETURN_REQUEST_RESET';
export const STORE_RETURN_REQUEST_FAILED = 'STORE_RETURN_REQUEST_FAILED';
export const STORE_RETURN_REQUEST_SUCCEEDED = 'STORE_RETURN_REQUEST_SUCCEEDED';

export const STORE_ADD_FLEET_RETURN_REQUEST_INIT = 'STORE_ADD_FLEET_RETURN_REQUEST_INIT';
export const STORE_ADD_FLEET_RETURN_REQUEST_RESET = 'STORE_ADD_FLEET_RETURN_REQUEST_RESET';
export const STORE_ADD_FLEET_RETURN_REQUEST_FAILED = 'STORE_ADD_FLEET_RETURN_REQUEST_FAILED';
export const STORE_ADD_FLEET_RETURN_REQUEST_SUCCEEDED = 'STORE_ADD_FLEET_RETURN_REQUEST_SUCCEEDED';

// ======================================================== Returns
// Set returns init data into store
export const storeReturnsRequestInit = () => ({
    type: STORE_RETURNS_REQUEST_INIT
});

// Set returns failed data into store
export const storeReturnsRequestFailed = ({message}) => ({
    message,
    type: STORE_RETURNS_REQUEST_FAILED
});

// Set returns succeeded data into store
export const storeReturnsRequestSucceed = ({message}) => ({
    message,
    type: STORE_RETURNS_REQUEST_SUCCEEDED
});

// Set returns reset data into store
export const storeReturnsRequestReset = () => ({
    type: STORE_RETURNS_REQUEST_RESET
});
// ======================================================== Next returns
// Set next returns init data into store
export const storeNextReturnsRequestInit = () => ({
    type: STORE_NEXT_RETURNS_REQUEST_INIT
});

// Set next returns failed data into store
export const storeNextReturnsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_RETURNS_REQUEST_FAILED
});

// Set next returns succeeded data into store
export const storeNextReturnsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_RETURNS_REQUEST_SUCCEEDED
});

// Set next returns reset data into store
export const storeNextReturnsRequestReset = () => ({
    type: STORE_NEXT_RETURNS_REQUEST_RESET
});
// ======================================================== Return
// Set return init data into store
export const storeReturnRequestInit = () => ({
    type: STORE_RETURN_REQUEST_INIT
});

// Set return failed data into store
export const storeReturnRequestFailed = ({message}) => ({
    message,
    type: STORE_RETURN_REQUEST_FAILED
});

// Set return succeeded data into store
export const storeReturnRequestSucceed = ({message}) => ({
    message,
    type: STORE_RETURN_REQUEST_SUCCEEDED
});

// Set return reset data into store
export const storeReturnRequestReset = () => ({
    type: STORE_RETURN_REQUEST_RESET
});
// ======================================================== Add fleet return
// Set add fleet return init data into store
export const storeAddFleetReturnRequestInit = () => ({
    type: STORE_ADD_FLEET_RETURN_REQUEST_INIT
});

// Set add fleet return failed data into store
export const storeAddFleetReturnRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_FLEET_RETURN_REQUEST_FAILED
});

// Set add fleet return succeeded data into store
export const storeAddFleetReturnRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_FLEET_RETURN_REQUEST_SUCCEEDED
});

// Set add fleet return reset data into store
export const storeAddFleetReturnRequestReset = () => ({
    type: STORE_ADD_FLEET_RETURN_REQUEST_RESET
});