import React  from 'react';
import PropTypes from 'prop-types';

// Component
function CheckBoxComponent({id, input, center, handleInput}) {
    const handleChange = () => {
        handleInput(input)
    }

    // Render
    return (
        <div className={`${center && 'text-center'} form-group`}>
            <div className="custom-control custom-switch custom-switch-on-success">
                <input id={id}
                       checked={input}
                       type="checkbox"
                       onChange={handleChange}
                       className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor={id} />
            </div>
        </div>
    )
}

// Prop types to ensure destroyed props data type
CheckBoxComponent.propTypes = {
    center: PropTypes.bool,
    id: PropTypes.string.isRequired,
    input: PropTypes.bool.isRequired,
    handleInput: PropTypes.func.isRequired
};

export default React.memo(CheckBoxComponent);