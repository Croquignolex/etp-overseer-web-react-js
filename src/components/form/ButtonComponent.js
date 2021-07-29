import React  from 'react';
import PropTypes from 'prop-types';

// Component
function ButtonComponent({processing}) {
    // Render
    return (
        <>
            <div className="col-lg-9 col-md-8 col-sm-6" />
            <div className="col-lg-3 col-md-4 col-sm-6">
                {processing ?
                    (
                        <button disabled type="submit" className="login-btn btn btn-block">
                            <img alt='...'
                                 className="spinner-loader"
                                 src={require('../../assets/images/spinner-light.svg')}
                            />
                        </button>
                    ) :
                    (
                        <button type="submit" className="login-btn btn btn-dark btn-block">
                            <i className='fa fa-check' />&nbsp;
                            Valider
                        </button>
                    )
                }
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
ButtonComponent.propTypes = {
    processing: PropTypes.bool.isRequired
};

export default React.memo(ButtonComponent);