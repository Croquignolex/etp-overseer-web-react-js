// Reducer action types
export const STORE_SET_RETURNS_DATA = 'STORE_SET_RETURNS_DATA';
export const STORE_SET_NEXT_RETURNS_DATA = 'STORE_SET_NEXT_RETURNS_DATA';
export const STORE_SET_ADD_FLEET_RETURN_DATA = 'STORE_SET_ADD_FLEET_RETURN_DATA';
export const STORE_STOP_INFINITE_SCROLL_RETURNS_DATA = 'STORE_STOP_INFINITE_SCROLL_RETURNS_DATA';

// Middleware action types
export const EMIT_NEW_RETURN = 'EMIT_NEW_RETURN';
export const EMIT_RETURNS_FETCH = 'EMIT_RETURNS_FETCH';
export const EMIT_ADD_FLEET_RETURN = 'EMIT_ADD_FLEET_RETURN';
export const EMIT_NEXT_RETURNS_FETCH = 'EMIT_NEXT_RETURNS_FETCH';
export const EMIT_SUPPLY_RETURNS_FETCH = 'EMIT_SUPPLY_RETURNS_FETCH';

//====================== Reducer trigger actions
// Set returns data in store
export const storeSetReturnsData = ({returns, hasMoreData, page}) => ({
    page,
    returns,
    hasMoreData,
    type: STORE_SET_RETURNS_DATA
});

// Set next returns data in store
export const storeSetNextReturnsData = ({returns, hasMoreData, page}) => ({
    page,
    returns,
    hasMoreData,
    type: STORE_SET_NEXT_RETURNS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollReturnData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_RETURNS_DATA
});

// Set add fleet return data in store
export const storeSetAddFleetReturnData = ({data}) => ({
    data,
    type: STORE_SET_ADD_FLEET_RETURN_DATA
});

//====================== Middleware trigger actions
// Emit returns fetch
export const emitReturnsFetch = () => ({
    type: EMIT_RETURNS_FETCH
});

// Emit supply returns fetch
export const emitSupplyReturnsFetch = ({id}) => ({
    id,
    type: EMIT_SUPPLY_RETURNS_FETCH
});

// Emit next returns fetch
export const emitNextReturnsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_RETURNS_FETCH
});

// Emit new return
export const emitNewReturn = ({supply, amount, agentSim, managerSim}) => ({
    supply,
    amount,
    agentSim,
    managerSim,
    type: EMIT_NEW_RETURN
});


// Emit add fleet return
export const emitAddFleetReturn = ({amount, agentSim, managerSim}) => ({
    amount,
    agentSim,
    managerSim,
    type: EMIT_ADD_FLEET_RETURN
});