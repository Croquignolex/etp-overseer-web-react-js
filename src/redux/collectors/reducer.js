import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '', debt: 0,

        creator: {id: '', name: ''},
        account: {id: '', balance: ''},
        zone: {id: '', name: '', map: ''},

        sims: [],
        movements: [],
        transactions: [],
    },
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set collectors data
        case actions.STORE_SET_COLLECTORS_DATA:
            nextState = {...state, list: action.collectors, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set collector data
        case actions.STORE_SET_COLLECTOR_DATA:
            nextState = {...state, current: action.collector};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.collector.id) item = action.collector;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new collector data
        case actions.STORE_SET_NEW_COLLECTOR_DATA:
            nextState = {...state, list: [action.collector, ...state.list]}
            return nextState || state;
        // Resolve event to set next collectors data
        case actions.STORE_SET_NEXT_COLLECTORS_DATA:
            nextState = {...state, list: [...state.list, ...action.collectors], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll collectors data,
        case actions.STORE_STOP_INFINITE_SCROLL_COLLECTORS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to toggle collector status data,
        case actions.STORE_SET_COLLECTOR_TOGGLE_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.status = !item.status;
                    return item;
                })
            };
            return nextState || state;
        // Resolve event to set collector action data
        case actions.STORE_SET_COLLECTOR_ACTION_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.actionLoader = !item.actionLoader;
                    return item;
                })
            };
            return nextState || state;
        // Resolve event to set collector movements action data
        case actions.STORE_SET_COLLECTOR_MOVEMENTS_DATA:
            nextState = {
                ...state,
                current: {
                    ...state.current,
                    movements: action.movements
                }
            };
            return nextState || state;
        // Resolve event to set collector transactions action data
        case actions.STORE_SET_COLLECTOR_TRANSACTIONS_DATA:
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