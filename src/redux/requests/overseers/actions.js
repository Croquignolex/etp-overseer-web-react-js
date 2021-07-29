// Reducer action types
export const STORE_OVERSEERS_REQUEST_INIT = 'STORE_OVERSEERS_REQUEST_INIT';
export const STORE_OVERSEERS_REQUEST_RESET = 'STORE_OVERSEERS_REQUEST_RESET';
export const STORE_OVERSEERS_REQUEST_FAILED = 'STORE_OVERSEERS_REQUEST_FAILED';
export const STORE_OVERSEERS_REQUEST_SUCCEEDED = 'STORE_OVERSEERS_REQUEST_SUCCEEDED';

export const STORE_NEXT_OVERSEERS_REQUEST_INIT = 'STORE_NEXT_OVERSEERS_REQUEST_INIT';
export const STORE_NEXT_OVERSEERS_REQUEST_RESET = 'STORE_NEXT_OVERSEERS_REQUEST_RESET';
export const STORE_NEXT_OVERSEERS_REQUEST_FAILED = 'STORE_NEXT_OVERSEERS_REQUEST_FAILED';
export const STORE_NEXT_OVERSEERS_REQUEST_SUCCEEDED = 'STORE_NEXT_OVERSEERS_REQUEST_SUCCEEDED';

export const STORE_ALL_OVERSEERS_REQUEST_INIT = 'STORE_ALL_OVERSEERS_REQUEST_INIT';
export const STORE_ALL_OVERSEERS_REQUEST_RESET = 'STORE_ALL_OVERSEERS_REQUEST_RESET';
export const STORE_ALL_OVERSEERS_REQUEST_FAILED = 'STORE_ALL_OVERSEERS_REQUEST_FAILED';
export const STORE_ALL_OVERSEERS_REQUEST_SUCCEEDED = 'STORE_ALL_OVERSEERS_REQUEST_SUCCEEDED';

export const STORE_ADMINISTRATOR_REQUEST_INIT = 'STORE_ADMINISTRATOR_REQUEST_INIT';
export const STORE_ADMINISTRATOR_REQUEST_RESET = 'STORE_ADMINISTRATOR_REQUEST_RESET';
export const STORE_ADMINISTRATOR_REQUEST_FAILED = 'STORE_ADMINISTRATOR_REQUEST_FAILED';
export const STORE_ADMINISTRATOR_REQUEST_SUCCEEDED = 'STORE_ADMINISTRATOR_REQUEST_SUCCEEDED';

// ======================================================== Overseers
// Set overseers init data into store
export const storeOverseersRequestInit = () => ({
    type: STORE_OVERSEERS_REQUEST_INIT
});

// Set overseers failed data into store
export const storeOverseersRequestFailed = ({message}) => ({
    message,
    type: STORE_OVERSEERS_REQUEST_FAILED
});

// Set overseers succeeded data into store
export const storeOverseersRequestSucceed = ({message}) => ({
    message,
    type: STORE_OVERSEERS_REQUEST_SUCCEEDED
});

// Set overseers reset data into store
export const storeOverseersRequestReset = () => ({
    type: STORE_OVERSEERS_REQUEST_RESET
});
// ======================================================== Next overseers
// Set next overseers init data into store
export const storeNextOverseersRequestInit = () => ({
    type: STORE_NEXT_OVERSEERS_REQUEST_INIT
});

// Set next overseers failed data into store
export const storeNextOverseersRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_OVERSEERS_REQUEST_FAILED
});

// Set next overseers succeeded data into store
export const storeNextOverseersRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_OVERSEERS_REQUEST_SUCCEEDED
});

// Set next overseers reset data into store
export const storeNextOverseersRequestReset = () => ({
    type: STORE_NEXT_OVERSEERS_REQUEST_RESET
});
// ======================================================== All overseers
// Set all overseers init data into store
export const storeAllOverseersRequestInit = () => ({
    type: STORE_ALL_OVERSEERS_REQUEST_INIT
});

// Set all overseers failed data into store
export const storeAllOverseersRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_OVERSEERS_REQUEST_FAILED
});

// Set all overseers succeeded data into store
export const storeAllOverseersRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_OVERSEERS_REQUEST_SUCCEEDED
});

// Set all overseers reset data into store
export const storeAllOverseersRequestReset = () => ({
    type: STORE_ALL_OVERSEERS_REQUEST_RESET
});
// ======================================================== Overseer
// Set overseer init data into store
export const storeOverseerRequestInit = () => ({
    type: STORE_ADMINISTRATOR_REQUEST_INIT
});

// Set overseer failed data into store
export const storeOverseerRequestFailed = ({message}) => ({
    message,
    type: STORE_ADMINISTRATOR_REQUEST_FAILED
});

// Set overseer succeeded data into store
export const storeOverseerRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADMINISTRATOR_REQUEST_SUCCEEDED
});

// Set overseer reset data into store
export const storeOverseerRequestReset = () => ({
    type: STORE_ADMINISTRATOR_REQUEST_RESET
}); 