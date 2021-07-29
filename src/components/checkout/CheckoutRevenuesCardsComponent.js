import PropTypes from "prop-types";
import React, {useState} from 'react';

import FormModalComponent from "../modals/FormModalComponent";
import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import {dateToString, formatNumber} from "../../functions/generalFunctions";
import VendorDetailsContainer from "../../containers/vendors/VendorDetailsContainer";

// Component
function CheckoutRevenuesCardsComponent({revenues}) {
    // Local states
    const [vendorDetailsModal, setVendorDetailsModal] = useState({show: false, header: "DETAIL DU FOURNISSEUR", id: ''});

    // Hide vendor details modal form
    const handleVendorDetailsModalHide = () => {
        setVendorDetailsModal({...vendorDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <div className="row m-1">
                {revenues.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className={`${fleetTypeBadgeColor(item.status).background} card-header`} />
                                <div className="card-body">
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        {(item.vendor.id === '') ? (
                                            <li className="list-group-item">
                                                <b>Nom</b>
                                                <span className="float-right">{item.name}</span>
                                            </li>
                                        ) : (
                                            <li className="list-group-item">
                                                <b>Fournisseur</b>
                                                <span className="float-right">
                                                    {item.vendor.name}
                                                    <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                       onClick={() => setVendorDetailsModal({...vendorDetailsModal, show: true, id: item.vendor.id})}
                                                    />
                                                </span>
                                            </li>
                                        )}
                                        <li className="list-group-item">
                                            <b>Monant</b>
                                            <span className="float-right text-success text-bold">
                                                {formatNumber(item.amount)}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Responsable</b>
                                            <span className="float-right">
                                                {item.manager.name}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Motif</b>
                                            <span className="float-right">{item.reason}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {revenues.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas d'encaissements externes
                        </div>
                    </div>
                }
            </div>
            {/* Modal */}
            <FormModalComponent small={true} modal={vendorDetailsModal} handleClose={handleVendorDetailsModalHide}>
                <VendorDetailsContainer id={vendorDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
CheckoutRevenuesCardsComponent.propTypes = {
    revenues: PropTypes.array.isRequired
};

export default React.memo(CheckoutRevenuesCardsComponent);
