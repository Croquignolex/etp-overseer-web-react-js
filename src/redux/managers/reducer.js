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
        // Resolve event to set managers data
        case actions.STORE_SET_MANAGERS_DATA:
            nextState = {...state, list: action.managers, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set manager data
        case actions.STORE_SET_MANAGER_DATA:
            nextState = {...state, current: action.manager};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.manager.id) item = action.manager;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new manager data
        case actions.STORE_SET_NEW_MANAGER_DATA:
            nextState = {...state, list: [action.manager, ...state.list]}
            return nextState || state;
        // Resolve event to set next managers data
        case actions.STORE_SET_NEXT_MANAGERS_DATA:
            nextState = {...state, list: [...state.list, ...action.managers], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll managers data,
        case actions.STORE_STOP_INFINITE_SCROLL_MANAGERS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to toggle manager status data,
        case actions.STORE_SET_MANAGER_TOGGLE_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.status = !item.status;
                    return item;
                })
            };
            return nextState || state;
        // Resolve event to set manager action data
        case actions.STORE_SET_MANAGER_ACTION_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.actionLoader = !item.actionLoader;
                    return item;
                })
            };
            return nextState || state;
        // Resolve event to set manager movements action data
        case actions.STORE_SET_MANAGER_MOVEMENTS_DATA:
            nextState = {
                ...state,
                current: {
                    ...state.current,
                    movements: action.movements
                }
            };
            return nextState || state;
        // Resolve event to set manager transactions action data
        case actions.STORE_SET_MANAGER_TRANSACTIONS_DATA:
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