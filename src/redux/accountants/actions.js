// Reducer action types
export const STORE_SET_ACCOUNTANT_DATA = 'STORE_SET_ACCOUNTANT_DATA';
export const STORE_SET_ACCOUNTANTS_DATA = 'STORE_SET_ACCOUNTANTS_DATA';
export const STORE_SET_NEW_ACCOUNTANT_DATA = 'STORE_SET_NEW_ACCOUNTANT_DATA';
export const STORE_SET_NEXT_ACCOUNTANTS_DATA = 'STORE_SET_NEXT_ACCOUNTANTS_DATA';
export const STORE_SET_ACCOUNTANT_ACTION_DATA = 'STORE_SET_ACCOUNTANT_ACTION_DATA';
export const STORE_SET_ACCOUNTANT_TOGGLE_DATA = 'STORE_SET_ACCOUNTANT_TOGGLE_DATA';
export const STORE_STOP_INFINITE_SCROLL_ACCOUNTANTS_DATA = 'STORE_STOP_INFINITE_SCROLL_ACCOUNTANTS_DATA';

// Middleware action types
export const EMIT_NEW_ACCOUNTANT = 'EMIT_NEW_ACCOUNTANT';
export const EMIT_ACCOUNTANT_FETCH = 'EMIT_ACCOUNTANT_FETCH';
export const EMIT_ACCOUNTANTS_FETCH = 'EMIT_ACCOUNTANTS_FETCH';
export const EMIT_NEXT_ACCOUNTANTS_FETCH = 'EMIT_NEXT_SIMS_FETCH';
export const EMIT_ALL_ACCOUNTANTS_FETCH = 'EMIT_ALL_ACCOUNTANTS_FETCH';
export const EMIT_UPDATE_ACCOUNTANT_INFO = 'EMIT_UPDATE_ACCOUNTANT_INFO';
export const EMIT_TOGGLE_ACCOUNTANT_STATUS = 'EMIT_TOGGLE_ACCOUNTANT_STATUS';

//====================== Reducer trigger actions
// Set accountants data in store
export const storeSetAccountantsData = ({accountants, hasMoreData, page}) => ({
    page,
    accountants,
    hasMoreData,
    type: STORE_SET_ACCOUNTANTS_DATA
});

// Set new accountant data in store
export const storeSetNewAccountantData = ({accountant}) => ({
    accountant,
    type: STORE_SET_NEW_ACCOUNTANT_DATA
});

// Set accountant data in store
export const storeSetAccountantData = ({accountant, alsoInList = false}) => ({
    accountant,
    alsoInList,
    type: STORE_SET_ACCOUNTANT_DATA
});

// Set next accountants data in store
export const storeSetNextAccountantsData = ({accountants, hasMoreData, page}) => ({
    page,
    accountants,
    hasMoreData,
    type: STORE_SET_NEXT_ACCOUNTANTS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollAccountantData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_ACCOUNTANTS_DATA
});

// Set sim action data in store
export const storeSetAccountantActionData = ({id}) => ({
    id,
    type: STORE_SET_ACCOUNTANT_ACTION_DATA
});

// Set accountant toggle data in store
export const storeSetAccountantToggleData = ({id}) => ({
    id,
    type: STORE_SET_ACCOUNTANT_TOGGLE_DATA
});

//====================== Middleware trigger actions
// Emit accountants fetch
export const emitAccountantsFetch = () => ({
    type: EMIT_ACCOUNTANTS_FETCH
});

// Emit next accountants fetch
export const emitNextAccountantsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_ACCOUNTANTS_FETCH
});

// Emit all accountants fetch
export const emitAllAccountantsFetch = () => ({
    type: EMIT_ALL_ACCOUNTANTS_FETCH
});

// Emit accountant fetch
export const emitAccountantFetch = ({id}) => ({
    id,
    type: EMIT_ACCOUNTANT_FETCH
});

// Emit toggle accountant status
export const emitToggleAccountantStatus = ({id}) => ({
    id,
    type: EMIT_TOGGLE_ACCOUNTANT_STATUS
});

// Emit new accountant fetch
export const emitNewAccountant = ({name, address, phone, email, password,  description}) => ({
    name,
    phone,
    email,
    address,
    password,
    description,
    type: EMIT_NEW_ACCOUNTANT
});

// Emit update accountant info
export const emitUpdateAccountantInfo = ({id, email, name, address, description}) => ({
    id,
    name,
    email,
    address,
    description,
    type: EMIT_UPDATE_ACCOUNTANT_INFO
});