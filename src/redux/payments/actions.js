// Reducer action types
export const STORE_SET_PAYMENTS_DATA = 'STORE_SET_PAYMENTS_DATA';
export const STORE_UPDATE_PAYMENT_DATA = 'STORE_UPDATE_PAYMENT_DATA';
export const STORE_SET_NEXT_PAYMENTS_DATA = 'STORE_SET_NEXT_PAYMENTS_DATA';
export const STORE_SET_PAYMENT_ACTION_DATA = 'STORE_SET_PAYMENT_ACTION_DATA';
export const STORE_STOP_INFINITE_SCROLL_PAYMENT_DATA = 'STORE_STOP_INFINITE_SCROLL_PAYMENT_DATA';

// Middleware action types
export const EMIT_PAYMENTS_FETCH = 'EMIT_PAYMENTS_FETCH';
export const EMIT_CONFIRM_PAYMENT = 'EMIT_CONFIRM_PAYMENT';
export const EMIT_NEXT_PAYMENTS_FETCH = 'EMIT_NEXT_PAYMENTS_FETCH';

//====================== Reducer trigger actions
// Set payments data in store
export const storeSetPaymentsData = ({payments, hasMoreData, page}) => ({
    page,
    payments,
    hasMoreData,
    type: STORE_SET_PAYMENTS_DATA
});

// Set next payments data in store
export const storeSetNextPaymentsData = ({payments, hasMoreData, page}) => ({
    page,
    payments,
    hasMoreData,
    type: STORE_SET_NEXT_PAYMENTS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollPaymentData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_PAYMENT_DATA
});

// Set payment action data in store
export const storeSetPaymentActionData = ({id}) => ({
    id,
    type: STORE_SET_PAYMENT_ACTION_DATA
});

// Set update payment data in store
export const storeUpdatePaymentData = ({id}) => ({
    id,
    type: STORE_UPDATE_PAYMENT_DATA
});

//====================== Middleware trigger actions
// Emit payments fetch
export const emitPaymentsFetch = () => ({
    type: EMIT_PAYMENTS_FETCH
});

// Emit next payments fetch
export const emitNextPaymentsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_PAYMENTS_FETCH
});

// Emit confirm payment
export const emitConfirmPayment = ({id}) => ({
    id,
    type: EMIT_CONFIRM_PAYMENT
});
