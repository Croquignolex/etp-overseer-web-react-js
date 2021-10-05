import React from 'react';
import PropTypes from "prop-types";

import OperatorComponent from "../OperatorComponent";
import {dateToString} from "../../functions/generalFunctions";

// Component
function OperatorInfoComponent({operator}) {
    // Local states
    // const [infoEditModal, setInfoEditModal] = useState({show: false, header: 'MODIFIER LES INFO DE ' + operator.name});

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
            {/*<button type="button" className="btn btn-theme mb-1" onClick={handleInfoEditModalShow}>
                <i className="fa fa-edit" /> Modifier les info
            </button>*/}
            <div className="card">
                <div className="card-header bg-secondary" />
                <div className="card-body">
                    <ul className="list-group list-group-unbordered mb-3">
                        <OperatorComponent operator={operator} />
                        <li className="list-group-item">
                            <b>Création</b>
                            <span className="float-right">{dateToString(operator.creation)}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Nom</b>
                            <span className="float-right">{operator.name}</span>
                        </li>
                        <li className="list-group-item">
                            <b>Description</b>
                            <p>{operator.description}</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            {/*<FormModalComponent modal={infoEditModal} handleClose={handleInfoEditModalHide}>
                <OperatorInfoEditContainer handleClose={handleInfoEditModalHide} />
            </FormModalComponent>*/}
        </>
    )
}

// Prop types to ensure destroyed props data type
OperatorInfoComponent.propTypes = {
    operator: PropTypes.object.isRequired
};

export default React.memo(OperatorInfoComponent);
