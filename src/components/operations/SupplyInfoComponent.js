import PropTypes from "prop-types";
import React, {useState} from 'react';

import OperatorComponent from "../OperatorComponent";
import FormModalComponent from "../modals/FormModalComponent";
import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";
import AgentDetailsContainer from "../../containers/agents/AgentDetailsContainer";
import ManagerDetailsContainer from "../../containers/managers/ManagerDetailsContainer";

// Component
function SupplyInfoComponent({supply}) {
    // Local states
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: 'DETAIL DU COMPTE', id: ''});
    const [agentDetailsModal, setAgentDetailsModal] = useState({show: false, header: "DETAIL DE L'AGENT/RESSOURCE", id: ''});
    const [managerDetailsModal, setManagerDetailsModal] = useState({show: false, header: "DETAIL DE LA GESTIONNAIRE", id: ''});

    // Hide agent details modal form
    const handleAgentDetailsModalHide = () => {
        setAgentDetailsModal({...agentDetailsModal, show: false})
    }

    // Hide manager details modal form
    const handleManagerDetailsModalHide = () => {
        setManagerDetailsModal({...managerDetailsModal, show: false})
    }

    // Hide sim details modal form
    const handleSimDetailsModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="card">
                <div className={`${fleetTypeBadgeColor(supply.status).background} card-header`} />
                <div className="card-body">
                    <ul className="list-group list-group-unbordered mb-3">
                        <OperatorComponent operator={supply.operator} />
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(supply.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Agent/Ressource</b>
                            <span className="float-right">
                                {supply.agent.name}
                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                   onClick={() => setAgentDetailsModal({...agentDetailsModal, show: true, id: supply.agent.id})}
                                />
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Compte émetteur</b>
                            <span className="float-right">
                                {supply.sim_outgoing.number}
                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                   onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: supply.sim_outgoing.id})}
                                />
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Compte recepteur</b>
                            <span className="float-right">
                                {supply.sim_incoming.number}
                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                   onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: supply.sim_incoming.id})}
                                />
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Montant floté</b>
                            <span className="float-right text-success text-bold">
                                {formatNumber(supply.amount)}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Reste récouvrir</b>
                            <span className="float-right text-danger text-bold">{formatNumber(supply.remaining)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Responsable</b>
                            <span className="float-right">
                                {supply.supplier.name}
                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                   onClick={() => setManagerDetailsModal({...managerDetailsModal, show: true, id: supply.supplier.id})}
                                />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            <FormModalComponent modal={agentDetailsModal} handleClose={handleAgentDetailsModalHide}>
                <AgentDetailsContainer id={agentDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent small={true} modal={simDetailsModal} handleClose={handleSimDetailsModalHide}>
                <SimDetailsContainer id={simDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent small={true} modal={managerDetailsModal} handleClose={handleManagerDetailsModalHide}>
                <ManagerDetailsContainer id={managerDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
SupplyInfoComponent.propTypes = {
    supply: PropTypes.object.isRequired
};

export default React.memo(SupplyInfoComponent);
