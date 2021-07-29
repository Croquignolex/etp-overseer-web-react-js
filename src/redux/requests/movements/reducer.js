import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    list: {failed: false, loading: false, succeeded: false, message: ""}
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Movements
        // Resolve event to set movements init request store data
        case actions.STORE_MOVEMENTS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set movements failed request store data
        case actions.STORE_MOVEMENTS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set movements succeeded request store data
        case actions.STORE_MOVEMENTS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set movements reset request store data
        case actions.STORE_MOVEMENTS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
