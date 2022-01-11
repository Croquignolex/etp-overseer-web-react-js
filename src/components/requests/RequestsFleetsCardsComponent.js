import PropTypes from "prop-types";
import React, {useState} from 'react';

import OperatorComponent from "../OperatorComponent";
import FormModalComponent from "../modals/FormModalComponent";
import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";
import {AGENT_TYPE, CANCEL, DONE, PENDING} from "../../constants/typeConstants";
import AgentDetailsContainer from "../../containers/agents/AgentDetailsContainer";
import ResourceDetailsContainer from "../../containers/resources/ResourceDetailsContainer";
import CollectorDetailsContainer from "../../containers/collectors/CollectorDetailsContainer";

// Component
function RequestsFleetsCardsComponent({fleets}) {
    // Local states
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: "DETAIL DU COMPTE", id: ''});
    const [agentDetailsModal, setAgentDetailsModal] = useState({show: false, header: "DETAIL DE L'AGENT", id: ''});
    const [resourceDetailsModal, setResourceDetailsModal] = useState({show: false, header: "DETAIL DE LA RESSOURCE", id: ''});
    const [collectorDetailsModal, setCollectorDetailsModal] = useState({show: false, header: "DETAIL DU RESPONSABLE DE ZONE", id: ''});

    // Hide agent details modal form
    const handleAgentDetailsModalHide = () => {
        setAgentDetailsModal({...agentDetailsModal, show: false})
    }

    // Hide sim details modal form
    const handleSimDetailsModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Hide collector details modal form
    const handleCollectorDetailsModalHide = () => {
        setCollectorDetailsModal({...collectorDetailsModal, show: false})
    }

    // Hide resource details modal form
    const handleResourceDetailsModalHide = () => {
        setResourceDetailsModal({...resourceDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {fleets.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className={`${fleetTypeBadgeColor(item.status).background} card-header`} />
                                <div className="card-body">
                                    <ul className="list-group list-group-unbordered">
                                        <OperatorComponent operator={item.operator} />
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Montant demandé</b>
                                            <span className="float-right text-success text-bold">
                                                {formatNumber(item.amount)}
                                            </span>
                                        </li>
                                        {(DONE === item.status) &&
                                            <li className="list-group-item">
                                                <b>Montant envoyé</b>
                                                <span className="float-right text-danger text-bold">
                                                        {formatNumber(item.amount - item.remaining)}
                                                    </span>
                                            </li>
                                        }
                                        <li className="list-group-item">
                                            <b>Compte à flotter</b>
                                            <span className="float-right">
                                                {item.sim.number}
                                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                   onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: item.sim.id})}
                                                />
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>{(item.agent?.reference === AGENT_TYPE) ? "Agent" : "Ressource"}</b>
                                            <span className="float-right">
                                                {item.agent.name}
                                                {(item.agent?.reference === AGENT_TYPE)
                                                    ? <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                         onClick={() => setAgentDetailsModal({...agentDetailsModal, show: true, id: item.agent.id})}
                                                    />
                                                    : <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                         onClick={() => setResourceDetailsModal({...resourceDetailsModal, show: true, id: item.agent.id})}
                                                    />
                                                }
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Demandeur</b>
                                            <span className="float-right">
                                                {item.claimant.name}
                                                {(item.claimant.id === item.agent.id)
                                                    ? <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                       onClick={() => setAgentDetailsModal({...agentDetailsModal, show: true, id: item.agent.id})}
                                                    />
                                                    : <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                       onClick={() => setCollectorDetailsModal({...collectorDetailsModal, show: true, id: item.claimant.id})}
                                                    />
                                                }
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            {item.status === DONE && <b className="text-success text-bold">Flottée</b>}
                                            {item.status === CANCEL && <b className="text-danger text-bold">Annulé</b>}
                                            {item.status === PENDING && <b className="text-danger text-bold">En attente de flottage</b>}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {fleets.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas de demandes de flotte
                        </div>
                    </div>
                }
            </div>
            {/* Modal */}
            <FormModalComponent modal={agentDetailsModal} handleClose={handleAgentDetailsModalHide}>
                <AgentDetailsContainer id={agentDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent small={true} modal={simDetailsModal} handleClose={handleSimDetailsModalHide}>
                <SimDetailsContainer id={simDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent modal={collectorDetailsModal} handleClose={handleCollectorDetailsModalHide}>
                <CollectorDetailsContainer id={collectorDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent modal={resourceDetailsModal} handleClose={handleResourceDetailsModalHide}>
                <ResourceDetailsContainer id={resourceDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
RequestsFleetsCardsComponent.propTypes = {
    fleets: PropTypes.array.isRequired
};

export default React.memo(RequestsFleetsCardsComponent);
