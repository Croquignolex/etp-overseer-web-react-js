import {STORE_RESET_SETTINGS_DATA, STORE_SET_SETTINGS_DATA} from "./actions";

// Partial global store for error data management
const initialState = {
    id: '',
    bars: [],
    cards: [],
    charts: [],
    sound: true,
    session: 15,
    description: '',
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to reset settings data
        case STORE_RESET_SETTINGS_DATA:
            nextState = {...initialState};
            return nextState || state;
        // Resolve event to settings store data
        case STORE_SET_SETTINGS_DATA:
            nextState = {
                ...state,
                id: action.id,
                bars: action.bars,
                cards: action.cards,
                sound: action.sound,
                charts: action.charts,
                session: action.session,
                description: action.description,
            };
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce