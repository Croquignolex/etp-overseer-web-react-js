// Reducer action types
export const STORE_USER_CHECK_REQUEST_INIT = 'STORE_USER_CHECK_REQUEST_INIT';
export const STORE_USER_CHECK_REQUEST_RESET = 'STORE_USER_CHECK_REQUEST_RESET';
export const STORE_USER_CHECK_REQUEST_FAILED = 'STORE_USER_CHECK_REQUEST_FAILED';
export const STORE_USER_CHECK_REQUEST_SUCCEEDED = 'STORE_USER_CHECK_REQUEST_SUCCEEDED';

export const STORE_USER_PASSWORD_EDIT_REQUEST_INIT = 'STORE_USER_PASSWORD_EDIT_REQUEST_INIT';
export const STORE_USER_PASSWORD_EDIT_REQUEST_RESET = 'STORE_USER_PASSWORD_EDIT_REQUEST_RESET';
export const STORE_USER_PASSWORD_EDIT_REQUEST_FAILED = 'STORE_USER_PASSWORD_EDIT_REQUEST_FAILED';
export const STORE_USER_PASSWORD_EDIT_REQUEST_SUCCEEDED = 'STORE_USER_PASSWORD_EDIT_REQUEST_SUCCEEDED';

export const STORE_USER_PROFILE_EDIT_REQUEST_INIT = 'STORE_USER_PROFILE_EDIT_REQUEST_INIT';
export const STORE_USER_PROFILE_EDIT_REQUEST_RESET = 'STORE_USER_PROFILE_EDIT_REQUEST_RESET';
export const STORE_USER_PROFILE_EDIT_REQUEST_FAILED = 'STORE_USER_PROFILE_EDIT_REQUEST_FAILED';
export const STORE_USER_PROFILE_EDIT_REQUEST_SUCCEEDED = 'STORE_USER_PROFILE_EDIT_REQUEST_SUCCEEDED';

export const STORE_USER_AVATAR_EDIT_REQUEST_INIT = 'STORE_USER_AVATAR_EDIT_REQUEST_INIT';
export const STORE_USER_AVATAR_EDIT_REQUEST_RESET = 'STORE_USER_AVATAR_EDIT_REQUEST_RESET';
export const STORE_USER_AVATAR_EDIT_REQUEST_FAILED = 'STORE_USER_AVATAR_EDIT_REQUEST_FAILED';
export const STORE_USER_AVATAR_EDIT_REQUEST_SUCCEEDED = 'STORE_USER_AVATAR_EDIT_REQUEST_SUCCEEDED';

export const STORE_USER_BALANCE_FETCH_REQUEST_INIT = 'STORE_USER_BALANCE_FETCH_REQUEST_INIT';
export const STORE_USER_BALANCE_FETCH_REQUEST_RESET = 'STORE_USER_BALANCE_FETCH_REQUEST_RESET';
export const STORE_USER_BALANCE_FETCH_REQUEST_FAILED = 'STORE_USER_BALANCE_FETCH_REQUEST_FAILED';
export const STORE_USER_BALANCE_FETCH_REQUEST_SUCCEEDED = 'STORE_USER_BALANCE_FETCH_REQUEST_SUCCEEDED';

// ======================================================== User check
// Set user check init data into store
export const storeUserCheckRequestInit = () => ({
    type: STORE_USER_CHECK_REQUEST_INIT
});

// Set user check failed data into store
export const storeUserCheckRequestFailed = ({message}) => ({
    message,
    type: STORE_USER_CHECK_REQUEST_FAILED
});

// Set user check succeeded data into store
export const storeUserCheckRequestSucceed = ({message}) => ({
    message,
    type: STORE_USER_CHECK_REQUEST_SUCCEEDED
});

// Set user check reset data into store
export const storeUserCheckRequestReset = () => ({
    type: STORE_USER_CHECK_REQUEST_RESET
});
// ======================================================== User password edit
// Set user password edit init data into store
export const storeUserPasswordEditRequestInit = () => ({
    type: STORE_USER_PASSWORD_EDIT_REQUEST_INIT
});

// Set user password edit failed data into store
export const storeUserPasswordEditRequestFailed = ({message}) => ({
    message,
    type: STORE_USER_PASSWORD_EDIT_REQUEST_FAILED
});

// Set user password edit succeeded data into store
export const storeUserPasswordEditRequestSucceed = ({message}) => ({
    message,
    type: STORE_USER_PASSWORD_EDIT_REQUEST_SUCCEEDED
});

// Set user password edit reset data into store
export const storeUserPasswordEditRequestReset = () => ({
    type: STORE_USER_PASSWORD_EDIT_REQUEST_RESET
});
// ======================================================== User profile edit
// Set user password edit init data into store
export const storeUserProfileEditRequestInit = () => ({
    type: STORE_USER_PROFILE_EDIT_REQUEST_INIT
});

// Set user password edit failed data into store
export const storeUserProfileEditRequestFailed = ({message}) => ({
    message,
    type: STORE_USER_PROFILE_EDIT_REQUEST_FAILED
});

// Set user password edit succeeded data into store
export const storeUserProfileEditRequestSucceed = ({message}) => ({
    message,
    type: STORE_USER_PROFILE_EDIT_REQUEST_SUCCEEDED
});

// Set user password edit reset data into store
export const storeUserProfileEditRequestReset = () => ({
    type: STORE_USER_PROFILE_EDIT_REQUEST_RESET
});
// ======================================================== User avatar edit
// Set user password edit init data into store
export const storeUserAvatarEditRequestInit = () => ({
    type: STORE_USER_AVATAR_EDIT_REQUEST_INIT
});

// Set user password edit failed data into store
export const storeUserAvatarEditRequestFailed = ({message}) => ({
    message,
    type: STORE_USER_AVATAR_EDIT_REQUEST_FAILED
});

// Set user password edit succeeded data into store
export const storeUserAvatarEditRequestSucceed = ({message}) => ({
    message,
    type: STORE_USER_AVATAR_EDIT_REQUEST_SUCCEEDED
});

// Set user password edit reset data into store
export const storeUserAvatarEditRequestReset = () => ({
    type: STORE_USER_AVATAR_EDIT_REQUEST_RESET
});
// ======================================================== User balance fetch
// Set user balance fetch init data into store
export const storeUserBalanceFetchRequestInit = () => ({
    type: STORE_USER_BALANCE_FETCH_REQUEST_INIT
});

// Set user balance fetch failed data into store
export const storeUserBalanceFetchRequestFailed = ({message}) => ({
    message,
    type: STORE_USER_BALANCE_FETCH_REQUEST_FAILED
});

// Set user balance fetch succeeded data into store
export const storeUserBalanceFetchRequestSucceed = ({message}) => ({
    message,
    type: STORE_USER_BALANCE_FETCH_REQUEST_SUCCEEDED
});

// Set user balance fetch reset data into store
export const storeUserBalanceFetchRequestReset = () => ({
    type: STORE_USER_BALANCE_FETCH_REQUEST_RESET
});
