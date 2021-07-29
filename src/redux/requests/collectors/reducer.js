import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""},
    add: {failed: false, loading: false, succeeded: false, message: ""},
    list: {failed: false, loading: false, succeeded: false, message: ""},
    next: {failed: false, loading: false, succeeded: false, message: ""},
    show: {failed: false, loading: false, succeeded: false, message: ""},
    status: {failed: false, loading: false, succeeded: false, message: ""},
    edit: {
        sim: {failed: false, loading: false, succeeded: false, message: ""},
        info: {failed: false, loading: false, succeeded: false, message: ""},
        zone: {failed: false, loading: false, succeeded: false, message: ""},
    },
    movements: {failed: false, loading: false, succeeded: false, message: ""},
    transactions: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Collectors
        // Resolve event to set collectors init request store data
        case actions.STORE_COLLECTORS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set collectors failed request store data
        case actions.STORE_COLLECTORS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set collectors succeeded request store data
        case actions.STORE_COLLECTORS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set collectors reset request store data
        case actions.STORE_COLLECTORS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next collectors
        // Resolve event to set next collectors init request store data
        case actions.STORE_NEXT_COLLECTORS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next collectors failed request store data
        case actions.STORE_NEXT_COLLECTORS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next collectors succeeded request store data
        case actions.STORE_NEXT_COLLECTORS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next collectors reset request store data
        case actions.STORE_NEXT_COLLECTORS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All collectors
        // Resolve event to set all collectors init request store data
        case actions.STORE_ALL_COLLECTORS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all collectors failed request store data
        case actions.STORE_ALL_COLLECTORS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all collectors succeeded request store data
        case actions.STORE_ALL_COLLECTORS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all collectors reset request store data
        case actions.STORE_ALL_COLLECTORS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add collector
        // Resolve event to set add collector init request store data
        case actions.STORE_ADD_COLLECTOR_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add collector failed request store data
        case actions.STORE_ADD_COLLECTOR_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add collector succeeded request store data
        case actions.STORE_ADD_COLLECTOR_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add collector reset request store data
        case actions.STORE_ADD_COLLECTOR_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Collector
        // Resolve event to set collector init request store data
        case actions.STORE_COLLECTOR_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set collector failed request store data
        case actions.STORE_COLLECTOR_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set collector succeeded request store data
        case actions.STORE_COLLECTOR_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set collector reset request store data
        case actions.STORE_COLLECTOR_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Collector status toggle
        // Resolve event to set collector status toggle init request store data
        case actions.STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_INIT:
            nextState = {...state, status: requestInitValue()};
            return nextState || state;
        // Resolve event to set collector status toggle failed request store data
        case actions.STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_FAILED:
            nextState = {...state, status: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set collector status toggle succeeded request store data
        case actions.STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_SUCCEEDED:
            nextState = {...state, status: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set collector status toggle reset request store data
        case actions.STORE_COLLECTOR_STATUS_TOGGLE_REQUEST_RESET:
            nextState = {...state, status: initialState.status};
            return nextState || state;
        // ======================================================== Collector edit info
        // Resolve event to set collector edit info init request store data
        case actions.STORE_COLLECTOR_EDIT_INFO_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, info: requestInitValue()}};
            return nextState || state;
        // Resolve event to set collector edit info failed request store data
        case actions.STORE_COLLECTOR_EDIT_INFO_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, info: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set collector edit info succeeded request store data
        case actions.STORE_COLLECTOR_EDIT_INFO_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, info: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set collector edit info reset request store data
        case actions.STORE_COLLECTOR_EDIT_INFO_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, info: initialState.edit.info}};
            return nextState || state;
        // ======================================================== Collector edit zone
        // Resolve event to set collector edit zone init request store data
        case actions.STORE_COLLECTOR_EDIT_ZONE_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, zone: requestInitValue()}};
            return nextState || state;
        // Resolve event to set collector edit zone failed request store data
        case actions.STORE_COLLECTOR_EDIT_ZONE_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, zone: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set collector edit zone succeeded request store data
        case actions.STORE_COLLECTOR_EDIT_ZONE_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, zone: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set collector edit zone reset request store data
        case actions.STORE_COLLECTOR_EDIT_ZONE_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, zone: initialState.edit.zone}};
            return nextState || state;
        // ======================================================== Collector add sim
        // Resolve event to set collector add sim init request store data
        case actions.STORE_COLLECTOR_ADD_SIM_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, sim: requestInitValue()}};
            return nextState || state;
        // Resolve event to set collector add sim failed request store data
        case actions.STORE_COLLECTOR_ADD_SIM_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, sim: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set collector add sim succeeded request store data
        case actions.STORE_COLLECTOR_ADD_SIM_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, sim: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set collector add sim reset request store data
        case actions.STORE_COLLECTOR_ADD_SIM_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, sim: initialState.edit.sim}};
            return nextState || state;
        // ======================================================== Collector movements
        // Resolve event to set collector movements init request store data
        case actions.STORE_COLLECTOR_MOVEMENTS_REQUEST_INIT:
            nextState = {...state, movements: requestInitValue()};
            return nextState || state;
        // Resolve event to set collector movements failed request store data
        case actions.STORE_COLLECTOR_MOVEMENTS_REQUEST_FAILED:
            nextState = {...state, movements: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set collector movements succeeded request store data
        case actions.STORE_COLLECTOR_MOVEMENTS_REQUEST_SUCCEEDED:
            nextState = {...state, movements: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set collector movements reset request store data
        case actions.STORE_COLLECTOR_MOVEMENTS_REQUEST_RESET:
            nextState = {...state, movements: initialState.movements};
            return nextState || state;
        // ======================================================== Collector transactions
        // Resolve event to set collector transactions init request store data
        case actions.STORE_COLLECTOR_TRANSACTIONS_REQUEST_INIT:
            nextState = {...state, transactions: requestInitValue()};
            return nextState || state;
        // Resolve event to set collector transactions failed request store data
        case actions.STORE_COLLECTOR_TRANSACTIONS_REQUEST_FAILED:
            nextState = {...state, transactions: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set collector transactions succeeded request store data
        case actions.STORE_COLLECTOR_TRANSACTIONS_REQUEST_SUCCEEDED:
            nextState = {...state, transactions: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set collector transactions reset request store data
        case actions.STORE_COLLECTOR_TRANSACTIONS_REQUEST_RESET:
            nextState = {...state, transactions: initialState.transactions};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
