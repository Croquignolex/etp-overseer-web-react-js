import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set expenses data
        case actions.STORE_SET_EXPENSES_DATA:
            nextState = {list: action.expenses, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next expenses data
        case actions.STORE_SET_NEXT_EXPENSES_DATA:
            nextState = {list: [...state.list, ...action.expenses], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll expenses data
        case actions.STORE_STOP_INFINITE_SCROLL_EXPENSE_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce