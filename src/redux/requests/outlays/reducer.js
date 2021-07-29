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
        // ======================================================== Outlay
        // Resolve event to set outlays init request store data
        case actions.STORE_OUTLAYS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set outlays failed request store data
        case actions.STORE_OUTLAYS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set outlays succeeded request store data
        case actions.STORE_OUTLAYS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set outlays reset request store data
        case actions.STORE_OUTLAYS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next outlays
        // Resolve event to set next outlays init request store data
        case actions.STORE_NEXT_OUTLAYS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next outlays failed request store data
        case actions.STORE_NEXT_OUTLAYS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next outlays succeeded request store data
        case actions.STORE_NEXT_OUTLAYS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next outlays reset request store data
        case actions.STORE_NEXT_OUTLAYS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== Fleet supply
        // Resolve event to set add outlay init request store data
        case actions.STORE_ADD_OUTLAY_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add outlay failed request store data
        case actions.STORE_ADD_OUTLAY_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add outlay succeeded request store data
        case actions.STORE_ADD_OUTLAY_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add outlay reset request store data
        case actions.STORE_ADD_OUTLAY_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
