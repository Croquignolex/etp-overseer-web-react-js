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
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Vendors
        // Resolve event to set vendors init request store data
        case actions.STORE_VENDORS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set vendors failed request store data
        case actions.STORE_VENDORS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set vendors succeeded request store data
        case actions.STORE_VENDORS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set vendors reset request store data
        case actions.STORE_VENDORS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next vendors
        // Resolve event to set next vendors init request store data
        case actions.STORE_NEXT_VENDORS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next vendors failed request store data
        case actions.STORE_NEXT_VENDORS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next vendors succeeded request store data
        case actions.STORE_NEXT_VENDORS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next vendors reset request store data
        case actions.STORE_NEXT_VENDORS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All vendors
        // Resolve event to set all vendors  init request store data
        case actions.STORE_ALL_VENDORS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all vendors failed request store data
        case actions.STORE_ALL_VENDORS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all vendors succeeded request store data
        case actions.STORE_ALL_VENDORS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all vendors reset request store data
        case actions.STORE_ALL_VENDORS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add vendor
        // Resolve event to set add vendor init request store data
        case actions.STORE_ADD_VENDOR_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add vendor failed request store data
        case actions.STORE_ADD_VENDOR_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add vendor succeeded request store data
        case actions.STORE_ADD_VENDOR_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add vendor reset request store data
        case actions.STORE_ADD_VENDOR_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Show vendor
        // Resolve event to set show vendor init request store data
        case actions.STORE_SHOW_VENDOR_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set show vendor failed request store data
        case actions.STORE_SHOW_VENDOR_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set show vendor succeeded request store data
        case actions.STORE_SHOW_VENDOR_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set show vendor reset request store data
        case actions.STORE_SHOW_VENDOR_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Edit vendor
        // Resolve event to set edit vendor init request store data
        case actions.STORE_EDIT_VENDOR_REQUEST_INIT:
            nextState = {...state, edit: requestInitValue()};
            return nextState || state;
        // Resolve event to set edit vendor failed request store data
        case actions.STORE_EDIT_VENDOR_REQUEST_FAILED:
            nextState = {...state, edit: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set edit vendor succeeded request store data
        case actions.STORE_EDIT_VENDOR_REQUEST_SUCCEEDED:
            nextState = {...state, edit: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set edit vendor reset request store data
        case actions.STORE_EDIT_VENDOR_REQUEST_RESET:
            nextState = {...state, edit: initialState.edit};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
