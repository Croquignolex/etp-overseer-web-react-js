import React  from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import {getFieldColor} from "../../functions/generalFunctions";

// Component
function AmountComponent({id, label, input, handleInput}) {
    // Data
    const {data, errorMessage, isValid} = input;
    const inputClass = `form-control ${!isValid && 'is-invalid'}`;

    const handleChange = ({value}) => {
        handleInput(value)
    }

    // Render
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <NumberFormat id={id}
                          value={data}
                          className={inputClass}
                          thousandSeparator={true}
                          style={getFieldColor(input)}
                          onValueChange={handleChange}
            />
            <small className="text-danger">{!isValid && errorMessage}</small>
        </div>
    )
}

// Prop types to ensure destroyed props data type
AmountComponent.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    handleInput: PropTypes.func.isRequired
};

export default React.memo(AmountComponent);