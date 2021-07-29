import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', description: '', creation: '',

        sims: [],
        transactions: []
    }
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set operators data
        case actions.STORE_SET_OPERATORS_DATA:
            nextState = {...state, list: action.operators, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set operator data
        case actions.STORE_SET_OPERATOR_DATA:
            nextState = {...state, current: action.operator};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.operator.id) item = action.operator;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new operator data
        case actions.STORE_SET_NEW_OPERATOR_DATA:
            nextState = {...state, list: [action.operator, ...state.list]}
            return nextState || state;
        // Resolve event to set next operators data
        case actions.STORE_SET_NEXT_OPERATORS_DATA:
            nextState = {...state, list: [...state.list, ...action.operators], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll operators data,
        case actions.STORE_STOP_INFINITE_SCROLL_OPERATORS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to set operator transactions action data
        case actions.STORE_SET_OPERATOR_TRANSACTIONS_DATA:
            nextState = {
                ...state,
                current: {
                    ...state.current,
                    transactions: action.transactions
                }
            };
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce