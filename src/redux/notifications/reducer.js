import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    list: [],
    unread: []
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set notifications data
        case actions.STORE_SET_NOTIFICATIONS_DATA:
            nextState = {...state, list: action.notifications};
            return nextState || state;
        // Resolve event to delete notifications data
        case actions.STORE_DELETE_NOTIFICATION_DATA:
            nextState = {...state, list: Lodash.filter(state.list, (item) => item.id !== action.id)};
            return nextState || state;
        // Resolve event to set notification data
        case actions.STORE_SET_UNREAD_NOTIFICATIONS_DATA:
            nextState = {...state, unread: action.notifications};
            return nextState || state;
        // Resolve event to set notification action data
        case actions.STORE_SET_NOTIFICATION_ACTION_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.actionLoader = !item.actionLoader;
                    return item;
                })
            };
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce