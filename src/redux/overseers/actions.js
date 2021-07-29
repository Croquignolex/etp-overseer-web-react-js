// Reducer action types
export const STORE_SET_OVERSEER_DATA = 'STORE_SET_OVERSEER_DATA';
export const STORE_SET_OVERSEERS_DATA = 'STORE_SET_OVERSEERS_DATA';
export const STORE_SET_NEXT_OVERSEERS_DATA = 'STORE_SET_NEXT_OVERSEERS_DATA';
export const STORE_STOP_INFINITE_SCROLL_OVERSEERS_DATA = 'STORE_STOP_INFINITE_SCROLL_OVERSEERS_DATA';

// Middleware action types
export const EMIT_OVERSEER_FETCH = 'EMIT_OVERSEER_FETCH';
export const EMIT_OVERSEERS_FETCH = 'EMIT_OVERSEERS_FETCH'; 
export const EMIT_NEXT_OVERSEERS_FETCH = 'EMIT_NEXT_SIMS_FETCH';
export const EMIT_ALL_OVERSEERS_FETCH = 'EMIT_ALL_OVERSEERS_FETCH'; 

//====================== Reducer trigger actions
// Set overseers data in store
export const storeSetOverseersData = ({overseers, hasMoreData, page}) => ({
    page,
    overseers,
    hasMoreData,
    type: STORE_SET_OVERSEERS_DATA
});

// Set overseer data in store
export const storeSetOverseerData = ({overseer, alsoInList = false}) => ({
    overseer,
    alsoInList,
    type: STORE_SET_OVERSEER_DATA
});

// Set next overseers data in store
export const storeSetNextOverseersData = ({overseers, hasMoreData, page}) => ({
    page,
    overseers,
    hasMoreData,
    type: STORE_SET_NEXT_OVERSEERS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollOverseerData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_OVERSEERS_DATA
});

//====================== Middleware trigger actions
// Emit overseers fetch
export const emitOverseersFetch = () => ({
    type: EMIT_OVERSEERS_FETCH
});

// Emit next overseers fetch
export const emitNextOverseersFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_OVERSEERS_FETCH
});

// Emit all overseers fetch
export const emitAllOverseersFetch = () => ({
    type: EMIT_ALL_OVERSEERS_FETCH
});

// Emit overseer fetch
export const emitOverseerFetch = ({id}) => ({
    id,
    type: EMIT_OVERSEER_FETCH
});