import * as actions from "./actions";
import {requestFailedValue, requestInitValue, requestSucceededValue} from "../../../functions/reduxFunctions";

// Partial global store for requests data management
const initialState = {
    check: {failed: false, loading: false, succeeded: false, message: ""},
    avatar: {failed: false, loading: false, succeeded: false, message: ""},
    profile: {failed: false, loading: false, succeeded: false, message: ""},
    balance: {failed: false, loading: false, succeeded: false, message: ""},
    password: {failed: false, loading: false, succeeded: false, message: ""},
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // ======================================================== User check
        // Resolve event to set user check init request store data
        case actions.STORE_USER_CHECK_REQUEST_INIT:
            nextState = {...state, check: requestInitValue()};
            return nextState || state;
        // Resolve event to set user check failed request store data
        case actions.STORE_USER_CHECK_REQUEST_FAILED:
            nextState = {...state, check: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set user check succeeded request store data
        case actions.STORE_USER_CHECK_REQUEST_SUCCEEDED:
            nextState = {...state, check: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set user check reset request store data
        case actions.STORE_USER_CHECK_REQUEST_RESET:
            nextState = {...state, check: initialState.check};
            return nextState || state;
        // ======================================================== User password edit
        // Resolve event to set user check init request store data
        case actions.STORE_USER_PASSWORD_EDIT_REQUEST_INIT:
            nextState = {...state, password: requestInitValue()};
            return nextState || state;
        // Resolve event to set user check failed request store data
        case actions.STORE_USER_PASSWORD_EDIT_REQUEST_FAILED:
            nextState = {...state, password: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set user check succeeded request store data
        case actions.STORE_USER_PASSWORD_EDIT_REQUEST_SUCCEEDED:
            nextState = {...state, password: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set user check reset request store data
        case actions.STORE_USER_PASSWORD_EDIT_REQUEST_RESET:
            nextState = {...state, password: initialState.password};
            return nextState || state;
        // ======================================================== User profile edit
        // Resolve event to set user check init request store data
        case actions.STORE_USER_PROFILE_EDIT_REQUEST_INIT:
            nextState = {...state, profile: requestInitValue()};
            return nextState || state;
        // Resolve event to set user check failed request store data
        case actions.STORE_USER_PROFILE_EDIT_REQUEST_FAILED:
            nextState = {...state, profile: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set user check succeeded request store data
        case actions.STORE_USER_PROFILE_EDIT_REQUEST_SUCCEEDED:
            nextState = {...state, profile: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set user check reset request store data
        case actions.STORE_USER_PROFILE_EDIT_REQUEST_RESET:
            nextState = {...state, profile: initialState.profile};
            return nextState || state;
        // ======================================================== User avatar edit
        // Resolve event to set user check init request store data
        case actions.STORE_USER_AVATAR_EDIT_REQUEST_INIT:
            nextState = {...state, avatar: requestInitValue()};
            return nextState || state;
        // Resolve event to set user check failed request store data
        case actions.STORE_USER_AVATAR_EDIT_REQUEST_FAILED:
            nextState = {...state, avatar: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set user check succeeded request store data
        case actions.STORE_USER_AVATAR_EDIT_REQUEST_SUCCEEDED:
            nextState = {...state, avatar: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set user check reset request store data
        case actions.STORE_USER_AVATAR_EDIT_REQUEST_RESET:
            nextState = {...state, avatar: initialState.avatar};
            return nextState || state;
        // ======================================================== User avatar edit
        // Resolve event to set user balance fetch request store data
        case actions.STORE_USER_BALANCE_FETCH_REQUEST_INIT:
            nextState = {...state, balance: requestInitValue()};
            return nextState || state;
        // Resolve event to set user balance fetch request store data
        case actions.STORE_USER_BALANCE_FETCH_REQUEST_FAILED:
            nextState = {...state, balance: requestFailedValue(action.message)};
            return nextState || state;
        // Resolve event to set user balance fetch request store data
        case actions.STORE_USER_BALANCE_FETCH_REQUEST_SUCCEEDED:
            nextState = {...state, balance: requestSucceededValue(action.message)};
            return nextState || state;
        // Resolve event to set user balance fetch request store data
        case actions.STORE_USER_BALANCE_FETCH_REQUEST_RESET:
            nextState = {...state, balance: initialState.balance};
            return nextState || state;
        // ========================================================
        // Unknown action
        default: return state;
    }
}

export default reduce
