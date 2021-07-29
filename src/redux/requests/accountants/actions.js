// Reducer action types
export const STORE_ACCOUNTANTS_REQUEST_INIT = 'STORE_ACCOUNTANTS_REQUEST_INIT';
export const STORE_ACCOUNTANTS_REQUEST_RESET = 'STORE_ACCOUNTANTS_REQUEST_RESET';
export const STORE_ACCOUNTANTS_REQUEST_FAILED = 'STORE_ACCOUNTANTS_REQUEST_FAILED';
export const STORE_ACCOUNTANTS_REQUEST_SUCCEEDED = 'STORE_ACCOUNTANTS_REQUEST_SUCCEEDED';

export const STORE_NEXT_ACCOUNTANTS_REQUEST_INIT = 'STORE_NEXT_ACCOUNTANTS_REQUEST_INIT';
export const STORE_NEXT_ACCOUNTANTS_REQUEST_RESET = 'STORE_NEXT_ACCOUNTANTS_REQUEST_RESET';
export const STORE_NEXT_ACCOUNTANTS_REQUEST_FAILED = 'STORE_NEXT_ACCOUNTANTS_REQUEST_FAILED';
export const STORE_NEXT_ACCOUNTANTS_REQUEST_SUCCEEDED = 'STORE_NEXT_ACCOUNTANTS_REQUEST_SUCCEEDED';

export const STORE_ALL_ACCOUNTANTS_REQUEST_INIT = 'STORE_ALL_ACCOUNTANTS_REQUEST_INIT';
export const STORE_ALL_ACCOUNTANTS_REQUEST_RESET = 'STORE_ALL_ACCOUNTANTS_REQUEST_RESET';
export const STORE_ALL_ACCOUNTANTS_REQUEST_FAILED = 'STORE_ALL_ACCOUNTANTS_REQUEST_FAILED';
export const STORE_ALL_ACCOUNTANTS_REQUEST_SUCCEEDED = 'STORE_ALL_ACCOUNTANTS_REQUEST_SUCCEEDED';

export const STORE_ADD_ACCOUNTANT_REQUEST_INIT = 'STORE_ADD_ACCOUNTANT_REQUEST_INIT';
export const STORE_ADD_ACCOUNTANT_REQUEST_RESET = 'STORE_ADD_ACCOUNTANT_REQUEST_RESET';
export const STORE_ADD_ACCOUNTANT_REQUEST_FAILED = 'STORE_ADD_ACCOUNTANT_REQUEST_FAILED';
export const STORE_ADD_ACCOUNTANT_REQUEST_SUCCEEDED = 'STORE_ADD_ACCOUNTANT_REQUEST_SUCCEEDED';

export const STORE_ACCOUNTANT_REQUEST_INIT = 'STORE_ACCOUNTANT_REQUEST_INIT';
export const STORE_ACCOUNTANT_REQUEST_RESET = 'STORE_ACCOUNTANT_REQUEST_RESET';
export const STORE_ACCOUNTANT_REQUEST_FAILED = 'STORE_ACCOUNTANT_REQUEST_FAILED';
export const STORE_ACCOUNTANT_REQUEST_SUCCEEDED = 'STORE_ACCOUNTANT_REQUEST_SUCCEEDED';

export const STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_INIT = 'STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_INIT';
export const STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_RESET = 'STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_RESET';
export const STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_FAILED = 'STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_FAILED';
export const STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_SUCCEEDED = 'STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_SUCCEEDED';

export const STORE_ACCOUNTANT_EDIT_INFO_REQUEST_INIT = 'STORE_ACCOUNTANT_EDIT_INFO_REQUEST_INIT';
export const STORE_ACCOUNTANT_EDIT_INFO_REQUEST_RESET = 'STORE_ACCOUNTANT_EDIT_INFO_REQUEST_RESET';
export const STORE_ACCOUNTANT_EDIT_INFO_REQUEST_FAILED = 'STORE_ACCOUNTANT_EDIT_INFO_REQUEST_FAILED';
export const STORE_ACCOUNTANT_EDIT_INFO_REQUEST_SUCCEEDED = 'STORE_ACCOUNTANT_EDIT_INFO_REQUEST_SUCCEEDED';

// ======================================================== Accountants
// Set accounts init data into store
export const storeAccountantsRequestInit = () => ({
    type: STORE_ACCOUNTANTS_REQUEST_INIT
});

