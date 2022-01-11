import React, {useState} from 'react';
import PropTypes from "prop-types";

import LoaderComponent from "../LoaderComponent";
import {dateToString} from "../../functions/generalFunctions";
import FormModalComponent from "../modals/FormModalComponent";
import AgencyDetailsContainer from "../../containers/agencies/AgencyDetailsContainer";

// Component
function ResourcesCardsComponent({agents, handleBlock, handleBlockModalShow, handleAgentDetailsModalShow}) {
    // Local states
    const [agencyDetailsModal, setAgencyDetailsModal] = useState({show: false, header: "DETAIL DE L'AGENCE", id: ''});

    // Hide agency details modal form
    const handleAgencyDetailModalHide = () => {
        setAgencyDetailsModal({...agencyDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {agents.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className="card-header bg-secondary" />
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <img src={item.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                                        <div className="float-right">
                                            {item.actionLoader ? <LoaderComponent little={true} /> :(
                                                item.status
                                                    ? <i onClick={() => handleBlockModalShow(item)}
                                                         className='fa fa-lock-open text-success hand-cursor'
                                                    />
                                                    : <i className='fa fa-lock text-danger hand-cursor'
                                                         onClick={() => handleBlock(item.id)}
                                                    />
                                            )}
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
                                            <b>Agence</b>
                                            <span className="float-right">
                                                {item.agency.name}
                                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                   onClick={() => setAgencyDetailsModal({...agencyDetailsModal, show: true, id: item.agency.id})}
                                                />
                                            </span>
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
            <FormModalComponent modal={agencyDetailsModal} handleClose={handleAgencyDetailModalHide}>
                <AgencyDetailsContainer id={agencyDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
ResourcesCardsComponent.propTypes = {
    agents: PropTypes.array.isRequired,
    handleBlock: PropTypes.func.isRequired,
    handleBlockModalShow: PropTypes.func.isRequired,
    handleAgentDetailsModalShow: PropTypes.func.isRequired,
};

export default React.memo(ResourcesCardsComponent);
