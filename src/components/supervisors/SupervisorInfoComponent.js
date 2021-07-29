import React from 'react';
import PropTypes from "prop-types";

import {dateToString, formatNumber} from "../../functions/generalFunctions";

// Component
function SupervisorInfoComponent({supervisor}) {
    // Render
    return (
        <>
            <div className="card">
                <div className="card-header bg-secondary" />
                <div className="card-body">
                    <div className="text-center mb-2">
                        <img src={supervisor.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                        <div className="float-right">
                            {supervisor.status
                                ?  <span className="badge badge-success">Activé</span>
                                :  <span className="badge badge-danger">Bloqué</span>
                            }
                        </div>
                    </div>
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(supervisor.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{supervisor.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Téléphone</b>
                            <span className="float-right">{supervisor.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Email</b>
                            <span className="float-right">{supervisor.email}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Solde caisse</b>
                            <span className="float-right text-success text-bold">{formatNumber(supervisor.account.balance)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Créer par</b>
                            <span className="float-right">{supervisor.creator.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Adresse</b>
                            <p>{supervisor.address}</p>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{supervisor.description}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
SupervisorInfoComponent.propTypes = {
    supervisor: PropTypes.object.isRequired
};

export default React.memo(SupervisorInfoComponent);
