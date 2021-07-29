import React, {useState} from 'react';
import PropTypes from "prop-types";

import FormModalComponent from "../modals/FormModalComponent";
import {dateToString} from "../../functions/generalFunctions";
import CollectorDetailsContainer from "../../containers/collectors/CollectorDetailsContainer";

// Component
function ZonesCardsComponent({zones, handleZoneDetailsModalShow}) {
    // Local states
    const [collectorDetailsModal, setCollectorDetailsModal] = useState({show: false, header: "DETAIL DU RESPONSABLE DE ZONE", id: ''});

    // Hide collector details modal form
    const handleCollectorDetailsModalHide = () => {
        setCollectorDetailsModal({...collectorDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {zones.map((item, key) => {
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
                                        <li className="list-group-item">
                                            <b>Reference</b>
                                            <span className="float-right">{item.reference}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Responsable</b>
                                            <span className="float-right">
                                                {item.collector.name && (
                                                    <>
                                                        {item.collector.name}
                                                        <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                           onClick={() => setCollectorDetailsModal({...collectorDetailsModal, show: true, id: item.collector.id})}
                                                        />
                                                    </>
                                                )}
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        <button type="button"
                                                className="btn btn-sm btn-theme"
                                                onClick={() => handleZoneDetailsModalShow(item)}
                                        >
                                            <i className="fa fa-eye" /> Détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {zones.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas de zone
                        </div>
                    </div>
                }
            </div>
            {/* Modal */}
            <FormModalComponent modal={collectorDetailsModal} handleClose={handleCollectorDetailsModalHide}>
                <CollectorDetailsContainer id={collectorDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
ZonesCardsComponent.propTypes = {
    zones: PropTypes.array.isRequired,
    handleZoneDetailsModalShow: PropTypes.func.isRequired
};

export default React.memo(ZonesCardsComponent);
