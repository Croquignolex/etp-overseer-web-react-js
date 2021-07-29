// Reducer action types
export const STORE_ZONES_REQUEST_INIT = 'STORE_ZONES_REQUEST_INIT';
export const STORE_ZONES_REQUEST_RESET = 'STORE_ZONES_REQUEST_RESET';
export const STORE_ZONES_REQUEST_FAILED = 'STORE_ZONES_REQUEST_FAILED';
export const STORE_ZONES_REQUEST_SUCCEEDED = 'STORE_ZONES_REQUEST_SUCCEEDED';

export const STORE_NEXT_ZONES_REQUEST_INIT = 'STORE_NEXT_ZONES_REQUEST_INIT';
export const STORE_NEXT_ZONES_REQUEST_RESET = 'STORE_NEXT_ZONES_REQUEST_RESET';
export const STORE_NEXT_ZONES_REQUEST_FAILED = 'STORE_NEXT_ZONES_REQUEST_FAILED';
export const STORE_NEXT_ZONES_REQUEST_SUCCEEDED = 'STORE_NEXT_ZONES_REQUEST_SUCCEEDED';

export const STORE_ALL_ZONES_REQUEST_INIT = 'STORE_ALL_ZONES_REQUEST_INIT';
export const STORE_ALL_ZONES_REQUEST_RESET = 'STORE_ALL_ZONES_REQUEST_RESET';
export const STORE_ALL_ZONES_REQUEST_FAILED = 'STORE_ALL_ZONES_REQUEST_FAILED';
export const STORE_ALL_ZONES_REQUEST_SUCCEEDED = 'STORE_ALL_ZONES_REQUEST_SUCCEEDED';

export const STORE_ADD_ZONE_REQUEST_INIT = 'STORE_ADD_ZONE_REQUEST_INIT';
export const STORE_ADD_ZONE_REQUEST_RESET = 'STORE_ADD_ZONE_REQUEST_RESET';
export const STORE_ADD_ZONE_REQUEST_FAILED = 'STORE_ADD_ZONE_REQUEST_FAILED';
export const STORE_ADD_ZONE_REQUEST_SUCCEEDED = 'STORE_ADD_ZONE_REQUEST_SUCCEEDED';

export const STORE_SHOW_ZONE_REQUEST_INIT = 'STORE_SHOW_ZONE_REQUEST_INIT';
export const STORE_SHOW_ZONE_REQUEST_RESET = 'STORE_SHOW_ZONE_REQUEST_RESET';
export const STORE_SHOW_ZONE_REQUEST_FAILED = 'STORE_SHOW_ZONE_REQUEST_FAILED';
export const STORE_SHOW_ZONE_REQUEST_SUCCEEDED = 'STORE_SHOW_ZONE_REQUEST_SUCCEEDED';

export const STORE_EDIT_ZONE_REQUEST_INIT = 'STORE_EDIT_ZONE_REQUEST_INIT';
export const STORE_EDIT_ZONE_REQUEST_RESET = 'STORE_EDIT_ZONE_REQUEST_RESET';
export const STORE_EDIT_ZONE_REQUEST_FAILED = 'STORE_EDIT_ZONE_REQUEST_FAILED';
export const STORE_EDIT_ZONE_REQUEST_SUCCEEDED = 'STORE_EDIT_ZONE_REQUEST_SUCCEEDED';

export const STORE_ZONE_ADD_AGENT_REQUEST_INIT = 'STORE_ZONE_ADD_AGENT_REQUEST_INIT';
export const STORE_ZONE_ADD_AGENT_REQUEST_RESET = 'STORE_ZONE_ADD_AGENT_REQUEST_RESET';
export const STORE_ZONE_ADD_AGENT_REQUEST_FAILED = 'STORE_ZONE_ADD_AGENT_REQUEST_FAILED';
export const STORE_ZONE_ADD_AGENT_REQUEST_SUCCEEDED = 'STORE_ZONE_ADD_AGENT_REQUEST_SUCCEEDED';

// ======================================================== Zones
// Set zones init data into store
export const storeZonesRequestInit = () => ({
    type: STORE_ZONES_REQUEST_INIT
});

// Set zones failed data into store
export const storeZonesRequestFailed = ({message}) => ({
    message,
    type: STORE_ZONES_REQUEST_FAILED
});

