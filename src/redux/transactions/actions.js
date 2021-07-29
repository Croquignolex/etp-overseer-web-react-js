// Reducer action types
export const STORE_SET_TRANSACTIONS_DATA = 'STORE_SET_TRANSACTIONS_DATA';

// Middleware action types
export const EMIT_TRANSACTIONS_FETCH = 'EMIT_TRANSACTIONS_FETCH';

//====================== Reducer trigger actions
// Set transactions data in store
export const storeSetTransactionsData = ({transactions}) => ({
    transactions,
    type: STORE_SET_TRANSACTIONS_DATA
});

//====================== Middleware trigger actions
// Emit fetch transactions
export const emitTransactionsFetch = ({selectedStartDay, selectedEndDay}) => ({
    selectedEndDay,
    selectedStartDay,
    type: EMIT_TRANSACTIONS_FETCH
});