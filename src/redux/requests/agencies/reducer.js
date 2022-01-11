import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    sim: {failed: false, loading: false, succeeded: false, message: ""},
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
        // ======================================================== Agencies
        // Resolve event to set agencies init request store data
        case actions.STORE_AGENCIES_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set agencies failed request store data
        case actions.STORE_AGENCIES_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set agencies succeeded request store data
        case actions.STORE_AGENCIES_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set agencies reset request store data
        case actions.STORE_AGENCIES_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next agencies
        // Resolve event to set next agencies init request store data
        case actions.STORE_NEXT_AGENCIES_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next agencies failed request store data
        case actions.STORE_NEXT_AGENCIES_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next agencies succeeded request store data
        case actions.STORE_NEXT_AGENCIES_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next agencies reset request store data
        case actions.STORE_NEXT_AGENCIES_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All agencies
        // Resolve event to set all agencies  init request store data
        case actions.STORE_ALL_AGENCIES_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all agencies failed request store data
        case actions.STORE_ALL_AGENCIES_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all agencies succeeded request store data
        case actions.STORE_ALL_AGENCIES_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all agencies reset request store data
        case actions.STORE_ALL_AGENCIES_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add agency
        // Resolve event to set add agency init request store data
        case actions.STORE_ADD_AGENCY_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add agency failed request store data
        case actions.STORE_ADD_AGENCY_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add agency succeeded request store data
        case actions.STORE_ADD_AGENCY_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add agency reset request store data
        case actions.STORE_ADD_AGENCY_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Show agency
        // Resolve event to set show agency init request store data
        case actions.STORE_SHOW_AGENCY_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set show agency failed request store data
        case actions.STORE_SHOW_AGENCY_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set show agency succeeded request store data
        case actions.STORE_SHOW_AGENCY_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set show agency reset request store data
        case actions.STORE_SHOW_AGENCY_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Edit agency
        // Resolve event to set edit agency init request store data
        case actions.STORE_EDIT_AGENCY_REQUEST_INIT:
            nextState = {...state, edit: requestInitValue()};
            return nextState || state;
        // Resolve event to set edit agency failed request store data
        case actions.STORE_EDIT_AGENCY_REQUEST_FAILED:
            nextState = {...state, edit: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set edit agency succeeded request store data
        case actions.STORE_EDIT_AGENCY_REQUEST_SUCCEEDED:
            nextState = {...state, edit: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set edit agency reset request store data
        case actions.STORE_EDIT_AGENCY_REQUEST_RESET:
            nextState = {...state, edit: initialState.edit};
            return nextState || state;
        // ======================================================== Agency add sim
        // Resolve event to set agency add sim init request store data
        case actions.STORE_AGENCY_ADD_SIM_REQUEST_INIT:
            nextState = {...state, sim: requestInitValue()}
            return nextState || state;
        // Resolve event to set agency add sim failed request store data
        case actions.STORE_AGENCY_ADD_SIM_REQUEST_FAILED:
            nextState = {...state, sim: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set agency add sim succeeded request store data
        case actions.STORE_AGENCY_ADD_SIM_REQUEST_SUCCEEDED:
            nextState = {...state, sim: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set agency add sim reset request store data
        case actions.STORE_AGENCY_ADD_SIM_REQUEST_RESET:
            nextState = {...state, sim: initialState.sim};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
