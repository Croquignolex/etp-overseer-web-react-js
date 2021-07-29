// Reducer action types
export const STORE_OPERATORS_REQUEST_INIT = 'STORE_OPERATORS_REQUEST_INIT';
export const STORE_OPERATORS_REQUEST_RESET = 'STORE_OPERATORS_REQUEST_RESET';
export const STORE_OPERATORS_REQUEST_FAILED = 'STORE_OPERATORS_REQUEST_FAILED';
export const STORE_OPERATORS_REQUEST_SUCCEEDED = 'STORE_OPERATORS_REQUEST_SUCCEEDED';

export const STORE_NEXT_OPERATORS_REQUEST_INIT = 'STORE_NEXT_OPERATORS_REQUEST_INIT';
export const STORE_NEXT_OPERATORS_REQUEST_RESET = 'STORE_NEXT_OPERATORS_REQUEST_RESET';
export const STORE_NEXT_OPERATORS_REQUEST_FAILED = 'STORE_NEXT_OPERATORS_REQUEST_FAILED';
export const STORE_NEXT_OPERATORS_REQUEST_SUCCEEDED = 'STORE_NEXT_OPERATORS_REQUEST_SUCCEEDED';

export const STORE_ALL_OPERATORS_REQUEST_INIT = 'STORE_ALL_OPERATORS_REQUEST_INIT';
export const STORE_ALL_OPERATORS_REQUEST_RESET = 'STORE_ALL_OPERATORS_REQUEST_RESET';
export const STORE_ALL_OPERATORS_REQUEST_FAILED = 'STORE_ALL_OPERATORS_REQUEST_FAILED';
export const STORE_ALL_OPERATORS_REQUEST_SUCCEEDED = 'STORE_ALL_OPERATORS_REQUEST_SUCCEEDED';

export const STORE_ADD_OPERATOR_REQUEST_INIT = 'STORE_ADD_OPERATOR_REQUEST_INIT';
export const STORE_ADD_OPERATOR_REQUEST_RESET = 'STORE_ADD_OPERATOR_REQUEST_RESET';
export const STORE_ADD_OPERATOR_REQUEST_FAILED = 'STORE_ADD_OPERATOR_REQUEST_FAILED';
export const STORE_ADD_OPERATOR_REQUEST_SUCCEEDED = 'STORE_ADD_OPERATOR_REQUEST_SUCCEEDED';

export const STORE_SHOW_OPERATOR_REQUEST_INIT = 'STORE_SHOW_OPERATOR_REQUEST_INIT';
export const STORE_SHOW_OPERATOR_REQUEST_RESET = 'STORE_SHOW_OPERATOR_REQUEST_RESET';
export const STORE_SHOW_OPERATOR_REQUEST_FAILED = 'STORE_SHOW_OPERATOR_REQUEST_FAILED';
export const STORE_SHOW_OPERATOR_REQUEST_SUCCEEDED = 'STORE_SHOW_OPERATOR_REQUEST_SUCCEEDED';

export const STORE_EDIT_OPERATOR_REQUEST_INIT = 'STORE_EDIT_OPERATOR_REQUEST_INIT';
export const STORE_EDIT_OPERATOR_REQUEST_RESET = 'STORE_EDIT_OPERATOR_REQUEST_RESET';
export const STORE_EDIT_OPERATOR_REQUEST_FAILED = 'STORE_EDIT_OPERATOR_REQUEST_FAILED';
export const STORE_EDIT_OPERATOR_REQUEST_SUCCEEDED = 'STORE_EDIT_OPERATOR_REQUEST_SUCCEEDED';

export const STORE_OPERATOR_ADD_SIM_REQUEST_INIT = 'STORE_OPERATOR_ADD_SIM_REQUEST_INIT';
export const STORE_OPERATOR_ADD_SIM_REQUEST_RESET = 'STORE_OPERATOR_ADD_SIM_REQUEST_RESET';
export const STORE_OPERATOR_ADD_SIM_REQUEST_FAILED = 'STORE_OPERATOR_ADD_SIM_REQUEST_FAILED';
export const STORE_OPERATOR_ADD_SIM_REQUEST_SUCCEEDED = 'STORE_OPERATOR_ADD_SIM_REQUEST_SUCCEEDED';

export const STORE_OPERATOR_TRANSACTIONS_REQUEST_INIT = 'STORE_OPERATOR_TRANSACTIONS_REQUEST_INIT';
export const STORE_OPERATOR_TRANSACTIONS_REQUEST_RESET = 'STORE_OPERATOR_TRANSACTIONS_REQUEST_RESET';
export const STORE_OPERATOR_TRANSACTIONS_REQUEST_FAILED = 'STORE_OPERATOR_TRANSACTIONS_REQUEST_FAILED';
export const STORE_OPERATOR_TRANSACTIONS_REQUEST_SUCCEEDED = 'STORE_OPERATOR_TRANSACTIONS_REQUEST_SUCCEEDED';

// ======================================================== Operators
// Set operators init data into store
export const storeOperatorsRequestInit = () => ({
    type: STORE_OPERATORS_REQUEST_INIT
});

// Set operators failed data into store
export const storeOperatorsRequestFailed = ({message}) => ({
    message,
    type: STORE_OPERATORS_REQUEST_FAILED
});

