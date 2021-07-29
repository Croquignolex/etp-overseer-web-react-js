import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Expense
        // Resolve event to set expenses init request store data
        case actions.STORE_EXPENSES_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set expenses failed request store data
        case actions.STORE_EXPENSES_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set expenses succeeded request store data
        case actions.STORE_EXPENSES_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set expenses reset request store data
        case actions.STORE_EXPENSES_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next expenses
        // Resolve event to set next expenses init request store data
        case actions.STORE_NEXT_EXPENSES_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next expenses failed request store data
        case actions.STORE_NEXT_EXPENSES_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next expenses succeeded request store data
        case actions.STORE_NEXT_EXPENSES_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next expenses reset request store data
        case actions.STORE_NEXT_EXPENSES_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
