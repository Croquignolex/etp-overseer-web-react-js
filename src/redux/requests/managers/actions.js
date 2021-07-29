// Reducer action types
export const STORE_MANAGERS_REQUEST_INIT = 'STORE_MANAGERS_REQUEST_INIT';
export const STORE_MANAGERS_REQUEST_RESET = 'STORE_MANAGERS_REQUEST_RESET';
export const STORE_MANAGERS_REQUEST_FAILED = 'STORE_MANAGERS_REQUEST_FAILED';
export const STORE_MANAGERS_REQUEST_SUCCEEDED = 'STORE_MANAGERS_REQUEST_SUCCEEDED';

export const STORE_NEXT_MANAGERS_REQUEST_INIT = 'STORE_NEXT_MANAGERS_REQUEST_INIT';
export const STORE_NEXT_MANAGERS_REQUEST_RESET = 'STORE_NEXT_MANAGERS_REQUEST_RESET';
export const STORE_NEXT_MANAGERS_REQUEST_FAILED = 'STORE_NEXT_MANAGERS_REQUEST_FAILED';
export const STORE_NEXT_MANAGERS_REQUEST_SUCCEEDED = 'STORE_NEXT_MANAGERS_REQUEST_SUCCEEDED';

export const STORE_ALL_MANAGERS_REQUEST_INIT = 'STORE_ALL_MANAGERS_REQUEST_INIT';
export const STORE_ALL_MANAGERS_REQUEST_RESET = 'STORE_ALL_MANAGERS_REQUEST_RESET';
export const STORE_ALL_MANAGERS_REQUEST_FAILED = 'STORE_ALL_MANAGERS_REQUEST_FAILED';
export const STORE_ALL_MANAGERS_REQUEST_SUCCEEDED = 'STORE_ALL_MANAGERS_REQUEST_SUCCEEDED';

export const STORE_ADD_MANAGER_REQUEST_INIT = 'STORE_ADD_MANAGER_REQUEST_INIT';
export const STORE_ADD_MANAGER_REQUEST_RESET = 'STORE_ADD_MANAGER_REQUEST_RESET';
export const STORE_ADD_MANAGER_REQUEST_FAILED = 'STORE_ADD_MANAGER_REQUEST_FAILED';
export const STORE_ADD_MANAGER_REQUEST_SUCCEEDED = 'STORE_ADD_MANAGER_REQUEST_SUCCEEDED';

export const STORE_MANAGER_REQUEST_INIT = 'STORE_MANAGER_REQUEST_INIT';
export const STORE_MANAGER_REQUEST_RESET = 'STORE_MANAGER_REQUEST_RESET';
export const STORE_MANAGER_REQUEST_FAILED = 'STORE_MANAGER_REQUEST_FAILED';
export const STORE_MANAGER_REQUEST_SUCCEEDED = 'STORE_MANAGER_REQUEST_SUCCEEDED';

export const STORE_MANAGER_STATUS_TOGGLE_REQUEST_INIT = 'STORE_MANAGER_STATUS_TOGGLE_REQUEST_INIT';
export const STORE_MANAGER_STATUS_TOGGLE_REQUEST_RESET = 'STORE_MANAGER_STATUS_TOGGLE_REQUEST_RESET';
export const STORE_MANAGER_STATUS_TOGGLE_REQUEST_FAILED = 'STORE_MANAGER_STATUS_TOGGLE_REQUEST_FAILED';
export const STORE_MANAGER_STATUS_TOGGLE_REQUEST_SUCCEEDED = 'STORE_MANAGER_STATUS_TOGGLE_REQUEST_SUCCEEDED';

export const STORE_MANAGER_EDIT_INFO_REQUEST_INIT = 'STORE_MANAGER_EDIT_INFO_REQUEST_INIT';
export const STORE_MANAGER_EDIT_INFO_REQUEST_RESET = 'STORE_MANAGER_EDIT_INFO_REQUEST_RESET';
export const STORE_MANAGER_EDIT_INFO_REQUEST_FAILED = 'STORE_MANAGER_EDIT_INFO_REQUEST_FAILED';
export const STORE_MANAGER_EDIT_INFO_REQUEST_SUCCEEDED = 'STORE_MANAGER_EDIT_INFO_REQUEST_SUCCEEDED';

