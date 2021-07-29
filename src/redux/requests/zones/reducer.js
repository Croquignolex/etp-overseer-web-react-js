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
        info: {failed: false, loading: false, succeeded: false, message: ""},
        agent: {failed: false, loading: false, succeeded: false, message: ""}
    }
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Zones
        // Resolve event to set zones init request store data
        case actions.STORE_ZONES_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set zones failed request store data
        case actions.STORE_ZONES_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set zones succeeded request store data
        case actions.STORE_ZONES_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set zones reset request store data
        case actions.STORE_ZONES_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next zones
        // Resolve event to set next zones init request store data
        case actions.STORE_NEXT_ZONES_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next zones failed request store data
        case actions.STORE_NEXT_ZONES_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next zones succeeded request store data
        case actions.STORE_NEXT_ZONES_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next zones reset request store data
        case actions.STORE_NEXT_ZONES_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All zones
        // Resolve event to set all zones  init request store data
        case actions.STORE_ALL_ZONES_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all zones failed request store data
        case actions.STORE_ALL_ZONES_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all zones succeeded request store data
        case actions.STORE_ALL_ZONES_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all zones reset request store data
        case actions.STORE_ALL_ZONES_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add zone
        // Resolve event to set add zone init request store data
        case actions.STORE_ADD_ZONE_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add zone failed request store data
        case actions.STORE_ADD_ZONE_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add zone succeeded request store data
        case actions.STORE_ADD_ZONE_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add zone reset request store data
        case actions.STORE_ADD_ZONE_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Show zone
        // Resolve event to set show zone init request store data
        case actions.STORE_SHOW_ZONE_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set show zone failed request store data
        case actions.STORE_SHOW_ZONE_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set show zone succeeded request store data
        case actions.STORE_SHOW_ZONE_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set show zone reset request store data
        case actions.STORE_SHOW_ZONE_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Edit zone
        // Resolve event to set edit zone init request store data
        case actions.STORE_EDIT_ZONE_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, info: requestInitValue()}};
            return nextState || state;
        // Resolve event to set edit zone failed request store data
        case actions.STORE_EDIT_ZONE_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, info: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set edit zone succeeded request store data
        case actions.STORE_EDIT_ZONE_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, info: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set edit zone reset request store data
        case actions.STORE_EDIT_ZONE_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, info: initialState.edit.info}};
            return nextState || state;
        // ======================================================== Zone add agent
        // Resolve event to set zone add agent init request store data
        case actions.STORE_ZONE_ADD_AGENT_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, agent: requestInitValue()}};
            return nextState || state;
        // Resolve event to set zone add agent failed request store data
        case actions.STORE_ZONE_ADD_AGENT_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, agent: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set zone add agent succeeded request store data
        case actions.STORE_ZONE_ADD_AGENT_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, agent: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set zone add agent reset request store data
        case actions.STORE_ZONE_ADD_AGENT_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, agent: initialState.edit.agent}};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
