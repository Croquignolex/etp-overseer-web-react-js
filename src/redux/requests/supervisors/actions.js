// Reducer action types
export const STORE_SUPERVISORS_REQUEST_INIT = 'STORE_SUPERVISORS_REQUEST_INIT';
export const STORE_SUPERVISORS_REQUEST_RESET = 'STORE_SUPERVISORS_REQUEST_RESET';
export const STORE_SUPERVISORS_REQUEST_FAILED = 'STORE_SUPERVISORS_REQUEST_FAILED';
export const STORE_SUPERVISORS_REQUEST_SUCCEEDED = 'STORE_SUPERVISORS_REQUEST_SUCCEEDED';

export const STORE_NEXT_SUPERVISORS_REQUEST_INIT = 'STORE_NEXT_SUPERVISORS_REQUEST_INIT';
export const STORE_NEXT_SUPERVISORS_REQUEST_RESET = 'STORE_NEXT_SUPERVISORS_REQUEST_RESET';
export const STORE_NEXT_SUPERVISORS_REQUEST_FAILED = 'STORE_NEXT_SUPERVISORS_REQUEST_FAILED';
export const STORE_NEXT_SUPERVISORS_REQUEST_SUCCEEDED = 'STORE_NEXT_SUPERVISORS_REQUEST_SUCCEEDED';

export const STORE_ALL_SUPERVISORS_REQUEST_INIT = 'STORE_ALL_SUPERVISORS_REQUEST_INIT';
export const STORE_ALL_SUPERVISORS_REQUEST_RESET = 'STORE_ALL_SUPERVISORS_REQUEST_RESET';
export const STORE_ALL_SUPERVISORS_REQUEST_FAILED = 'STORE_ALL_SUPERVISORS_REQUEST_FAILED';
export const STORE_ALL_SUPERVISORS_REQUEST_SUCCEEDED = 'STORE_ALL_SUPERVISORS_REQUEST_SUCCEEDED';

export const STORE_ADD_SUPERVISOR_REQUEST_INIT = 'STORE_ADD_SUPERVISOR_REQUEST_INIT';
export const STORE_ADD_SUPERVISOR_REQUEST_RESET = 'STORE_ADD_SUPERVISOR_REQUEST_RESET';
export const STORE_ADD_SUPERVISOR_REQUEST_FAILED = 'STORE_ADD_SUPERVISOR_REQUEST_FAILED';
export const STORE_ADD_SUPERVISOR_REQUEST_SUCCEEDED = 'STORE_ADD_SUPERVISOR_REQUEST_SUCCEEDED';

export const STORE_SUPERVISOR_REQUEST_INIT = 'STORE_SUPERVISOR_REQUEST_INIT';
export const STORE_SUPERVISOR_REQUEST_RESET = 'STORE_SUPERVISOR_REQUEST_RESET';
export const STORE_SUPERVISOR_REQUEST_FAILED = 'STORE_SUPERVISOR_REQUEST_FAILED';
export const STORE_SUPERVISOR_REQUEST_SUCCEEDED = 'STORE_SUPERVISOR_REQUEST_SUCCEEDED';

export const STORE_SUPERVISOR_MOVEMENTS_REQUEST_INIT = 'STORE_SUPERVISOR_MOVEMENTS_REQUEST_INIT';
export const STORE_SUPERVISOR_MOVEMENTS_REQUEST_RESET = 'STORE_SUPERVISOR_MOVEMENTS_REQUEST_RESET';
export const STORE_SUPERVISOR_MOVEMENTS_REQUEST_FAILED = 'STORE_SUPERVISOR_MOVEMENTS_REQUEST_FAILED';
export const STORE_SUPERVISOR_MOVEMENTS_REQUEST_SUCCEEDED = 'STORE_SUPERVISOR_MOVEMENTS_REQUEST_SUCCEEDED';

export const STORE_SUPERVISOR_TRANSACTIONS_REQUEST_INIT = 'STORE_SUPERVISOR_TRANSACTIONS_REQUEST_INIT';
export const STORE_SUPERVISOR_TRANSACTIONS_REQUEST_RESET = 'STORE_SUPERVISOR_TRANSACTIONS_REQUEST_RESET';
export const STORE_SUPERVISOR_TRANSACTIONS_REQUEST_FAILED = 'STORE_SUPERVISOR_TRANSACTIONS_REQUEST_FAILED';
export const STORE_SUPERVISOR_TRANSACTIONS_REQUEST_SUCCEEDED = 'STORE_SUPERVISOR_TRANSACTIONS_REQUEST_SUCCEEDED';

// ======================================================== Supervisors
// Set supervisors init data into store
export const storeSupervisorsRequestInit = () => ({
    type: STORE_SUPERVISORS_REQUEST_INIT
});

// Set supervisors failed data into store
export const storeSupervisorsRequestFailed = ({message}) => ({
    message,
    type: STORE_SUPERVISORS_REQUEST_FAILED
});

// Set supervisors succeeded data into store
export const storeSupervisorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_SUPERVISORS_REQUEST_SUCCEEDED
});

// Set supervisors reset data into store
export const storeSupervisorsRequestReset = () => ({
    type: STORE_SUPERVISORS_REQUEST_RESET
});
// ======================================================== Next supervisors
// Set next supervisors init data into store
export const storeNextSupervisorsRequestInit = () => ({
    type: STORE_NEXT_SUPERVISORS_REQUEST_INIT
});

// Set next supervisors failed data into store
export const storeNextSupervisorsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_SUPERVISORS_REQUEST_FAILED
});

// Set next supervisors succeeded data into store
export const storeNextSupervisorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_SUPERVISORS_REQUEST_SUCCEEDED
});

// Set next supervisors reset data into store
export const storeNextSupervisorsRequestReset = () => ({
    type: STORE_NEXT_SUPERVISORS_REQUEST_RESET
});
// ======================================================== All supervisors
// Set all supervisors init data into store
export const storeAllSupervisorsRequestInit = () => ({
    type: STORE_ALL_SUPERVISORS_REQUEST_INIT
});

// Set all supervisors failed data into store
export const storeAllSupervisorsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_SUPERVISORS_REQUEST_FAILED
});

// Set all supervisors succeeded data into store
export const storeAllSupervisorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_SUPERVISORS_REQUEST_SUCCEEDED
});

// Set all supervisors reset data into store
export const storeAllSupervisorsRequestReset = () => ({
    type: STORE_ALL_SUPERVISORS_REQUEST_RESET
});
// ======================================================== Add supervisor
// Set add supervisor init data into store
export const storeAddSupervisorRequestInit = () => ({
    type: STORE_ADD_SUPERVISOR_REQUEST_INIT
});

// Set add supervisor failed data into store
export const storeAddSupervisorRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_SUPERVISOR_REQUEST_FAILED
});

// Set add supervisor succeeded data into store
export const storeAddSupervisorRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_SUPERVISOR_REQUEST_SUCCEEDED
});

// Set add supervisor reset data into store
export const storeAddSupervisorRequestReset = () => ({
    type: STORE_ADD_SUPERVISOR_REQUEST_RESET
});
// ======================================================== Supervisor
// Set supervisor init data into store
export const storeSupervisorRequestInit = () => ({
    type: STORE_SUPERVISOR_REQUEST_INIT
});

// Set supervisor failed data into store
export const storeSupervisorRequestFailed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_REQUEST_FAILED
});

// Set supervisor succeeded data into store
export const storeSupervisorRequestSucceed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_REQUEST_SUCCEEDED
});

// Set supervisor reset data into store
export const storeSupervisorRequestReset = () => ({
    type: STORE_SUPERVISOR_REQUEST_RESET
});
// ======================================================== Supervisor movements
// Set supervisor movements init data into store
export const storeSupervisorMovementsRequestInit = () => ({
    type: STORE_SUPERVISOR_MOVEMENTS_REQUEST_INIT
});

// Set supervisor movements failed data into store
export const storeSupervisorMovementsRequestFailed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_MOVEMENTS_REQUEST_FAILED
});

// Set supervisor movements succeeded data into store
export const storeSupervisorMovementsRequestSucceed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_MOVEMENTS_REQUEST_SUCCEEDED
});

// Set supervisor movements reset data into store
export const storeSupervisorMovementsRequestReset = () => ({
    type: STORE_SUPERVISOR_MOVEMENTS_REQUEST_RESET
});
// ======================================================== Supervisor transactions
// Set supervisor transactions init data into store
export const storeSupervisorTransactionsRequestInit = () => ({
    type: STORE_SUPERVISOR_TRANSACTIONS_REQUEST_INIT
});

// Set supervisor transactions failed data into store
export const storeSupervisorTransactionsRequestFailed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_TRANSACTIONS_REQUEST_FAILED
});

// Set supervisor transactions succeeded data into store
export const storeSupervisorTransactionsRequestSucceed = ({message}) => ({
    message,
    type: STORE_SUPERVISOR_TRANSACTIONS_REQUEST_SUCCEEDED
});

// Set supervisor transactions reset data into store
export const storeSupervisorTransactionsRequestReset = () => ({
    type: STORE_SUPERVISOR_TRANSACTIONS_REQUEST_RESET
});