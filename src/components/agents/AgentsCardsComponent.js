import React, {useState} from 'react';
import PropTypes from "prop-types";

import FormModalComponent from "../modals/FormModalComponent";
import {agentTypeBadgeColor} from "../../functions/typeFunctions";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import ZoneDetailsContainer from "../../containers/zones/ZoneDetailsContainer";

// Component
function AgentsCardsComponent({agents, handleAgentDetailsModalShow}) {
    // Local states
    const [zoneDetailsModal, setZoneDetailsModal] = useState({show: false, header: 'DETAIL DE LA ZONE', id: ''});

    // Hide zone details modal form
    const handleZoneDetailModalHide = () => {
        setZoneDetailsModal({...zoneDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {agents.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className={`${agentTypeBadgeColor(item.reference).background} card-header`}>
                                    <h3 className="card-title">
                                        {agentTypeBadgeColor(item.reference).text}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <img src={item.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                                        {/*<div className="float-right">
                                            {item.actionLoader ? <LoaderComponent little={true} /> :(
                                                item.status
                                                    ? <i onClick={() => handleBlockModalShow(item)}
                                                         className='fa fa-lock-open text-success hand-cursor'
                                                    />
                                                    : <i className='fa fa-lock text-danger hand-cursor'
                                                         onClick={() => handleBlock(item.id)}
                                                    />
                                            )}
                                        </div>*/}
                                        <div className="float-right">
                                            {item.status
                                                ?  <span className="badge badge-success">Activé</span>
                                                :  <span className="badge badge-danger">Bloqué</span>
                                            }
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Nom</b>
                                            <span className="float-right">{item.name}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Téléphone</b>
                                            <span className="float-right">{item.phone}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Zone</b>
                                            <span className="float-right">
                                                {item.zone.name}
                                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                   onClick={() => setZoneDetailsModal({...zoneDetailsModal, show: true, id: item.zone.id})}
                                                />
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Solde total</b>
                                            <span className="float-right text-success text-bold">{formatNumber(item.account.balance)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Créer par</b>
                                            <span className="float-right">{item.creator.name}</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        <button type="button"
                                                className="btn btn-sm btn-theme"
                                                onClick={() => handleAgentDetailsModalShow(item)}
                                        >
                                            <i className="fa fa-eye" /> Détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {agents.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas d'agents
                        </div>
                    </div>
                }
            </div>
            {/* Modal */}
            <FormModalComponent modal={zoneDetailsModal} handleClose={handleZoneDetailModalHide}>
                <ZoneDetailsContainer id={zoneDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
AgentsCardsComponent.propTypes = {
    agents: PropTypes.array.isRequired,
    handleAgentDetailsModalShow: PropTypes.func.isRequired,
};

export default React.memo(AgentsCardsComponent);
