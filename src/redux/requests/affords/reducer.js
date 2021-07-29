import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    apply: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Payment
        // Resolve event to set affords init request store data
        case actions.STORE_AFFORDS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set affords failed request store data
        case actions.STORE_AFFORDS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set affords succeeded request store data
        case actions.STORE_AFFORDS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set affords reset request store data
        case actions.STORE_AFFORDS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next affords
        // Resolve event to set next affords init request store data
        case actions.STORE_NEXT_AFFORDS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next affords failed request store data
        case actions.STORE_NEXT_AFFORDS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next affords succeeded request store data
        case actions.STORE_NEXT_AFFORDS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next affords reset request store data
        case actions.STORE_NEXT_AFFORDS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== Operation afford
        // Resolve event to set add afford init request store data
        case actions.STORE_ADD_AFFORD_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add afford failed request store data
        case actions.STORE_ADD_AFFORD_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add afford succeeded request store data
        case actions.STORE_ADD_AFFORD_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add afford reset request store data
        case actions.STORE_ADD_AFFORD_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Confirm afford
        // Resolve event to set confirm afford init request store data
        case actions.STORE_CONFIRM_AFFORD_REQUEST_INIT:
            nextState = {...state, apply: requestInitValue()};
            return nextState || state;
        // Resolve event to set confirm afford  failed request store data
        case actions.STORE_CONFIRM_AFFORD_REQUEST_FAILED:
            nextState = {...state, apply: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set confirm afford  succeeded request store data
        case actions.STORE_CONFIRM_AFFORD_REQUEST_SUCCEEDED:
            nextState = {...state, apply: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set confirm afford  reset request store data
        case actions.STORE_CONFIRM_AFFORD_REQUEST_RESET:
            nextState = {...state, apply: initialState.apply};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
