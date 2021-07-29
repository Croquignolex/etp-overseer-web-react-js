import PropTypes from "prop-types";
import React, {useState} from 'react';

import LoaderComponent from "../LoaderComponent";
import FormModalComponent from "../modals/FormModalComponent";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import AgentDetailsContainer from "../../containers/agents/AgentDetailsContainer";

// Component
function AgentCardComponent({agent}) {
    // Local states
    const [agentDetailsModal, setAgentDetailsModal] = useState({show: false, header: "DETAIL DE L'AGENT/RESSOURCE", id: ''});

    // Hide agent details modal form
    const handleAgentDetailsModalHide = () => {
        setAgentDetailsModal({...agentDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <ul className="list-group list-group-unbordered">
                <li className="list-group-item">
                    <b>Création</b>
                    <span className="float-right">{dateToString(agent.creation)}</span>
                </li>
                <li className="list-group-item">
                    <b>Nom</b>
                    <span className="float-right">{agent.name}</span>
                </li>
                <li className="list-group-item">
                    <b>Téléphone</b>
                    <span className="float-right">{agent.phone}</span>
                </li>
                <li className="list-group-item">
                    <b>Zone</b>
                    <span className="float-right">{agent.zone.name}</span>
                </li>
                <li className="list-group-item">
                    <b>Solde total</b>
                    <span className="float-right text-success text-bold">{formatNumber(agent.account.balance)}</span>
                </li>
                <li className="list-group-item">
                    <b>Créer par</b>
                    <span className="float-right">{agent.creator.name}</span>
                </li>
            </ul>
            <div className="mt-2 text-center">
                {agent.actionLoader ? <LoaderComponent little={true} /> : (
                    <button type="button"
                            className="btn-theme btn"
                            onClick={() => setAgentDetailsModal({...agentDetailsModal, show: true, id: agent.id})}
                    >
                        <i className="fa fa-eye" /> Détails
                    </button>
                )}
            </div>
            {/* Modal */}
            <FormModalComponent modal={agentDetailsModal} handleClose={handleAgentDetailsModalHide}>
                <AgentDetailsContainer id={agentDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
AgentCardComponent.propTypes = {
    agent: PropTypes.object.isRequired
};

export default React.memo(AgentCardComponent);
