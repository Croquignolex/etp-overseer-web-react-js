import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        creator: {id: '', name: ''}
    },
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set accountants data
        case actions.STORE_SET_ACCOUNTANTS_DATA:
            nextState = {...state, list: action.accountants, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set accountant data
        case actions.STORE_SET_ACCOUNTANT_DATA:
            nextState = {...state, current: action.accountant};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.accountant.id) item = action.accountant;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new accountant data
        case actions.STORE_SET_NEW_ACCOUNTANT_DATA:
            nextState = {...state, list: [action.accountant, ...state.list]}
            return nextState || state;
        // Resolve event to set next accountants data
        case actions.STORE_SET_NEXT_ACCOUNTANTS_DATA:
            nextState = {...state, list: [...state.list, ...action.accountants], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll accountants data,
        case actions.STORE_STOP_INFINITE_SCROLL_ACCOUNTANTS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to toggle accountant status data,
        case actions.STORE_SET_ACCOUNTANT_TOGGLE_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.status = !item.status;
                    return item;
                })
            };
            return nextState || state;
        // Resolve event to set accountant action data
        case actions.STORE_SET_ACCOUNTANT_ACTION_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.actionLoader = !item.actionLoader;
                    return item;
                })
            };
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce