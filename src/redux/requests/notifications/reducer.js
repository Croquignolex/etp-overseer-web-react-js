import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    list: {failed: false, loading: false, succeeded: false, message: ""},
    delete: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Notifications
        // Resolve event to set notifications init request store data
        case actions.STORE_NOTIFICATIONS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set notifications failed request store data
        case actions.STORE_NOTIFICATIONS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set notifications succeeded request store data
        case actions.STORE_NOTIFICATIONS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set notifications reset request store data
        case actions.STORE_NOTIFICATIONS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Delete notification
        // Resolve event to set delete notifications init request store data
        case actions.STORE_NOTIFICATIONS_DELETE_REQUEST_INIT:
            nextState = {...state, delete: requestInitValue()};
            return nextState || state;
        // Resolve event to set delete notifications failed request store data
        case actions.STORE_NOTIFICATIONS_DELETE_REQUEST_FAILED:
            nextState = {...state, delete: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set delete notifications succeeded request store data
        case actions.STORE_NOTIFICATIONS_DELETE_REQUEST_SUCCEEDED:
            nextState = {...state, delete: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set delete notifications reset request store data
        case actions.STORE_NOTIFICATIONS_DELETE_REQUEST_RESET:
            nextState = {...state, delete: initialState.delete};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce
