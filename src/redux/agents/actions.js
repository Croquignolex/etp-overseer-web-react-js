// Reducer action types
export const STORE_SET_AGENT_DATA = 'STORE_SET_AGENT_DATA';
export const STORE_SET_AGENTS_DATA = 'STORE_SET_AGENTS_DATA';
export const STORE_SET_NEW_AGENT_DATA = 'STORE_SET_NEW_AGENT_DATA';
export const STORE_SET_NEXT_AGENTS_DATA = 'STORE_SET_NEXT_AGENTS_DATA';
export const STORE_SET_AGENT_ACTION_DATA = 'STORE_SET_AGENT_ACTION_DATA';
export const STORE_SET_AGENT_TOGGLE_DATA = 'STORE_SET_AGENT_TOGGLE_DATA';
export const STORE_STOP_INFINITE_SCROLL_AGENTS_DATA = 'STORE_STOP_INFINITE_SCROLL_AGENTS_DATA';

// Middleware action types
export const EMIT_NEW_AGENT = 'EMIT_NEW_AGENT';
export const EMIT_AGENT_FETCH = 'EMIT_AGENT_FETCH';
export const EMIT_NEW_RESOURCE = 'EMIT_NEW_RESOURCE';
export const EMIT_AGENTS_FETCH = 'EMIT_AGENTS_FETCH';
export const EMIT_RESOURCE_FETCH = 'EMIT_RESOURCE_FETCH';
export const EMIT_ADD_AGENT_SIMS = 'EMIT_ADD_AGENT_SIMS';
export const EMIT_RESOURCES_FETCH = 'EMIT_RESOURCES_FETCH';
export const EMIT_ALL_AGENTS_FETCH = 'EMIT_ALL_AGENTS_FETCH';
export const EMIT_UPDATE_AGENT_CNI = 'EMIT_UPDATE_AGENT_CNI';
export const EMIT_UPDATE_AGENT_DOC = 'EMIT_UPDATE_AGENT_DOC';
export const EMIT_NEXT_AGENTS_FETCH = 'EMIT_NEXT_AGENTS_FETCH';
export const EMIT_UPDATE_AGENT_ZONE = 'EMIT_UPDATE_AGENT_ZONE';
export const EMIT_UPDATE_AGENT_INFO = 'EMIT_UPDATE_AGENT_INFO';
export const EMIT_UPDATE_AGENT_AGENCY = 'EMIT_UPDATE_AGENT_AGENCY';
export const EMIT_SEARCH_AGENTS_FETCH = 'EMIT_SEARCH_AGENTS_FETCH';
export const EMIT_TOGGLE_AGENT_STATUS = 'EMIT_TOGGLE_AGENT_STATUS';
export const EMIT_NEXT_RESOURCES_FETCH = 'EMIT_NEXT_RESOURCES_FETCH';

//====================== Reducer trigger actions
// Set agents data in store
export const storeSetAgentsData = ({agents, hasMoreData, page}) => ({
    page,
    agents,
    hasMoreData,
    type: STORE_SET_AGENTS_DATA
});

// Set new agent data in store
export const storeSetNewAgentData = ({agent}) => ({
    agent,
    type: STORE_SET_NEW_AGENT_DATA
});

// Set agent data in store
export const storeSetAgentData = ({agent, alsoInList = false}) => ({
    agent,
    alsoInList,
    type: STORE_SET_AGENT_DATA
});

// Set next agents data in store
export const storeSetNextAgentsData = ({agents, hasMoreData, page}) => ({
    page,
    agents,
    hasMoreData,
    type: STORE_SET_NEXT_AGENTS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollAgentData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_AGENTS_DATA
});

// Set sim action data in store
export const storeSetAgentActionData = ({id}) => ({
    id,
    type: STORE_SET_AGENT_ACTION_DATA
});

// Set agent toggle data in store
export const storeSetAgentToggleData = ({id}) => ({
    id,
    type: STORE_SET_AGENT_TOGGLE_DATA
});

//====================== Middleware trigger actions
// Emit agents fetch
export const emitAgentsFetch = () => ({
    type: EMIT_AGENTS_FETCH
});

// Emit resources fetch
export const emitResourcesFetch = () => ({
    type: EMIT_RESOURCES_FETCH
});

// Emit search agents fetch
export const emitSearchAgentsFetch = ({needle}) => ({
    needle,
    type: EMIT_SEARCH_AGENTS_FETCH
});

// Emit next agents fetch
export const emitNextAgentsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_AGENTS_FETCH
});

// Emit next resources fetch
export const emitNextResourcesFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_RESOURCES_FETCH
});

// Emit all agents fetch
export const emitAllAgentsFetch = () => ({
    type: EMIT_ALL_AGENTS_FETCH
});

// Emit agent fetch
export const emitAgentFetch = ({id}) => ({
    id,
    type: EMIT_AGENT_FETCH
});

// Emit resource fetch
export const emitResourceFetch = ({id}) => ({
    id,
    type: EMIT_RESOURCE_FETCH
});

// Emit toggle agent status
export const emitToggleAgentStatus = ({id}) => ({
    id,
    type: EMIT_TOGGLE_AGENT_STATUS
});

// Emit new agent fetch
export const emitNewAgent = ({name, address, phone, zone, email, description, backIDCard, frontIDCard, document}) => ({
    name,
    zone,
    phone,
    email,
    address,
    document,
    backIDCard,
    frontIDCard,
    description,
    type: EMIT_NEW_AGENT
});

// Emit new resource fetch
export const emitNewResource = ({name, address, phone, agency, email, description, backIDCard, frontIDCard, document}) => ({
    name,
    phone,
    email,
    agency,
    address,
    document,
    backIDCard,
    frontIDCard,
    description,
    type: EMIT_NEW_RESOURCE
});

// Emit update agent info
export const emitUpdateAgentInfo = ({id, email, name, address, description}) => ({
    id,
    name,
    email,
    address,
    description,
    type: EMIT_UPDATE_AGENT_INFO
});

// Emit update agent zone
export const emitUpdateAgentZone = ({id, zone}) => ({
    id,
    zone,
    type: EMIT_UPDATE_AGENT_ZONE
});

// Emit update agent agency
export const emitUpdateAgentAgency = ({id, agency}) => ({
    id,
    agency,
    type: EMIT_UPDATE_AGENT_AGENCY
});

// Emit update agent doc
export const emitUpdateAgentDoc = ({id, doc}) => ({
    id,
    doc,
    type: EMIT_UPDATE_AGENT_DOC
});

// Emit update agent CNI
export const emitUpdateAgentCNI = ({id, frontIDCard, backIDCard}) => ({
    id,
    backIDCard,
    frontIDCard,
    type: EMIT_UPDATE_AGENT_CNI
});

// Emit add agent sims
export const emitAddAgentSims = ({id, name, reference, number, description, operator}) => ({
    id,
    name,
    number,
    operator,
    reference,
    description,
    type: EMIT_ADD_AGENT_SIMS
});
