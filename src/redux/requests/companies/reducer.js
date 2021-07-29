import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    show: {failed: false, loading: false, succeeded: false, message: ""}, 
    edit: {
        doc: {failed: false, loading: false, succeeded: false, message: ""},
        sim: {failed: false, loading: false, succeeded: false, message: ""},
        info: {failed: false, loading: false, succeeded: false, message: ""},
    }
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== All companies
        // Resolve event to set all companies  init request store data
        case actions.STORE_ALL_COMPANIES_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all companies failed request store data
        case actions.STORE_ALL_COMPANIES_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all companies succeeded request store data
        case actions.STORE_ALL_COMPANIES_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all companies reset request store data
        case actions.STORE_ALL_COMPANIES_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Companies
        // Resolve event to set companies init request store data
        case actions.STORE_COMPANIES_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set companies failed request store data
        case actions.STORE_COMPANIES_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set companies succeeded request store data
        case actions.STORE_COMPANIES_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set companies reset request store data
        case actions.STORE_COMPANIES_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next companies
        // Resolve event to set next companies init request store data
        case actions.STORE_NEXT_COMPANIES_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next companies failed request store data
        case actions.STORE_NEXT_COMPANIES_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next companies succeeded request store data
        case actions.STORE_NEXT_COMPANIES_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next companies reset request store data
        case actions.STORE_NEXT_COMPANIES_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== Add company
        // Resolve event to set add company init request store data
        case actions.STORE_ADD_COMPANY_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add company failed request store data
        case actions.STORE_ADD_COMPANY_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add company succeeded request store data
        case actions.STORE_ADD_COMPANY_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add company reset request store data
        case actions.STORE_ADD_COMPANY_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Show company
        // Resolve event to set show company init request store data
        case actions.STORE_SHOW_COMPANY_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set show company failed request store data
        case actions.STORE_SHOW_COMPANY_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set show company succeeded request store data
        case actions.STORE_SHOW_COMPANY_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set show company reset request store data
        case actions.STORE_SHOW_COMPANY_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Edit company info
        // Resolve event to set edit company init request store data
        case actions.STORE_EDIT_COMPANY_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, info: requestInitValue()}};
            return nextState || state;
        // Resolve event to set edit company failed request store data
        case actions.STORE_EDIT_COMPANY_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, info: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set edit company succeeded request store data
        case actions.STORE_EDIT_COMPANY_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, info: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set edit company reset request store data
        case actions.STORE_EDIT_COMPANY_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, info: initialState.edit.info}};
            return nextState || state;
        // ======================================================== Company edit doc
        // Resolve event to set company edit doc init request store data
        case actions.STORE_COMPANY_EDIT_DOC_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, doc: requestInitValue()}};
            return nextState || state;
        // Resolve event to set company edit doc failed request store data
        case actions.STORE_COMPANY_EDIT_DOC_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, doc: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set company edit doc succeeded request store data
        case actions.STORE_COMPANY_EDIT_DOC_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, doc: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set company edit doc reset request store data
        case actions.STORE_COMPANY_EDIT_DOC_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, doc: initialState.edit.doc}};
            return nextState || state;
        // ======================================================== Company add sim
        // Resolve event to set company add sim init request store data
        case actions.STORE_COMPANY_ADD_SIM_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, sim: requestInitValue()}};
            return nextState || state;
        // Resolve event to set company add sim failed request store data
        case actions.STORE_COMPANY_ADD_SIM_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, sim: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set company add sim succeeded request store data
        case actions.STORE_COMPANY_ADD_SIM_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, sim: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set company add sim reset request store data
        case actions.STORE_COMPANY_ADD_SIM_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, sim: initialState.edit.sim}};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
