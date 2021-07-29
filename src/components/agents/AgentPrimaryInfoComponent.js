import PropTypes from "prop-types";
import React, {useState} from 'react';

import FormModalComponent from "../modals/FormModalComponent";
import {dateToString} from "../../functions/generalFunctions";
import {agentTypeBadgeColor} from "../../functions/typeFunctions";
import AgentPrimaryInfoEditContainer from "../../containers/agents/AgentPrimaryInfoEditContainer";

// Component
function AgentPrimaryInfoComponent({agent}) {
    // Local states
    const [infoEditModal, setInfoEditModal] = useState({show: false, header: 'MODIFIER LES INFO DE ' + agent.name});

    // Show info edit modal form
    const handleInfoEditModalShow = () => {
        setInfoEditModal({...infoEditModal, show: true})
    }

    // Hide info edit modal form
    const handleInfoEditModalHide = () => {
        setInfoEditModal({...infoEditModal, show: false})
    }

    // Render
    return (
        <>
            <button type="button" className="btn btn-theme mb-1" onClick={handleInfoEditModalShow}>
                <i className="fa fa-pencil" /> Modifier les info
            </button>
            <div className="card">
                <div className={`${agentTypeBadgeColor(agent.reference).background} card-header`}>
                    <h3 className="card-title">{agentTypeBadgeColor(agent.reference).text}</h3>
                    <div className="card-tools">
                        {agent.status
                            ?  <span className="badge badge-success">Activé</span>
                            :  <span className="badge badge-danger">Bloqué</span>
                        }
                    </div>
                </div>
                <div className="card-body">
                    <div className="text-center mb-2">
                        <img src={agent.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                    </div>
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(agent.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{agent.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Téléphone</b>
                            <span className="float-right">{agent.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Email</b>
                            <span className="float-right">{agent.email}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            <FormModalComponent modal={infoEditModal} handleClose={handleInfoEditModalHide}>
                <AgentPrimaryInfoEditContainer handleClose={handleInfoEditModalHide} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
AgentPrimaryInfoComponent.propTypes = {
    agent: PropTypes.object.isRequired
};

export default React.memo(AgentPrimaryInfoComponent);
