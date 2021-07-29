// Reducer action types
export const STORE_SET_OPERATOR_DATA = 'STORE_SET_OPERATOR_DATA';
export const STORE_SET_OPERATORS_DATA = 'STORE_SET_OPERATORS_DATA';
export const STORE_SET_NEW_OPERATOR_DATA = 'STORE_SET_NEW_OPERATOR_DATA';
export const STORE_SET_NEXT_OPERATORS_DATA = 'STORE_SET_NEXT_OPERATORS_DATA';
export const STORE_SET_OPERATOR_TRANSACTIONS_DATA = 'STORE_SET_OPERATOR_TRANSACTIONS_DATA';
export const STORE_STOP_INFINITE_SCROLL_OPERATORS_DATA = 'STORE_STOP_INFINITE_SCROLL_OPERATORS_DATA';

// Middleware action types
export const EMIT_NEW_OPERATOR = 'EMIT_NEW_OPERATOR';
export const EMIT_OPERATOR_FETCH = 'EMIT_OPERATOR_FETCH';
export const EMIT_UPDATE_OPERATOR = 'EMIT_UPDATE_OPERATOR';
export const EMIT_OPERATORS_FETCH = 'EMIT_OPERATORS_FETCH';
export const EMIT_ADD_OPERATOR_SIMS = 'EMIT_ADD_OPERATOR_SIMS';
export const EMIT_ALL_OPERATORS_FETCH = 'EMIT_ALL_OPERATORS_FETCH';
export const EMIT_NEXT_OPERATORS_FETCH = 'EMIT_NEXT_OPERATORS_FETCH';
export const EMIT_OPERATOR_TRANSACTIONS_FETCH = 'EMIT_OPERATOR_TRANSACTIONS_FETCH';

//====================== Reducer trigger actions
// Set operators data in store
export const storeSetOperatorsData = ({operators, hasMoreData, page}) => ({
    page,
    operators,
    hasMoreData,
    type: STORE_SET_OPERATORS_DATA
});

// Set operator data in store
export const storeSetOperatorData = ({operator, alsoInList = false}) => ({
    operator,
    alsoInList,
    type: STORE_SET_OPERATOR_DATA
});

// Set next operators data in store
export const storeSetNextOperatorsData = ({operators, hasMoreData, page}) => ({
    page,
    operators,
    hasMoreData,
    type: STORE_SET_NEXT_OPERATORS_DATA
});

// Set operator transactions data in store
export const storeSetOperatorTransactionsData = ({transactions}) => ({
    transactions,
    type: STORE_SET_OPERATOR_TRANSACTIONS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollOperatorData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_OPERATORS_DATA
});

// Set new operator data in store
export const storeSetNewOperatorData = ({operator}) => ({
    operator,
    type: STORE_SET_NEW_OPERATOR_DATA
});

//====================== Middleware trigger actions
// Emit operators fetch
export const emitOperatorsFetch = () => ({
    type: EMIT_OPERATORS_FETCH
});

// Emit next operators fetch
export const emitNextOperatorsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_OPERATORS_FETCH
});

// Emit all operators fetch
export const emitAllOperatorsFetch = () => ({
    type: EMIT_ALL_OPERATORS_FETCH
});

// Emit operator fetch
export const emitOperatorFetch = ({id}) => ({
    id,
    type: EMIT_OPERATOR_FETCH
});

// Emit new operator
export const emitNewOperator = ({name, description}) => ({
    name,
    description,
    type: EMIT_NEW_OPERATOR
});

// Emit update operator
export const emitUpdateOperator = ({id, name, description}) => ({
    id,
    name,
    description,
    type: EMIT_UPDATE_OPERATOR
});

// Emit add operator sims
export const emitAddOperatorSims = ({id, simType, name, number, description, agent, company, collector, resource, reference}) => ({
    id,
    name,
    agent,
    number,
    simType,
    company,
    resource,
    collector,
    reference,
    description,
    type: EMIT_ADD_OPERATOR_SIMS
});

// Emit fetch operator transactions
export const emitOperatorTransactionsFetch = ({id, selectedStartDay, selectedEndDay}) => ({
    id,
    selectedEndDay,
    selectedStartDay,
    type: EMIT_OPERATOR_TRANSACTIONS_FETCH
});