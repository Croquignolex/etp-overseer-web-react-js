import React from 'react';
import PropTypes from "prop-types";

import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import {CANCEL, DONE, PROCESSING} from "../../constants/typeConstants";
import {dateToString, formatNumber} from "../../functions/generalFunctions";

// Component
function CheckoutPaymentsCardsComponent({payments}) {
    // Render
    return (
        <>
            <div className="row m-1">
                {payments.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className={`${fleetTypeBadgeColor(item.status).background} card-header`} />
                                <div className="card-body">
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Création</b>
                                            <span className="float-right">{dateToString(item.creation)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Monant</b>
                                            <span className="float-right text-success text-bold">
                                                {formatNumber(item.amount)}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Emetteur</b>
                                            <span className="float-right">{item.manager.name}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Receptteur</b>
                                            <span className="float-right">{item.collector.name}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Motif</b>
                                            <span className="float-right">{item.reason}</span>
                                        </li>
                                        <li className="list-group-item">
                                            {item.status === DONE && <b className="text-success text-bold">Confirmé</b>}
                                            {item.status === CANCEL && <b className="text-danger text-bold">Annulé</b>}
                                            {item.status === PROCESSING && <b className="text-danger text-bold">En attente de confirmation</b>}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {payments.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas d'encaissements internes
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
CheckoutPaymentsCardsComponent.propTypes = {
    payments: PropTypes.array.isRequired
};

export default React.memo(CheckoutPaymentsCardsComponent);
