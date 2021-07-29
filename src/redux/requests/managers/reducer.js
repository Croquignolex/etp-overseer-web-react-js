import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    show: {failed: false, loading: false, succeeded: false, message: ""},
    edit: {failed: false, loading: false, succeeded: false, message: ""},
    status: {failed: false, loading: false, succeeded: false, message: ""},
    movements: {failed: false, loading: false, succeeded: false, message: ""},
    transactions: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Managers
        // Resolve event to set managers init request store data
        case actions.STORE_MANAGERS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set managers failed request store data
        case actions.STORE_MANAGERS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set managers succeeded request store data
        case actions.STORE_MANAGERS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set managers reset request store data
        case actions.STORE_MANAGERS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next managers
        // Resolve event to set next managers init request store data
        case actions.STORE_NEXT_MANAGERS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next managers failed request store data
        case actions.STORE_NEXT_MANAGERS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next managers succeeded request store data
        case actions.STORE_NEXT_MANAGERS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next managers reset request store data
        case actions.STORE_NEXT_MANAGERS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All managers
        // Resolve event to set all managers init request store data
        case actions.STORE_ALL_MANAGERS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all managers failed request store data
        case actions.STORE_ALL_MANAGERS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all managers succeeded request store data
        case actions.STORE_ALL_MANAGERS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all managers reset request store data
        case actions.STORE_ALL_MANAGERS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add manager
        // Resolve event to set add manager init request store data
        case actions.STORE_ADD_MANAGER_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add manager failed request store data
        case actions.STORE_ADD_MANAGER_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add manager succeeded request store data
        case actions.STORE_ADD_MANAGER_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add manager reset request store data
        case actions.STORE_ADD_MANAGER_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Manager
        // Resolve event to set manager init request store data
        case actions.STORE_MANAGER_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set manager failed request store data
        case actions.STORE_MANAGER_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set manager succeeded request store data
        case actions.STORE_MANAGER_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set manager reset request store data
        case actions.STORE_MANAGER_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Manager status toggle
        // Resolve event to set manager status toggle init request store data
        case actions.STORE_MANAGER_STATUS_TOGGLE_REQUEST_INIT:
            nextState = {...state, status: requestInitValue()};
            return nextState || state;
        // Resolve event to set manager status toggle failed request store data
        case actions.STORE_MANAGER_STATUS_TOGGLE_REQUEST_FAILED:
            nextState = {...state, status: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set manager status toggle succeeded request store data
        case actions.STORE_MANAGER_STATUS_TOGGLE_REQUEST_SUCCEEDED:
            nextState = {...state, status: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set manager status toggle reset request store data
        case actions.STORE_MANAGER_STATUS_TOGGLE_REQUEST_RESET:
            nextState = {...state, status: initialState.status};
            return nextState || state;
        // ======================================================== Manager edit info
        // Resolve event to set manager edit info init request store data
        case actions.STORE_MANAGER_EDIT_INFO_REQUEST_INIT:
            nextState = {...state, edit: requestInitValue()};
            return nextState || state;
        // Resolve event to set manager edit info failed request store data
        case actions.STORE_MANAGER_EDIT_INFO_REQUEST_FAILED:
            nextState = {...state, edit: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set manager edit info succeeded request store data
        case actions.STORE_MANAGER_EDIT_INFO_REQUEST_SUCCEEDED:
            nextState = {...state, edit: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set manager edit info reset request store data
        case actions.STORE_MANAGER_EDIT_INFO_REQUEST_RESET:
            nextState = {...state, edit: initialState.edit};
            return nextState || state;
        // ======================================================== Manager movements
        // Resolve event to set manager movements init request store data
        case actions.STORE_MANAGER_MOVEMENTS_REQUEST_INIT:
            nextState = {...state, movements: requestInitValue()};
            return nextState || state;
        // Resolve event to set manager movements failed request store data
        case actions.STORE_MANAGER_MOVEMENTS_REQUEST_FAILED:
            nextState = {...state, movements: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set manager movements succeeded request store data
        case actions.STORE_MANAGER_MOVEMENTS_REQUEST_SUCCEEDED:
            nextState = {...state, movements: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set manager movements reset request store data
        case actions.STORE_MANAGER_MOVEMENTS_REQUEST_RESET:
            nextState = {...state, movements: initialState.movements};
            return nextState || state;
        // ======================================================== Manager transactions
        // Resolve event to set manager transactions init request store data
        case actions.STORE_MANAGER_TRANSACTIONS_REQUEST_INIT:
            nextState = {...state, transactions: requestInitValue()};
            return nextState || state;
        // Resolve event to set manager transactions failed request store data
        case actions.STORE_MANAGER_TRANSACTIONS_REQUEST_FAILED:
            nextState = {...state, transactions: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set manager transactions succeeded request store data
        case actions.STORE_MANAGER_TRANSACTIONS_REQUEST_SUCCEEDED:
            nextState = {...state, transactions: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set manager transactions reset request store data
        case actions.STORE_MANAGER_TRANSACTIONS_REQUEST_RESET:
            nextState = {...state, transactions: initialState.transactions};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
