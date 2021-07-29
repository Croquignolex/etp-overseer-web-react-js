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
        doc: {failed: false, loading: false, succeeded: false, message: ""},
        cni: {failed: false, loading: false, succeeded: false, message: ""},
        sim: {failed: false, loading: false, succeeded: false, message: ""},
        info: {failed: false, loading: false, succeeded: false, message: ""},
        zone: {failed: false, loading: false, succeeded: false, message: ""},
    }
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== Agents
        // Resolve event to set agents init request store data
        case actions.STORE_AGENTS_REQUEST_INIT:
            nextState = {...state, list: requestInitValue()};
            return nextState || state;
        // Resolve event to set agents failed request store data
        case actions.STORE_AGENTS_REQUEST_FAILED:
            nextState = {...state, list: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set agents succeeded request store data
        case actions.STORE_AGENTS_REQUEST_SUCCEEDED:
            nextState = {...state, list: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set agents reset request store data
        case actions.STORE_AGENTS_REQUEST_RESET:
            nextState = {...state, list: initialState.list};
            return nextState || state;
        // ======================================================== Next agents
        // Resolve event to set next agents init request store data
        case actions.STORE_NEXT_AGENTS_REQUEST_INIT:
            nextState = {...state, next: requestInitValue()};
            return nextState || state;
        // Resolve event to set next agents failed request store data
        case actions.STORE_NEXT_AGENTS_REQUEST_FAILED:
            nextState = {...state, next: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set next agents succeeded request store data
        case actions.STORE_NEXT_AGENTS_REQUEST_SUCCEEDED:
            nextState = {...state, next: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set next agents reset request store data
        case actions.STORE_NEXT_AGENTS_REQUEST_RESET:
            nextState = {...state, next: initialState.next};
            return nextState || state;
        // ======================================================== All agents
        // Resolve event to set all agents init request store data
        case actions.STORE_ALL_AGENTS_REQUEST_INIT:
            nextState = {...state, all: requestInitValue()};
            return nextState || state;
        // Resolve event to set all agents failed request store data
        case actions.STORE_ALL_AGENTS_REQUEST_FAILED:
            nextState = {...state, all: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set all agents succeeded request store data
        case actions.STORE_ALL_AGENTS_REQUEST_SUCCEEDED:
            nextState = {...state, all: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set all agents reset request store data
        case actions.STORE_ALL_AGENTS_REQUEST_RESET:
            nextState = {...state, all: initialState.all};
            return nextState || state;
        // ======================================================== Add agent
        // Resolve event to set add agent init request store data
        case actions.STORE_ADD_AGENT_REQUEST_INIT:
            nextState = {...state, add: requestInitValue()};
            return nextState || state;
        // Resolve event to set add agent failed request store data
        case actions.STORE_ADD_AGENT_REQUEST_FAILED:
            nextState = {...state, add: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set add agent succeeded request store data
        case actions.STORE_ADD_AGENT_REQUEST_SUCCEEDED:
            nextState = {...state, add: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set add agent reset request store data
        case actions.STORE_ADD_AGENT_REQUEST_RESET:
            nextState = {...state, add: initialState.add};
            return nextState || state;
        // ======================================================== Agent
        // Resolve event to set agent init request store data
        case actions.STORE_AGENT_REQUEST_INIT:
            nextState = {...state, show: requestInitValue()};
            return nextState || state;
        // Resolve event to set agent failed request store data
        case actions.STORE_AGENT_REQUEST_FAILED:
            nextState = {...state, show: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set agent succeeded request store data
        case actions.STORE_AGENT_REQUEST_SUCCEEDED:
            nextState = {...state, show: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set agent reset request store data
        case actions.STORE_AGENT_REQUEST_RESET:
            nextState = {...state, show: initialState.show};
            return nextState || state;
        // ======================================================== Agent status toggle
        // Resolve event to set agent status toggle init request store data
        case actions.STORE_AGENT_STATUS_TOGGLE_REQUEST_INIT:
            nextState = {...state, status: requestInitValue()};
            return nextState || state;
        // Resolve event to set agent status toggle failed request store data
        case actions.STORE_AGENT_STATUS_TOGGLE_REQUEST_FAILED:
            nextState = {...state, status: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set agent status toggle succeeded request store data
        case actions.STORE_AGENT_STATUS_TOGGLE_REQUEST_SUCCEEDED:
            nextState = {...state, status: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set agent status toggle reset request store data
        case actions.STORE_AGENT_STATUS_TOGGLE_REQUEST_RESET:
            nextState = {...state, status: initialState.status};
            return nextState || state;
        // ======================================================== Agent edit info
        // Resolve event to set agent edit info init request store data
        case actions.STORE_AGENT_EDIT_INFO_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, info: requestInitValue()}};
            return nextState || state;
        // Resolve event to set agent edit info failed request store data
        case actions.STORE_AGENT_EDIT_INFO_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, info: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent edit info succeeded request store data
        case actions.STORE_AGENT_EDIT_INFO_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, info: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent edit info reset request store data
        case actions.STORE_AGENT_EDIT_INFO_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, info: initialState.edit.info}};
            return nextState || state;
        // ======================================================== Agent edit zone
        // Resolve event to set agent edit zone init request store data
        case actions.STORE_AGENT_EDIT_ZONE_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, zone: requestInitValue()}};
            return nextState || state;
        // Resolve event to set agent edit zone failed request store data
        case actions.STORE_AGENT_EDIT_ZONE_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, zone: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent edit zone succeeded request store data
        case actions.STORE_AGENT_EDIT_ZONE_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, zone: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent edit zone reset request store data
        case actions.STORE_AGENT_EDIT_ZONE_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, zone: initialState.edit.zone}};
            return nextState || state;
        // ======================================================== Agent edit doc
        // Resolve event to set agent edit doc init request store data
        case actions.STORE_AGENT_EDIT_DOC_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, doc: requestInitValue()}};
            return nextState || state;
        // Resolve event to set agent edit doc failed request store data
        case actions.STORE_AGENT_EDIT_DOC_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, doc: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent edit doc succeeded request store data
        case actions.STORE_AGENT_EDIT_DOC_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, doc: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent edit doc reset request store data
        case actions.STORE_AGENT_EDIT_DOC_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, doc: initialState.edit.doc}};
            return nextState || state;
        // ======================================================== Agent edit cni
        // Resolve event to set agent edit cni init request store data
        case actions.STORE_AGENT_EDIT_CNI_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, cni: requestInitValue()}};
            return nextState || state;
        // Resolve event to set agent edit cni failed request store data
        case actions.STORE_AGENT_EDIT_CNI_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, cni: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent edit cni succeeded request store data
        case actions.STORE_AGENT_EDIT_CNI_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, cni: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent edit cni reset request store data
        case actions.STORE_AGENT_EDIT_CNI_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, cni: initialState.edit.cni}};
            return nextState || state;
        // ======================================================== Agent add sim
        // Resolve event to set agent add sim init request store data
        case actions.STORE_AGENT_ADD_SIM_REQUEST_INIT:
            nextState = {...state, edit: {...state.edit, sim: requestInitValue()}};
            return nextState || state;
        // Resolve event to set agent add sim failed request store data
        case actions.STORE_AGENT_ADD_SIM_REQUEST_FAILED:
            nextState = {...state, edit: {...state.edit, sim: requestFailedValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent add sim succeeded request store data
        case actions.STORE_AGENT_ADD_SIM_REQUEST_SUCCEEDED:
            nextState = {...state, edit: {...state.edit, sim: requestSucceededValue(action.message)}};
            return nextState || state;
        // Resolve event to set agent add sim reset request store data
        case actions.STORE_AGENT_ADD_SIM_REQUEST_RESET:
            nextState = {...state, edit: {...state.edit, sim: initialState.edit.sim}};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
