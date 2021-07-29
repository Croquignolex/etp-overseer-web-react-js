import PropTypes from "prop-types";
import React, {useState} from 'react';

import {formatNumber} from "../../functions/generalFunctions";
import FormModalComponent from "../modals/FormModalComponent";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";
import OperatorAddSimContainer from "../../containers/operators/OperatorAddSimContainer";

// Component
function OperatorSimsListComponent({operator}) {
    // Local states
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: 'DETAIL DU COMPTE', id: ''});
    const [addSimModal, setAddSimEditModal] = useState({show: false, header: 'AJOUTER UN COMPTE A ' + operator.name});

    // Show add sim modal form
    const handleAddSimModalShow = () => {
        setAddSimEditModal({...addSimModal, show: true})
    }

    // Hide add sim modal form
    const handleAddSimModalHide = () => {
        setAddSimEditModal({...addSimModal, show: false})
    }

    // Hide sim details modal form
    const handleSimDetailModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <button type="button" className="btn btn-theme mb-1" onClick={handleAddSimModalShow}>
                <i className="fa fa-plus" /> Ajouter un compte
            </button>
            <div className="card">
                <div className="table-responsive">
                    <table className="table table-hover text-nowrap table-bordered">
                        <thead>
                            <tr>
                                <th>NOM</th>
                                <th>NUMERO</th>
                                <th>SOLDE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {operator.sims.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>
                                            <i className="fa fa-question-circle small mr-1 hand-cursor text-theme"
                                               onClick={() => setSimDetailsModal({...simDetailsModal, show: true, id: item.id})}
                                            />
                                            {item.name}
                                        </td>
                                        <td>{item.number}</td>
                                        <td className='text-right text-success text-bold'>
                                            {formatNumber(item.balance)}
                                        </td>
                                    </tr>
                                )
                            })}
                            {operator.sims.length === 0 && (
                                <tr>
                                    <td colSpan={3}>
                                        <div className='alert custom-active text-center'>
                                            Pas de comptes
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal */}
            <FormModalComponent modal={addSimModal} handleClose={handleAddSimModalHide}>
                <OperatorAddSimContainer handleClose={handleAddSimModalHide} />
            </FormModalComponent>
            <FormModalComponent small={true} modal={simDetailsModal} handleClose={handleSimDetailModalHide}>
                <SimDetailsContainer id={simDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
OperatorSimsListComponent.propTypes = {
    operator: PropTypes.object.isRequired
};

export default React.memo(OperatorSimsListComponent);
