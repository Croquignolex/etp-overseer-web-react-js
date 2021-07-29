import React from 'react';
import PropTypes from 'prop-types';

// Component
function TableSearchComponent({needle, handleNeedle}) {

    const handleChange = (e) => {
        handleNeedle(e.target.value)
    }

    // Render
    return (
        <div className="input-group input-group-sm">
            {/* Search input */}
            <input type="text"
                   value={needle}
                   name="tableSearch"
                   onChange={handleChange}
                   className="form-control"
                   placeholder="Rechercher..."
            />
        </div>
    )
}

// Prop types to ensure destroyed props data type
TableSearchComponent.propTypes = {
    needle: PropTypes.string.isRequired,
    handleNeedle: PropTypes.func.isRequired
};

// Connect component to Redux
export default React.memo(TableSearchComponent);
