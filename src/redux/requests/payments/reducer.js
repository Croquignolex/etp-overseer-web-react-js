import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    apply: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Payment
        // Resolve event to set payments init request store data
        case actions.STORE_PAYMENTS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set payments failed request store data
        case actions.STORE_PAYMENTS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set payments succeeded request store data
        case actions.STORE_PAYMENTS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set payments reset request store data
        case actions.STORE_PAYMENTS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next payments
        // Resolve event to set next payments init request store data
        case actions.STORE_NEXT_PAYMENTS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next payments failed request store data
        case actions.STORE_NEXT_PAYMENTS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next payments succeeded request store data
        case actions.STORE_NEXT_PAYMENTS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next payments reset request store data
        case actions.STORE_NEXT_PAYMENTS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== Confirm payment
        // Resolve event to set confirm payment init request store data
        case actions.STORE_CONFIRM_PAYMENT_REQUEST_FAILED:
            nextState = {...state, apply: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set confirm payment  succeeded request store data
        case actions.STORE_CONFIRM_PAYMENT_REQUEST_SUCCEEDED:
            nextState = {...state, apply: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set confirm payment  reset request store data
        case actions.STORE_CONFIRM_PAYMENT_REQUEST_RESET:
            nextState = {...state, apply: initialState.apply};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
