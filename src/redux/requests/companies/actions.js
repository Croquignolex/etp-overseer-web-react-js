// Reducer action types  
export const STORE_ALL_COMPANIES_REQUEST_INIT = 'STORE_ALL_COMPANIES_REQUEST_INIT';
export const STORE_ALL_COMPANIES_REQUEST_RESET = 'STORE_ALL_COMPANIES_REQUEST_RESET';
export const STORE_ALL_COMPANIES_REQUEST_FAILED = 'STORE_ALL_COMPANIES_REQUEST_FAILED';
export const STORE_ALL_COMPANIES_REQUEST_SUCCEEDED = 'STORE_ALL_COMPANIES_REQUEST_SUCCEEDED';

export const STORE_COMPANIES_REQUEST_INIT = 'STORE_COMPANIES_REQUEST_INIT';
export const STORE_COMPANIES_REQUEST_RESET = 'STORE_COMPANIES_REQUEST_RESET';
export const STORE_COMPANIES_REQUEST_FAILED = 'STORE_COMPANIES_REQUEST_FAILED';
export const STORE_COMPANIES_REQUEST_SUCCEEDED = 'STORE_COMPANIES_REQUEST_SUCCEEDED';

export const STORE_NEXT_COMPANIES_REQUEST_INIT = 'STORE_NEXT_COMPANIES_REQUEST_INIT';
export const STORE_NEXT_COMPANIES_REQUEST_RESET = 'STORE_NEXT_COMPANIES_REQUEST_RESET';
export const STORE_NEXT_COMPANIES_REQUEST_FAILED = 'STORE_NEXT_COMPANIES_REQUEST_FAILED';
export const STORE_NEXT_COMPANIES_REQUEST_SUCCEEDED = 'STORE_NEXT_COMPANIES_REQUEST_SUCCEEDED';

export const STORE_ADD_COMPANY_REQUEST_INIT = 'STORE_ADD_COMPANY_REQUEST_INIT';
export const STORE_ADD_COMPANY_REQUEST_RESET = 'STORE_ADD_COMPANY_REQUEST_RESET';
export const STORE_ADD_COMPANY_REQUEST_FAILED = 'STORE_ADD_COMPANY_REQUEST_FAILED';
export const STORE_ADD_COMPANY_REQUEST_SUCCEEDED = 'STORE_ADD_COMPANY_REQUEST_SUCCEEDED';

export const STORE_SHOW_COMPANY_REQUEST_INIT = 'STORE_SHOW_COMPANY_REQUEST_INIT';
export const STORE_SHOW_COMPANY_REQUEST_RESET = 'STORE_SHOW_COMPANY_REQUEST_RESET';
export const STORE_SHOW_COMPANY_REQUEST_FAILED = 'STORE_SHOW_COMPANY_REQUEST_FAILED';
export const STORE_SHOW_COMPANY_REQUEST_SUCCEEDED = 'STORE_SHOW_COMPANY_REQUEST_SUCCEEDED';

export const STORE_EDIT_COMPANY_REQUEST_INIT = 'STORE_EDIT_COMPANY_REQUEST_INIT';
export const STORE_EDIT_COMPANY_REQUEST_RESET = 'STORE_EDIT_COMPANY_REQUEST_RESET';
export const STORE_EDIT_COMPANY_REQUEST_FAILED = 'STORE_EDIT_COMPANY_REQUEST_FAILED';
export const STORE_EDIT_COMPANY_REQUEST_SUCCEEDED = 'STORE_EDIT_COMPANY_REQUEST_SUCCEEDED';

export const STORE_COMPANY_ADD_SIM_REQUEST_INIT = 'STORE_COMPANY_ADD_SIM_REQUEST_INIT';
export const STORE_COMPANY_ADD_SIM_REQUEST_RESET = 'STORE_COMPANY_ADD_SIM_REQUEST_RESET';
export const STORE_COMPANY_ADD_SIM_REQUEST_FAILED = 'STORE_COMPANY_ADD_SIM_REQUEST_FAILED';
export const STORE_COMPANY_ADD_SIM_REQUEST_SUCCEEDED = 'STORE_COMPANY_ADD_SIM_REQUEST_SUCCEEDED';

export const STORE_COMPANY_EDIT_DOC_REQUEST_INIT = 'STORE_COMPANY_EDIT_DOC_REQUEST_INIT';
export const STORE_COMPANY_EDIT_DOC_REQUEST_RESET = 'STORE_COMPANY_EDIT_DOC_REQUEST_RESET';
export const STORE_COMPANY_EDIT_DOC_REQUEST_FAILED = 'STORE_COMPANY_EDIT_DOC_REQUEST_FAILED';
export const STORE_COMPANY_EDIT_DOC_REQUEST_SUCCEEDED = 'STORE_COMPANY_EDIT_DOC_REQUEST_SUCCEEDED';

// ======================================================== All companies
// Set all companies init data into store
export const storeAllCompaniesRequestInit = () => ({
    type: STORE_ALL_COMPANIES_REQUEST_INIT
});

// Set all companies failed data into store
export const storeAllCompaniesRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_COMPANIES_REQUEST_FAILED
});

// Set all companies succeeded data into store
export const storeAllCompaniesRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_COMPANIES_REQUEST_SUCCEEDED
});

// Set all companies reset data into store
export const storeAllCompaniesRequestReset = () => ({
    type: STORE_ALL_COMPANIES_REQUEST_RESET
});
// ======================================================== Companies
// Set companies init data into store
export const storeCompaniesRequestInit = () => ({
    type: STORE_COMPANIES_REQUEST_INIT
});

// Set companies failed data into store
export const storeCompaniesRequestFailed = ({message}) => ({
    message,
    type: STORE_COMPANIES_REQUEST_FAILED
});

// Set companies succeeded data into store
export const storeCompaniesRequestSucceed = ({message}) => ({
    message,
    type: STORE_COMPANIES_REQUEST_SUCCEEDED
});

// Set companies reset data into store
export const storeCompaniesRequestReset = () => ({
    type: STORE_COMPANIES_REQUEST_RESET
});
// ======================================================== Next companies
// Set next companies init data into store
export const storeNextCompaniesRequestInit = () => ({
    type: STORE_NEXT_COMPANIES_REQUEST_INIT
});

// Set next companies failed data into store
export const storeNextCompaniesRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_COMPANIES_REQUEST_FAILED
});

// Set next companies succeeded data into store
export const storeNextCompaniesRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_COMPANIES_REQUEST_SUCCEEDED
});

// Set next companies reset data into store
export const storeNextCompaniesRequestReset = () => ({
    type: STORE_NEXT_COMPANIES_REQUEST_RESET
});
// ======================================================== Add company
// Set add company init data into store
export const storeAddCompanyRequestInit = () => ({
    type: STORE_ADD_COMPANY_REQUEST_INIT
});

// Set add company failed data into store
export const storeAddCompanyRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_COMPANY_REQUEST_FAILED
});

// Set add company succeeded data into store
export const storeAddCompanyRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_COMPANY_REQUEST_SUCCEEDED
});

// Set add company reset data into store
export const storeAddCompanyRequestReset = () => ({
    type: STORE_ADD_COMPANY_REQUEST_RESET
});
// ======================================================== Show company
// Set show company init data into store
export const storeShowCompanyRequestInit = () => ({
    type: STORE_SHOW_COMPANY_REQUEST_INIT
});

// Set show company failed data into store
export const storeShowCompanyRequestFailed = ({message}) => ({
    message,
    type: STORE_SHOW_COMPANY_REQUEST_FAILED
});

// Set show company succeeded data into store
export const storeShowCompanyRequestSucceed = ({message}) => ({
    message,
    type: STORE_SHOW_COMPANY_REQUEST_SUCCEEDED
});

// Set show company reset data into store
export const storeShowCompanyRequestReset = () => ({
    type: STORE_SHOW_COMPANY_REQUEST_RESET
});
// ======================================================== Edit company info
// Set edit company init data into store
export const storeEditCompanyRequestInit = () => ({
    type: STORE_EDIT_COMPANY_REQUEST_INIT
});

// Set edit company failed data into store
export const storeEditCompanyRequestFailed = ({message}) => ({
    message,
    type: STORE_EDIT_COMPANY_REQUEST_FAILED
});

// Set edit company succeeded data into store
export const storeEditCompanyRequestSucceed = ({message}) => ({
    message,
    type: STORE_EDIT_COMPANY_REQUEST_SUCCEEDED
});

// Set edit company reset data into store
export const storeEditCompanyRequestReset = () => ({
    type: STORE_EDIT_COMPANY_REQUEST_RESET
});
// ======================================================== Company edit doc
// Set company edit doc init data into store
export const storeCompanyEditDocRequestInit = () => ({
    type: STORE_COMPANY_EDIT_DOC_REQUEST_INIT
});

// Set company edit doc failed data into store
export const storeCompanyEditDocRequestFailed = ({message}) => ({
    message,
    type: STORE_COMPANY_EDIT_DOC_REQUEST_FAILED
});

// Set company edit doc succeeded data into store
export const storeCompanyEditDocRequestSucceed = ({message}) => ({
    message,
    type: STORE_COMPANY_EDIT_DOC_REQUEST_SUCCEEDED
});

// Set company edit doc reset data into store
export const storeCompanyEditDocRequestReset = () => ({
    type: STORE_COMPANY_EDIT_DOC_REQUEST_RESET
});
// ======================================================== Company add sim
// Set company add sim init data into store
export const storeCompanyAddSimRequestInit = () => ({
    type: STORE_COMPANY_ADD_SIM_REQUEST_INIT
});

// Set company add sim failed data into store
export const storeCompanyAddSimRequestFailed = ({message}) => ({
    message,
    type: STORE_COMPANY_ADD_SIM_REQUEST_FAILED
});

// Set company add sim succeeded data into store
export const storeCompanyAddSimRequestSucceed = ({message}) => ({
    message,
    type: STORE_COMPANY_ADD_SIM_REQUEST_SUCCEEDED
});

// Set company add sim reset data into store
export const storeCompanyAddSimRequestReset = () => ({
    type: STORE_COMPANY_ADD_SIM_REQUEST_RESET
});