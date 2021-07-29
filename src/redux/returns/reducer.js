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
        // Resolve event to set returns data
        case actions.STORE_SET_RETURNS_DATA:
            nextState = {list: action.returns, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next returns data
        case actions.STORE_SET_NEXT_RETURNS_DATA:
            nextState = {list: [...state.list, ...action.returns], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set new supply data
        case actions.STORE_SET_ADD_FLEET_RETURN_DATA:
            nextState = {...state, list: [action.data, ...state.list]}
            return nextState || state;
        // Resolve event to stop infinite scroll returns data
        case actions.STORE_STOP_INFINITE_SCROLL_RETURNS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce