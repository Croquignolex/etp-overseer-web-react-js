// Reducer action types
export const STORE_SET_SUPERVISOR_DATA = 'STORE_SET_SUPERVISOR_DATA';
export const STORE_SET_SUPERVISORS_DATA = 'STORE_SET_SUPERVISORS_DATA';
export const STORE_SET_NEW_SUPERVISOR_DATA = 'STORE_SET_NEW_SUPERVISOR_DATA';
export const STORE_SET_NEXT_SUPERVISORS_DATA = 'STORE_SET_NEXT_SUPERVISORS_DATA';
export const STORE_SET_SUPERVISOR_MOVEMENTS_DATA = 'STORE_SET_SUPERVISOR_MOVEMENTS_DATA';
export const STORE_SET_SUPERVISOR_TRANSACTIONS_DATA = 'STORE_SET_SUPERVISOR_TRANSACTIONS_DATA';
export const STORE_STOP_INFINITE_SCROLL_SUPERVISORS_DATA = 'STORE_STOP_INFINITE_SCROLL_SUPERVISORS_DATA';

// Middleware action types
export const EMIT_NEW_SUPERVISOR = 'EMIT_NEW_SUPERVISOR';
export const EMIT_SUPERVISOR_FETCH = 'EMIT_SUPERVISOR_FETCH';
export const EMIT_SUPERVISORS_FETCH = 'EMIT_SUPERVISORS_FETCH'; 
export const EMIT_NEXT_SUPERVISORS_FETCH = 'EMIT_NEXT_SIMS_FETCH';
export const EMIT_ALL_SUPERVISORS_FETCH = 'EMIT_ALL_SUPERVISORS_FETCH'; 
export const EMIT_SUPERVISOR_MOVEMENTS_FETCH = 'EMIT_SUPERVISOR_MOVEMENTS_FETCH';
export const EMIT_SUPERVISOR_TRANSACTIONS_FETCH = 'EMIT_SUPERVISOR_TRANSACTIONS_FETCH';

//====================== Reducer trigger actions
// Set supervisors data in store
export const storeSetSupervisorsData = ({supervisors, hasMoreData, page}) => ({
    page,
    supervisors,
    hasMoreData,
    type: STORE_SET_SUPERVISORS_DATA
});

// Set new supervisor data in store
export const storeSetNewSupervisorData = ({supervisor}) => ({
    supervisor,
    type: STORE_SET_NEW_SUPERVISOR_DATA
});

// Set supervisor data in store
export const storeSetSupervisorData = ({supervisor, alsoInList = false}) => ({
    supervisor,
    alsoInList,
    type: STORE_SET_SUPERVISOR_DATA
});

// Set supervisor movements data in store
export const storeSetSupervisorMovementsData = ({movements}) => ({
    movements,
    type: STORE_SET_SUPERVISOR_MOVEMENTS_DATA
});

// Set supervisor transactions data in store
export const storeSetSupervisorTransactionsData = ({transactions}) => ({
    transactions,
    type: STORE_SET_SUPERVISOR_TRANSACTIONS_DATA
});


// Set next supervisors data in store
export const storeSetNextSupervisorsData = ({supervisors, hasMoreData, page}) => ({
    page,
    supervisors,
    hasMoreData,
    type: STORE_SET_NEXT_SUPERVISORS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollSupervisorData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_SUPERVISORS_DATA
});

//====================== Middleware trigger actions
// Emit supervisors fetch
export const emitSupervisorsFetch = () => ({
    type: EMIT_SUPERVISORS_FETCH
});

// Emit next supervisors fetch
export const emitNextSupervisorsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_SUPERVISORS_FETCH
});

// Emit all supervisors fetch
export const emitAllSupervisorsFetch = () => ({
    type: EMIT_ALL_SUPERVISORS_FETCH
});

// Emit supervisor fetch
export const emitSupervisorFetch = ({id}) => ({
    id,
    type: EMIT_SUPERVISOR_FETCH
});
 
// Emit new supervisor fetch
export const emitNewSupervisor = ({name, address, phone, email, password,  description}) => ({
    name,
    phone,
    email,
    address,
    password,
    description,
    type: EMIT_NEW_SUPERVISOR
});

// Emit fetch supervisor movements
export const emitSupervisorMovementsFetch = ({id,  selectedStartDay, selectedEndDay}) => ({
    id,
    selectedEndDay,
    selectedStartDay,
    type: EMIT_SUPERVISOR_MOVEMENTS_FETCH
});

// Emit fetch supervisor transactions
export const emitSupervisorTransactionsFetch = ({id,  selectedStartDay, selectedEndDay}) => ({
    id,
    selectedEndDay,
    selectedStartDay,
    type: EMIT_SUPERVISOR_TRANSACTIONS_FETCH
});