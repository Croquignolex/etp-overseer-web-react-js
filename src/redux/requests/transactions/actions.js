// Reducer action types
export const STORE_TRANSACTIONS_REQUEST_INIT = 'STORE_TRANSACTIONS_REQUEST_INIT';
export const STORE_TRANSACTIONS_REQUEST_RESET = 'STORE_TRANSACTIONS_REQUEST_RESET';
export const STORE_TRANSACTIONS_REQUEST_FAILED = 'STORE_TRANSACTIONS_REQUEST_FAILED';
export const STORE_TRANSACTIONS_REQUEST_SUCCEEDED = 'STORE_TRANSACTIONS_REQUEST_SUCCEEDED';

// ======================================================== Transactions
// Set transactions init data into store
export const storeTransactionsRequestInit = () => ({
    type: STORE_TRANSACTIONS_REQUEST_INIT
});

// Set transactions failed data into store
export const storeTransactionsRequestFailed = ({message}) => ({
    message,
    type: STORE_TRANSACTIONS_REQUEST_FAILED
});

// Set transactions succeeded data into store
export const storeTransactionsRequestSucceed = ({message}) => ({
    message,
    type: STORE_TRANSACTIONS_REQUEST_SUCCEEDED
});

// Set transactions reset data into store
export const storeTransactionsRequestReset = () => ({
    type: STORE_TRANSACTIONS_REQUEST_RESET
});