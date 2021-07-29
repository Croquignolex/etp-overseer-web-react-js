import * as actions from "./actions";
import Lodash from "lodash";

// Partial global store for users data management
const initialState = {
    page: 1,
    list: [],
    hasMoreData: false,

    current: {
        id: '', name: '', manager: '', phone: '', document: '',
        address: '', creation: '', description: '',

        sims: []
    }
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set companies data
        case actions.STORE_SET_COMPANIES_DATA:
            nextState = {...state, list: action.companies, page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to set company data
        case actions.STORE_SET_COMPANY_DATA:
            nextState = {...state, current: action.company};
            if(action.alsoInList) {
                nextState = {
                    ...nextState,
                    list: Lodash.map(nextState.list, (item) => {
                        if(item.id === action.company.id) item = action.company;
                        return item;
                    })
                };
            }
            return nextState || state;
        // Resolve event to set new company data
        case actions.STORE_SET_NEW_COMPANY_DATA:
            nextState = {...state, list: [action.company, ...state.list]}
            return nextState || state;
        // Resolve event to set next companies data
        case actions.STORE_SET_NEXT_COMPANIES_DATA:
            nextState = {...state, list: [...state.list, ...action.companies], page: action.page, hasMoreData: action.hasMoreData};
            return nextState || state;
        // Resolve event to stop infinite scroll companies data,
        case actions.STORE_STOP_INFINITE_SCROLL_COMPANIES_DATA:
            nextState = {...state, hasMoreData: false};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce