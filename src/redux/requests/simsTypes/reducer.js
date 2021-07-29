import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    all: {failed: false, loading: false, succeeded: false, message: ""}
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== All sims types
        // Resolve event to set all sims types  init request store data
        case actions.STORE_ALL_SIMS_TYPES_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all sims types failed request store data
        case actions.STORE_ALL_SIMS_TYPES_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all sims types succeeded request store data
        case actions.STORE_ALL_SIMS_TYPES_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all sims types reset request store data
        case actions.STORE_ALL_SIMS_TYPES_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
