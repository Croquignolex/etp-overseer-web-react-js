// Reducer action types
export const STORE_SIMS_REQUEST_INIT = 'STORE_SIMS_REQUEST_INIT';
export const STORE_SIMS_REQUEST_RESET = 'STORE_SIMS_REQUEST_RESET';
export const STORE_SIMS_REQUEST_FAILED = 'STORE_SIMS_REQUEST_FAILED';
export const STORE_SIMS_REQUEST_SUCCEEDED = 'STORE_SIMS_REQUEST_SUCCEEDED';

export const STORE_NEXT_SIMS_REQUEST_INIT = 'STORE_NEXT_SIMS_REQUEST_INIT';
export const STORE_NEXT_SIMS_REQUEST_RESET = 'STORE_NEXT_SIMS_REQUEST_RESET';
export const STORE_NEXT_SIMS_REQUEST_FAILED = 'STORE_NEXT_SIMS_REQUEST_FAILED';
export const STORE_NEXT_SIMS_REQUEST_SUCCEEDED = 'STORE_NEXT_SIMS_REQUEST_SUCCEEDED';

export const STORE_ALL_SIMS_REQUEST_INIT = 'STORE_ALL_SIMS_REQUEST_INIT';
export const STORE_ALL_SIMS_REQUEST_RESET = 'STORE_ALL_SIMS_REQUEST_RESET';
export const STORE_ALL_SIMS_REQUEST_FAILED = 'STORE_ALL_SIMS_REQUEST_FAILED';
export const STORE_ALL_SIMS_REQUEST_SUCCEEDED = 'STORE_ALL_SIMS_REQUEST_SUCCEEDED';

export const STORE_ADD_SIM_REQUEST_INIT = 'STORE_ADD_SIM_REQUEST_INIT';
export const STORE_ADD_SIM_REQUEST_RESET = 'STORE_ADD_SIM_REQUEST_RESET';
export const STORE_ADD_SIM_REQUEST_FAILED = 'STORE_ADD_SIM_REQUEST_FAILED';
export const STORE_ADD_SIM_REQUEST_SUCCEEDED = 'STORE_ADD_SIM_REQUEST_SUCCEEDED';

export const STORE_SHOW_SIM_REQUEST_INIT = 'STORE_SHOW_SIM_REQUEST_INIT';
export const STORE_SHOW_SIM_REQUEST_RESET = 'STORE_SHOW_SIM_REQUEST_RESET';
export const STORE_SHOW_SIM_REQUEST_FAILED = 'STORE_SHOW_SIM_REQUEST_FAILED';
export const STORE_SHOW_SIM_REQUEST_SUCCEEDED = 'STORE_SHOW_SIM_REQUEST_SUCCEEDED';

export const STORE_EDIT_SIM_REQUEST_INIT = 'STORE_EDIT_SIM_REQUEST_INIT';
export const STORE_EDIT_SIM_REQUEST_RESET = 'STORE_EDIT_SIM_REQUEST_RESET';
export const STORE_EDIT_SIM_REQUEST_FAILED = 'STORE_EDIT_SIM_REQUEST_FAILED';
export const STORE_EDIT_SIM_REQUEST_SUCCEEDED = 'STORE_EDIT_SIM_REQUEST_SUCCEEDED';

export const STORE_ALL_MASTER_SIMS_REQUEST_INIT = 'STORE_ALL_MASTER_SIMS_REQUEST_INIT';
export const STORE_ALL_MASTER_SIMS_REQUEST_RESET = 'STORE_ALL_MASTER_SIMS_REQUEST_RESET';
export const STORE_ALL_MASTER_SIMS_REQUEST_FAILED = 'STORE_ALL_MASTER_SIMS_REQUEST_FAILED';
export const STORE_ALL_MASTER_SIMS_REQUEST_SUCCEEDED = 'STORE_ALL_MASTER_SIMS_REQUEST_SUCCEEDED';

