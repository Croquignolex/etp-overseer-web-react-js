// Reducer action types
export const STORE_SET_COLLECTOR_DATA = 'STORE_SET_COLLECTOR_DATA';
export const STORE_SET_COLLECTORS_DATA = 'STORE_SET_COLLECTORS_DATA';
export const STORE_SET_NEW_COLLECTOR_DATA = 'STORE_SET_NEW_COLLECTOR_DATA';
export const STORE_SET_NEXT_COLLECTORS_DATA = 'STORE_SET_NEXT_COLLECTORS_DATA';
export const STORE_SET_COLLECTOR_ACTION_DATA = 'STORE_SET_COLLECTOR_ACTION_DATA';
export const STORE_SET_COLLECTOR_TOGGLE_DATA = 'STORE_SET_COLLECTOR_TOGGLE_DATA';
export const STORE_SET_COLLECTOR_MOVEMENTS_DATA = 'STORE_SET_COLLECTOR_MOVEMENTS_DATA';
export const STORE_SET_COLLECTOR_TRANSACTIONS_DATA = 'STORE_SET_COLLECTOR_TRANSACTIONS_DATA';
export const STORE_STOP_INFINITE_SCROLL_COLLECTORS_DATA = 'STORE_STOP_INFINITE_SCROLL_COLLECTORS_DATA';

// Middleware action types
export const EMIT_NEW_COLLECTOR = 'EMIT_NEW_COLLECTOR';
export const EMIT_COLLECTOR_FETCH = 'EMIT_COLLECTOR_FETCH';
export const EMIT_COLLECTORS_FETCH = 'EMIT_COLLECTORS_FETCH';
export const EMIT_ADD_COLLECTOR_SIMS = 'EMIT_ADD_COLLECTOR_SIMS';
export const EMIT_NEXT_COLLECTORS_FETCH = 'EMIT_NEXT_SIMS_FETCH';
export const EMIT_ALL_COLLECTORS_FETCH = 'EMIT_ALL_COLLECTORS_FETCH';
export const EMIT_UPDATE_COLLECTOR_ZONE = 'EMIT_UPDATE_COLLECTOR_ZONE';
export const EMIT_UPDATE_COLLECTOR_INFO = 'EMIT_UPDATE_COLLECTOR_INFO';
export const EMIT_TOGGLE_COLLECTOR_STATUS = 'EMIT_TOGGLE_COLLECTOR_STATUS';
export const EMIT_COLLECTOR_MOVEMENTS_FETCH = 'EMIT_COLLECTOR_MOVEMENTS_FETCH';
export const EMIT_COLLECTOR_TRANSACTIONS_FETCH = 'EMIT_COLLECTOR_TRANSACTIONS_FETCH';

//====================== Reducer trigger actions
// Set collectors data in store
export const storeSetCollectorsData = ({collectors, hasMoreData, page}) => ({
    page,
    collectors,
    hasMoreData,
    type: STORE_SET_COLLECTORS_DATA
});

// Set new collector data in store
export const storeSetNewCollectorData = ({collector}) => ({
    collector,
    type: STORE_SET_NEW_COLLECTOR_DATA
});

// Set collector data in store
export const storeSetCollectorData = ({collector, alsoInList = false}) => ({
    collector,
    alsoInList,
    type: STORE_SET_COLLECTOR_DATA
});

// Set collector movements data in store
export const storeSetCollectorMovementsData = ({movements}) => ({
    movements,
    type: STORE_SET_COLLECTOR_MOVEMENTS_DATA
});

// Set collector transactions data in store
export const storeSetCollectorTransactionsData = ({transactions}) => ({
    transactions,
    type: STORE_SET_COLLECTOR_TRANSACTIONS_DATA
});
 
// Set next collectors data in store
export const storeSetNextCollectorsData = ({collectors, hasMoreData, page}) => ({
    page,
    collectors,
    hasMoreData,
    type: STORE_SET_NEXT_COLLECTORS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollCollectorData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_COLLECTORS_DATA
});

// Set sim action data in store
export const storeSetCollectorActionData = ({id}) => ({
    id,
    type: STORE_SET_COLLECTOR_ACTION_DATA
});

// Set collector toggle data in store
export const storeSetCollectorToggleData = ({id}) => ({
    id,
    type: STORE_SET_COLLECTOR_TOGGLE_DATA
});

//====================== Middleware trigger actions
// Emit collectors fetch
export const emitCollectorsFetch = () => ({
    type: EMIT_COLLECTORS_FETCH
});

// Emit next collectors fetch
export const emitNextCollectorsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_COLLECTORS_FETCH
});

// Emit all collectors fetch
export const emitAllCollectorsFetch = () => ({
    type: EMIT_ALL_COLLECTORS_FETCH
});

// Emit collector fetch
export const emitCollectorFetch = ({id}) => ({
    id,
    type: EMIT_COLLECTOR_FETCH
});

// Emit toggle collector status
export const emitToggleCollectorStatus = ({id}) => ({
    id,
    type: EMIT_TOGGLE_COLLECTOR_STATUS
});

// Emit new collector fetch
export const emitNewCollector = ({name, address, phone, zone, email, password,  description}) => ({
    name,
    zone,
    phone,
    email,
    address,
    password,
    description,
    type: EMIT_NEW_COLLECTOR
});

// Emit update collector info
export const emitUpdateCollectorInfo = ({id, email, name, address, description}) => ({
    id,
    name,
    email,
    address,
    description,
    type: EMIT_UPDATE_COLLECTOR_INFO
});

// Emit update collector zone
export const emitUpdateCollectorZone = ({id, zone}) => ({
    id,
    zone,
    type: EMIT_UPDATE_COLLECTOR_ZONE
});

// Emit add collector sims
export const emitAddCollectorSims = ({id, name, number, description, operator}) => ({
    id,
    name,
    number,
    operator,
    description,
    type: EMIT_ADD_COLLECTOR_SIMS
});

// Emit fetch collector movements
export const emitCollectorMovementsFetch = ({id, selectedStartDay, selectedEndDay}) => ({
    id,
    selectedEndDay,
    selectedStartDay,
    type: EMIT_COLLECTOR_MOVEMENTS_FETCH
});

// Emit fetch collector transactions
export const emitCollectorTransactionsFetch = ({id, selectedStartDay, selectedEndDay}) => ({
    id,
    selectedEndDay,
    selectedStartDay,
    type: EMIT_COLLECTOR_TRANSACTIONS_FETCH
});

