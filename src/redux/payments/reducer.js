import * as actions from "./actions";
import Lodash from "lodash";
import {DONE} from "../../constants/typeConstants";

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
        // Resolve event to set payments data
        case actions.STORE_SET_PAYMENTS_DATA:
            nextState = {list: action.payments, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next payments data
        case actions.STORE_SET_NEXT_PAYMENTS_DATA:
            nextState = {list: [...state.list, ...action.payments], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll payments data
        case actions.STORE_STOP_INFINITE_SCROLL_PAYMENT_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to set refuel action data
        case actions.STORE_SET_PAYMENT_ACTION_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.actionLoader = !item.actionLoader;
                    return item;
                })
            };
            return nextState || state;
        // Resolve event to update refuel data
        case actions.STORE_UPDATE_PAYMENT_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) {
                        item.status = DONE;
                    }
                    return item;
                })
            };
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce