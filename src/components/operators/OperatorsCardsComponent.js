import React from 'react';
import PropTypes from "prop-types";

import OperatorComponent from "../OperatorComponent";
import {dateToString} from "../../functions/generalFunctions";

// Component
function OperatorsCardsComponent({operators, handleOperatorDetailsModalShow, handleTransactionsModalShow}) {
    // Render
    return (
        <>
            <div className="row m-1">
                {operators.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className="card-header bg-secondary" />
                                <div className="card-body">
                                    <ul className="list-group list-group-unbordered">
                                        <OperatorComponent operator={item} />
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Nom</b>
                                            <span className="float-right">{item.name}</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        <button type="button"
                                                className="btn btn-sm btn-theme"
                                                onClick={() => handleOperatorDetailsModalShow(item)}
                                        >
                                            <i className="fa fa-eye" /> Détails
                                        </button>
                                        <br/>
                                        <button type="button"
                                                className="btn btn-sm btn-theme mt-1"
                                                onClick={() => handleTransactionsModalShow(item)}>
                                            <i className="fa fa-table" /> Transactions
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {operators.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas d'opérateur
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
OperatorsCardsComponent.propTypes = {
    operators: PropTypes.array.isRequired,
    handleTransactionsModalShow: PropTypes.func.isRequired,
    handleOperatorDetailsModalShow: PropTypes.func.isRequired,
};

export default React.memo(OperatorsCardsComponent);
