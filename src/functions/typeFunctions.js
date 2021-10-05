import * as types from "../constants/typeConstants";
import {UNKNOWN} from "../constants/defaultConstants";

// Badge color for fleet type
export function fleetTypeBadgeColor(type) {
    switch (type) {
        case types.CANCEL: return {background: 'bg-secondary', border: 'border border-secondary', text: 'ANNULEE'};
        case types.DONE: return {background: 'bg-secondary', border: 'border border-secondary', text: 'EFFECTUEE'};
        case types.PENDING: return {background: 'bg-warning', border: 'border border-warning', text: 'EN ATTENTE'};
        case types.PROCESSING: return {background: 'bg-primary', border: 'border border-primary', text: 'EN COURS'};
        default: return {background: 'bg-secondary', border: 'border border-secondary', text: UNKNOWN};
    }
}

// Badge color for sim type
export function simTypeBadgeColor(type) {
    switch (type) {
        case types.RESOURCE_TYPE: return {background: 'bg-info', border: 'border border-info', text: types.RESOURCE_TYPE};
        case types.AGENT_TYPE: return {background: 'bg-primary', border: 'border border-primary', text: types.AGENT_TYPE};
        case types.FLEET_TYPE: return {background: 'bg-warning', border: 'border border-warning', text: types.FLEET_TYPE};
        case types.MASTER_TYPE: return {background: 'bg-danger', border: 'border border-danger', text: types.MASTER_TYPE};
        case types.COLLECTOR_TYPE: return {background: 'bg-success', border: 'border border-success', text: types.COLLECTOR_TYPE};
        case types.CORPORATE_TYPE: return {background: 'bg-secondary', border: 'border border-secondary', text: types.CORPORATE_TYPE};
        default: return {background: 'bg-secondary', border: 'border border-secondary', text: UNKNOWN};
    }
}

// Badge color for agent type
export function agentTypeBadgeColor(type) {
    switch (type) {
        case types.RESOURCE_TYPE: return {background: 'bg-info', border: 'border border-info', text: types.RESOURCE_TYPE};
        case types.AGENT_TYPE: return {background: 'bg-primary', border: 'border border-primary', text: types.AGENT_TYPE};
        default: return {background: 'bg-default', border: 'border border-default', text: UNKNOWN};
    }
}
