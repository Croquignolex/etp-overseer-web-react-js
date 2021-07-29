// Reducer action types
export const STORE_SET_SUPPLY_DATA = 'STORE_SET_SUPPLY_DATA';
export const STORE_SET_SUPPLIES_DATA = 'STORE_SET_SUPPLIES_DATA';
export const STORE_UPDATE_SUPPLY_DATA = 'STORE_UPDATE_SUPPLY_DATA';
export const STORE_SET_NEW_SUPPLY_DATA = 'STORE_SET_NEW_SUPPLY_DATA';
export const STORE_SET_NEXT_SUPPLIES_DATA = 'STORE_SET_NEXT_SUPPLIES_DATA';
export const STORE_STOP_INFINITE_SCROLL_SUPPLY_DATA = 'STORE_STOP_INFINITE_SCROLL_SUPPLY_DATA';

// Middleware action types
export const EMIT_ADD_SUPPLY = 'EMIT_ADD_SUPPLY';
export const EMIT_SUPPLY_FETCH = 'EMIT_SUPPLY_FETCH';
export const EMIT_SUPPLIES_FETCH = 'EMIT_SUPPLIES_FETCH';
export const EMIT_NEXT_SUPPLIES_FETCH = 'EMIT_NEXT_SUPPLIES_FETCH';

//====================== Reducer trigger actions
// Set agent data in store
export const storeSetSupplyData = ({supply, alsoInList = false}) => ({
    supply,
    alsoInList,
    type: STORE_SET_SUPPLY_DATA
});

// Set supplies data in store
export const storeSetSuppliesData = ({supplies, hasMoreData, page}) => ({
    page,
    supplies,
    hasMoreData,
    type: STORE_SET_SUPPLIES_DATA
});

// Set new supply data in store
export const storeSetNewSupplyData = ({supply}) => ({
    supply,
    type: STORE_SET_NEW_SUPPLY_DATA
});

// Set next supplies data in store
export const storeSetNextSuppliesData = ({supplies, hasMoreData, page}) => ({
    page,
    supplies,
    hasMoreData,
    type: STORE_SET_NEXT_SUPPLIES_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollSupplyData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_SUPPLY_DATA
});

// Set update supply data in store
export const storeUpdateSupplyData = ({id, amount}) => ({
    id,
    amount,
    type: STORE_UPDATE_SUPPLY_DATA
});

//====================== Middleware trigger actions
// Emit supplies fetch
export const emitSuppliesFetch = () => ({
    type: EMIT_SUPPLIES_FETCH
});

// Emit next supplies fetch
export const emitNextSuppliesFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_SUPPLIES_FETCH
});

// Emit supply fetch
export const emitSupplyFetch = ({id}) => ({
    id,
    type: EMIT_SUPPLY_FETCH
});

// Emit add supply
export const emitAddSupply = ({amount, managerSim, agentSim, agent, pay}) => ({
    pay,
    agent,
    amount,
    agentSim,
    managerSim,
    type: EMIT_ADD_SUPPLY
});