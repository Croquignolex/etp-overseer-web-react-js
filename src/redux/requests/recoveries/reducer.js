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
        // ======================================================== recoveries
        // Resolve event to set recoveries init request store data
        case actions.STORE_RECOVERIES_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set recoveries failed request store data
        case actions.STORE_RECOVERIES_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set recoveries succeeded request store data
        case actions.STORE_RECOVERIES_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set recoveries reset request store data
        case actions.STORE_RECOVERIES_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next recoveries
        // Resolve event to set next recoveries init request store data
        case actions.STORE_NEXT_RECOVERIES_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next recoveries failed request store data
        case actions.STORE_NEXT_RECOVERIES_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next recoveries succeeded request store data
        case actions.STORE_NEXT_RECOVERIES_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next recoveries reset request store data
        case actions.STORE_NEXT_RECOVERIES_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== Recover
        // Resolve event to set recover init request store data
        case actions.STORE_RECOVER_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set recover failed request store data
        case actions.STORE_RECOVER_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set recover succeeded request store data
        case actions.STORE_RECOVER_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set recover reset request store data
        case actions.STORE_RECOVER_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
