import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', description: '', creation: '',
    }
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set agencies data
        case actions.STORE_SET_AGENCIES_DATA:
            nextState = {...state, list: action.agencies, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set agency data
        case actions.STORE_SET_AGENCY_DATA:
            nextState = {...state, current: action.agency};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.agency.id) item = action.agency;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new agency data
        case actions.STORE_SET_NEW_AGENCY_DATA:
            nextState = {...state, list: [action.agency, ...state.list]}
            return nextState || state;
        // Resolve event to set next agencies data
        case actions.STORE_SET_NEXT_AGENCIES_DATA:
            nextState = {...state, list: [...state.list, ...action.agencies], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll agencies data
        case actions.STORE_STOP_INFINITE_SCROLL_AGENCIES_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce
