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
        // Resolve event to set administrators data
        case actions.STORE_SET_ADMINISTRATORS_DATA:
            nextState = {...state, list: action.administrators, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set administrator data
        case actions.STORE_SET_ADMINISTRATOR_DATA:
            nextState = {...state, current: action.administrator};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.administrator.id) item = action.administrator;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set next administrators data
        case actions.STORE_SET_NEXT_ADMINISTRATORS_DATA:
            nextState = {...state, list: [...state.list, ...action.administrators], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll administrators data,
        case actions.STORE_STOP_INFINITE_SCROLL_ADMINISTRATORS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce