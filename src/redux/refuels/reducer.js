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
        // Resolve event to set refuels data
        case actions.STORE_SET_REFUELS_DATA:
            nextState = {list: action.refuels, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next refuels data
        case actions.STORE_SET_NEXT_REFUELS_DATA:
            nextState = {list: [...state.list, ...action.refuels], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll refuels data
        case actions.STORE_STOP_INFINITE_SCROLL_REFUEL_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to set new refuel data
        case actions.STORE_SET_NEW_REFUEL_DATA:
            nextState = {...state, list: [action.refuel, ...state.list]}
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce