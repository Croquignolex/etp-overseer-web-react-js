// Reducer action types
export const STORE_PAYMENTS_REQUEST_INIT = 'STORE_PAYMENTS_REQUEST_INIT';
export const STORE_PAYMENTS_REQUEST_RESET = 'STORE_PAYMENTS_REQUEST_RESET';
export const STORE_PAYMENTS_REQUEST_FAILED = 'STORE_PAYMENTS_REQUEST_FAILED';
export const STORE_PAYMENTS_REQUEST_SUCCEEDED = 'STORE_PAYMENTS_REQUEST_SUCCEEDED';

export const STORE_NEXT_PAYMENTS_REQUEST_INIT = 'STORE_NEXT_PAYMENTS_REQUEST_INIT';
export const STORE_NEXT_PAYMENTS_REQUEST_RESET = 'STORE_NEXT_PAYMENTS_REQUEST_RESET';
export const STORE_NEXT_PAYMENTS_REQUEST_FAILED = 'STORE_NEXT_PAYMENTS_REQUEST_FAILED';
export const STORE_NEXT_PAYMENTS_REQUEST_SUCCEEDED = 'STORE_NEXT_PAYMENTS_REQUEST_SUCCEEDED';

export const STORE_CONFIRM_PAYMENT_REQUEST_INIT = 'STORE_CONFIRM_PAYMENT_REQUEST_INIT';
export const STORE_CONFIRM_PAYMENT_REQUEST_RESET = 'STORE_CONFIRM_PAYMENT_REQUEST_RESET';
export const STORE_CONFIRM_PAYMENT_REQUEST_FAILED = 'STORE_CONFIRM_PAYMENT_REQUEST_FAILED';
export const STORE_CONFIRM_PAYMENT_REQUEST_SUCCEEDED = 'STORE_CONFIRM_PAYMENT_REQUEST_SUCCEEDED';

// ======================================================== Payments
// Set payments init data into store
export const storePaymentsRequestInit = () => ({
    type: STORE_PAYMENTS_REQUEST_INIT
});

// Set payments failed data into store
export const storePaymentsRequestFailed = ({message}) => ({
    message,
    type: STORE_PAYMENTS_REQUEST_FAILED
});

// Set payments succeeded data into store
export const storePaymentsRequestSucceed = ({message}) => ({
    message,
    type: STORE_PAYMENTS_REQUEST_SUCCEEDED
});

// Set payments reset data into store
export const storePaymentsRequestReset = () => ({
    type: STORE_PAYMENTS_REQUEST_RESET
});
// ======================================================== Next payments
// Set next payments init data into store
export const storeNextPaymentsRequestInit = () => ({
    type: STORE_NEXT_PAYMENTS_REQUEST_INIT
});

// Set next payments failed data into store
export const storeNextPaymentsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_PAYMENTS_REQUEST_FAILED
});

// Set next payments succeeded data into store
export const storeNextPaymentsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_PAYMENTS_REQUEST_SUCCEEDED
});

// Set next payments reset data into store
export const storeNextPaymentsRequestReset = () => ({
    type: STORE_NEXT_PAYMENTS_REQUEST_RESET
});
// ======================================================== Confirm payment
// Set confirm payment init data into store
export const storeConfirmPaymentRequestInit = () => ({
    type: STORE_CONFIRM_PAYMENT_REQUEST_INIT
});

// Set confirm payment failed data into store
export const storeConfirmPaymentRequestFailed = ({message}) => ({
    message,
    type: STORE_CONFIRM_PAYMENT_REQUEST_FAILED
});

// Set confirm payment succeeded data into store
export const storeConfirmPaymentRequestSucceed = ({message}) => ({
    message,
    type: STORE_CONFIRM_PAYMENT_REQUEST_SUCCEEDED
});

// Set confirm payment reset data into store
export const storeConfirmPaymentRequestReset = () => ({
    type: STORE_CONFIRM_PAYMENT_REQUEST_RESET
});