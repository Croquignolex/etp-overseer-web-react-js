import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    show: {failed: false, loading: false, succeeded: false, message: ""},
    movements: {failed: false, loading: false, succeeded: false, message: ""},
    transactions: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Supervisors
        // Resolve event to set supervisors init request store data
        case actions.STORE_SUPERVISORS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set supervisors failed request store data
        case actions.STORE_SUPERVISORS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisors succeeded request store data
        case actions.STORE_SUPERVISORS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisors reset request store data
        case actions.STORE_SUPERVISORS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next supervisors
        // Resolve event to set next supervisors init request store data
        case actions.STORE_NEXT_SUPERVISORS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next supervisors failed request store data
        case actions.STORE_NEXT_SUPERVISORS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next supervisors succeeded request store data
        case actions.STORE_NEXT_SUPERVISORS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next supervisors reset request store data
        case actions.STORE_NEXT_SUPERVISORS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All supervisors
        // Resolve event to set all supervisors init request store data
        case actions.STORE_ALL_SUPERVISORS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all supervisors failed request store data
        case actions.STORE_ALL_SUPERVISORS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all supervisors succeeded request store data
        case actions.STORE_ALL_SUPERVISORS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all supervisors reset request store data
        case actions.STORE_ALL_SUPERVISORS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add supervisor
        // Resolve event to set add supervisor init request store data
        case actions.STORE_ADD_SUPERVISOR_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add supervisor failed request store data
        case actions.STORE_ADD_SUPERVISOR_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add supervisor succeeded request store data
        case actions.STORE_ADD_SUPERVISOR_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add supervisor reset request store data
        case actions.STORE_ADD_SUPERVISOR_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Supervisor
        // Resolve event to set supervisor init request store data
        case actions.STORE_SUPERVISOR_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set supervisor failed request store data
        case actions.STORE_SUPERVISOR_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor succeeded request store data
        case actions.STORE_SUPERVISOR_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor reset request store data
        case actions.STORE_SUPERVISOR_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Supervisor movements
        // Resolve event to set supervisor movements init request store data
        case actions.STORE_SUPERVISOR_MOVEMENTS_REQUEST_INIT:
            nextState = {...state, movements: requestInitValue()};
            return nextState || state;
        // Resolve event to set supervisor movements failed request store data
        case actions.STORE_SUPERVISOR_MOVEMENTS_REQUEST_FAILED:
            nextState = {...state, movements: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor movements succeeded request store data
        case actions.STORE_SUPERVISOR_MOVEMENTS_REQUEST_SUCCEEDED:
            nextState = {...state, movements: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor movements reset request store data
        case actions.STORE_SUPERVISOR_MOVEMENTS_REQUEST_RESET:
            nextState = {...state, movements: initialState.movements};
            return nextState || state;
        // ======================================================== Supervisor transactions
        // Resolve event to set supervisor transactions init request store data
        case actions.STORE_SUPERVISOR_TRANSACTIONS_REQUEST_INIT:
            nextState = {...state, transactions: requestInitValue()};
            return nextState || state;
        // Resolve event to set supervisor transactions failed request store data
        case actions.STORE_SUPERVISOR_TRANSACTIONS_REQUEST_FAILED:
            nextState = {...state, transactions: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor transactions succeeded request store data
        case actions.STORE_SUPERVISOR_TRANSACTIONS_REQUEST_SUCCEEDED:
            nextState = {...state, transactions: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set supervisor transactions reset request store data
        case actions.STORE_SUPERVISOR_TRANSACTIONS_REQUEST_RESET:
            nextState = {...state, transactions: initialState.transactions};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
