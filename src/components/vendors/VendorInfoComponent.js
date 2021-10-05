import React from 'react';
import PropTypes from "prop-types";

import {dateToString, formatNumber} from "../../functions/generalFunctions";

// Component
function VendorInfoComponent({vendor}) {
    // Local states
    // const [infoEditModal, setInfoEditModal] = useState({show: false, header: 'MODIFIER LES INFO DE ' + vendor.name});

    /*// Show info edit modal form
    const handleInfoEditModalShow = () => {
        setInfoEditModal({...infoEditModal, show: true})
    }

    // Hide info edit modal form
    const handleInfoEditModalHide = () => {
        setInfoEditModal({...infoEditModal, show: false})
    }*/

    // Render
    return (
        <>
           {/* <button type="button" className="btn btn-theme mb-1" onClick={handleInfoEditModalShow}>
                <i className="fa fa-edit" /> Modifier les info
            </button>*/}
            <div className="card">
                <div className="card-header bg-secondary" />
                <div className="card-body">
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(vendor.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{vendor.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Solde</b>
                            <span className="float-right text-danger text-bold">
                                {formatNumber(vendor.balance)}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{vendor.description}</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            {/*<FormModalComponent small={true} modal={infoEditModal} handleClose={handleInfoEditModalHide}>
                <VendorInfoEditContainer handleClose={handleInfoEditModalHide} />
            </FormModalComponent>*/}
        </>
    )
}

// Prop types to ensure destroyed props data type
VendorInfoComponent.propTypes = {
    vendor: PropTypes.object.isRequired
};

export default React.memo(VendorInfoComponent);
