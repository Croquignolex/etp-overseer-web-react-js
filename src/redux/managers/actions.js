// Reducer action types
export const STORE_SET_MANAGER_DATA = 'STORE_SET_MANAGER_DATA';
export const STORE_SET_MANAGERS_DATA = 'STORE_SET_MANAGERS_DATA';
export const STORE_SET_NEW_MANAGER_DATA = 'STORE_SET_NEW_MANAGER_DATA';
export const STORE_SET_NEXT_MANAGERS_DATA = 'STORE_SET_NEXT_MANAGERS_DATA';
export const STORE_SET_MANAGER_ACTION_DATA = 'STORE_SET_MANAGER_ACTION_DATA';
export const STORE_SET_MANAGER_TOGGLE_DATA = 'STORE_SET_MANAGER_TOGGLE_DATA';
export const STORE_SET_MANAGER_MOVEMENTS_DATA = 'STORE_SET_MANAGER_MOVEMENTS_DATA';
export const STORE_SET_MANAGER_TRANSACTIONS_DATA = 'STORE_SET_MANAGER_TRANSACTIONS_DATA';
export const STORE_STOP_INFINITE_SCROLL_MANAGERS_DATA = 'STORE_STOP_INFINITE_SCROLL_MANAGERS_DATA';

// Middleware action types
export const EMIT_NEW_MANAGER = 'EMIT_NEW_MANAGER';
export const EMIT_MANAGER_FETCH = 'EMIT_MANAGER_FETCH';
export const EMIT_MANAGERS_FETCH = 'EMIT_MANAGERS_FETCH';
export const EMIT_NEXT_MANAGERS_FETCH = 'EMIT_NEXT_SIMS_FETCH';
export const EMIT_ALL_MANAGERS_FETCH = 'EMIT_ALL_MANAGERS_FETCH';
export const EMIT_UPDATE_MANAGER_INFO = 'EMIT_UPDATE_MANAGER_INFO';
export const EMIT_TOGGLE_MANAGER_STATUS = 'EMIT_TOGGLE_MANAGER_STATUS';
export const EMIT_MANAGER_MOVEMENTS_FETCH = 'EMIT_MANAGER_MOVEMENTS_FETCH';
export const EMIT_MANAGER_TRANSACTIONS_FETCH = 'EMIT_MANAGER_TRANSACTIONS_FETCH';

//====================== Reducer trigger actions
// Set managers data in store
export const storeSetManagersData = ({managers, hasMoreData, page}) => ({
    page,
    managers,
    hasMoreData,
    type: STORE_SET_MANAGERS_DATA
});

// Set new manager data in store
export const storeSetNewManagerData = ({manager}) => ({
    manager,
    type: STORE_SET_NEW_MANAGER_DATA
});

// Set manager data in store
export const storeSetManagerData = ({manager, alsoInList = false}) => ({
    manager,
    alsoInList,
    type: STORE_SET_MANAGER_DATA
});

// Set manager movements data in store
export const storeSetManagerMovementsData = ({movements}) => ({
    movements,
    type: STORE_SET_MANAGER_MOVEMENTS_DATA
});

// Set manager transactions data in store
export const storeSetManagerTransactionsData = ({transactions}) => ({
    transactions,
    type: STORE_SET_MANAGER_TRANSACTIONS_DATA
});

// Set next managers data in store
export const storeSetNextManagersData = ({managers, hasMoreData, page}) => ({
    page,
    managers,
    hasMoreData,
    type: STORE_SET_NEXT_MANAGERS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollManagerData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_MANAGERS_DATA
});

// Set sim action data in store
export const storeSetManagerActionData = ({id}) => ({
    id,
    type: STORE_SET_MANAGER_ACTION_DATA
});

// Set manager toggle data in store
export const storeSetManagerToggleData = ({id}) => ({
    id,
    type: STORE_SET_MANAGER_TOGGLE_DATA
});

//====================== Middleware trigger actions
// Emit managers fetch
export const emitManagersFetch = () => ({
    type: EMIT_MANAGERS_FETCH
});

// Emit next managers fetch
export const emitNextManagersFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_MANAGERS_FETCH
});

// Emit all managers fetch
export const emitAllManagersFetch = () => ({
    type: EMIT_ALL_MANAGERS_FETCH
});

// Emit manager fetch
export const emitManagerFetch = ({id}) => ({
    id,
    type: EMIT_MANAGER_FETCH
});

// Emit toggle manager status
export const emitToggleManagerStatus = ({id}) => ({
    id,
    type: EMIT_TOGGLE_MANAGER_STATUS
});

// Emit new manager fetch
export const emitNewManager = ({name, address, phone, email, password,  description}) => ({
    name,
    phone,
    email,
    address,
    password,
    description,
    type: EMIT_NEW_MANAGER
});

// Emit update manager info
export const emitUpdateManagerInfo = ({id, email, name, address, description}) => ({
    id,
    name,
    email,
    address,
    description,
    type: EMIT_UPDATE_MANAGER_INFO
});

// Emit fetch manager movements
export const emitManagerMovementsFetch = ({id, selectedStartDay, selectedEndDay}) => ({
    id,
    selectedEndDay,
    selectedStartDay,
    type: EMIT_MANAGER_MOVEMENTS_FETCH
});

// Emit fetch manager transactions
export const emitManagerTransactionsFetch = ({id, selectedStartDay, selectedEndDay}) => ({
    id,
    selectedEndDay,
    selectedStartDay,
    type: EMIT_MANAGER_TRANSACTIONS_FETCH
});