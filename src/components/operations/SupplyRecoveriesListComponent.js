import React from 'react';
import PropTypes from "prop-types";

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {dateToString, formatNumber, requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function SupplyRecoveriesListComponent({recoveries, recoveriesRequestsList}) {
    // Render
    return (
        <>
            <strong className="text-theme">RECOUVREMENT D'ESPECES</strong>
            <div className="card">
                <div className="table-responsive">
                    <table className="table table-hover text-nowrap table-bordered">
                        <thead>
                        <tr>
                            <th>DATE</th>
                            <th>MONTANT</th>
                            <th>RESPONSABLE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {requestLoading(recoveriesRequestsList)  ? <tr><td colSpan={5}><LoaderComponent /></td></tr> : (
                            requestFailed(recoveriesRequestsList) ? <tr><td colSpan={5}><ErrorAlertComponent message={recoveriesRequestsList.message} /></td></tr> : (
                                <>
                                    {recoveries.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{dateToString(item.creation)}</td>
                                                <td className='text-right text-success text-bold'>
                                                    {formatNumber(item.amount)}
                                                </td>
                                                <td>{item.collector.name}</td>
                                            </tr>
                                        )
                                    })}
                                    {recoveries.length === 0 && (
                                        <tr>
                                            <td colSpan={3}>
                                                <div className='alert custom-active text-center'>
                                                    Pas de recouvrements d'espèces
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            )
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
SupplyRecoveriesListComponent.propTypes = {
    recoveries: PropTypes.array.isRequired,
    recoveriesRequestsList: PropTypes.object.isRequired,
};

export default React.memo(SupplyRecoveriesListComponent);
