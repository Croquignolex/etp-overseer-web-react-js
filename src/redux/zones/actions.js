// Reducer action types
export const STORE_SET_ZONE_DATA = 'STORE_SET_ZONE_DATA';
export const STORE_SET_ZONES_DATA = 'STORE_SET_ZONES_DATA';
export const STORE_SET_NEW_ZONE_DATA = 'STORE_SET_NEW_ZONE_DATA';
export const STORE_SET_NEXT_ZONES_DATA = 'STORE_SET_NEXT_ZONES_DATA';
export const STORE_STOP_INFINITE_SCROLL_ZONES_DATA = 'STORE_STOP_INFINITE_SCROLL_ZONES_DATA';

// Middleware action types
export const EMIT_NEW_ZONE = 'EMIT_NEW_ZONE';
export const EMIT_ZONE_FETCH = 'EMIT_ZONE_FETCH';
export const EMIT_UPDATE_ZONE = 'EMIT_UPDATE_ZONE';
export const EMIT_ZONES_FETCH = 'EMIT_ZONES_FETCH';
export const EMIT_ADD_ZONE_AGENTS = 'EMIT_ADD_ZONE_AGENTS';
export const EMIT_ALL_ZONES_FETCH = 'EMIT_ALL_ZONES_FETCH';
export const EMIT_NEXT_ZONES_FETCH = 'EMIT_NEXT_ZONES_FETCH';

//====================== Reducer trigger actions
// Set zones data in store
export const storeSetZonesData = ({zones, hasMoreData, page}) => ({
    page,
    zones,
    hasMoreData,
    type: STORE_SET_ZONES_DATA
});

// Set zone data in store
export const storeSetZoneData = ({zone, alsoInList = false}) => ({
    zone,
    alsoInList,
    type: STORE_SET_ZONE_DATA
});

// Set next zones data in store
export const storeSetNextZonesData = ({zones, hasMoreData, page}) => ({
    page,
    zones,
    hasMoreData,
    type: STORE_SET_NEXT_ZONES_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollZoneData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_ZONES_DATA
});

// Set new zone data in store
export const storeSetNewZoneData = ({zone}) => ({
    zone,
    type: STORE_SET_NEW_ZONE_DATA
});

//====================== Middleware trigger actions
// Emit zones fetch
export const emitZonesFetch = () => ({
    type: EMIT_ZONES_FETCH
});

// Emit next zones fetch
export const emitNextZonesFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_ZONES_FETCH
});

// Emit all zones fetch
export const emitAllZonesFetch = () => ({
    type: EMIT_ALL_ZONES_FETCH
});

// Emit zone fetch
export const emitZoneFetch = ({id}) => ({
    id,
    type: EMIT_ZONE_FETCH
});

// Emit new zone
export const emitNewZone = ({name, reference, description}) => ({
    name,
    reference,
    description,
    type: EMIT_NEW_ZONE
});

// Emit update zone
export const emitUpdateZone = ({id, name, reference, description}) => ({
    id,
    name,
    reference,
    description,
    type: EMIT_UPDATE_ZONE
});

// Emit add zone agents
export const emitAddZoneAgents = ({id, name, address, phone, reference, email,
                                      town, country, password, description,
                                      backIDCard, frontIDCard, document}) => ({
    id,
    name,
    town,
    phone,
    email,
    address,
    country,
    password,
    document,
    reference,
    backIDCard,
    frontIDCard,
    description,
    type: EMIT_ADD_ZONE_AGENTS
});