export const STORE_ALL_INTERNAL_SIMS_REQUEST_INIT = 'STORE_ALL_INTERNAL_SIMS_REQUEST_INIT';
export const STORE_ALL_INTERNAL_SIMS_REQUEST_RESET = 'STORE_ALL_INTERNAL_SIMS_REQUEST_RESET';
export const STORE_ALL_INTERNAL_SIMS_REQUEST_FAILED = 'STORE_ALL_INTERNAL_SIMS_REQUEST_FAILED';
export const STORE_ALL_INTERNAL_SIMS_REQUEST_SUCCEEDED = 'STORE_ALL_INTERNAL_SIMS_REQUEST_SUCCEEDED';

export const STORE_SIM_TRANSACTIONS_REQUEST_INIT = 'STORE_SIM_TRANSACTIONS_REQUEST_INIT';
export const STORE_SIM_TRANSACTIONS_REQUEST_RESET = 'STORE_SIM_TRANSACTIONS_REQUEST_RESET';
export const STORE_SIM_TRANSACTIONS_REQUEST_FAILED = 'STORE_SIM_TRANSACTIONS_REQUEST_FAILED';
export const STORE_SIM_TRANSACTIONS_REQUEST_SUCCEEDED = 'STORE_SIM_TRANSACTIONS_REQUEST_SUCCEEDED';

export const STORE_ALL_FLEET_SIMS_REQUEST_INIT = 'STORE_ALL_FLEET_SIMS_REQUEST_INIT';
export const STORE_ALL_FLEET_SIMS_REQUEST_RESET = 'STORE_ALL_FLEET_SIMS_REQUEST_RESET';
export const STORE_ALL_FLEET_SIMS_REQUEST_FAILED = 'STORE_ALL_FLEET_SIMS_REQUEST_FAILED';
export const STORE_ALL_FLEET_SIMS_REQUEST_SUCCEEDED = 'STORE_ALL_FLEET_SIMS_REQUEST_SUCCEEDED';

// ======================================================== Sims
// Set sims init data into store
export const storeSimsRequestInit = () => ({
    type: STORE_SIMS_REQUEST_INIT
});

// Set sims failed data into store
export const storeSimsRequestFailed = ({message}) => ({
    message,
    type: STORE_SIMS_REQUEST_FAILED
});

// Set sims succeeded data into store
export const storeSimsRequestSucceed = ({message}) => ({
    message,
    type: STORE_SIMS_REQUEST_SUCCEEDED
});

// Set sims reset data into store
export const storeSimsRequestReset = () => ({
    type: STORE_SIMS_REQUEST_RESET
});
// ======================================================== Next sims
// Set next sims init data into store
export const storeNextSimsRequestInit = () => ({
    type: STORE_NEXT_SIMS_REQUEST_INIT
});

// Set next sims failed data into store
export const storeNextSimsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_SIMS_REQUEST_FAILED
});

// Set next sims succeeded data into store
export const storeNextSimsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_SIMS_REQUEST_SUCCEEDED
});

// Set next sims reset data into store
export const storeNextSimsRequestReset = () => ({
    type: STORE_NEXT_SIMS_REQUEST_RESET
});
// ======================================================== All sims
// Set all sims init data into store
export const storeAllSimsRequestInit = () => ({
    type: STORE_ALL_SIMS_REQUEST_INIT
});

// Set all sims failed data into store
export const storeAllSimsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_SIMS_REQUEST_FAILED
});

// Set all sims succeeded data into store
export const storeAllSimsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_SIMS_REQUEST_SUCCEEDED
});

// Set all sims reset data into store
export const storeAllSimsRequestReset = () => ({
    type: STORE_ALL_SIMS_REQUEST_RESET
});
// ======================================================== Add sim
// Set add sim init data into store
export const storeAddSimRequestInit = () => ({
    type: STORE_ADD_SIM_REQUEST_INIT
});

// Set add sim failed data into store
export const storeAddSimRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_SIM_REQUEST_FAILED
});

// Set add sim succeeded data into store
export const storeAddSimRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_SIM_REQUEST_SUCCEEDED
});

// Set add sim reset data into store
export const storeAddSimRequestReset = () => ({
    type: STORE_ADD_SIM_REQUEST_RESET
});
// ======================================================== Show sim
// Set show sim init data into store
export const storeShowSimRequestInit = () => ({
    type: STORE_SHOW_SIM_REQUEST_INIT
});

