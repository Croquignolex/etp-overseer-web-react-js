// Reducer action types
export const STORE_SET_SETTINGS_DATA = 'STORE_SET_SETTINGS_DATA';
export const STORE_RESET_SETTINGS_DATA = 'STORE_RESET_SETTINGS_DATA';

// Middleware action types
export const EMIT_SETTINGS_UPDATE = 'EMIT_SETTINGS_UPDATE';

//====================== Reducer trigger actions
// Empty user check error data into store
export const storeResetSettingsData = () => ({
    type: STORE_RESET_SETTINGS_DATA
});

// Set user check error data in store
export const storeSetSettingsData = ({id, cards, charts, bars, sound, session, description}) => ({
    id,
    bars,
    cards,
    sound,
    charts,
    session,
    description,
    type: STORE_SET_SETTINGS_DATA
});
//====================== Middleware trigger actions
// Emit user setting update
export const emitSettingsUpdate = ({cards, charts, bars, sound, session, description}) => ({
    bars,
    cards,
    sound,
    charts,
    session,
    description,
    type: EMIT_SETTINGS_UPDATE
});