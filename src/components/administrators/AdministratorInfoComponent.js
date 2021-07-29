import React from 'react';
import PropTypes from "prop-types";

import {dateToString} from "../../functions/generalFunctions";

// Component
function AdministratorInfoComponent({administrator}) {
    // Render
    return (
        <>
            <div className="card">
                <div className="card-header bg-secondary" />
                <div className="card-body">
                    <div className="text-center mb-2">
                        <img src={administrator.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                        <div className="float-right">
                            {administrator.status
                                ?  <span className="badge badge-success">Activé</span>
                                :  <span className="badge badge-danger">Bloqué</span>
                            }
                        </div>
                    </div>
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(administrator.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{administrator.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Téléphone</b>
                            <span className="float-right">{administrator.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Email</b>
                            <span className="float-right">{administrator.email}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Créer par</b>
                            <span className="float-right">{administrator.creator.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Adresse</b>
                            <p>{administrator.address}</p>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{administrator.description}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
AdministratorInfoComponent.propTypes = {
    administrator: PropTypes.object.isRequired
};

export default React.memo(AdministratorInfoComponent);
