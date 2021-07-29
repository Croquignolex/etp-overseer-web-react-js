// Reducer action types
export const STORE_COLLECTORS_REQUEST_INIT = 'STORE_COLLECTORS_REQUEST_INIT';
export const STORE_COLLECTORS_REQUEST_RESET = 'STORE_COLLECTORS_REQUEST_RESET';
export const STORE_COLLECTORS_REQUEST_FAILED = 'STORE_COLLECTORS_REQUEST_FAILED';
export const STORE_COLLECTORS_REQUEST_SUCCEEDED = 'STORE_COLLECTORS_REQUEST_SUCCEEDED';

export const STORE_NEXT_COLLECTORS_REQUEST_INIT = 'STORE_NEXT_COLLECTORS_REQUEST_INIT';
export const STORE_NEXT_COLLECTORS_REQUEST_RESET = 'STORE_NEXT_COLLECTORS_REQUEST_RESET';
export const STORE_NEXT_COLLECTORS_REQUEST_FAILED = 'STORE_NEXT_COLLECTORS_REQUEST_FAILED';
export const STORE_NEXT_COLLECTORS_REQUEST_SUCCEEDED = 'STORE_NEXT_COLLECTORS_REQUEST_SUCCEEDED';

export const STORE_ALL_COLLECTORS_REQUEST_INIT = 'STORE_ALL_COLLECTORS_REQUEST_INIT';
export const STORE_ALL_COLLECTORS_REQUEST_RESET = 'STORE_ALL_COLLECTORS_REQUEST_RESET';
export const STORE_ALL_COLLECTORS_REQUEST_FAILED = 'STORE_ALL_COLLECTORS_REQUEST_FAILED';
export const STORE_ALL_COLLECTORS_REQUEST_SUCCEEDED = 'STORE_ALL_COLLECTORS_REQUEST_SUCCEEDED';

export const STORE_ADD_COLLECTOR_REQUEST_INIT = 'STORE_ADD_COLLECTOR_REQUEST_INIT';
export const STORE_ADD_COLLECTOR_REQUEST_RESET = 'STORE_ADD_COLLECTOR_REQUEST_RESET';
export const STORE_ADD_COLLECTOR_REQUEST_FAILED = 'STORE_ADD_COLLECTOR_REQUEST_FAILED';
export const STORE_ADD_COLLECTOR_REQUEST_SUCCEEDED = 'STORE_ADD_COLLECTOR_REQUEST_SUCCEEDED';

export const STORE_COLLECTOR_REQUEST_INIT = 'STORE_COLLECTOR_REQUEST_INIT';
export const STORE_COLLECTOR_REQUEST_RESET = 'STORE_COLLECTOR_REQUEST_RESET';
export const STORE_COLLECTOR_REQUEST_FAILED = 'STORE_COLLECTOR_REQUEST_FAILED';
export const STORE_COLLECTOR_REQUEST_SUCCEEDED = 'STORE_COLLECTOR_REQUEST_SUCCEEDED';

export const STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_INIT = 'STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_INIT';
export const STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_RESET = 'STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_RESET';
export const STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_FAILED = 'STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_FAILED';
export const STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_SUCCEEDED = 'STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_SUCCEEDED';

export const STORE_COLLECTOR_EDIT_INFO_REQUEST_INIT = 'STORE_COLLECTOR_EDIT_INFO_REQUEST_INIT';
export const STORE_COLLECTOR_EDIT_INFO_REQUEST_RESET = 'STORE_COLLECTOR_EDIT_INFO_REQUEST_RESET';
export const STORE_COLLECTOR_EDIT_INFO_REQUEST_FAILED = 'STORE_COLLECTOR_EDIT_INFO_REQUEST_FAILED';
export const STORE_COLLECTOR_EDIT_INFO_REQUEST_SUCCEEDED = 'STORE_COLLECTOR_EDIT_INFO_REQUEST_SUCCEEDED';

export const STORE_COLLECTOR_EDIT_ZONE_REQUEST_INIT = 'STORE_COLLECTOR_EDIT_ZONE_REQUEST_INIT';
export const STORE_COLLECTOR_EDIT_ZONE_REQUEST_RESET = 'STORE_COLLECTOR_EDIT_ZONE_REQUEST_RESET';
export const STORE_COLLECTOR_EDIT_ZONE_REQUEST_FAILED = 'STORE_COLLECTOR_EDIT_ZONE_REQUEST_FAILED';
export const STORE_COLLECTOR_EDIT_ZONE_REQUEST_SUCCEEDED = 'STORE_COLLECTOR_EDIT_ZONE_REQUEST_SUCCEEDED';

export const STORE_COLLECTOR_ADD_SIM_REQUEST_INIT = 'STORE_COLLECTOR_ADD_SIM_REQUEST_INIT';
export const STORE_COLLECTOR_ADD_SIM_REQUEST_RESET = 'STORE_COLLECTOR_ADD_SIM_REQUEST_RESET';
export const STORE_COLLECTOR_ADD_SIM_REQUEST_FAILED = 'STORE_COLLECTOR_ADD_SIM_REQUEST_FAILED';
export const STORE_COLLECTOR_ADD_SIM_REQUEST_SUCCEEDED = 'STORE_COLLECTOR_ADD_SIM_REQUEST_SUCCEEDED';

export const STORE_COLLECTOR_MOVEMENTS_REQUEST_INIT = 'STORE_COLLECTOR_MOVEMENTS_REQUEST_INIT';
export const STORE_COLLECTOR_MOVEMENTS_REQUEST_RESET = 'STORE_COLLECTOR_MOVEMENTS_REQUEST_RESET';
export const STORE_COLLECTOR_MOVEMENTS_REQUEST_FAILED = 'STORE_COLLECTOR_MOVEMENTS_REQUEST_FAILED';
export const STORE_COLLECTOR_MOVEMENTS_REQUEST_SUCCEEDED = 'STORE_COLLECTOR_MOVEMENTS_REQUEST_SUCCEEDED';

export const STORE_COLLECTOR_TRANSACTIONS_REQUEST_INIT = 'STORE_COLLECTOR_TRANSACTIONS_REQUEST_INIT';
export const STORE_COLLECTOR_TRANSACTIONS_REQUEST_RESET = 'STORE_COLLECTOR_TRANSACTIONS_REQUEST_RESET';
export const STORE_COLLECTOR_TRANSACTIONS_REQUEST_FAILED = 'STORE_COLLECTOR_TRANSACTIONS_REQUEST_FAILED';
export const STORE_COLLECTOR_TRANSACTIONS_REQUEST_SUCCEEDED = 'STORE_COLLECTOR_TRANSACTIONS_REQUEST_SUCCEEDED';

// ======================================================== Collectors
// Set collectors init data into store
export const storeCollectorsRequestInit = () => ({
    type: STORE_COLLECTORS_REQUEST_INIT
});

// Set collectors failed data into store
export const storeCollectorsRequestFailed = ({message}) => ({
    message,
    type: STORE_COLLECTORS_REQUEST_FAILED
});

// Set collectors succeeded data into store
export const storeCollectorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_COLLECTORS_REQUEST_SUCCEEDED
});

// Set collectors reset data into store
export const storeCollectorsRequestReset = () => ({
    type: STORE_COLLECTORS_REQUEST_RESET
});
// ======================================================== Next collectors
// Set next collectors init data into store
export const storeNextCollectorsRequestInit = () => ({
    type: STORE_NEXT_COLLECTORS_REQUEST_INIT
});

// Set next collectors failed data into store
export const storeNextCollectorsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_COLLECTORS_REQUEST_FAILED
});

// Set next collectors succeeded data into store
export const storeNextCollectorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_COLLECTORS_REQUEST_SUCCEEDED
});

// Set next collectors reset data into store
export const storeNextCollectorsRequestReset = () => ({
    type: STORE_NEXT_COLLECTORS_REQUEST_RESET
});
// ======================================================== All collectors
// Set all collectors init data into store
export const storeAllCollectorsRequestInit = () => ({
    type: STORE_ALL_COLLECTORS_REQUEST_INIT
});

// Set all collectors failed data into store
export const storeAllCollectorsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_COLLECTORS_REQUEST_FAILED
});

// Set all collectors succeeded data into store
export const storeAllCollectorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_COLLECTORS_REQUEST_SUCCEEDED
});

// Set all collectors reset data into store
export const storeAllCollectorsRequestReset = () => ({
    type: STORE_ALL_COLLECTORS_REQUEST_RESET
});
// ======================================================== Add collector
// Set add collector init data into store
export const storeAddCollectorRequestInit = () => ({
    type: STORE_ADD_COLLECTOR_REQUEST_INIT
});

// Set add collector failed data into store
export const storeAddCollectorRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_COLLECTOR_REQUEST_FAILED
});

// Set add collector succeeded data into store
export const storeAddCollectorRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_COLLECTOR_REQUEST_SUCCEEDED
});

// Set add collector reset data into store
export const storeAddCollectorRequestReset = () => ({
    type: STORE_ADD_COLLECTOR_REQUEST_RESET
});
// ======================================================== Collector
// Set collector init data into store
export const storeCollectorRequestInit = () => ({
    type: STORE_COLLECTOR_REQUEST_INIT
});

// Set collector failed data into store
export const storeCollectorRequestFailed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_REQUEST_FAILED
});

// Set collector succeeded data into store
export const storeCollectorRequestSucceed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_REQUEST_SUCCEEDED
});

// Set collector reset data into store
export const storeCollectorRequestReset = () => ({
    type: STORE_COLLECTOR_REQUEST_RESET
});
// ======================================================== Collector status toggle
// Set collector status toggle init data into store
export const storeCollectorStatusToggleRequestInit = () => ({
    type: STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_INIT
});

// Set collector status toggle failed data into store
export const storeCollectorStatusToggleRequestFailed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_FAILED
});

// Set collector status toggle succeeded data into store
export const storeCollectorStatusToggleRequestSucceed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_SUCCEEDED
});

// Set collector status toggle reset data into store
export const storeCollectorStatusToggleRequestReset = () => ({
    type: STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_RESET
});
// ======================================================== Collector edit info
// Set collector edit info init data into store
export const storeCollectorEditInfoRequestInit = () => ({
    type: STORE_COLLECTOR_EDIT_INFO_REQUEST_INIT
});

// Set collector edit info failed data into store
export const storeCollectorEditInfoRequestFailed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_EDIT_INFO_REQUEST_FAILED
});

// Set collector edit info succeeded data into store
export const storeCollectorEditInfoRequestSucceed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_EDIT_INFO_REQUEST_SUCCEEDED
});

// Set collector edit info reset data into store
export const storeCollectorEditInfoRequestReset = () => ({
    type: STORE_COLLECTOR_EDIT_INFO_REQUEST_RESET
});
// ======================================================== Collector edit zone
// Set collector edit zone init data into store
export const storeCollectorEditZoneRequestInit = () => ({
    type: STORE_COLLECTOR_EDIT_ZONE_REQUEST_INIT
});

// Set collector edit zone failed data into store
export const storeCollectorEditZoneRequestFailed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_EDIT_ZONE_REQUEST_FAILED
});

// Set collector edit zone succeeded data into store
export const storeCollectorEditZoneRequestSucceed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_EDIT_ZONE_REQUEST_SUCCEEDED
});

// Set collector edit zone reset data into store
export const storeCollectorEditZoneRequestReset = () => ({
    type: STORE_COLLECTOR_EDIT_ZONE_REQUEST_RESET
});
// ======================================================== Collector add sim
// Set collector add sim init data into store
export const storeCollectorAddSimRequestInit = () => ({
    type: STORE_COLLECTOR_ADD_SIM_REQUEST_INIT
});

// Set collector add sim failed data into store
export const storeCollectorAddSimRequestFailed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_ADD_SIM_REQUEST_FAILED
});

// Set collector add sim succeeded data into store
export const storeCollectorAddSimRequestSucceed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_ADD_SIM_REQUEST_SUCCEEDED
});

// Set collector add sim reset data into store
export const storeCollectorAddSimRequestReset = () => ({
    type: STORE_COLLECTOR_ADD_SIM_REQUEST_RESET
});
// ======================================================== Collector movements
// Set collector movements init data into store
export const storeCollectorMovementsRequestInit = () => ({
    type: STORE_COLLECTOR_MOVEMENTS_REQUEST_INIT
});

// Set collector movements failed data into store
export const storeCollectorMovementsRequestFailed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_MOVEMENTS_REQUEST_FAILED
});

// Set collector movements succeeded data into store
export const storeCollectorMovementsRequestSucceed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_MOVEMENTS_REQUEST_SUCCEEDED
});

// Set collector movements reset data into store
export const storeCollectorMovementsRequestReset = () => ({
    type: STORE_COLLECTOR_MOVEMENTS_REQUEST_RESET
});
// ======================================================== Collector transactions
// Set collector transactions init data into store
export const storeCollectorTransactionsRequestInit = () => ({
    type: STORE_COLLECTOR_TRANSACTIONS_REQUEST_INIT
});

// Set collector transactions failed data into store
export const storeCollectorTransactionsRequestFailed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_TRANSACTIONS_REQUEST_FAILED
});

// Set collector transactions succeeded data into store
export const storeCollectorTransactionsRequestSucceed = ({message}) => ({
    message,
    type: STORE_COLLECTOR_TRANSACTIONS_REQUEST_SUCCEEDED
});

// Set collector transactions reset data into store
export const storeCollectorTransactionsRequestReset = () => ({
    type: STORE_COLLECTOR_TRANSACTIONS_REQUEST_RESET
});