export const STORE_MANAGER_MOVEMENTS_REQUEST_INIT = 'STORE_MANAGER_MOVEMENTS_REQUEST_INIT';
export const STORE_MANAGER_MOVEMENTS_REQUEST_RESET = 'STORE_MANAGER_MOVEMENTS_REQUEST_RESET';
export const STORE_MANAGER_MOVEMENTS_REQUEST_FAILED = 'STORE_MANAGER_MOVEMENTS_REQUEST_FAILED';
export const STORE_MANAGER_MOVEMENTS_REQUEST_SUCCEEDED = 'STORE_MANAGER_MOVEMENTS_REQUEST_SUCCEEDED';

export const STORE_MANAGER_TRANSACTIONS_REQUEST_INIT = 'STORE_MANAGER_TRANSACTIONS_REQUEST_INIT';
export const STORE_MANAGER_TRANSACTIONS_REQUEST_RESET = 'STORE_MANAGER_TRANSACTIONS_REQUEST_RESET';
export const STORE_MANAGER_TRANSACTIONS_REQUEST_FAILED = 'STORE_MANAGER_TRANSACTIONS_REQUEST_FAILED';
export const STORE_MANAGER_TRANSACTIONS_REQUEST_SUCCEEDED = 'STORE_MANAGER_TRANSACTIONS_REQUEST_SUCCEEDED';

// ======================================================== Managers
// Set managers init data into store
export const storeManagersRequestInit = () => ({
    type: STORE_MANAGERS_REQUEST_INIT
});

// Set managers failed data into store
export const storeManagersRequestFailed = ({message}) => ({
    message,
    type: STORE_MANAGERS_REQUEST_FAILED
});

// Set managers succeeded data into store
export const storeManagersRequestSucceed = ({message}) => ({
    message,
    type: STORE_MANAGERS_REQUEST_SUCCEEDED
});

// Set managers reset data into store
export const storeManagersRequestReset = () => ({
    type: STORE_MANAGERS_REQUEST_RESET
});
// ======================================================== Next managers
// Set next managers init data into store
export const storeNextManagersRequestInit = () => ({
    type: STORE_NEXT_MANAGERS_REQUEST_INIT
});

// Set next managers failed data into store
export const storeNextManagersRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_MANAGERS_REQUEST_FAILED
});

// Set next managers succeeded data into store
export const storeNextManagersRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_MANAGERS_REQUEST_SUCCEEDED
});

// Set next managers reset data into store
export const storeNextManagersRequestReset = () => ({
    type: STORE_NEXT_MANAGERS_REQUEST_RESET
});
// ======================================================== All managers
// Set all managers init data into store
export const storeAllManagersRequestInit = () => ({
    type: STORE_ALL_MANAGERS_REQUEST_INIT
});

// Set all managers failed data into store
export const storeAllManagersRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_MANAGERS_REQUEST_FAILED
});

// Set all managers succeeded data into store
export const storeAllManagersRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_MANAGERS_REQUEST_SUCCEEDED
});

// Set all managers reset data into store
export const storeAllManagersRequestReset = () => ({
    type: STORE_ALL_MANAGERS_REQUEST_RESET
});
// ======================================================== Add manager
// Set add manager init data into store
export const storeAddManagerRequestInit = () => ({
    type: STORE_ADD_MANAGER_REQUEST_INIT
});

// Set add manager failed data into store
export const storeAddManagerRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_MANAGER_REQUEST_FAILED
});

// Set add manager succeeded data into store
export const storeAddManagerRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_MANAGER_REQUEST_SUCCEEDED
});

// Set add manager reset data into store
export const storeAddManagerRequestReset = () => ({
    type: STORE_ADD_MANAGER_REQUEST_RESET
});
// ======================================================== Manager
// Set manager init data into store
export const storeManagerRequestInit = () => ({
    type: STORE_MANAGER_REQUEST_INIT
});

// Set manager failed data into store
export const storeManagerRequestFailed = ({message}) => ({
    message,
    type: STORE_MANAGER_REQUEST_FAILED
});

// Set manager succeeded data into store
export const storeManagerRequestSucceed = ({message}) => ({
    message,
    type: STORE_MANAGER_REQUEST_SUCCEEDED
});

// Set manager reset data into store
export const storeManagerRequestReset = () => ({
    type: STORE_MANAGER_REQUEST_RESET
});
// ======================================================== Manager status toggle
// Set manager status toggle init data into store
export const storeManagerStatusToggleRequestInit = () => ({
    type: STORE_MANAGER_STATUS_TOGGLE_REQUEST_INIT
});

// Set manager status toggle failed data into store
export const storeManagerStatusToggleRequestFailed = ({message}) => ({
    message,
    type: STORE_MANAGER_STATUS_TOGGLE_REQUEST_FAILED
});

// Set manager status toggle succeeded data into store
export const storeManagerStatusToggleRequestSucceed = ({message}) => ({
    message,
    type: STORE_MANAGER_STATUS_TOGGLE_REQUEST_SUCCEEDED
});

// Set manager status toggle reset data into store
export const storeManagerStatusToggleRequestReset = () => ({
    type: STORE_MANAGER_STATUS_TOGGLE_REQUEST_RESET
});
// ======================================================== Manager edit info
// Set manager edit info init data into store
export const storeManagerEditInfoRequestInit = () => ({
    type: STORE_MANAGER_EDIT_INFO_REQUEST_INIT
});

// Set manager edit info failed data into store
export const storeManagerEditInfoRequestFailed = ({message}) => ({
    message,
    type: STORE_MANAGER_EDIT_INFO_REQUEST_FAILED
});

// Set manager edit info succeeded data into store
export const storeManagerEditInfoRequestSucceed = ({message}) => ({
    message,
    type: STORE_MANAGER_EDIT_INFO_REQUEST_SUCCEEDED
});

// Set manager edit info reset data into store
export const storeManagerEditInfoRequestReset = () => ({
    type: STORE_MANAGER_EDIT_INFO_REQUEST_RESET
});
// ======================================================== Manager movements
// Set manager movements init data into store
export const storeManagerMovementsRequestInit = () => ({
    type: STORE_MANAGER_MOVEMENTS_REQUEST_INIT
});

// Set manager movements failed data into store
export const storeManagerMovementsRequestFailed = ({message}) => ({
    message,
    type: STORE_MANAGER_MOVEMENTS_REQUEST_FAILED
});

// Set manager movements succeeded data into store
export const storeManagerMovementsRequestSucceed = ({message}) => ({
    message,
    type: STORE_MANAGER_MOVEMENTS_REQUEST_SUCCEEDED
});

// Set manager movements reset data into store
export const storeManagerMovementsRequestReset = () => ({
    type: STORE_MANAGER_MOVEMENTS_REQUEST_RESET
});
// ======================================================== Manager transactions
// Set manager transactions init data into store
export const storeManagerTransactionsRequestInit = () => ({
    type: STORE_MANAGER_TRANSACTIONS_REQUEST_INIT
});

// Set manager transactions failed data into store
export const storeManagerTransactionsRequestFailed = ({message}) => ({
    message,
    type: STORE_MANAGER_TRANSACTIONS_REQUEST_FAILED
});

// Set manager transactions succeeded data into store
export const storeManagerTransactionsRequestSucceed = ({message}) => ({
    message,
    type: STORE_MANAGER_TRANSACTIONS_REQUEST_SUCCEEDED
});

// Set manager transactions reset data into store
export const storeManagerTransactionsRequestReset = () => ({
    type: STORE_MANAGER_TRANSACTIONS_REQUEST_RESET
});