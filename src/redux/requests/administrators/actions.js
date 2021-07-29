// Reducer action types
export const STORE_ADMINISTRATORS_REQUEST_INIT = 'STORE_ADMINISTRATORS_REQUEST_INIT';
export const STORE_ADMINISTRATORS_REQUEST_RESET = 'STORE_ADMINISTRATORS_REQUEST_RESET';
export const STORE_ADMINISTRATORS_REQUEST_FAILED = 'STORE_ADMINISTRATORS_REQUEST_FAILED';
export const STORE_ADMINISTRATORS_REQUEST_SUCCEEDED = 'STORE_ADMINISTRATORS_REQUEST_SUCCEEDED';

export const STORE_NEXT_ADMINISTRATORS_REQUEST_INIT = 'STORE_NEXT_ADMINISTRATORS_REQUEST_INIT';
export const STORE_NEXT_ADMINISTRATORS_REQUEST_RESET = 'STORE_NEXT_ADMINISTRATORS_REQUEST_RESET';
export const STORE_NEXT_ADMINISTRATORS_REQUEST_FAILED = 'STORE_NEXT_ADMINISTRATORS_REQUEST_FAILED';
export const STORE_NEXT_ADMINISTRATORS_REQUEST_SUCCEEDED = 'STORE_NEXT_ADMINISTRATORS_REQUEST_SUCCEEDED';

export const STORE_ALL_ADMINISTRATORS_REQUEST_INIT = 'STORE_ALL_ADMINISTRATORS_REQUEST_INIT';
export const STORE_ALL_ADMINISTRATORS_REQUEST_RESET = 'STORE_ALL_ADMINISTRATORS_REQUEST_RESET';
export const STORE_ALL_ADMINISTRATORS_REQUEST_FAILED = 'STORE_ALL_ADMINISTRATORS_REQUEST_FAILED';
export const STORE_ALL_ADMINISTRATORS_REQUEST_SUCCEEDED = 'STORE_ALL_ADMINISTRATORS_REQUEST_SUCCEEDED';

export const STORE_ADMINISTRATOR_REQUEST_INIT = 'STORE_ADMINISTRATOR_REQUEST_INIT';
export const STORE_ADMINISTRATOR_REQUEST_RESET = 'STORE_ADMINISTRATOR_REQUEST_RESET';
export const STORE_ADMINISTRATOR_REQUEST_FAILED = 'STORE_ADMINISTRATOR_REQUEST_FAILED';
export const STORE_ADMINISTRATOR_REQUEST_SUCCEEDED = 'STORE_ADMINISTRATOR_REQUEST_SUCCEEDED';

// ======================================================== Administrators
// Set administrators init data into store
export const storeAdministratorsRequestInit = () => ({
    type: STORE_ADMINISTRATORS_REQUEST_INIT
});

// Set administrators failed data into store
export const storeAdministratorsRequestFailed = ({message}) => ({
    message,
    type: STORE_ADMINISTRATORS_REQUEST_FAILED
});

// Set administrators succeeded data into store
export const storeAdministratorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADMINISTRATORS_REQUEST_SUCCEEDED
});

// Set administrators reset data into store
export const storeAdministratorsRequestReset = () => ({
    type: STORE_ADMINISTRATORS_REQUEST_RESET
});
// ======================================================== Next administrators
// Set next administrators init data into store
export const storeNextAdministratorsRequestInit = () => ({
    type: STORE_NEXT_ADMINISTRATORS_REQUEST_INIT
});

// Set next administrators failed data into store
export const storeNextAdministratorsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_ADMINISTRATORS_REQUEST_FAILED
});

// Set next administrators succeeded data into store
export const storeNextAdministratorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_ADMINISTRATORS_REQUEST_SUCCEEDED
});

// Set next administrators reset data into store
export const storeNextAdministratorsRequestReset = () => ({
    type: STORE_NEXT_ADMINISTRATORS_REQUEST_RESET
});
// ======================================================== All administrators
// Set all administrators init data into store
export const storeAllAdministratorsRequestInit = () => ({
    type: STORE_ALL_ADMINISTRATORS_REQUEST_INIT
});

// Set all administrators failed data into store
export const storeAllAdministratorsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_ADMINISTRATORS_REQUEST_FAILED
});

// Set all administrators succeeded data into store
export const storeAllAdministratorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_ADMINISTRATORS_REQUEST_SUCCEEDED
});

// Set all administrators reset data into store
export const storeAllAdministratorsRequestReset = () => ({
    type: STORE_ALL_ADMINISTRATORS_REQUEST_RESET
});
// ======================================================== Administrator
// Set administrator init data into store
export const storeAdministratorRequestInit = () => ({
    type: STORE_ADMINISTRATOR_REQUEST_INIT
});

// Set administrator failed data into store
export const storeAdministratorRequestFailed = ({message}) => ({
    message,
    type: STORE_ADMINISTRATOR_REQUEST_FAILED
});

// Set administrator succeeded data into store
export const storeAdministratorRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADMINISTRATOR_REQUEST_SUCCEEDED
});

// Set administrator reset data into store
export const storeAdministratorRequestReset = () => ({
    type: STORE_ADMINISTRATOR_REQUEST_RESET
}); 