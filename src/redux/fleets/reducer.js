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
        // Resolve event to set fleets data
        case actions.STORE_SET_FLEETS_DATA:
            nextState = {list: action.fleets, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next fleets data
        case actions.STORE_SET_NEXT_FLEETS_DATA:
            nextState = {list: [...state.list, ...action.fleets], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll fleets data
        case actions.STORE_STOP_INFINITE_SCROLL_FLEETS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce