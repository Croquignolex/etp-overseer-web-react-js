import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', description: '', creation: '',
    }
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set vendors data
        case actions.STORE_SET_VENDORS_DATA:
            nextState = {...state, list: action.vendors, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set vendor data
        case actions.STORE_SET_VENDOR_DATA:
            nextState = {...state, current: action.vendor};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.vendor.id) item = action.vendor;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new vendor data
        case actions.STORE_SET_NEW_VENDOR_DATA:
            nextState = {...state, list: [action.vendor, ...state.list]}
            return nextState || state;
        // Resolve event to set next vendors data
        case actions.STORE_SET_NEXT_VENDORS_DATA:
            nextState = {...state, list: [...state.list, ...action.vendors], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll vendors data
        case actions.STORE_STOP_INFINITE_SCROLL_VENDORS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce