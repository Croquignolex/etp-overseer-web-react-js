import PropTypes from "prop-types";
import React, {useState} from 'react';

import FormModalComponent from "../modals/FormModalComponent";
import AgentDocEditContainer from "../../containers/agents/AgentDocEditContainer";
import AgencyDetailsContainer from "../../containers/agencies/AgencyDetailsContainer";
import ResourceAgencyEditContainer from "../../containers/resources/ResourceAgencyEditContainer";

// Component
function ResourceSecondaryInfoComponent({agent}) {
    // Local states
    const [docEditModal, setDocEditModal] = useState({show: false, header: 'MODIFIER LE DOSSIER DE ' + agent.name});
    const [agencyDetailsModal, setAgencyDetailsModal] = useState({show: false, header: "DETAIL DE L'AGENCE", id: ''});
    const [agencyEditModal, setAgencyEditModal] = useState({show: false, header: "MODIFIER L'AGENCE DE " + agent.name});

    // Show agency edit modal form
    const handleAgencyEditModalShow = () => {
        setAgencyEditModal({...agencyEditModal, show: true})
    }

    // Hide zone edit modal form
    const handleAgencyEditModalHide = () => {
        setAgencyEditModal({...agencyEditModal, show: false})
    }

    // Show doc edit modal form
    const handleDocEditModalShow = () => {
        setDocEditModal({...docEditModal, show: true})
    }

    // Hide doc edit modal form
    const handleDocEditModalHide = () => {
        setDocEditModal({...docEditModal, show: false})
    }

    // Hide agency details modal form
    const handleAgencyDetailModalHide = () => {
        setAgencyDetailsModal({...agencyDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <button type="button" className="btn btn-theme mr-1 mb-1" onClick={handleAgencyEditModalShow}>
                <i className="fa fa-edit" /> Modifier l'agence
            </button>
            <button type="button" className="btn btn-theme mb-1" onClick={handleDocEditModalShow}>
                <i className="fa fa-edit" /> Modifier le dossier
            </button>
            <div className="card">
                <div className="card-body">
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Créer par</b>
                            <span className="float-right">{agent.creator.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Ville</b>
                            <span className="float-right">{agent.town}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Pays</b>
                            <span className="float-right">{agent.country}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Agence</b>
                            <span className="float-right">
                                {agent.agency.name}
                                {agent.agency.id !== '' && (
                                    <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                       onClick={() => setAgencyDetailsModal({...agencyDetailsModal, show: true, id: agent.agency.id})}
                                    />
                                )}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Address</b>
                            <p>{agent.address}</p>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{agent.description}</p>
                        </li>
                        {agent.document && (
                            <li className="list-group-item text-center">
                                <a download target='_blank' href={agent.document} rel='noopener noreferrer' className="btn btn-theme">
                                    <i className="fa fa-file-archive" /> Dossier agent
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {/* Modal */}
            <FormModalComponent modal={agencyEditModal} handleClose={handleAgencyEditModalHide}>
                <ResourceAgencyEditContainer handleClose={handleAgencyEditModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={docEditModal} handleClose={handleDocEditModalHide}>
                <AgentDocEditContainer handleClose={handleDocEditModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={agencyDetailsModal} handleClose={handleAgencyDetailModalHide}>
                <AgencyDetailsContainer id={agencyDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
ResourceSecondaryInfoComponent.propTypes = {
    agent: PropTypes.object.isRequired
};

export default React.memo(ResourceSecondaryInfoComponent);
