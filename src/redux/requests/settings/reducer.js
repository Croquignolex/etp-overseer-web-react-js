import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    message: "",
    failed: false,
    loading: false,
    succeeded: false
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set settings init request store data
        case actions.STORE_SETTINGS_REQUEST_INIT:
            nextState = requestInitValue();
            return nextState || state;
        // Resolve event to set settings failed request store data
        case actions.STORE_SETTINGS_REQUEST_FAILED:
            nextState = requestFailedValue(action.message);
            return nextState || state;
        // Resolve event to set settings succeeded request store data
        case actions.STORE_SETTINGS_REQUEST_SUCCEEDED:
            nextState = requestSucceededValue(action.message);
            return nextState || state;
        // Resolve event to set settings reset request store data
        case actions.STORE_SETTINGS_REQUEST_RESET:
            nextState = initialState;
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce
