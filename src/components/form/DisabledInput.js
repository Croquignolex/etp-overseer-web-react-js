import React  from 'react';
import PropTypes from 'prop-types';

// Component
function AppFormDisabledInput({id, label, val}) {
    // Render
    return (
        <>
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input id={id}
                       readOnly
                       type='text'
                       value={val}
                       className='form-control disabled'
                />
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
AppFormDisabledInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    val: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default React.memo(AppFormDisabledInput);