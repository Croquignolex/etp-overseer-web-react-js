import React, {useState} from 'react';
import PropTypes from "prop-types";

import {AGENT_TYPE} from "../../constants/typeConstants";
import FormModalComponent from "../modals/FormModalComponent";
import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import AgentDetailsContainer from "../../containers/agents/AgentDetailsContainer";
import ResourceDetailsContainer from "../../containers/resources/ResourceDetailsContainer";

// Component
function RecoveriesCashCardsComponent({recoveries}) {
    // Local states
    const [agentDetailsModal, setAgentDetailsModal] = useState({show: false, header: "DETAIL DE L'AGENT", id: ''});
    const [resourceDetailsModal, setResourceDetailsModal] = useState({show: false, header: "DETAIL DE LA RESSOURCE", id: ''});

    // Hide agent details modal form
    const handleAgentDetailsModalHide = () => {
        setAgentDetailsModal({...agentDetailsModal, show: false})
    }

    // Hide resource details modal form
    const handleResourceDetailsModalHide = () => {
        setResourceDetailsModal({...resourceDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {recoveries.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className={`${fleetTypeBadgeColor(item.status).background} card-header`} />
                                <div className="card-body">
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Montant</b>
                                            <span className="float-right text-success text-bold">
                                                {formatNumber(item.amount)}
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
                                            <b>Responsable</b>
                                            <span className="float-right">{item.collector.name}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {recoveries.length === 0 &&
                <div className="col-12">
                    <div className='alert custom-active text-center'>
                        Pas de recouvrements d'espèces
                    </div>
                </div>
                }
            </div>
            {/* Modal */}
            <FormModalComponent modal={agentDetailsModal} handleClose={handleAgentDetailsModalHide}>
                <AgentDetailsContainer id={agentDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent modal={resourceDetailsModal} handleClose={handleResourceDetailsModalHide}>
                <ResourceDetailsContainer id={resourceDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
RecoveriesCashCardsComponent.propTypes = {
    recoveries: PropTypes.array.isRequired
};

export default React.memo(RecoveriesCashCardsComponent);
