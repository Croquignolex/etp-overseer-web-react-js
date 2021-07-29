import React from 'react';
import PropTypes from 'prop-types';

// Component
function TableSearchWithButtonComponent({needle, handleNeedle, handleSearch}) {

    const handleChange = (e) => {
        handleNeedle(e.target.value)
    }

    const handleClick = () => {
        (needle !== '' && needle !== undefined) && handleSearch()
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
                   placeholder="Mot clé..."
            />
            <button title="Rechercher"
                    onClick={handleClick}
                    className="btn btn-theme btn-sm ml-1"
            >
                <i className="fa fa-search" />
            </button>
        </div>
    )
}

// Prop types to ensure destroyed props data type
TableSearchWithButtonComponent.propTypes = {
    needle: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleNeedle: PropTypes.func.isRequired
};

// Connect component to Redux
export default React.memo(TableSearchWithButtonComponent);
