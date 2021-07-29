import React, {useState} from 'react';
import PropTypes from "prop-types";

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import FormModalComponent from "../modals/FormModalComponent";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";
import {dateToString, formatNumber, requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function SupplyReturnsListComponent({returns, returnsRequestsList}) {
    // Local states
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: "DETAIL DU COMPTE", id: ''});

    // Hide sim details modal form
    const handleSimDetailsModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <strong className="text-theme">RETOURS FLOTTES</strong>
            <div className="card">
                <div className="table-responsive">
                    <table className="table table-hover text-nowrap table-bordered">
                        <thead>
                        <tr>
                            <th>DATE</th>
                            <th>MONTANT</th>
                            <th>EMETTEUR</th>
                            <th>RECEPTEUR</th>
                            <th>RESPONSABLE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {requestLoading(returnsRequestsList) ? <tr><td colSpan={5}><LoaderComponent /></td></tr> : (
                            requestFailed(returnsRequestsList) ? <tr><td colSpan={5}><ErrorAlertComponent message={returnsRequestsList.message} /></td></tr> : (
                                <>
                                    {returns.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{dateToString(item.creation)}</td>
                                                <td className='text-right text-success text-bold'>
                                                    {formatNumber(item.amount)}
                                                </td>
                                                <td>
                                                    {item.sim_outgoing.number}
                                                    <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                       onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: item.sim_outgoing.id})}
                                                    />
                                                </td>
                                                <td>
                                                    {item.sim_incoming.number}
                                                    <i className="fa fa-question-circle small ml-1 hand-cursor text-theme"
                                                       onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: item.sim_incoming.id})}
                                                    />
                                                </td>
                                                <td>{item.collector.name}</td>
                                            </tr>
                                        )
                                    })}
                                    {returns.length === 0 && (
                                        <tr>
                                            <td colSpan={5}>
                                                <div className='alert custom-active text-center'>
                                                    Pas de retours flottes
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
            {/* Modal */}
            <FormModalComponent small={true} modal={simDetailsModal} handleClose={handleSimDetailsModalHide}>
                <SimDetailsContainer id={simDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
SupplyReturnsListComponent.propTypes = {
    returns: PropTypes.array.isRequired,
    returnsRequestsList: PropTypes.object.isRequired,
};

export default React.memo(SupplyReturnsListComponent);
