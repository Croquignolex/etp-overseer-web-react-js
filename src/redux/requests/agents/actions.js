// Reducer action types
export const STORE_AGENTS_REQUEST_INIT = 'STORE_AGENTS_REQUEST_INIT';
export const STORE_AGENTS_REQUEST_RESET = 'STORE_AGENTS_REQUEST_RESET';
export const STORE_AGENTS_REQUEST_FAILED = 'STORE_AGENTS_REQUEST_FAILED';
export const STORE_AGENTS_REQUEST_SUCCEEDED = 'STORE_AGENTS_REQUEST_SUCCEEDED';

export const STORE_NEXT_AGENTS_REQUEST_INIT = 'STORE_NEXT_AGENTS_REQUEST_INIT';
export const STORE_NEXT_AGENTS_REQUEST_RESET = 'STORE_NEXT_AGENTS_REQUEST_RESET';
export const STORE_NEXT_AGENTS_REQUEST_FAILED = 'STORE_NEXT_AGENTS_REQUEST_FAILED';
export const STORE_NEXT_AGENTS_REQUEST_SUCCEEDED = 'STORE_NEXT_AGENTS_REQUEST_SUCCEEDED';

export const STORE_ALL_AGENTS_REQUEST_INIT = 'STORE_ALL_AGENTS_REQUEST_INIT';
export const STORE_ALL_AGENTS_REQUEST_RESET = 'STORE_ALL_AGENTS_REQUEST_RESET';
export const STORE_ALL_AGENTS_REQUEST_FAILED = 'STORE_ALL_AGENTS_REQUEST_FAILED';
export const STORE_ALL_AGENTS_REQUEST_SUCCEEDED = 'STORE_ALL_AGENTS_REQUEST_SUCCEEDED';

export const STORE_ADD_AGENT_REQUEST_INIT = 'STORE_ADD_AGENT_REQUEST_INIT';
export const STORE_ADD_AGENT_REQUEST_RESET = 'STORE_ADD_AGENT_REQUEST_RESET';
export const STORE_ADD_AGENT_REQUEST_FAILED = 'STORE_ADD_AGENT_REQUEST_FAILED';
export const STORE_ADD_AGENT_REQUEST_SUCCEEDED = 'STORE_ADD_AGENT_REQUEST_SUCCEEDED';

export const STORE_AGENT_REQUEST_INIT = 'STORE_AGENT_REQUEST_INIT';
export const STORE_AGENT_REQUEST_RESET = 'STORE_AGENT_REQUEST_RESET';
export const STORE_AGENT_REQUEST_FAILED = 'STORE_AGENT_REQUEST_FAILED';
export const STORE_AGENT_REQUEST_SUCCEEDED = 'STORE_AGENT_REQUEST_SUCCEEDED';

export const STORE_AGENT_STATUS_TOGGLE_REQUEST_INIT = 'STORE_AGENT_STATUS_TOGGLE_REQUEST_INIT';
export const STORE_AGENT_STATUS_TOGGLE_REQUEST_RESET = 'STORE_AGENT_STATUS_TOGGLE_REQUEST_RESET';
export const STORE_AGENT_STATUS_TOGGLE_REQUEST_FAILED = 'STORE_AGENT_STATUS_TOGGLE_REQUEST_FAILED';
export const STORE_AGENT_STATUS_TOGGLE_REQUEST_SUCCEEDED = 'STORE_AGENT_STATUS_TOGGLE_REQUEST_SUCCEEDED';

export const STORE_AGENT_EDIT_INFO_REQUEST_INIT = 'STORE_AGENT_EDIT_INFO_REQUEST_INIT';
export const STORE_AGENT_EDIT_INFO_REQUEST_RESET = 'STORE_AGENT_EDIT_INFO_REQUEST_RESET';
export const STORE_AGENT_EDIT_INFO_REQUEST_FAILED = 'STORE_AGENT_EDIT_INFO_REQUEST_FAILED';
export const STORE_AGENT_EDIT_INFO_REQUEST_SUCCEEDED = 'STORE_AGENT_EDIT_INFO_REQUEST_SUCCEEDED';

export const STORE_AGENT_EDIT_ZONE_REQUEST_INIT = 'STORE_AGENT_EDIT_ZONE_REQUEST_INIT';
export const STORE_AGENT_EDIT_ZONE_REQUEST_RESET = 'STORE_AGENT_EDIT_ZONE_REQUEST_RESET';
export const STORE_AGENT_EDIT_ZONE_REQUEST_FAILED = 'STORE_AGENT_EDIT_ZONE_REQUEST_FAILED';
export const STORE_AGENT_EDIT_ZONE_REQUEST_SUCCEEDED = 'STORE_AGENT_EDIT_ZONE_REQUEST_SUCCEEDED';

