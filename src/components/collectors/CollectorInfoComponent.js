import PropTypes from "prop-types";
import React, {useMemo, useState} from 'react';

import FormModalComponent from "../modals/FormModalComponent";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import ZoneDetailsContainer from "../../containers/zones/ZoneDetailsContainer";
import CollectorInfoEditContainer from "../../containers/collectors/CollectorInfoEditContainer";
import CollectorZoneEditContainer from "../../containers/collectors/CollectorZoneEditContainer";

// Component
function CollectorInfoComponent({collector}) {
    // Local states
    const [zoneDetailsModal, setZoneDetailsModal] = useState({show: false, header: 'DETAIL DE LA ZONE', id: ''});
    const [zoneEditModal, setZoneEditModal] = useState({show: false, header: 'MODIFIER LA ZONE DE ' + collector.name});
    const [infoEditModal, setInfoEditModal] = useState({show: false, header: 'MODIFIER LES INFO DE ' + collector.name});

    // Show zone edit modal form
    const handleZoneEditModalShow = () => {
        setZoneEditModal({...zoneEditModal, show: true})
    }

    // Hide zone edit modal form
    const handleZoneEditModalHide = () => {
        setZoneEditModal({...zoneEditModal, show: false})
    }

    // Show info edit modal form
    const handleInfoEditModalShow = () => {
        setInfoEditModal({...infoEditModal, show: true})
    }

    // Hide info edit modal form
    const handleInfoEditModalHide = () => {
        setInfoEditModal({...infoEditModal, show: false})
    }

    // Hide zone details modal form
    const handleZoneDetailModalHide = () => {
        setZoneDetailsModal({...zoneDetailsModal, show: false})
    }

    const fleetSimsFleetsData = useMemo(() => {
        return collector.sims.reduce((acc, val) => acc + parseInt(val.balance, 10), 0)
    }, [collector.sims]);

    // Render
    return (
        <>
            <button type="button" className="btn btn-theme mb-1 mr-1" onClick={handleInfoEditModalShow}>
                <i className="fa fa-pencil" /> Modifier les info
            </button>
            <button type="button" className="btn btn-theme mb-1" onClick={handleZoneEditModalShow}>
                <i className="fa fa-pencil" /> Modifier la zone
            </button>
            <div className="card">
                <div className="card-header bg-secondary" />
                <div className="card-body">
                    <div className="text-center mb-2">
                        <img src={collector.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                        <div className="float-right">
                            {collector.status
                                ?  <span className="badge badge-success">Activé</span>
                                :  <span className="badge badge-danger">Bloqué</span>
                            }
                        </div>
                    </div>
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(collector.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{collector.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Téléphone</b>
                            <span className="float-right">{collector.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Email</b>
                            <span className="float-right">{collector.email}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Dette</b>
                            <span className="float-right text-danger text-bold">
                                {formatNumber(collector.debt)}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Solde espèce</b>
                            <span className="float-right text-success text-bold">
                                {formatNumber(collector.account.balance)}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Solde flotte</b>
                            <span className="float-right text-success text-bold">
                                {formatNumber(fleetSimsFleetsData)}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Zone</b>
                            <span className="float-right">
                                {collector.zone.name}
                                <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                   onClick={() => setZoneDetailsModal({...zoneDetailsModal, show: true, id: collector.zone.id})}
                                />
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Créer par</b>
                            <span className="float-right">{collector.creator.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Adresse</b>
                            <p>{collector.address}</p>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{collector.description}</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            <FormModalComponent modal={infoEditModal} handleClose={handleInfoEditModalHide}>
                <CollectorInfoEditContainer handleClose={handleInfoEditModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={zoneEditModal} handleClose={handleZoneEditModalHide}>
                <CollectorZoneEditContainer handleClose={handleZoneEditModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={zoneDetailsModal} handleClose={handleZoneDetailModalHide}>
                <ZoneDetailsContainer id={zoneDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
CollectorInfoComponent.propTypes = {
    collector: PropTypes.object.isRequired
};

export default React.memo(CollectorInfoComponent);
