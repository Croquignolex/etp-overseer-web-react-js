// Reducer action types
export const STORE_SET_HANDOVERS_DATA = 'STORE_SET_HANDOVERS_DATA';
export const STORE_SET_NEXT_HANDOVERS_DATA = 'STORE_SET_NEXT_HANDOVERS_DATA';
export const STORE_STOP_INFINITE_SCROLL_HANDOVER_DATA = 'STORE_STOP_INFINITE_SCROLL_HANDOVER_DATA';

// Middleware action types
export const EMIT_HANDOVERS_FETCH = 'EMIT_HANDOVERS_FETCH';
export const EMIT_NEXT_HANDOVERS_FETCH = 'EMIT_NEXT_HANDOVERS_FETCH';

//====================== Reducer trigger actions
// Set handovers data in store
export const storeSetHandoversData = ({handovers, hasMoreData, page}) => ({
    page,
    handovers,
    hasMoreData,
    type: STORE_SET_HANDOVERS_DATA
});

// Set next handovers data in store
export const storeSetNextHandoversData = ({handovers, hasMoreData, page}) => ({
    page,
    handovers,
    hasMoreData,
    type: STORE_SET_NEXT_HANDOVERS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollHandoverData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_HANDOVER_DATA
});

//====================== Middleware trigger actions
// Emit handovers fetch
export const emitHandoversFetch = () => ({
    type: EMIT_HANDOVERS_FETCH
});

// Emit next handovers fetch
export const emitNextHandoversFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_HANDOVERS_FETCH
});