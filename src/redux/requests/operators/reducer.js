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
    transactions: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Operators
        // Resolve event to set operators init request store data
        case actions.STORE_OPERATORS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set operators failed request store data
        case actions.STORE_OPERATORS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set operators succeeded request store data
        case actions.STORE_OPERATORS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set operators reset request store data
        case actions.STORE_OPERATORS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next operators
        // Resolve event to set next operators init request store data
        case actions.STORE_NEXT_OPERATORS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next operators failed request store data
        case actions.STORE_NEXT_OPERATORS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next operators succeeded request store data
        case actions.STORE_NEXT_OPERATORS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next operators reset request store data
        case actions.STORE_NEXT_OPERATORS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All operators
        // Resolve event to set all operators  init request store data
        case actions.STORE_ALL_OPERATORS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all operators failed request store data
        case actions.STORE_ALL_OPERATORS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all operators succeeded request store data
        case actions.STORE_ALL_OPERATORS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all operators reset request store data
        case actions.STORE_ALL_OPERATORS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add operator
        // Resolve event to set add operator init request store data
        case actions.STORE_ADD_OPERATOR_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add operator failed request store data
        case actions.STORE_ADD_OPERATOR_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add operator succeeded request store data
        case actions.STORE_ADD_OPERATOR_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add operator reset request store data
        case actions.STORE_ADD_OPERATOR_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Show operator
        // Resolve event to set show operator init request store data
        case actions.STORE_SHOW_OPERATOR_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set show operator failed request store data
        case actions.STORE_SHOW_OPERATOR_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set show operator succeeded request store data
        case actions.STORE_SHOW_OPERATOR_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set show operator reset request store data
        case actions.STORE_SHOW_OPERATOR_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Edit operator
        // Resolve event to set edit operator init request store data
        case actions.STORE_EDIT_OPERATOR_REQUEST_INIT:
            nextState = {...state, edit: requestInitValue()};
            return nextState || state;
        // Resolve event to set edit operator failed request store data
        case actions.STORE_EDIT_OPERATOR_REQUEST_FAILED:
            nextState = {...state, edit: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set edit operator succeeded request store data
        case actions.STORE_EDIT_OPERATOR_REQUEST_SUCCEEDED:
            nextState = {...state, edit: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set edit operator reset request store data
        case actions.STORE_EDIT_OPERATOR_REQUEST_RESET:
            nextState = {...state, edit: initialState.edit};
            return nextState || state;
        // ======================================================== Operator add sim
        // Resolve event to set operator add sim init request store data
        case actions.STORE_OPERATOR_ADD_SIM_REQUEST_INIT:
            nextState = {...state, sim: requestInitValue()}
            return nextState || state;
        // Resolve event to set operator add sim failed request store data
        case actions.STORE_OPERATOR_ADD_SIM_REQUEST_FAILED:
            nextState = {...state, sim: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set operator add sim succeeded request store data
        case actions.STORE_OPERATOR_ADD_SIM_REQUEST_SUCCEEDED:
            nextState = {...state, sim: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set operator add sim reset request store data
        case actions.STORE_OPERATOR_ADD_SIM_REQUEST_RESET:
            nextState = {...state, sim: initialState.sim};
            return nextState || state;
        // ======================================================== Operator transactions
        // Resolve event to set operator transactions init request store data
        case actions.STORE_OPERATOR_TRANSACTIONS_REQUEST_INIT:
            nextState = {...state, transactions: requestInitValue()};
            return nextState || state;
        // Resolve event to set operator transactions failed request store data
        case actions.STORE_OPERATOR_TRANSACTIONS_REQUEST_FAILED:
            nextState = {...state, transactions: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set operator transactions succeeded request store data
        case actions.STORE_OPERATOR_TRANSACTIONS_REQUEST_SUCCEEDED:
            nextState = {...state, transactions: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set operator transactions reset request store data
        case actions.STORE_OPERATOR_TRANSACTIONS_REQUEST_RESET:
            nextState = {...state, transactions: initialState.transactions};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
