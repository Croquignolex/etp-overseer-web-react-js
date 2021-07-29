import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    show: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Overseers
        // Resolve event to set overseers init request store data
        case actions.STORE_OVERSEERS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set overseers failed request store data
        case actions.STORE_OVERSEERS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set overseers succeeded request store data
        case actions.STORE_OVERSEERS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set overseers reset request store data
        case actions.STORE_OVERSEERS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next overseers
        // Resolve event to set next overseers init request store data
        case actions.STORE_NEXT_OVERSEERS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next overseers failed request store data
        case actions.STORE_NEXT_OVERSEERS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next overseers succeeded request store data
        case actions.STORE_NEXT_OVERSEERS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next overseers reset request store data
        case actions.STORE_NEXT_OVERSEERS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All overseers
        // Resolve event to set all overseers init request store data
        case actions.STORE_ALL_OVERSEERS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all overseers failed request store data
        case actions.STORE_ALL_OVERSEERS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all overseers succeeded request store data
        case actions.STORE_ALL_OVERSEERS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all overseers reset request store data
        case actions.STORE_ALL_OVERSEERS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Administrator
        // Resolve event to set overseer init request store data
        case actions.STORE_ADMINISTRATOR_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set overseer failed request store data
        case actions.STORE_ADMINISTRATOR_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set overseer succeeded request store data
        case actions.STORE_ADMINISTRATOR_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set overseer reset request store data
        case actions.STORE_ADMINISTRATOR_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
