// Reducer action types
export const STORE_TRANSFERS_REQUEST_INIT = 'STORE_TRANSFERS_REQUEST_INIT';
export const STORE_TRANSFERS_REQUEST_RESET = 'STORE_TRANSFERS_REQUEST_RESET';
export const STORE_TRANSFERS_REQUEST_FAILED = 'STORE_TRANSFERS_REQUEST_FAILED';
export const STORE_TRANSFERS_REQUEST_SUCCEEDED = 'STORE_TRANSFERS_REQUEST_SUCCEEDED';

export const STORE_NEXT_TRANSFERS_REQUEST_INIT = 'STORE_NEXT_TRANSFERS_REQUEST_INIT';
export const STORE_NEXT_TRANSFERS_REQUEST_RESET = 'STORE_NEXT_TRANSFERS_REQUEST_RESET';
export const STORE_NEXT_TRANSFERS_REQUEST_FAILED = 'STORE_NEXT_TRANSFERS_REQUEST_FAILED';
export const STORE_NEXT_TRANSFERS_REQUEST_SUCCEEDED = 'STORE_NEXT_TRANSFERS_REQUEST_SUCCEEDED';

export const STORE_ADD_TRANSFER_REQUEST_INIT = 'STORE_ADD_TRANSFER_REQUEST_INIT';
export const STORE_ADD_TRANSFER_REQUEST_RESET = 'STORE_ADD_TRANSFER_REQUEST_RESET';
export const STORE_ADD_TRANSFER_REQUEST_FAILED = 'STORE_ADD_TRANSFER_REQUEST_FAILED';
export const STORE_ADD_TRANSFER_REQUEST_SUCCEEDED = 'STORE_ADD_TRANSFER_REQUEST_SUCCEEDED';

export const STORE_CONFIRM_TRANSFER_REQUEST_INIT = 'STORE_CONFIRM_TRANSFER_REQUEST_INIT';
export const STORE_CONFIRM_TRANSFER_REQUEST_RESET = 'STORE_CONFIRM_TRANSFER_REQUEST_RESET';
export const STORE_CONFIRM_TRANSFER_REQUEST_FAILED = 'STORE_CONFIRM_TRANSFER_REQUEST_FAILED';
export const STORE_CONFIRM_TRANSFER_REQUEST_SUCCEEDED = 'STORE_CONFIRM_TRANSFER_REQUEST_SUCCEEDED';

// ======================================================== Transfers
// Set transfers init data into store
export const storeTransfersRequestInit = () => ({
    type: STORE_TRANSFERS_REQUEST_INIT
});

// Set transfers failed data into store
export const storeTransfersRequestFailed = ({message}) => ({
    message,
    type: STORE_TRANSFERS_REQUEST_FAILED
});

// Set transfers succeeded data into store
export const storeTransfersRequestSucceed = ({message}) => ({
    message,
    type: STORE_TRANSFERS_REQUEST_SUCCEEDED
});

// Set transfers reset data into store
export const storeTransfersRequestReset = () => ({
    type: STORE_TRANSFERS_REQUEST_RESET
});
// ======================================================== Next transfers
// Set next transfers init data into store
export const storeNextTransfersRequestInit = () => ({
    type: STORE_NEXT_TRANSFERS_REQUEST_INIT
});

// Set next transfers failed data into store
export const storeNextTransfersRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_TRANSFERS_REQUEST_FAILED
});

// Set next transfers succeeded data into store
export const storeNextTransfersRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_TRANSFERS_REQUEST_SUCCEEDED
});

// Set next transfers reset data into store
export const storeNextTransfersRequestReset = () => ({
    type: STORE_NEXT_TRANSFERS_REQUEST_RESET
});
// ======================================================== Add transfer
// Set add transfer init data into store
export const storeAddTransferRequestInit = () => ({
    type: STORE_ADD_TRANSFER_REQUEST_INIT
});

// Set add transfer failed data into store
export const storeAddTransferRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_TRANSFER_REQUEST_FAILED
});

// Set add transfer succeeded data into store
export const storeAddTransferRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_TRANSFER_REQUEST_SUCCEEDED
});

// Set add transfer reset data into store
export const storeAddTransferRequestReset = () => ({
    type: STORE_ADD_TRANSFER_REQUEST_RESET
});
// ======================================================== Confirm transfer
// Set confirm transfer init data into store
export const storeConfirmTransferRequestInit = () => ({
    type: STORE_CONFIRM_TRANSFER_REQUEST_INIT
});

// Set confirm transfer failed data into store
export const storeConfirmTransferRequestFailed = ({message}) => ({
    message,
    type: STORE_CONFIRM_TRANSFER_REQUEST_FAILED
});

// Set confirm transfer succeeded data into store
export const storeConfirmTransferRequestSucceed = ({message}) => ({
    message,
    type: STORE_CONFIRM_TRANSFER_REQUEST_SUCCEEDED
});

// Set confirm transfer reset data into store
export const storeConfirmTransferRequestReset = () => ({
    type: STORE_CONFIRM_TRANSFER_REQUEST_RESET
});