// Set accounts failed data into store
export const storeAccountantsRequestFailed = ({message}) => ({
    message,
    type: STORE_ACCOUNTANTS_REQUEST_FAILED
});

// Set accounts succeeded data into store
export const storeAccountantsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ACCOUNTANTS_REQUEST_SUCCEEDED
});

// Set accounts reset data into store
export const storeAccountantsRequestReset = () => ({
    type: STORE_ACCOUNTANTS_REQUEST_RESET
});
// ======================================================== Next accounts
// Set next accounts init data into store
export const storeNextAccountantsRequestInit = () => ({
    type: STORE_NEXT_ACCOUNTANTS_REQUEST_INIT
});

// Set next accounts failed data into store
export const storeNextAccountantsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_ACCOUNTANTS_REQUEST_FAILED
});

// Set next accounts succeeded data into store
export const storeNextAccountantsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_ACCOUNTANTS_REQUEST_SUCCEEDED
});

// Set next accounts reset data into store
export const storeNextAccountantsRequestReset = () => ({
    type: STORE_NEXT_ACCOUNTANTS_REQUEST_RESET
});
// ======================================================== All accounts
// Set all accounts init data into store
export const storeAllAccountantsRequestInit = () => ({
    type: STORE_ALL_ACCOUNTANTS_REQUEST_INIT
});

// Set all accounts failed data into store
export const storeAllAccountantsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_ACCOUNTANTS_REQUEST_FAILED
});

// Set all accounts succeeded data into store
export const storeAllAccountantsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_ACCOUNTANTS_REQUEST_SUCCEEDED
});

// Set all accounts reset data into store
export const storeAllAccountantsRequestReset = () => ({
    type: STORE_ALL_ACCOUNTANTS_REQUEST_RESET
});
// ======================================================== Add account
// Set add account init data into store
export const storeAddAccountantRequestInit = () => ({
    type: STORE_ADD_ACCOUNTANT_REQUEST_INIT
});

// Set add account failed data into store
export const storeAddAccountantRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_ACCOUNTANT_REQUEST_FAILED
});

// Set add account succeeded data into store
export const storeAddAccountantRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_ACCOUNTANT_REQUEST_SUCCEEDED
});

// Set add account reset data into store
export const storeAddAccountantRequestReset = () => ({
    type: STORE_ADD_ACCOUNTANT_REQUEST_RESET
});
// ======================================================== Accountant
// Set account init data into store
export const storeAccountantRequestInit = () => ({
    type: STORE_ACCOUNTANT_REQUEST_INIT
});

// Set account failed data into store
export const storeAccountantRequestFailed = ({message}) => ({
    message,
    type: STORE_ACCOUNTANT_REQUEST_FAILED
});

// Set account succeeded data into store
export const storeAccountantRequestSucceed = ({message}) => ({
    message,
    type: STORE_ACCOUNTANT_REQUEST_SUCCEEDED
});

// Set account reset data into store
export const storeAccountantRequestReset = () => ({
    type: STORE_ACCOUNTANT_REQUEST_RESET
});
// ======================================================== Accountant status toggle
// Set account status toggle init data into store
export const storeAccountantStatusToggleRequestInit = () => ({
    type: STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_INIT
});

// Set account status toggle failed data into store
export const storeAccountantStatusToggleRequestFailed = ({message}) => ({
    message,
    type: STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_FAILED
});

// Set account status toggle succeeded data into store
export const storeAccountantStatusToggleRequestSucceed = ({message}) => ({
    message,
    type: STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_SUCCEEDED
});

// Set account status toggle reset data into store
export const storeAccountantStatusToggleRequestReset = () => ({
    type: STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_RESET
});
// ======================================================== Accountant edit info
// Set account edit info init data into store
export const storeAccountantEditInfoRequestInit = () => ({
    type: STORE_ACCOUNTANT_EDIT_INFO_REQUEST_INIT
});

// Set account edit info failed data into store
export const storeAccountantEditInfoRequestFailed = ({message}) => ({
    message,
    type: STORE_ACCOUNTANT_EDIT_INFO_REQUEST_FAILED
});

// Set account edit info succeeded data into store
export const storeAccountantEditInfoRequestSucceed = ({message}) => ({
    message,
    type: STORE_ACCOUNTANT_EDIT_INFO_REQUEST_SUCCEEDED
});

// Set account edit info reset data into store
export const storeAccountantEditInfoRequestReset = () => ({
    type: STORE_ACCOUNTANT_EDIT_INFO_REQUEST_RESET
});