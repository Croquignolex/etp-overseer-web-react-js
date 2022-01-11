import PropTypes from "prop-types";
import React, {useState} from 'react';

import {dateToString} from "../../functions/generalFunctions";
import FormModalComponent from "../modals/FormModalComponent";
import ResourceDetailsContainer from "../../containers/resources/ResourceDetailsContainer";

// Component
function AgenciesCardsComponent({agencies, handleAgencyDetailsModalShow}) {
    // Local states
    const [agentDetailsModal, setAgentDetailsModal] = useState({show: false, header: "DETAIL DE LA RESSOURCE", id: ''});

    // Hide agent details modal form
    const handleAgentDetailsModalHide = () => {
        setAgentDetailsModal({...agentDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {agencies.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className="card-header bg-secondary" />
                                <div className="card-body">
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Nom</b>
                                            <span className="float-right">{item.name}</span>
                                        </li>
                                        {/*<li className="list-group-item">
                                            <b>Responsable</b>
                                            <span className="float-right">
                                                {item.manager.name}
                                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                   onClick={() => setAgentDetailsModal({...agentDetailsModal, show: true, id: item.manager.id})}
                                                />
                                            </span>
                                        </li>*/}
                                    </ul>
                                    <div className="mt-3 text-right">
                                        <button type="button"
                                                className="btn btn-sm btn-theme"
                                                onClick={() => handleAgencyDetailsModalShow(item)}
                                        >
                                            <i className="fa fa-eye" /> Détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {agencies.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas d'agences
                        </div>
                    </div>
                }
            </div>
            <FormModalComponent modal={agentDetailsModal} handleClose={handleAgentDetailsModalHide}>
                <ResourceDetailsContainer id={agentDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
AgenciesCardsComponent.propTypes = {
    agencies: PropTypes.array.isRequired,
    handleAgencyDetailsModalShow: PropTypes.func.isRequired
};

export default React.memo(AgenciesCardsComponent);
