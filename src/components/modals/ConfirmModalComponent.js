import React from "react";
import PropTypes from "prop-types";
import {Modal} from "react-bootstrap";

// Component
function ConfirmModelComponent({modal, handleModal, handleClose}) {
    // Data
    const {show, body, id} = modal;

    const handleConfirm = () => {
        handleModal(id)
    }

    // Render
    return (
        <Modal show={show} onHide={handleClose}>
            {/* Header */}
            <Modal.Header closeButton><h6>Confirmation</h6></Modal.Header>
            {/* Body */}
            <Modal.Body className="bg-success text-white">{body}</Modal.Body>
            {/* Footer */}
            <Modal.Footer>
                <button onClick={handleConfirm} className="btn btn-success">
                    <i className='fa fa-check' /> Valider
                </button>
                <button onClick={handleClose} className='btn btn-secondary'>
                    <i className='fa fa-times' /> Annuler
                </button>
            </Modal.Footer>
        </Modal>
    );
}

// Prop types to ensure destroyed props data type
ConfirmModelComponent.propTypes = {
    modal: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleModal: PropTypes.func.isRequired
};

export default React.memo(ConfirmModelComponent);
