// Reducer action types
export const STORE_SET_SIMS_TYPES_DATA = 'STORE_SET_SIMS_TYPES_DATA';

// Middleware action types
export const EMIT_ALL_SIMS_TYPES_FETCH = 'EMIT_ALL_SIMS_TYPES_FETCH';

//====================== Reducer trigger actions
// Set sims types data in store
export const storeSetSimsTypesData = ({simsTypes, hasMoreData, page}) => ({
    page,
    simsTypes,
    hasMoreData,
    type: STORE_SET_SIMS_TYPES_DATA
});

//====================== Middleware trigger actions
// Emit all sims types fetch
export const emitAllSimsTypesFetch = () => ({
    type: EMIT_ALL_SIMS_TYPES_FETCH
});