// Set zones succeeded data into store
export const storeZonesRequestSucceed = ({message}) => ({
    message,
    type: STORE_ZONES_REQUEST_SUCCEEDED
});

// Set zones reset data into store
export const storeZonesRequestReset = () => ({
    type: STORE_ZONES_REQUEST_RESET
});
// ======================================================== Next zones
// Set next zones init data into store
export const storeNextZonesRequestInit = () => ({
    type: STORE_NEXT_ZONES_REQUEST_INIT
});

// Set next zones failed data into store
export const storeNextZonesRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_ZONES_REQUEST_FAILED
});

// Set next zones succeeded data into store
export const storeNextZonesRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_ZONES_REQUEST_SUCCEEDED
});

// Set next zones reset data into store
export const storeNextZonesRequestReset = () => ({
    type: STORE_NEXT_ZONES_REQUEST_RESET
});
// ======================================================== All zones
// Set all zones init data into store
export const storeAllZonesRequestInit = () => ({
    type: STORE_ALL_ZONES_REQUEST_INIT
});

// Set all zones failed data into store
export const storeAllZonesRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_ZONES_REQUEST_FAILED
});

// Set all zones succeeded data into store
export const storeAllZonesRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_ZONES_REQUEST_SUCCEEDED
});

// Set all zones reset data into store
export const storeAllZonesRequestReset = () => ({
    type: STORE_ALL_ZONES_REQUEST_RESET
});
// ======================================================== Add zone
// Set add zone init data into store
export const storeAddZoneRequestInit = () => ({
    type: STORE_ADD_ZONE_REQUEST_INIT
});

// Set add zone failed data into store
export const storeAddZoneRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_ZONE_REQUEST_FAILED
});

// Set add zone succeeded data into store
export const storeAddZoneRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_ZONE_REQUEST_SUCCEEDED
});

// Set add zone reset data into store
export const storeAddZoneRequestReset = () => ({
    type: STORE_ADD_ZONE_REQUEST_RESET
});
// ======================================================== Show zone
// Set show zone init data into store
export const storeShowZoneRequestInit = () => ({
    type: STORE_SHOW_ZONE_REQUEST_INIT
});

// Set show zone failed data into store
export const storeShowZoneRequestFailed = ({message}) => ({
    message,
    type: STORE_SHOW_ZONE_REQUEST_FAILED
});

// Set show zone succeeded data into store
export const storeShowZoneRequestSucceed = ({message}) => ({
    message,
    type: STORE_SHOW_ZONE_REQUEST_SUCCEEDED
});

// Set show zone reset data into store
export const storeShowZoneRequestReset = () => ({
    type: STORE_SHOW_ZONE_REQUEST_RESET
});
// ======================================================== Edit zone
// Set edit zone init data into store
export const storeEditZoneRequestInit = () => ({
    type: STORE_EDIT_ZONE_REQUEST_INIT
});

// Set edit zone failed data into store
export const storeEditZoneRequestFailed = ({message}) => ({
    message,
    type: STORE_EDIT_ZONE_REQUEST_FAILED
});

// Set edit zone succeeded data into store
export const storeEditZoneRequestSucceed = ({message}) => ({
    message,
    type: STORE_EDIT_ZONE_REQUEST_SUCCEEDED
});

// Set edit zone reset data into store
export const storeEditZoneRequestReset = () => ({
    type: STORE_EDIT_ZONE_REQUEST_RESET
});
// ======================================================== Zone add agent
// Set zone add agent init data into store
export const storeZoneAddAgentRequestInit = () => ({
    type: STORE_ZONE_ADD_AGENT_REQUEST_INIT
});

// Set zone add agent failed data into store
export const storeZoneAddAgentRequestFailed = ({message}) => ({
    message,
    type: STORE_ZONE_ADD_AGENT_REQUEST_FAILED
});

// Set zone add agent succeeded data into store
export const storeZoneAddAgentRequestSucceed = ({message}) => ({
    message,
    type: STORE_ZONE_ADD_AGENT_REQUEST_SUCCEEDED
});

// Set zone add agent reset data into store
export const storeZoneAddAgentRequestReset = () => ({
    type: STORE_ZONE_ADD_AGENT_REQUEST_RESET
});