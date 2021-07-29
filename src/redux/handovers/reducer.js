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
        // Resolve event to set handovers data
        case actions.STORE_SET_HANDOVERS_DATA:
            nextState = {list: action.handovers, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next handovers data
        case actions.STORE_SET_NEXT_HANDOVERS_DATA:
            nextState = {list: [...state.list, ...action.handovers], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll handovers data
        case actions.STORE_STOP_INFINITE_SCROLL_HANDOVER_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce