import PropTypes from "prop-types";
import React, {useState} from 'react';

import FormModalComponent from "../modals/FormModalComponent";
import {dateToString} from "../../functions/generalFunctions";
import AccountantInfoEditContainer from "../../containers/accountants/AccountantInfoEditContainer";

// Component
function AccountantInfoComponent({accountant}) {
    // Local states
    const [infoEditModal, setInfoEditModal] = useState({show: false, header: 'MODIFIER LES INFO DE ' + accountant.name});

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
            <button type="button" className="btn btn-theme mb-1 mr-1" onClick={handleInfoEditModalShow}>
                <i className="fa fa-pencil" /> Modifier les info
            </button>
            <div className="card">
                <div className="card-header bg-secondary" />
                <div className="card-body">
                    <div className="text-center mb-2">
                        <img src={accountant.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                        <div className="float-right">
                            {accountant.status
                                ?  <span className="badge badge-success">Activé</span>
                                :  <span className="badge badge-danger">Bloqué</span>
                            }
                        </div>
                    </div>
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(accountant.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{accountant.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Téléphone</b>
                            <span className="float-right">{accountant.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Email</b>
                            <span className="float-right">{accountant.email}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Créer par</b>
                            <span className="float-right">{accountant.creator.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Adresse</b>
                            <p>{accountant.address}</p>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{accountant.description}</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            <FormModalComponent modal={infoEditModal} handleClose={handleInfoEditModalHide}>
                <AccountantInfoEditContainer handleClose={handleInfoEditModalHide} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
AccountantInfoComponent.propTypes = {
    accountant: PropTypes.object.isRequired
};

export default React.memo(AccountantInfoComponent);
