// Reducer action types
export const STORE_SET_RECOVERIES_DATA = 'STORE_SET_RECOVERIES_DATA';
export const STORE_SET_NEXT_RECOVERIES_DATA = 'STORE_SET_NEXT_RECOVERIES_DATA';
export const STORE_STOP_INFINITE_SCROLL_RECOVERIES_DATA = 'STORE_STOP_INFINITE_SCROLL_RECOVERIES_DATA';

// Middleware action types
export const EMIT_NEW_RECOVERY = 'EMIT_NEW_RECOVERY';
export const EMIT_RECOVERIES_FETCH = 'EMIT_RECOVERIES_FETCH';
export const EMIT_NEXT_RECOVERIES_FETCH = 'EMIT_NEXT_RECOVERIES_FETCH';
export const EMIT_SUPPLY_RECOVERIES_FETCH = 'EMIT_SUPPLY_RECOVERIES_FETCH';

//====================== Reducer trigger actions
// Set recoveries data in store
export const storeSetRecoveriesData = ({recoveries, hasMoreData, page}) => ({
    page,
    recoveries,
    hasMoreData,
    type: STORE_SET_RECOVERIES_DATA
});

// Set next recoveries data in store
export const storeSetNextRecoveriesData = ({recoveries, hasMoreData, page}) => ({
    page,
    recoveries,
    hasMoreData,
    type: STORE_SET_NEXT_RECOVERIES_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollRecoveryData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_RECOVERIES_DATA
});

//====================== Middleware trigger actions
// Emit recoveries fetch
export const emitRecoveriesFetch = () => ({
    type: EMIT_RECOVERIES_FETCH
});

// Emit next recoveries fetch
export const emitNextRecoveriesFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_RECOVERIES_FETCH
});

// Emit supply recoveries fetch
export const emitSupplyRecoveriesFetch = ({id}) => ({
    id,
    type: EMIT_SUPPLY_RECOVERIES_FETCH
});

// Emit new recovery
export const emitNewRecovery = ({supply, amount}) => ({
    supply,
    amount,
    type: EMIT_NEW_RECOVERY
});