// Set operators succeeded data into store
export const storeOperatorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_OPERATORS_REQUEST_SUCCEEDED
});

// Set operators reset data into store
export const storeOperatorsRequestReset = () => ({
    type: STORE_OPERATORS_REQUEST_RESET
});
// ======================================================== Next operators
// Set next operators init data into store
export const storeNextOperatorsRequestInit = () => ({
    type: STORE_NEXT_OPERATORS_REQUEST_INIT
});

// Set next operators failed data into store
export const storeNextOperatorsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_OPERATORS_REQUEST_FAILED
});

// Set next operators succeeded data into store
export const storeNextOperatorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_OPERATORS_REQUEST_SUCCEEDED
});

// Set next operators reset data into store
export const storeNextOperatorsRequestReset = () => ({
    type: STORE_NEXT_OPERATORS_REQUEST_RESET
});
// ======================================================== All operators
// Set all operators init data into store
export const storeAllOperatorsRequestInit = () => ({
    type: STORE_ALL_OPERATORS_REQUEST_INIT
});

// Set all operators failed data into store
export const storeAllOperatorsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_OPERATORS_REQUEST_FAILED
});

// Set all operators succeeded data into store
export const storeAllOperatorsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_OPERATORS_REQUEST_SUCCEEDED
});

// Set all operators reset data into store
export const storeAllOperatorsRequestReset = () => ({
    type: STORE_ALL_OPERATORS_REQUEST_RESET
});
// ======================================================== Add operator
// Set add operator init data into store
export const storeAddOperatorRequestInit = () => ({
    type: STORE_ADD_OPERATOR_REQUEST_INIT
});

// Set add operator failed data into store
export const storeAddOperatorRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_OPERATOR_REQUEST_FAILED
});

// Set add operator succeeded data into store
export const storeAddOperatorRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_OPERATOR_REQUEST_SUCCEEDED
});

// Set add operator reset data into store
export const storeAddOperatorRequestReset = () => ({
    type: STORE_ADD_OPERATOR_REQUEST_RESET
});
// ======================================================== Show operator
// Set show operator init data into store
export const storeShowOperatorRequestInit = () => ({
    type: STORE_SHOW_OPERATOR_REQUEST_INIT
});

// Set show operator failed data into store
export const storeShowOperatorRequestFailed = ({message}) => ({
    message,
    type: STORE_SHOW_OPERATOR_REQUEST_FAILED
});

// Set show operator succeeded data into store
export const storeShowOperatorRequestSucceed = ({message}) => ({
    message,
    type: STORE_SHOW_OPERATOR_REQUEST_SUCCEEDED
});

// Set show operator reset data into store
export const storeShowOperatorRequestReset = () => ({
    type: STORE_SHOW_OPERATOR_REQUEST_RESET
});
// ======================================================== Edit operator
// Set edit operator init data into store
export const storeEditOperatorRequestInit = () => ({
    type: STORE_EDIT_OPERATOR_REQUEST_INIT
});

// Set edit operator failed data into store
export const storeEditOperatorRequestFailed = ({message}) => ({
    message,
    type: STORE_EDIT_OPERATOR_REQUEST_FAILED
});

// Set edit operator succeeded data into store
export const storeEditOperatorRequestSucceed = ({message}) => ({
    message,
    type: STORE_EDIT_OPERATOR_REQUEST_SUCCEEDED
});

// Set edit operator reset data into store
export const storeEditOperatorRequestReset = () => ({
    type: STORE_EDIT_OPERATOR_REQUEST_RESET
});
// ======================================================== Operator add sim
// Set operator add sim init data into store
export const storeOperatorAddSimRequestInit = () => ({
    type: STORE_OPERATOR_ADD_SIM_REQUEST_INIT
});

// Set operator add sim failed data into store
export const storeOperatorAddSimRequestFailed = ({message}) => ({
    message,
    type: STORE_OPERATOR_ADD_SIM_REQUEST_FAILED
});

// Set operator add sim succeeded data into store
export const storeOperatorAddSimRequestSucceed = ({message}) => ({
    message,
    type: STORE_OPERATOR_ADD_SIM_REQUEST_SUCCEEDED
});

// Set operator add sim reset data into store
export const storeOperatorAddSimRequestReset = () => ({
    type: STORE_OPERATOR_ADD_SIM_REQUEST_RESET
});
// ======================================================== Operator transactions
// Set operator transactions init data into store
export const storeOperatorTransactionsRequestInit = () => ({
    type: STORE_OPERATOR_TRANSACTIONS_REQUEST_INIT
});

// Set operator transactions failed data into store
export const storeOperatorTransactionsRequestFailed = ({message}) => ({
    message,
    type: STORE_OPERATOR_TRANSACTIONS_REQUEST_FAILED
});

// Set operator transactions succeeded data into store
export const storeOperatorTransactionsRequestSucceed = ({message}) => ({
    message,
    type: STORE_OPERATOR_TRANSACTIONS_REQUEST_SUCCEEDED
});

// Set operator transactions reset data into store
export const storeOperatorTransactionsRequestReset = () => ({
    type: STORE_OPERATOR_TRANSACTIONS_REQUEST_RESET
});