import Lodash from "lodash";

import * as actions from "./actions";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', address: '',
        salePoint: '', frontIDCard: '', backIDCard: '',
        description: '', phone: '', email: '', creation: '',
        avatar: '', status: '', reference: '', town: '', country: '',

        creator: {id: '', name: ''},
        account: {id: '', balance: ''},
        zone: {id: '', name: '', map: ''},

        sims: []
    },
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set agents data
        case actions.STORE_SET_AGENTS_DATA:
            nextState = {...state, list: action.agents, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set agent data
        case actions.STORE_SET_AGENT_DATA:
            nextState = {...state, current: action.agent};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.agent.id) item = action.agent;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new agent data
        case actions.STORE_SET_NEW_AGENT_DATA:
            nextState = {...state, list: [action.agent, ...state.list]}
            return nextState || state;
        // Resolve event to set next agents data
        case actions.STORE_SET_NEXT_AGENTS_DATA:
            nextState = {...state, list: [...state.list, ...action.agents], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll agents data,
        case actions.STORE_STOP_INFINITE_SCROLL_AGENTS_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Resolve event to toggle agent status data,
        case actions.STORE_SET_AGENT_TOGGLE_DATA:
            nextState = {
                ...state,
                list: Lodash.map(state.list, (item) => {
                    if(item.id === action.id) item.status = !item.status;
                    return item;
                })
            };
            return nextState || state;
        // Resolve event to set sim action data
        case actions.STORE_SET_AGENT_ACTION_DATA:
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