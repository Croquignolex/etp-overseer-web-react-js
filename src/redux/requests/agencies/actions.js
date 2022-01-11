// Reducer action types
export const STORE_AGENCIES_REQUEST_INIT = 'STORE_AGENCIES_REQUEST_INIT';
export const STORE_AGENCIES_REQUEST_RESET = 'STORE_AGENCIES_REQUEST_RESET';
export const STORE_AGENCIES_REQUEST_FAILED = 'STORE_AGENCIES_REQUEST_FAILED';
export const STORE_AGENCIES_REQUEST_SUCCEEDED = 'STORE_AGENCIES_REQUEST_SUCCEEDED';

export const STORE_NEXT_AGENCIES_REQUEST_INIT = 'STORE_NEXT_AGENCIES_REQUEST_INIT';
export const STORE_NEXT_AGENCIES_REQUEST_RESET = 'STORE_NEXT_AGENCIES_REQUEST_RESET';
export const STORE_NEXT_AGENCIES_REQUEST_FAILED = 'STORE_NEXT_AGENCIES_REQUEST_FAILED';
export const STORE_NEXT_AGENCIES_REQUEST_SUCCEEDED = 'STORE_NEXT_AGENCIES_REQUEST_SUCCEEDED';

export const STORE_ALL_AGENCIES_REQUEST_INIT = 'STORE_ALL_AGENCIES_REQUEST_INIT';
export const STORE_ALL_AGENCIES_REQUEST_RESET = 'STORE_ALL_AGENCIES_REQUEST_RESET';
export const STORE_ALL_AGENCIES_REQUEST_FAILED = 'STORE_ALL_AGENCIES_REQUEST_FAILED';
export const STORE_ALL_AGENCIES_REQUEST_SUCCEEDED = 'STORE_ALL_AGENCIES_REQUEST_SUCCEEDED';

export const STORE_ADD_AGENCY_REQUEST_INIT = 'STORE_ADD_AGENCY_REQUEST_INIT';
export const STORE_ADD_AGENCY_REQUEST_RESET = 'STORE_ADD_AGENCY_REQUEST_RESET';
export const STORE_ADD_AGENCY_REQUEST_FAILED = 'STORE_ADD_AGENCY_REQUEST_FAILED';
export const STORE_ADD_AGENCY_REQUEST_SUCCEEDED = 'STORE_ADD_AGENCY_REQUEST_SUCCEEDED';

export const STORE_SHOW_AGENCY_REQUEST_INIT = 'STORE_SHOW_AGENCY_REQUEST_INIT';
export const STORE_SHOW_AGENCY_REQUEST_RESET = 'STORE_SHOW_AGENCY_REQUEST_RESET';
export const STORE_SHOW_AGENCY_REQUEST_FAILED = 'STORE_SHOW_AGENCY_REQUEST_FAILED';
export const STORE_SHOW_AGENCY_REQUEST_SUCCEEDED = 'STORE_SHOW_AGENCY_REQUEST_SUCCEEDED';

export const STORE_EDIT_AGENCY_REQUEST_INIT = 'STORE_EDIT_AGENCY_REQUEST_INIT';
export const STORE_EDIT_AGENCY_REQUEST_RESET = 'STORE_EDIT_AGENCY_REQUEST_RESET';
export const STORE_EDIT_AGENCY_REQUEST_FAILED = 'STORE_EDIT_AGENCY_REQUEST_FAILED';
export const STORE_EDIT_AGENCY_REQUEST_SUCCEEDED = 'STORE_EDIT_AGENCY_REQUEST_SUCCEEDED';

export const STORE_AGENCY_ADD_SIM_REQUEST_INIT = 'STORE_AGENCY_ADD_SIM_REQUEST_INIT';
export const STORE_AGENCY_ADD_SIM_REQUEST_RESET = 'STORE_AGENCY_ADD_SIM_REQUEST_RESET';
export const STORE_AGENCY_ADD_SIM_REQUEST_FAILED = 'STORE_AGENCY_ADD_SIM_REQUEST_FAILED';
export const STORE_AGENCY_ADD_SIM_REQUEST_SUCCEEDED = 'STORE_AGENCY_ADD_SIM_REQUEST_SUCCEEDED';

// ======================================================== Agencies
// Set agencies init data into store
export const storeAgenciesRequestInit = () => ({
    type: STORE_AGENCIES_REQUEST_INIT
});

// Set agencies failed data into store
export const storeAgenciesRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENCIES_REQUEST_FAILED
});

// Set agencies succeeded data into store
export const storeAgenciesRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENCIES_REQUEST_SUCCEEDED
});

// Set agencies reset data into store
export const storeAgenciesRequestReset = () => ({
    type: STORE_AGENCIES_REQUEST_RESET
});
// ======================================================== Next agencies
// Set next agencies init data into store
export const storeNextAgenciesRequestInit = () => ({
    type: STORE_NEXT_AGENCIES_REQUEST_INIT
});

// Set next agencies failed data into store
export const storeNextAgenciesRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_AGENCIES_REQUEST_FAILED
});

// Set next agencies succeeded data into store
export const storeNextAgenciesRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_AGENCIES_REQUEST_SUCCEEDED
});

// Set next agencies reset data into store
export const storeNextAgenciesRequestReset = () => ({
    type: STORE_NEXT_AGENCIES_REQUEST_RESET
});
// ======================================================== All agencies
// Set all agencies init data into store
export const storeAllAgenciesRequestInit = () => ({
    type: STORE_ALL_AGENCIES_REQUEST_INIT
});

// Set all agencies failed data into store
export const storeAllAgenciesRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_AGENCIES_REQUEST_FAILED
});

// Set all agencies succeeded data into store
export const storeAllAgenciesRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_AGENCIES_REQUEST_SUCCEEDED
});

// Set all agencies reset data into store
export const storeAllAgenciesRequestReset = () => ({
    type: STORE_ALL_AGENCIES_REQUEST_RESET
});
// ======================================================== Add agency
// Set add agency init data into store
export const storeAddAgencyRequestInit = () => ({
    type: STORE_ADD_AGENCY_REQUEST_INIT
});

// Set add agency failed data into store
export const storeAddAgencyRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_AGENCY_REQUEST_FAILED
});

// Set add agency succeeded data into store
export const storeAddAgencyRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_AGENCY_REQUEST_SUCCEEDED
});

// Set add agency reset data into store
export const storeAddAgencyRequestReset = () => ({
    type: STORE_ADD_AGENCY_REQUEST_RESET
});
// ======================================================== Show agency
// Set show agency init data into store
export const storeShowAgencyRequestInit = () => ({
    type: STORE_SHOW_AGENCY_REQUEST_INIT
});

// Set show agency failed data into store
export const storeShowAgencyRequestFailed = ({message}) => ({
    message,
    type: STORE_SHOW_AGENCY_REQUEST_FAILED
});

// Set show agency succeeded data into store
export const storeShowAgencyRequestSucceed = ({message}) => ({
    message,
    type: STORE_SHOW_AGENCY_REQUEST_SUCCEEDED
});

// Set show agency reset data into store
export const storeShowAgencyRequestReset = () => ({
    type: STORE_SHOW_AGENCY_REQUEST_RESET
});
// ======================================================== Edit agency
// Set edit agency init data into store
export const storeEditAgencyRequestInit = () => ({
    type: STORE_EDIT_AGENCY_REQUEST_INIT
});

// Set edit agency failed data into store
export const storeEditAgencyRequestFailed = ({message}) => ({
    message,
    type: STORE_EDIT_AGENCY_REQUEST_FAILED
});

// Set edit agency succeeded data into store
export const storeEditAgencyRequestSucceed = ({message}) => ({
    message,
    type: STORE_EDIT_AGENCY_REQUEST_SUCCEEDED
});

// Set edit agency reset data into store
export const storeEditAgencyRequestReset = () => ({
    type: STORE_EDIT_AGENCY_REQUEST_RESET
});
// ======================================================== Agency add sim
// Set agency add sim init data into store
export const storeAgencyAddSimRequestInit = () => ({
    type: STORE_AGENCY_ADD_SIM_REQUEST_INIT
});

// Set agency add sim failed data into store
export const storeAgencyAddSimRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENCY_ADD_SIM_REQUEST_FAILED
});

// Set agency add sim succeeded data into store
export const storeAgencyAddSimRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENCY_ADD_SIM_REQUEST_SUCCEEDED
});

// Set agency add sim reset data into store
export const storeAgencyAddSimRequestReset = () => ({
    type: STORE_AGENCY_ADD_SIM_REQUEST_RESET
});