export const STORE_AGENT_EDIT_DOC_REQUEST_INIT = 'STORE_AGENT_EDIT_DOC_REQUEST_INIT';
export const STORE_AGENT_EDIT_DOC_REQUEST_RESET = 'STORE_AGENT_EDIT_DOC_REQUEST_RESET';
export const STORE_AGENT_EDIT_DOC_REQUEST_FAILED = 'STORE_AGENT_EDIT_DOC_REQUEST_FAILED';
export const STORE_AGENT_EDIT_DOC_REQUEST_SUCCEEDED = 'STORE_AGENT_EDIT_DOC_REQUEST_SUCCEEDED';

export const STORE_AGENT_EDIT_CNI_REQUEST_INIT = 'STORE_AGENT_EDIT_CNI_REQUEST_INIT';
export const STORE_AGENT_EDIT_CNI_REQUEST_RESET = 'STORE_AGENT_EDIT_CNI_REQUEST_RESET';
export const STORE_AGENT_EDIT_CNI_REQUEST_FAILED = 'STORE_AGENT_EDIT_CNI_REQUEST_FAILED';
export const STORE_AGENT_EDIT_CNI_REQUEST_SUCCEEDED = 'STORE_AGENT_EDIT_CNI_REQUEST_SUCCEEDED';

export const STORE_AGENT_ADD_SIM_REQUEST_INIT = 'STORE_AGENT_ADD_SIM_REQUEST_INIT';
export const STORE_AGENT_ADD_SIM_REQUEST_RESET = 'STORE_AGENT_ADD_SIM_REQUEST_RESET';
export const STORE_AGENT_ADD_SIM_REQUEST_FAILED = 'STORE_AGENT_ADD_SIM_REQUEST_FAILED';
export const STORE_AGENT_ADD_SIM_REQUEST_SUCCEEDED = 'STORE_AGENT_ADD_SIM_REQUEST_SUCCEEDED';

// ======================================================== Agents
// Set agents init data into store
export const storeAgentsRequestInit = () => ({
    type: STORE_AGENTS_REQUEST_INIT
});

// Set agents failed data into store
export const storeAgentsRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENTS_REQUEST_FAILED
});

// Set agents succeeded data into store
export const storeAgentsRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENTS_REQUEST_SUCCEEDED
});

// Set agents reset data into store
export const storeAgentsRequestReset = () => ({
    type: STORE_AGENTS_REQUEST_RESET
});
// ======================================================== Next agents
// Set next agents init data into store
export const storeNextAgentsRequestInit = () => ({
    type: STORE_NEXT_AGENTS_REQUEST_INIT
});

// Set next agents failed data into store
export const storeNextAgentsRequestFailed = ({message}) => ({
    message,
    type: STORE_NEXT_AGENTS_REQUEST_FAILED
});

// Set next agents succeeded data into store
export const storeNextAgentsRequestSucceed = ({message}) => ({
    message,
    type: STORE_NEXT_AGENTS_REQUEST_SUCCEEDED
});

// Set next agents reset data into store
export const storeNextAgentsRequestReset = () => ({
    type: STORE_NEXT_AGENTS_REQUEST_RESET
});
// ======================================================== All agents
// Set all agents init data into store
export const storeAllAgentsRequestInit = () => ({
    type: STORE_ALL_AGENTS_REQUEST_INIT
});

// Set all agents failed data into store
export const storeAllAgentsRequestFailed = ({message}) => ({
    message,
    type: STORE_ALL_AGENTS_REQUEST_FAILED
});

// Set all agents succeeded data into store
export const storeAllAgentsRequestSucceed = ({message}) => ({
    message,
    type: STORE_ALL_AGENTS_REQUEST_SUCCEEDED
});

// Set all agents reset data into store
export const storeAllAgentsRequestReset = () => ({
    type: STORE_ALL_AGENTS_REQUEST_RESET
});
// ======================================================== Add agent
// Set add agent init data into store
export const storeAddAgentRequestInit = () => ({
    type: STORE_ADD_AGENT_REQUEST_INIT
});

// Set add agent failed data into store
export const storeAddAgentRequestFailed = ({message}) => ({
    message,
    type: STORE_ADD_AGENT_REQUEST_FAILED
});

// Set add agent succeeded data into store
export const storeAddAgentRequestSucceed = ({message}) => ({
    message,
    type: STORE_ADD_AGENT_REQUEST_SUCCEEDED
});

// Set add agent reset data into store
export const storeAddAgentRequestReset = () => ({
    type: STORE_ADD_AGENT_REQUEST_RESET
});
// ======================================================== Agent
// Set agent init data into store
export const storeAgentRequestInit = () => ({
    type: STORE_AGENT_REQUEST_INIT
});

