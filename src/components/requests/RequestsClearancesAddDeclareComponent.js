import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import DisabledInput from "../form/DisabledInput";
import ButtonComponent from "../form/ButtonComponent";
import AmountComponent from "../form/AmountComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {requiredChecker} from "../../functions/checkerFunctions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {emitClearanceAddDeclare} from "../../redux/clearances/actions";
import {storeClearanceDeclareRequestReset} from "../../redux/requests/clearances/actions";
import {
    applySuccess,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";

// Component
function RequestsClearancesAddDeclareComponent({clearance, request, dispatch, handleClose}) {
    // Local state
    const [amount, setAmount] = useState({...DEFAULT_FORM_DATA, data: clearance.remaining});

    // Local effects
    useEffect(() => {
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(request)) {
            applySuccess(request.message);
            handleClose()
        }
        // eslint-disable-next-line
    }, [request]);

    const handleAmountInput = (data) => {
        shouldResetErrorData();
        setAmount({...amount, isValid: true, data})
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeClearanceDeclareRequestReset());
    };

    // Trigger add supply form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _amount = requiredChecker(amount);
        // Set value
        setAmount(_amount);
        const validationOK = _amount.isValid;
        // Check
        if(validationOK) {
            dispatch(emitClearanceAddDeclare({
                id: clearance.id,
                amount: _amount.data,
            }));
        }
        else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className='col-sm-6'>
                        <DisabledInput id='inputAgent'
                                       val={clearance.agent.name}
                                       label='Agent/Ressource'
                        />
                    </div>
                    <div className='col-sm-6'>
                        <DisabledInput id='inputSim'
                                       label='Compte à déstocker'
                                       val={clearance.sim.number}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <AmountComponent input={amount}
                                         id='inputFleet'
                                         label='Montant pris en charge'
                                         handleInput={handleAmountInput}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <ButtonComponent processing={requestLoading(request)} />
                </div>
            </form>
        </>
    )
}

// Prop types to ensure destroyed props data type
RequestsClearancesAddDeclareComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    clearance: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default React.memo(RequestsClearancesAddDeclareComponent);
