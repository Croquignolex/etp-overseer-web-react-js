import React from "react";
import PropTypes from "prop-types";
import {Modal} from "react-bootstrap";

// Component
function BlockModelComponent({modal, handleBlock, handleClose}) {
    // Data
    const {show, body, id} = modal;

    const handleConfirm = () => {
        handleBlock(id)
    }

    // Render
    return (
        <Modal show={show} onHide={handleClose}>
            {/* Header */}
            <Modal.Header closeButton><h6>Blocage</h6></Modal.Header>
            {/* Body */}
            <Modal.Body className="bg-warning text-dark">{body}</Modal.Body>
            {/* Footer */}
            <Modal.Footer>
                <button onClick={handleConfirm} className="btn btn-warning">
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
BlockModelComponent.propTypes = {
    modal: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleBlock: PropTypes.func.isRequired
};

export default React.memo(BlockModelComponent);