// Set agent failed data into store
export const storeAgentRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENT_REQUEST_FAILED
});

// Set agent succeeded data into store
export const storeAgentRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENT_REQUEST_SUCCEEDED
});

// Set agent reset data into store
export const storeAgentRequestReset = () => ({
    type: STORE_AGENT_REQUEST_RESET
});
// ======================================================== Agent status toggle
// Set agent status toggle init data into store
export const storeAgentStatusToggleRequestInit = () => ({
    type: STORE_AGENT_STATUS_TOGGLE_REQUEST_INIT
});

// Set agent status toggle failed data into store
export const storeAgentStatusToggleRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENT_STATUS_TOGGLE_REQUEST_FAILED
});

// Set agent status toggle succeeded data into store
export const storeAgentStatusToggleRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENT_STATUS_TOGGLE_REQUEST_SUCCEEDED
});

// Set agent status toggle reset data into store
export const storeAgentStatusToggleRequestReset = () => ({
    type: STORE_AGENT_STATUS_TOGGLE_REQUEST_RESET
});
// ======================================================== Agent edit info
// Set agent edit info init data into store
export const storeAgentEditInfoRequestInit = () => ({
    type: STORE_AGENT_EDIT_INFO_REQUEST_INIT
});

// Set agent edit info failed data into store
export const storeAgentEditInfoRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENT_EDIT_INFO_REQUEST_FAILED
});

// Set agent edit info succeeded data into store
export const storeAgentEditInfoRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENT_EDIT_INFO_REQUEST_SUCCEEDED
});

// Set agent edit info reset data into store
export const storeAgentEditInfoRequestReset = () => ({
    type: STORE_AGENT_EDIT_INFO_REQUEST_RESET
});
// ======================================================== Agent edit zone
// Set agent edit zone init data into store
export const storeAgentEditZoneRequestInit = () => ({
    type: STORE_AGENT_EDIT_ZONE_REQUEST_INIT
});

// Set agent edit zone failed data into store
export const storeAgentEditZoneRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENT_EDIT_ZONE_REQUEST_FAILED
});

// Set agent edit zone succeeded data into store
export const storeAgentEditZoneRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENT_EDIT_ZONE_REQUEST_SUCCEEDED
});

// Set agent edit zone reset data into store
export const storeAgentEditZoneRequestReset = () => ({
    type: STORE_AGENT_EDIT_ZONE_REQUEST_RESET
});
// ======================================================== Agent edit doc
// Set agent edit doc init data into store
export const storeAgentEditDocRequestInit = () => ({
    type: STORE_AGENT_EDIT_DOC_REQUEST_INIT
});

// Set agent edit doc failed data into store
export const storeAgentEditDocRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENT_EDIT_DOC_REQUEST_FAILED
});

// Set agent edit doc succeeded data into store
export const storeAgentEditDocRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENT_EDIT_DOC_REQUEST_SUCCEEDED
});

// Set agent edit doc reset data into store
export const storeAgentEditDocRequestReset = () => ({
    type: STORE_AGENT_EDIT_DOC_REQUEST_RESET
});
// ======================================================== Agent edit cni
// Set agent edit cni init data into store
export const storeAgentEditCniRequestInit = () => ({
    type: STORE_AGENT_EDIT_CNI_REQUEST_INIT
});

// Set agent edit cni failed data into store
export const storeAgentEditCniRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENT_EDIT_CNI_REQUEST_FAILED
});

// Set agent edit cni succeeded data into store
export const storeAgentEditCniRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENT_EDIT_CNI_REQUEST_SUCCEEDED
});

// Set agent edit cni reset data into store
export const storeAgentEditCniRequestReset = () => ({
    type: STORE_AGENT_EDIT_CNI_REQUEST_RESET
});
// ======================================================== Agent add sim
// Set agent add sim init data into store
export const storeAgentAddSimRequestInit = () => ({
    type: STORE_AGENT_ADD_SIM_REQUEST_INIT
});

// Set agent add sim failed data into store
export const storeAgentAddSimRequestFailed = ({message}) => ({
    message,
    type: STORE_AGENT_ADD_SIM_REQUEST_FAILED
});

// Set agent add sim succeeded data into store
export const storeAgentAddSimRequestSucceed = ({message}) => ({
    message,
    type: STORE_AGENT_ADD_SIM_REQUEST_SUCCEEDED
});

// Set agent add sim reset data into store
export const storeAgentAddSimRequestReset = () => ({
    type: STORE_AGENT_ADD_SIM_REQUEST_RESET
});