// Reducer action types
export const STORE_SET_MOVEMENTS_DATA = 'STORE_SET_MOVEMENTS_DATA';

// Middleware action types
export const EMIT_MOVEMENTS_FETCH = 'EMIT_MOVEMENTS_FETCH';

//====================== Reducer trigger actions
// Set movements data in store
export const storeSetMovementsData = ({movements}) => ({
    movements,
    type: STORE_SET_MOVEMENTS_DATA
});

//====================== Middleware trigger actions
// Emit fetch movements
export const emitMovementsFetch = ({selectedStartDay, selectedEndDay}) => ({
    selectedEndDay,
    selectedStartDay,
    type: EMIT_MOVEMENTS_FETCH
});