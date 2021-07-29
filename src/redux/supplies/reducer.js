import Lodash from "lodash";

import * as actions from "./actions";
import {DONE, PROCESSING} from "../../constants/typeConstants";

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
        // Resolve event to set supplies data
        case actions.STORE_SET_SUPPLIES_DATA:
            nextState = {list: action.supplies, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set supply data
        case actions.STORE_SET_SUPPLY_DATA:
            nextState = {...state, current: action.supply};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.supply.id) item = action.supply;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set next supplies data
        case actions.STORE_SET_NEXT_SUPPLIES_DATA:
            nextState = {list: [...state.list, ...action.supplies], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll supplies data
        case actions.STORE_STOP_INFINITE_SCROLL_SUPPLY_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to update supply data
        case actions.STORE_UPDATE_SUPPLY_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) {
                        const remaining = item.remaining - action.amount
                        item.remaining = remaining;
                        item.status = remaining > 0 ? PROCESSING : DONE;
                    }
                    return item;
                })
            };
            return nextState || state;
        // Resolve event to set new supply data
        case actions.STORE_SET_NEW_SUPPLY_DATA:
            nextState = {...state, list: [action.supply, ...state.list]}
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce