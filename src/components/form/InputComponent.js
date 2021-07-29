import React  from 'react';
import PropTypes from 'prop-types';

import {getFieldColor} from "../../functions/generalFunctions";

// Component
function InputComponent({id, label, type, input, handleInput}) {
    // Data
    const {data, errorMessage, isValid} = input;
    const inputClass = `form-control ${!isValid && 'is-invalid'}`;

    const handleChange = (e) => {
        handleInput(e.target.value)
    }

    // Render
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input id={id}
                   type={type}
                   className={inputClass}
                   onChange={handleChange}
                   value={data ? data : ''}
                   style={getFieldColor(input)}
            />
            <small className="text-danger">{!isValid && errorMessage}</small>
        </div>
    )
}

// Prop types to ensure destroyed props data type
InputComponent.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    handleInput: PropTypes.func.isRequired
};

export default React.memo(InputComponent);