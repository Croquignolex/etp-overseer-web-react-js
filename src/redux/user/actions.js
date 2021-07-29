// Reducer action types
export const STORE_RESET_USER_DATA = 'STORE_RESET_USER_DATA';
export const STORE_SET_USER_FULL_DATA = 'STORE_SET_USER_FULL_DATA';
export const STORE_SET_USER_AVATAR_DATA = 'STORE_SET_USER_AVATAR_DATA';
export const STORE_SET_USER_BALANCE_DATA = 'STORE_SET_USER_BALANCE_DATA';
export const STORE_SET_USER_INFORMATION_DATA = 'STORE_SET_USER_INFORMATION_DATA';

// Middleware action types
export const EMIT_USER_LOGOUT = 'EMIT_USER_LOGOUT';
export const EMIT_FETCH_USER_BALANCE = 'EMIT_FETCH_USER_BALANCE';
export const EMIT_USER_AVATAR_UPDATE = 'EMIT_USER_AVATAR_UPDATE';
export const EMIT_USER_PASSWORD_UPDATE = 'EMIT_USER_PASSWORD_UPDATE';
export const EMIT_USER_INFORMATION_UPDATE = 'EMIT_USER_INFORMATION_UPDATE';
export const EMIT_CHECK_USER_AUTHENTICATION = 'EMIT_CHECK_USER_AUTHENTICATION';
export const EMIT_ATTEMPT_USER_AUTHENTICATION = 'EMIT_ATTEMPT_USER_AUTHENTICATION';

//====================== Reducer trigger actions
// Empty user data into store
export const storeResetUserData = () => ({
    type: STORE_RESET_USER_DATA
});

// Set user data in store
export const storeSetUserFullData = ({id, name, post, email, phone, avatar, address, creation, description}) => ({
    id,
    name,
    post,
    phone,
    email,
    avatar,
    address,
    creation,
    description,
    type: STORE_SET_USER_FULL_DATA
});

// Set user information in store
export const storeSetUserInformationData = ({name, post, address, email, description}) => ({
    name,
    post,
    email,
    address,
    description,
    type: STORE_SET_USER_INFORMATION_DATA
});

// Set user avatar in store
export const storeSetUserAvatarData = ({avatar}) => ({
    avatar,
    type: STORE_SET_USER_AVATAR_DATA
});

// Set user balance in store
export const storeSetUserBalanceData = ({balance}) => ({
    balance,
    type: STORE_SET_USER_BALANCE_DATA
});

//====================== Middleware trigger actions
// Emit user auth check
export const emitCheckUserAuthentication = () => ({
    type: EMIT_CHECK_USER_AUTHENTICATION
});

// Emit user auth attempt
export const emitAttemptUserAuthentication = ({token}) => ({
    token,
    type: EMIT_ATTEMPT_USER_AUTHENTICATION
});

// Emit user balance
export const emitFetchUserBalance = () => ({
    type: EMIT_FETCH_USER_BALANCE
});

// Emit user auth attempt
export const emitUserPasswordUpdate = ({oldPassword, newPassword}) => ({
    oldPassword,
    newPassword,
    type: EMIT_USER_PASSWORD_UPDATE
});

// Emit user information update
export const emitUserInformationUpdate = ({name, post, address, email, description}) => ({
    name,
    post,
    email,
    address,
    description,
    type: EMIT_USER_INFORMATION_UPDATE
});

// Emit user avatar update
export const emitUserAvatarUpdate = ({avatar}) => ({
    avatar,
    type: EMIT_USER_AVATAR_UPDATE
});

// Emit user data clean up toward api logout
export const emitUserLogout = () => ({
    type: EMIT_USER_LOGOUT
});
