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
    status: {failed: false, loading: false, succeeded: false, message: ""}
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Accountants
        // Resolve event to set accountants init request store data
        case actions.STORE_ACCOUNTANTS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set accountants failed request store data
        case actions.STORE_ACCOUNTANTS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set accountants succeeded request store data
        case actions.STORE_ACCOUNTANTS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set accountants reset request store data
        case actions.STORE_ACCOUNTANTS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next accountants
        // Resolve event to set next accountants init request store data
        case actions.STORE_NEXT_ACCOUNTANTS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next accountants failed request store data
        case actions.STORE_NEXT_ACCOUNTANTS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next accountants succeeded request store data
        case actions.STORE_NEXT_ACCOUNTANTS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next accountants reset request store data
        case actions.STORE_NEXT_ACCOUNTANTS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All accountants
        // Resolve event to set all accountants init request store data
        case actions.STORE_ALL_ACCOUNTANTS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all accountants failed request store data
        case actions.STORE_ALL_ACCOUNTANTS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all accountants succeeded request store data
        case actions.STORE_ALL_ACCOUNTANTS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all accountants reset request store data
        case actions.STORE_ALL_ACCOUNTANTS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add accountant
        // Resolve event to set add accountant init request store data
        case actions.STORE_ADD_ACCOUNTANT_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add accountant failed request store data
        case actions.STORE_ADD_ACCOUNTANT_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add accountant succeeded request store data
        case actions.STORE_ADD_ACCOUNTANT_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add accountant reset request store data
        case actions.STORE_ADD_ACCOUNTANT_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Accountant
        // Resolve event to set accountant init request store data
        case actions.STORE_ACCOUNTANT_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set accountant failed request store data
        case actions.STORE_ACCOUNTANT_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set accountant succeeded request store data
        case actions.STORE_ACCOUNTANT_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set accountant reset request store data
        case actions.STORE_ACCOUNTANT_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Accountant status toggle
        // Resolve event to set accountant status toggle init request store data
        case actions.STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_INIT:
            nextState = {...state, status: requestInitValue()};
            return nextState || state;
        // Resolve event to set accountant status toggle failed request store data
        case actions.STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_FAILED:
            nextState = {...state, status: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set accountant status toggle succeeded request store data
        case actions.STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_SUCCEEDED:
            nextState = {...state, status: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set accountant status toggle reset request store data
        case actions.STORE_ACCOUNTANT_STATUS_TOGGLE_REQUEST_RESET:
            nextState = {...state, status: initialState.status};
            return nextState || state;
        // ======================================================== Accountant edit info
        // Resolve event to set accountant edit info init request store data
        case actions.STORE_ACCOUNTANT_EDIT_INFO_REQUEST_INIT:
            nextState = {...state, edit: requestInitValue()};
            return nextState || state;
        // Resolve event to set accountant edit info failed request store data
        case actions.STORE_ACCOUNTANT_EDIT_INFO_REQUEST_FAILED:
            nextState = {...state, edit: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set accountant edit info succeeded request store data
        case actions.STORE_ACCOUNTANT_EDIT_INFO_REQUEST_SUCCEEDED:
            nextState = {...state, edit: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set accountant edit info reset request store data
        case actions.STORE_ACCOUNTANT_EDIT_INFO_REQUEST_RESET:
            nextState = {...state, edit: initialState.edit};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