// Set show sim failed data into store
export const storeShowSimRequestFailed = ({message}) => ({
    message,
    type: STORE_SHOW_SIM_REQUEST_FAILED
});

// Set show sim succeeded data into store
export const storeShowSimRequestSucceed = ({message}) => ({
    message,
    type: STORE_SHOW_SIM_REQUEST_SUCCEEDED
});

// Set show sim reset data into store
export const storeShowSimRequestReset = () => ({
    type: STORE_SHOW_SIM_REQUEST_RESET
});
// ======================================================== Edit sim
// Set edit sim init data into store
export const storeEditSimRequestInit = () => ({
    type: STORE_EDIT_SIM_REQUEST_INIT
});

// Set edit sim failed data into store
export const storeEditSimRequestFailed = ({message}) => ({
    message,
    type: STORE_EDIT_SIM_REQUEST_FAILED
});

// Set edit sim succeeded data into store
export const storeEditSimRequestSucceed = ({message}) => ({
    message,
    type: STORE_EDIT_SIM_REQUEST_SUCCEEDED
});

// Set edit sim reset data into store
export const storeEditSimRequestReset = () => ({
    type: STORE_EDIT_SIM_REQUEST_RESET
});
// ======================================================== All master sims
// Set all master sims init data into store
export const storeAllMasterSimsRequestInit = () => ({
    type: STORE_ALL_MASTER_SIMS_REQUEST_INIT
});

// Set all master sims failed data into store
export const storeAllMasterSimsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_MASTER_SIMS_REQUEST_FAILED
});

// Set all master sims succeeded data into store
export const storeAllMasterSimsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_MASTER_SIMS_REQUEST_SUCCEEDED
});

// Set all master sims reset data into store
export const storeAllMasterSimsRequestReset = () => ({
    type: STORE_ALL_MASTER_SIMS_REQUEST_RESET
});
// ======================================================== All internals sims
// Set all internals sims init data into store
export const storeAllInternalSimsRequestInit = () => ({
    type: STORE_ALL_INTERNAL_SIMS_REQUEST_INIT
});

// Set all internals sims failed data into store
export const storeAllInternalSimsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_INTERNAL_SIMS_REQUEST_FAILED
});

// Set all internals sims succeeded data into store
export const storeAllInternalSimsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_INTERNAL_SIMS_REQUEST_SUCCEEDED
});

// Set all internals sims reset data into store
export const storeAllInternalSimsRequestReset = () => ({
    type: STORE_ALL_INTERNAL_SIMS_REQUEST_RESET
});
// ======================================================== Sim transactions
// Set sim transactions init data into store
export const storeSimTransactionsRequestInit = () => ({
    type: STORE_SIM_TRANSACTIONS_REQUEST_INIT
});

// Set sim transactions failed data into store
export const storeSimTransactionsRequestFailed = ({message}) => ({
    message,
    type: STORE_SIM_TRANSACTIONS_REQUEST_FAILED
});

// Set sim transactions succeeded data into store
export const storeSimTransactionsRequestSucceed = ({message}) => ({
    message,
    type: STORE_SIM_TRANSACTIONS_REQUEST_SUCCEEDED
});

// Set sim transactions reset data into store
export const storeSimTransactionsRequestReset = () => ({
    type: STORE_SIM_TRANSACTIONS_REQUEST_RESET
});
// ======================================================== All fleets sims
// Set all fleets sims init data into store
export const storeAllFleetSimsRequestInit = () => ({
    type: STORE_ALL_FLEET_SIMS_REQUEST_INIT
});

// Set all fleets sims failed data into store
export const storeAllFleetSimsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_FLEET_SIMS_REQUEST_FAILED
});

// Set all fleets sims succeeded data into store
export const storeAllFleetSimsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_FLEET_SIMS_REQUEST_SUCCEEDED
});

// Set all fleets sims reset data into store
export const storeAllFleetSimsRequestReset = () => ({
    type: STORE_ALL_FLEET_SIMS_REQUEST_RESET
});