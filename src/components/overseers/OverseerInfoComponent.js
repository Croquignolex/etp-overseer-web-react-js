import React from 'react';
import PropTypes from "prop-types";

import {dateToString} from "../../functions/generalFunctions";

// Component
function OverseerInfoComponent({overseer}) {
    // Render
    return (
        <>
            <div className="card">
                <div className="card-header bg-secondary" />
                <div className="card-body">
                    <div className="text-center mb-2">
                        <img src={overseer.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                        <div className="float-right">
                            {overseer.status
                                ?  <span className="badge badge-success">Activé</span>
                                :  <span className="badge badge-danger">Bloqué</span>
                            }
                        </div>
                    </div>
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(overseer.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{overseer.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Téléphone</b>
                            <span className="float-right">{overseer.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Email</b>
                            <span className="float-right">{overseer.email}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Créer par</b>
                            <span className="float-right">{overseer.creator.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Adresse</b>
                            <p>{overseer.address}</p>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{overseer.description}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
OverseerInfoComponent.propTypes = {
    overseer: PropTypes.object.isRequired
};

export default React.memo(OverseerInfoComponent);
