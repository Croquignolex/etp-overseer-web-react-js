// Notifications types
export const FLEET_OPERATION_NOTIFICATION = "App\\Notifications\\Flottage";
export const CASH_RECOVERY_NOTIFICATION = "App\\Notifications\\Recouvrement";
export const REQUEST_FLEET_NOTIFICATION = "App\\Notifications\\Demande_flotte";
export const FLEET_RECOVERY_NOTIFICATION = "App\\Notifications\\Retour_flotte";
export const CLEARANCE_OPERATION_NOTIFICATION = "App\\Notifications\\Destockage";
export const REQUEST_CLEARANCE_NOTIFICATION = "App\\Notifications\\Demande_destockage";

// Modal types
export const INFO = 'INFO';
export const DANGER = 'DANGER';
export const WARNING = 'WARNING';
export const SUCCESS = 'SUCCESS';

// Status
export const CANCEL = 'annule';
export const DONE = 'effectue';
export const DECLINE = 'decline';
export const APPROVE = 'approuve';
export const PENDING = 'en-attente';
export const PROCESSING = 'en-cours';

// Sims type string
export const AGENT_TYPE = 'AGENT';
export const FLEET_TYPE = 'FLOTTAGE';
export const MASTER_TYPE = 'MASTER SIM';
export const RESOURCE_TYPE = 'RESSOURCE';
export const CORPORATE_TYPE = 'CORPORATE';
export const COLLECTOR_TYPE = 'RESPONSABLE';
export const FLEET_MASTER_TYPE = [FLEET_TYPE, MASTER_TYPE];
export const FLEET_COLLECTOR_TYPE = [FLEET_TYPE, COLLECTOR_TYPE];
export const AGENT_RESOURCE_COLLECTOR_CORPORATE_TYPE = [AGENT_TYPE, RESOURCE_TYPE, COLLECTOR_TYPE, CORPORATE_TYPE];

// Supply type
export const SUPPLY_BY_AGENT = "D'un Agent";
export const SUPPLY_BY_DIGITAL_PARTNER = "D'un Digital Partner";
