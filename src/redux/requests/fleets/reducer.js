import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Fleets
        // Resolve event to set fleets init request store data
        case actions.STORE_FLEETS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set fleets failed request store data
        case actions.STORE_FLEETS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set fleets succeeded request store data
        case actions.STORE_FLEETS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set fleets reset request store data
        case actions.STORE_FLEETS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next fleets
        // Resolve event to set next fleets init request store data
        case actions.STORE_NEXT_FLEETS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next fleets failed request store data
        case actions.STORE_NEXT_FLEETS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next fleets succeeded request store data
        case actions.STORE_NEXT_FLEETS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next fleets reset request store data
        case actions.STORE_NEXT_FLEETS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All fleets
        // Resolve event to set all fleets init request store data
        case actions.STORE_ALL_FLEETS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all fleets failed request store data
        case actions.STORE_ALL_FLEETS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all fleets succeeded request store data
        case actions.STORE_ALL_FLEETS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all fleets reset request store data
        case actions.STORE_ALL_FLEETS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
