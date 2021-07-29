import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import {APP_NAME} from "../constants/generalConstants";
import {DASHBOARD_PAGE_PATH} from "../constants/pagePathConstants";

// Component
const HeaderComponent = ({title, icon, listLength, breadcrumb}) => {
    // Render
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h5 className="m-0 text-dark text-uppercase">
                            <i className={icon} /> {title} {listLength && `(${listLength})`}
                        </h5>
                    </div>
                    {/*Breadcrumb*/}
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <Link to={DASHBOARD_PAGE_PATH} className='text-theme'>
                                    <i className='fa fa-home' /> {APP_NAME}
                                </Link>
                            </li>
                            {breadcrumb.length !== 0 &&
                                breadcrumb.map((item, key) => {
                                    return (
                                        <li key={key} className="breadcrumb-item">
                                            <Link to={item.path} className='text-theme'>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li className="breadcrumb-item active">{title}</li>
                        </ol>
                    </div>
                    <div className='col mt-2'>
                        {breadcrumb.length !== 0 &&
                        <Link to={breadcrumb[breadcrumb.length - 1].path}
                              className='btn btn-theme btn-dark'
                        >
                            <i className='fa fa-chevron-left' /> Retour
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

// Prop types to ensure destroyed props data type
HeaderComponent.propTypes = {
    breadcrumb: PropTypes.array,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    listLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

// Prop types to ensure destroyed props data type
HeaderComponent.defaultProps = {
    breadcrumb: []
};

export default React.memo(HeaderComponent)