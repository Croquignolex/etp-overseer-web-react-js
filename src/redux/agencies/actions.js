// Reducer action types
export const STORE_SET_AGENCY_DATA = 'STORE_SET_AGENCY_DATA';
export const STORE_SET_AGENCIES_DATA = 'STORE_SET_AGENCIES_DATA';
export const STORE_SET_NEW_AGENCY_DATA = 'STORE_SET_NEW_AGENCY_DATA';
export const STORE_SET_NEXT_AGENCIES_DATA = 'STORE_SET_NEXT_AGENCIES_DATA';
export const STORE_STOP_INFINITE_SCROLL_AGENCIES_DATA = 'STORE_STOP_INFINITE_SCROLL_AGENCIES_DATA';

// Middleware action types
export const EMIT_NEW_AGENCY = 'EMIT_NEW_AGENCY';
export const EMIT_AGENCY_FETCH = 'EMIT_AGENCY_FETCH';
export const EMIT_UPDATE_AGENCY = 'EMIT_UPDATE_AGENCY';
export const EMIT_AGENCIES_FETCH = 'EMIT_AGENCIES_FETCH';
export const EMIT_ALL_AGENCIES_FETCH = 'EMIT_ALL_AGENCIES_FETCH';
export const EMIT_NEXT_AGENCIES_FETCH = 'EMIT_NEXT_AGENCIES_FETCH';

//====================== Reducer trigger actions
// Set agencies data in store
export const storeSetAgenciesData = ({agencies, hasMoreData, page}) => ({
    page,
    agencies,
    hasMoreData,
    type: STORE_SET_AGENCIES_DATA
});

// Set agency data in store
export const storeSetAgencyData = ({agency, alsoInList = false}) => ({
    agency,
    alsoInList,
    type: STORE_SET_AGENCY_DATA
});

// Set next agencies data in store
export const storeSetNextAgenciesData = ({agencies, hasMoreData, page}) => ({
    page,
    agencies,
    hasMoreData,
    type: STORE_SET_NEXT_AGENCIES_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollAgencyData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_AGENCIES_DATA
});

// Set new agency data in store
export const storeSetNewAgencyData = ({agency}) => ({
    agency,
    type: STORE_SET_NEW_AGENCY_DATA
});

//====================== Middleware trigger actions
// Emit agencies fetch
export const emitAgenciesFetch = () => ({
    type: EMIT_AGENCIES_FETCH
});

// Emit next agencies fetch
export const emitNextAgenciesFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_AGENCIES_FETCH
});

// Emit all agencies fetch
export const emitAllAgenciesFetch = () => ({
    type: EMIT_ALL_AGENCIES_FETCH
});

// Emit agency fetch
export const emitAgencyFetch = ({id}) => ({
    id,
    type: EMIT_AGENCY_FETCH
});

// Emit new agency
export const emitNewAgency = ({name, description}) => ({
    name,
    description,
    type: EMIT_NEW_AGENCY
});

// Emit update agency
export const emitUpdateAgency = ({id, name, description}) => ({
    id,
    name,
    description,
    type: EMIT_UPDATE_AGENCY
});
