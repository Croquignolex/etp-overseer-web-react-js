import React from 'react';
import PropTypes from "prop-types";

import {dateToString, formatNumber} from "../../functions/generalFunctions"; 

// Component
function SupervisorsCardsComponent({supervisors, handleSupervisorDetailsModalShow,
                                       handleMovementsModalShow, handleTransactionsModalShow}) {
    // Render
    return (
        <>
            <div className="row m-1">
                {supervisors.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className="card-header bg-secondary" />
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <img src={item.avatar} alt="avatar..." className="profile-user-img img-fluid img-circle" />
                                        <div className="float-right">
                                            {item.status
                                                ?  <span className="badge badge-success">Activé</span>
                                                :  <span className="badge badge-danger">Bloqué</span>
                                            }
                                        </div>
                                    </div>
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
                                            <b>Téléphone</b>
                                            <span className="float-right">{item.phone}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Solde caisse</b>
                                            <span className="float-right text-success text-bold">{formatNumber(item.account.balance)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Créer par</b>
                                            <span className="float-right">{item.creator.name}</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        <button type="button"
                                                className="btn btn-sm btn-theme mb-1"
                                                onClick={() => handleSupervisorDetailsModalShow(item)}
                                        >
                                            <i className="fa fa-eye" /> Détails
                                        </button><br/>
                                        <button type="button"
                                                className="btn btn-sm btn-theme mb-1"
                                                onClick={() => handleTransactionsModalShow(item)}>
                                            <i className="fa fa-table" /> Transactions
                                        </button><br/>
                                        <button type="button"
                                                className="btn btn-sm btn-theme"
                                                onClick={() => handleMovementsModalShow(item)}>
                                            <i className="fa fa-table" /> Movements caisse
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {supervisors.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas de superviseurs
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
SupervisorsCardsComponent.propTypes = {
    supervisors: PropTypes.array.isRequired,
    handleMovementsModalShow: PropTypes.func.isRequired,
    handleTransactionsModalShow: PropTypes.func.isRequired,
    handleSupervisorDetailsModalShow: PropTypes.func.isRequired,
};

export default React.memo(SupervisorsCardsComponent);
