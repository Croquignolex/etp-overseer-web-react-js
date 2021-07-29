// Reducer action types
export const STORE_SET_OUTLAYS_DATA = 'STORE_SET_OUTLAYS_DATA';
export const STORE_SET_NEW_OUTLAY_DATA = 'STORE_SET_NEW_OUTLAY_DATA';
export const STORE_SET_NEXT_OUTLAYS_DATA = 'STORE_SET_NEXT_OUTLAYS_DATA';
export const STORE_STOP_INFINITE_SCROLL_OUTLAY_DATA = 'STORE_STOP_INFINITE_SCROLL_OUTLAY_DATA';

// Middleware action types
export const EMIT_ADD_OUTLAY = 'EMIT_ADD_OUTLAY';
export const EMIT_OUTLAYS_FETCH = 'EMIT_OUTLAYS_FETCH';
export const EMIT_NEXT_OUTLAYS_FETCH = 'EMIT_NEXT_OUTLAYS_FETCH';

//====================== Reducer trigger actions
// Set outlays data in store
export const storeSetOutlaysData = ({outlays, hasMoreData, page}) => ({
    page,
    outlays,
    hasMoreData,
    type: STORE_SET_OUTLAYS_DATA
});

// Set new outlay data in store
export const storeSetNewOutlayData = ({outlay}) => ({
    outlay,
    type: STORE_SET_NEW_OUTLAY_DATA
});

// Set next outlays data in store
export const storeSetNextOutlaysData = ({outlays, hasMoreData, page}) => ({
    page,
    outlays,
    hasMoreData,
    type: STORE_SET_NEXT_OUTLAYS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollOutlayData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_OUTLAY_DATA
});

//====================== Middleware trigger actions
// Emit outlays fetch
export const emitOutlaysFetch = () => ({
    type: EMIT_OUTLAYS_FETCH
});

// Emit next outlays fetch
export const emitNextOutlaysFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_OUTLAYS_FETCH
});

// Emit add outlay
export const emitAddOutlay = ({amount, collector, reason}) => ({
    reason,
    amount,
    collector,
    type: EMIT_ADD_OUTLAY
});
