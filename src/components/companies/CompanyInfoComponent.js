import React from 'react';
import PropTypes from "prop-types";

import {dateToString} from "../../functions/generalFunctions";

// Component
function CompanyInfoComponent({company}) {
    // Local states
    // const [infoEditModal, setInfoEditModal] = useState({show: false, header: 'MODIFIER LES INFO DE ' + company.name});
    // const [docEditModal, setDocEditModal] = useState({show: false, header: 'MODIFIER LE DOSSIER DE ' + company.name});

   /* // Show info edit modal form
    const handleInfoEditModalShow = () => {
        setInfoEditModal({...infoEditModal, show: true})
    }

    // Hide info edit modal form
    const handleInfoEditModalHide = () => {
        setInfoEditModal({...infoEditModal, show: false})
    }

    // Show doc edit modal form
    const handleDocEditModalShow = () => {
        setDocEditModal({...docEditModal, show: true})
    }

    // Hide doc edit modal form
    const handleDocEditModalHide = () => {
        setDocEditModal({...docEditModal, show: false})
    }
*/
    // Render
    return (
        <>
            {/*<button type="button" className="btn btn-theme mr-1 mb-1" onClick={handleInfoEditModalShow}>
                <i className="fa fa-edit" /> Modifier les info
            </button>
            <button type="button" className="btn btn-theme mb-1" onClick={handleDocEditModalShow}>
                <i className="fa fa-edit" /> Modifier le dossier
            </button>*/}
            <div className="card">
                <div className="card-header bg-secondary" />
                <div className="card-body">
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(company.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{company.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Responsable</b>
                            <span className="float-right">{company.manager}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Téléphone</b>
                            <span className="float-right">{company.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Adresse</b>
                            <p>{company.address}</p>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{company.description}</p>
                        </li>
                        {company.document && (
                            <li className="list-group-item text-center">
                                <a download target='_blank' href={company.document} rel='noopener noreferrer' className="btn btn-theme">
                                    <i className="fa fa-file-archive" /> Dossier
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {/* Modal */}
            {/*<FormModalComponent modal={infoEditModal} handleClose={handleInfoEditModalHide}>
                <CompanyInfoEditContainer handleClose={handleInfoEditModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={docEditModal} handleClose={handleDocEditModalHide}>
                <CompanyDocEditContainer handleClose={handleDocEditModalHide} />
            </FormModalComponent>*/}
        </>
    )
}

// Prop types to ensure destroyed props data type
CompanyInfoComponent.propTypes = {
    company: PropTypes.object.isRequired
};

export default React.memo(CompanyInfoComponent);
