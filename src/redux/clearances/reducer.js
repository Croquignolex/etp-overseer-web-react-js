import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set clearances data
        case actions.STORE_SET_CLEARANCES_DATA:
            nextState = {list: action.clearances, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next clearances data
        case actions.STORE_SET_NEXT_CLEARANCES_DATA:
            nextState = {list: [...state.list, ...action.clearances], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll clearances data
        case actions.STORE_STOP_INFINITE_SCROLL_CLEARANCES_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce