import React from 'react';
import PropTypes from "prop-types";

import {dateToString} from "../../functions/generalFunctions";

// Component
function CompaniesCardsComponent({companies, handleCompanyDetailsModalShow}) {
    // Render
    return (
        <>
            <div className="row m-1">
                {companies.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className="card-header bg-secondary" />
                                <div className="card-body">
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Nom</b>
                                            <span className="float-right">{item.name}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Responsable</b>
                                            <span className="float-right">{item.manager}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Téléphone</b>
                                            <span className="float-right">{item.phone}</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        <button type="button"
                                                className="btn btn-sm btn-theme"
                                                onClick={() => handleCompanyDetailsModalShow(item)}
                                        >
                                            <i className="fa fa-eye" /> Détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {companies.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas d'entreprises
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
CompaniesCardsComponent.propTypes = {
    companies: PropTypes.array.isRequired,
    handleCompanyDetailsModalShow: PropTypes.func.isRequired
};

export default React.memo(CompaniesCardsComponent);
