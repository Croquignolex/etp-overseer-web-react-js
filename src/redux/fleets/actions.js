// Reducer action types
export const STORE_SET_FLEETS_DATA = 'STORE_SET_FLEETS_DATA';
export const STORE_SET_NEXT_FLEETS_DATA = 'STORE_SET_NEXT_FLEETS_DATA';
export const STORE_STOP_INFINITE_SCROLL_FLEETS_DATA = 'STORE_STOP_INFINITE_SCROLL_FLEETS_DATA';

// Middleware action types
export const EMIT_FLEETS_FETCH = 'EMIT_FLEETS_FETCH';
export const EMIT_ALL_FLEETS_FETCH = 'EMIT_ALL_FLEETS_FETCH';
export const EMIT_NEXT_FLEETS_FETCH = 'EMIT_NEXT_FLEETS_FETCH';

//====================== Reducer trigger actions
// Set fleets data in store
export const storeSetFleetsData = ({fleets, hasMoreData, page}) => ({
    page,
    fleets,
    hasMoreData,
    type: STORE_SET_FLEETS_DATA
});

// Set next fleets data in store
export const storeSetNextFleetsData = ({fleets, hasMoreData, page}) => ({
    page,
    fleets,
    hasMoreData,
    type: STORE_SET_NEXT_FLEETS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollFleetData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_FLEETS_DATA
});

//====================== Middleware trigger actions
// Emit fleets fetch
export const emitFleetsFetch = () => ({
    type: EMIT_FLEETS_FETCH
});

// Emit next fleets fetch
export const emitNextFleetsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_FLEETS_FETCH
});

// Emit all fleets fetch
export const emitAllFleetsFetch = () => ({
    type: EMIT_ALL_FLEETS_FETCH
});