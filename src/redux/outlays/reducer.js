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
        // Resolve event to set outlays data
        case actions.STORE_SET_OUTLAYS_DATA:
            nextState = {list: action.outlays, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next outlays data
        case actions.STORE_SET_NEXT_OUTLAYS_DATA:
            nextState = {list: [...state.list, ...action.outlays], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll outlays data
        case actions.STORE_STOP_INFINITE_SCROLL_OUTLAY_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to set new outlay data
        case actions.STORE_SET_NEW_OUTLAY_DATA:
            nextState = {...state, list: [action.outlay, ...state.list]}
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce