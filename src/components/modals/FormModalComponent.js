import React from "react";
import PropTypes from "prop-types";
import {Modal} from "react-bootstrap";

// Component
function FormModalComponent({modal, small, children, handleClose}) {
    // Data
    const {show, header} = modal;

    // Render
    return (
        <Modal show={show} onHide={handleClose} size={small ? 'md' : 'xl'}>
            {/* Header */}
            <Modal.Header closeButton className='custom-card-outline'>
                <h6><strong className='text-theme'>{header}</strong></h6>
            </Modal.Header>
            {/* Body */}
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
}

// Prop types to ensure destroyed props data type
FormModalComponent.propTypes = {
    small: PropTypes.bool,
    modal: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func.isRequired
};

// Prop types to ensure destroyed props data type
FormModalComponent.defaultProps = {
    small: false
};

export default React.memo(FormModalComponent);
