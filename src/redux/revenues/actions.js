// Reducer action types
export const STORE_SET_REVENUES_DATA = 'STORE_SET_REVENUES_DATA';
export const STORE_SET_NEXT_REVENUES_DATA = 'STORE_SET_NEXT_REVENUES_DATA';
export const STORE_STOP_INFINITE_SCROLL_REVENUE_DATA = 'STORE_STOP_INFINITE_SCROLL_REVENUE_DATA';

// Middleware action types
export const EMIT_REVENUES_FETCH = 'EMIT_REVENUES_FETCH';
export const EMIT_NEXT_REVENUES_FETCH = 'EMIT_NEXT_REVENUES_FETCH';

//====================== Reducer trigger actions
// Set revenues data in store
export const storeSetRevenuesData = ({revenues, hasMoreData, page}) => ({
    page,
    revenues,
    hasMoreData,
    type: STORE_SET_REVENUES_DATA
});

// Set next revenues data in store
export const storeSetNextRevenuesData = ({revenues, hasMoreData, page}) => ({
    page,
    revenues,
    hasMoreData,
    type: STORE_SET_NEXT_REVENUES_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollRevenueData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_REVENUE_DATA
});

//====================== Middleware trigger actions
// Emit revenues fetch
export const emitRevenuesFetch = () => ({
    type: EMIT_REVENUES_FETCH
});

// Emit next revenues fetch
export const emitNextRevenuesFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_REVENUES_FETCH
});
