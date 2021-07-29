import React from 'react';
import PropTypes from "prop-types";

import SimCardComponent from "./SimCardComponent";
import * as types from "../../constants/typeConstants";
import {simTypeBadgeColor} from "../../functions/typeFunctions";

// Component
function SimsCardsComponent({sims, handleSimDetailsModalShow, handleTransactionsModalShow}) {
    // Render
    return (
        <>
            <div className="row m-1">
                {sims.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className="card">
                                <div className={`${simTypeBadgeColor(item.type.name).background} card-header`}>
                                    <h3 className="card-title">COMPTE {simTypeBadgeColor(item.type.name).text}</h3>
                                </div>
                                <div className="card-body">
                                    <SimCardComponent sim={item} />
                                    <div className="mt-3 text-right">
                                        <button type="button"
                                                className="btn btn-sm btn-theme mb-1"
                                                onClick={() => handleSimDetailsModalShow(item)}
                                        >
                                            <i className="fa fa-eye" /> Détails
                                        </button>
                                        {[types.FLEET_TYPE, types.MASTER_TYPE, types.COLLECTOR_TYPE].includes(item.type.name) && (
                                            <>
                                                <br/>
                                                <button type="button"
                                                        className="btn btn-sm btn-theme"
                                                        onClick={() => handleTransactionsModalShow(item)}>
                                                    <i className="fa fa-table" /> Transactions
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {sims.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas de comptes
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
SimsCardsComponent.propTypes = {
    sims: PropTypes.array.isRequired,
    handleTransactionsModalShow: PropTypes.func,
    handleSimDetailsModalShow: PropTypes.func.isRequired,
};

export default React.memo(SimsCardsComponent);
