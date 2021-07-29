import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        creator: {id: '', name: ''}
    },
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set overseers data
        case actions.STORE_SET_OVERSEERS_DATA:
            nextState = {...state, list: action.overseers, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set overseer data
        case actions.STORE_SET_OVERSEER_DATA:
            nextState = {...state, current: action.overseer};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.overseer.id) item = action.overseer;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set next overseers data
        case actions.STORE_SET_NEXT_OVERSEERS_DATA:
            nextState = {...state, list: [...state.list, ...action.overseers], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll overseers data,
        case actions.STORE_STOP_INFINITE_SCROLL_OVERSEERS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce