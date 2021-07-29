import React from 'react';
import PropTypes from 'prop-types';

// Component
function FileDocumentComponent({id, label, input, description, handleInput}) {
    // Data
    const {errorMessage, isValid} = input;

    const handleDone = (e) => {
        handleInput(e.target.files[0])
    }

    // Render
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <div className="custom-file">
                <input type='file' onChange={handleDone} />
            </div>
            <small className={'text-danger'}>{!isValid && errorMessage}</small>
            <p className='text-primary'>
                <small><strong>{description}</strong></small>
            </p>
        </div>
    )
}

// Prop types to ensure destroyed props data type
FileDocumentComponent.propTypes = {
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
};

FileDocumentComponent.defaultProps = {
    description: "Le fichier doit être de type PDF, PNG, JPG ou JPEG et avoir une taille inférieure à 10Mo"
};

export default React.memo(FileDocumentComponent);
