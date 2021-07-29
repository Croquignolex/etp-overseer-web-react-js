import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    fleet: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== returns
        // Resolve event to set returns init request store data
        case actions.STORE_RETURNS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set returns failed request store data
        case actions.STORE_RETURNS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set returns succeeded request store data
        case actions.STORE_RETURNS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set returns reset request store data
        case actions.STORE_RETURNS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next returns
        // Resolve event to set next returns init request store data
        case actions.STORE_NEXT_RETURNS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next returns failed request store data
        case actions.STORE_NEXT_RETURNS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next returns succeeded request store data
        case actions.STORE_NEXT_RETURNS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next returns reset request store data
        case actions.STORE_NEXT_RETURNS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== Return
        // Resolve event to set return init request store data
        case actions.STORE_RETURN_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set return failed request store data
        case actions.STORE_RETURN_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set return succeeded request store data
        case actions.STORE_RETURN_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set return reset request store data
        case actions.STORE_RETURN_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Add fleet return
        // Resolve event to set add fleet return init request store data
        case actions.STORE_ADD_FLEET_RETURN_REQUEST_INIT:
            nextState = {...state, fleet: requestInitValue()};
            return nextState || state;
        // Resolve event to set add fleet return  failed request store data
        case actions.STORE_ADD_FLEET_RETURN_REQUEST_FAILED:
            nextState = {...state, fleet: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add fleet return  succeeded request store data
        case actions.STORE_ADD_FLEET_RETURN_REQUEST_SUCCEEDED:
            nextState = {...state, fleet: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add fleet return  reset request store data
        case actions.STORE_ADD_FLEET_RETURN_REQUEST_RESET:
            nextState = {...state, fleet: initialState.fleet};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
