import PropTypes from "prop-types";
import React, {useState} from 'react';

import OperatorComponent from "../OperatorComponent";
import FormModalComponent from "../modals/FormModalComponent";
import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import {DONE, PENDING, PROCESSING} from "../../constants/typeConstants";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";
import AgentDetailsContainer from "../../containers/agents/AgentDetailsContainer";

// Component
function OperationsFleetsCardsComponent({supplies, handleSupplyDetailsModalShow}) {
    // Local states
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: 'DETAIL DU COMPTE', id: ''});
    const [agentDetailsModal, setAgentDetailsModal] = useState({show: false, header: "DETAIL DE L'AGENT/RESSOURCE", id: ''});

    // Hide agent details modal form
    const handleAgentDetailsModalHide = () => {
        setAgentDetailsModal({...agentDetailsModal, show: false})
    }

    // Hide sim details modal form
    const handleSimDetailsModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {supplies.map((item, key) => {
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
                                            <b>Agent/Ressource</b>
                                            <span className="float-right">
                                                {item.agent.name}
                                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                   onClick={() => setAgentDetailsModal({...agentDetailsModal, show: true, id: item.agent.id})}
                                                />
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Compte émetteur</b>
                                            <span className="float-right">
                                                {item.sim_outgoing.number}
                                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                   onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: item.sim_outgoing.id})}
                                                />
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Compte recepteur</b>
                                            <span className="float-right">
                                                {item.sim_incoming.number}
                                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                   onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: item.sim_incoming.id})}
                                                />
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Monant flotté</b>
                                            <span className="float-right text-success text-bold">
                                                {formatNumber(item.amount)}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Reste récouvrir</b>
                                            <span className="float-right text-danger text-bold">
                                                {formatNumber(item.remaining)}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Responsable</b>
                                            <span className="float-right">{item.supplier.name}</span>
                                        </li>
                                        <li className="list-group-item">
                                            {item.status === DONE && <b className="text-success text-bold">Recouvert totalement</b>}
                                            {item.status === PROCESSING && <b className="text-primary text-bold">Recouvert partiellement</b>}
                                            {item.status === PENDING && <b className="text-danger text-bold">En attente de recouvrement</b>}
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        <button type="button"
                                                className="btn btn-theme btn-sm mb-2"
                                                onClick={() => handleSupplyDetailsModalShow(item)}
                                        >
                                            <i className="fa fa-eye" /> Details
                                        </button><br/>
                                        {/*{item.status !== DONE && (
                                            item.actionLoader ? <LoaderComponent little={true} /> : (
                                                <>
                                                    <button type="button"
                                                            className="btn btn-theme btn-sm mb-2"
                                                            onClick={() => handleFleetRecoveryModalShow(item)}
                                                    >
                                                        <i className="fa fa-redo" /> Retour flotte
                                                    </button><br/>
                                                    <button type="button"
                                                            className="btn btn-theme mb-2 btn-sm"
                                                            onClick={() => handleCashRecoveryModalShow(item)}
                                                    >
                                                        <i className="fa fa-hand-paper" /> Recouvrement espèce
                                                    </button>
                                                </>
                                            )
                                        )}*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {supplies.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas de flottages
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
        </>
    )
}

// Prop types to ensure destroyed props data type
OperationsFleetsCardsComponent.propTypes = {
    supplies: PropTypes.array.isRequired,
    // handleCashRecoveryModalShow: PropTypes.func.isRequired,
    handleSupplyDetailsModalShow: PropTypes.func.isRequired,
    // handleFleetRecoveryModalShow: PropTypes.func.isRequired,
};

export default React.memo(OperationsFleetsCardsComponent);
