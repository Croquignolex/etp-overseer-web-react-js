import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        creator: {id: '', name: ''},
        account: {id: '', balance: ''},

        movements: [],
        transactions: [],
    },
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set supervisors data
        case actions.STORE_SET_SUPERVISORS_DATA:
            nextState = {...state, list: action.supervisors, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set supervisor data
        case actions.STORE_SET_SUPERVISOR_DATA:
            nextState = {...state, current: action.supervisor};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.supervisor.id) item = action.supervisor;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new supervisor data
        case actions.STORE_SET_NEW_SUPERVISOR_DATA:
            nextState = {...state, list: [action.supervisor, ...state.list]}
            return nextState || state;
        // Resolve event to set next supervisors data
        case actions.STORE_SET_NEXT_SUPERVISORS_DATA:
            nextState = {...state, list: [...state.list, ...action.supervisors], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll supervisors data,
        case actions.STORE_STOP_INFINITE_SCROLL_SUPERVISORS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to set supervisor movements action data
        case actions.STORE_SET_SUPERVISOR_MOVEMENTS_DATA:
            nextState = {
                ...state,
                current: {
                    ...state.current,
                    movements: action.movements
                }
            };
            return nextState || state;
        // Resolve event to set supervisor transactions action data
        case actions.STORE_SET_SUPERVISOR_TRANSACTIONS_DATA:
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