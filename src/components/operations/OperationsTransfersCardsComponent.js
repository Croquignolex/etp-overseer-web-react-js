import React, {useState} from 'react';
import PropTypes from "prop-types";

import OperatorComponent from "../OperatorComponent";
import FormModalComponent from "../modals/FormModalComponent";
import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import {CANCEL, DONE, PROCESSING} from "../../constants/typeConstants";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";

// Component
function OperationsTransfersCardsComponent({transfers}) {
    // Local states
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: 'DETAIL DU COMPTE', id: ''});

    // Hide sim details modal form
    const handleSimDetailModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {transfers.map((item, key) => {
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
                                            <b>Flotte envoyé</b>
                                            <span className="float-right text-success text-bold">
                                                {formatNumber(item.amount)}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Emetteur</b>
                                            <span className="float-right">{item.user.name}</span>
                                        </li>
                                        <li className="list-group-item">
                                            {item.status === DONE && <b className="text-success text-bold">Confirmé</b>}
                                            {item.status === CANCEL && <b className="text-danger text-bold">Annulé</b>}
                                            {item.status === PROCESSING && <b className="text-danger text-bold">En attente de confirmation</b>}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {transfers.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas de transferts
                        </div>
                    </div>
                }
            </div>
            {/* Modal */}
            <FormModalComponent small={true} modal={simDetailsModal} handleClose={handleSimDetailModalHide}>
                <SimDetailsContainer id={simDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
OperationsTransfersCardsComponent.propTypes = {
    transfers: PropTypes.array.isRequired,
};

export default React.memo(OperationsTransfersCardsComponent);
