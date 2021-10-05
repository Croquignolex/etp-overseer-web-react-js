import PropTypes from "prop-types";
import React, {useState} from 'react';

import FormModalComponent from "../modals/FormModalComponent";
import ZoneDetailsContainer from "../../containers/zones/ZoneDetailsContainer";

// Component
function AgentSecondaryInfoComponent({agent}) {
    // Local states
    const [zoneDetailsModal, setZoneDetailsModal] = useState({show: false, header: 'DETAIL DE LA ZONE', id: ''});
    // const [zoneEditModal, setZoneEditModal] = useState({show: false, header: 'MODIFIER LA ZONE DE ' + agent.name});
    // const [docEditModal, setDocEditModal] = useState({show: false, header: 'MODIFIER LE DOSSIER DE ' + agent.name});

   /* // Show zone edit modal form
    const handleZoneEditModalShow = () => {
        setZoneEditModal({...zoneEditModal, show: true})
    }

    // Hide zone edit modal form
    const handleZoneEditModalHide = () => {
        setZoneEditModal({...zoneEditModal, show: false})
    }

    // Show doc edit modal form
    const handleDocEditModalShow = () => {
        setDocEditModal({...docEditModal, show: true})
    }

    // Hide doc edit modal form
    const handleDocEditModalHide = () => {
        setDocEditModal({...docEditModal, show: false})
    }*/

    // Hide zone details modal form
    const handleZoneDetailModalHide = () => {
        setZoneDetailsModal({...zoneDetailsModal, show: false})
    }

    // Render
    return (
        <>
           {/* <button type="button" className="btn btn-theme mr-1 mb-1" onClick={handleZoneEditModalShow}>
                <i className="fa fa-edit" /> Modifier la zone
            </button>
            <button type="button" className="btn btn-theme mb-1" onClick={handleDocEditModalShow}>
                <i className="fa fa-edit" /> Modifier le dossier
            </button>*/}
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
                            <b>Zone</b>
                            <span className="float-right">
                                {agent.zone.name}
                                {agent.zone.id !== '' && (
                                    <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                       onClick={() => setZoneDetailsModal({...zoneDetailsModal, show: true, id: agent.zone.id})}
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
            {/*<FormModalComponent modal={zoneEditModal} handleClose={handleZoneEditModalHide}>
                <AgentZoneEditContainer handleClose={handleZoneEditModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={docEditModal} handleClose={handleDocEditModalHide}>
                <AgentDocEditContainer handleClose={handleDocEditModalHide} />
            </FormModalComponent>*/}
            <FormModalComponent modal={zoneDetailsModal} handleClose={handleZoneDetailModalHide}>
                <ZoneDetailsContainer id={zoneDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
AgentSecondaryInfoComponent.propTypes = {
    agent: PropTypes.object.isRequired
};

export default React.memo(AgentSecondaryInfoComponent);
