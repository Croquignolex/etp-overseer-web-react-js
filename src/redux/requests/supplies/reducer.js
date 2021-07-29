import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Supplies
        // Resolve event to set supplies init request store data
        case actions.STORE_SUPPLIES_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set supplies failed request store data
        case actions.STORE_SUPPLIES_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supplies succeeded request store data
        case actions.STORE_SUPPLIES_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supplies reset request store data
        case actions.STORE_SUPPLIES_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next supplies
        // Resolve event to set next supplies init request store data
        case actions.STORE_NEXT_SUPPLIES_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next supplies failed request store data
        case actions.STORE_NEXT_SUPPLIES_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next supplies succeeded request store data
        case actions.STORE_NEXT_SUPPLIES_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next supplies reset request store data
        case actions.STORE_NEXT_SUPPLIES_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== Add supply
        // Resolve event to set add supply init request store data
        case actions.STORE_ADD_SUPPLY_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add supply failed request store data
        case actions.STORE_ADD_SUPPLY_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add supply succeeded request store data
        case actions.STORE_ADD_SUPPLY_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add supply reset request store data
        case actions.STORE_ADD_SUPPLY_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
