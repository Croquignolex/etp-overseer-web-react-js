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
    fleet: {failed: false, loading: false, succeeded: false, message: ""},
    master: {failed: false, loading: false, succeeded: false, message: ""},
    internal: {failed: false, loading: false, succeeded: false, message: ""},
    transactions: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Sims
        // Resolve event to set sims init request store data
        case actions.STORE_SIMS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set sims failed request store data
        case actions.STORE_SIMS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set sims succeeded request store data
        case actions.STORE_SIMS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set sims reset request store data
        case actions.STORE_SIMS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next sims
        // Resolve event to set next sims init request store data
        case actions.STORE_NEXT_SIMS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next sims failed request store data
        case actions.STORE_NEXT_SIMS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next sims succeeded request store data
        case actions.STORE_NEXT_SIMS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next sims reset request store data
        case actions.STORE_NEXT_SIMS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All sims
        // Resolve event to set all sims  init request store data
        case actions.STORE_ALL_SIMS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all sims failed request store data
        case actions.STORE_ALL_SIMS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all sims succeeded request store data
        case actions.STORE_ALL_SIMS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all sims reset request store data
        case actions.STORE_ALL_SIMS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add sim
        // Resolve event to set add sim init request store data
        case actions.STORE_ADD_SIM_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add sim failed request store data
        case actions.STORE_ADD_SIM_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add sim succeeded request store data
        case actions.STORE_ADD_SIM_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add sim reset request store data
        case actions.STORE_ADD_SIM_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Show sim
        // Resolve event to set show sim init request store data
        case actions.STORE_SHOW_SIM_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set show sim failed request store data
        case actions.STORE_SHOW_SIM_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set show sim succeeded request store data
        case actions.STORE_SHOW_SIM_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set show sim reset request store data
        case actions.STORE_SHOW_SIM_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Edit sim
        // Resolve event to set edit sim init request store data
        case actions.STORE_EDIT_SIM_REQUEST_INIT:
            nextState = {...state, edit: requestInitValue()};
            return nextState || state;
        // Resolve event to set edit sim failed request store data
        case actions.STORE_EDIT_SIM_REQUEST_FAILED:
            nextState = {...state, edit: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set edit sim succeeded request store data
        case actions.STORE_EDIT_SIM_REQUEST_SUCCEEDED:
            nextState = {...state, edit: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set edit sim reset request store data
        case actions.STORE_EDIT_SIM_REQUEST_RESET:
            nextState = {...state, edit: initialState.edit};
            return nextState || state;
        // ======================================================== All master sims
        // Resolve event to set all master sims init request store data
        case actions.STORE_ALL_MASTER_SIMS_REQUEST_INIT:
            nextState = {...state, master: requestInitValue()};
            return nextState || state;
        // Resolve event to set all master sims failed request store data
        case actions.STORE_ALL_MASTER_SIMS_REQUEST_FAILED:
            nextState = {...state, master: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all master sims succeeded request store data
        case actions.STORE_ALL_MASTER_SIMS_REQUEST_SUCCEEDED:
            nextState = {...state, master: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all master sims reset request store data
        case actions.STORE_ALL_MASTER_SIMS_REQUEST_RESET:
            nextState = {...state, master: initialState.master};
            return nextState || state;
        // ======================================================== All internal sims
        // Resolve event to set all internal sims init request store data
        case actions.STORE_ALL_INTERNAL_SIMS_REQUEST_INIT:
            nextState = {...state, internal: requestInitValue()};
            return nextState || state;
        // Resolve event to set all internal sims failed request store data
        case actions.STORE_ALL_INTERNAL_SIMS_REQUEST_FAILED:
            nextState = {...state, internal: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all internal sims succeeded request store data
        case actions.STORE_ALL_INTERNAL_SIMS_REQUEST_SUCCEEDED:
            nextState = {...state, internal: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all internal sims reset request store data
        case actions.STORE_ALL_INTERNAL_SIMS_REQUEST_RESET:
            nextState = {...state, internal: initialState.internal};
            return nextState || state;
        // ======================================================== Sim transactions
        // Resolve event to set sim transactions init request store data
        case actions.STORE_SIM_TRANSACTIONS_REQUEST_INIT:
            nextState = {...state, transactions: requestInitValue()};
            return nextState || state;
        // Resolve event to set sim transactions failed request store data
        case actions.STORE_SIM_TRANSACTIONS_REQUEST_FAILED:
            nextState = {...state, transactions: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set sim transactions succeeded request store data
        case actions.STORE_SIM_TRANSACTIONS_REQUEST_SUCCEEDED:
            nextState = {...state, transactions: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set sim transactions reset request store data
        case actions.STORE_SIM_TRANSACTIONS_REQUEST_RESET:
            nextState = {...state, transactions: initialState.transactions};
            return nextState || state;
        // ======================================================== All flee sims
        // Resolve event to set all fleet sims init request store data
        case actions.STORE_ALL_FLEET_SIMS_REQUEST_INIT:
            nextState = {...state, fleet: requestInitValue()};
            return nextState || state;
        // Resolve event to set all fleet sims failed request store data
        case actions.STORE_ALL_FLEET_SIMS_REQUEST_FAILED:
            nextState = {...state, fleet: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all fleet sims succeeded request store data
        case actions.STORE_ALL_FLEET_SIMS_REQUEST_SUCCEEDED:
            nextState = {...state, fleet: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all fleet sims reset request store data
        case actions.STORE_ALL_FLEET_SIMS_REQUEST_RESET:
            nextState = {...state, fleet: initialState.fleet};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
