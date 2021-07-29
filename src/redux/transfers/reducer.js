import Lodash from "lodash";

import * as actions from "./actions";
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
        // Resolve event to set transfers data
        case actions.STORE_SET_TRANSFERS_DATA:
            nextState = {list: action.transfers, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set next transfers data
        case actions.STORE_SET_NEXT_TRANSFERS_DATA:
            nextState = {list: [...state.list, ...action.transfers], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll transfers data
        case actions.STORE_STOP_INFINITE_SCROLL_TRANSFER_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to set new transfer data
        case actions.STORE_SET_NEW_TRANSFER_DATA:
            nextState = {...state, list: [action.transfer, ...state.list]}
            return nextState || state;
        // Resolve event to update transfer data
        case actions.STORE_UPDATE_TRANSFER_DATA:
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
        // Resolve event to set transfer action data
        case actions.STORE_SET_TRANSFER_ACTION_DATA:
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