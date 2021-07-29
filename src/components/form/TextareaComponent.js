import React  from 'react';
import PropTypes from 'prop-types';
import {getFieldColor} from "../../functions/generalFunctions";


// Component
function AppFormTextarea({id, label, input, handleInput}) {
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
             <textarea id={id}
                       rows='3'
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
AppFormTextarea.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    handleInput: PropTypes.func.isRequired
};

export default React.memo(AppFormTextarea);