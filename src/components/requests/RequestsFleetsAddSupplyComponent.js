import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import ButtonComponent from "../form/ButtonComponent";
import AmountComponent from "../form/AmountComponent";
import SelectComponent from "../form/SelectComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {FLEET_TYPE} from "../../constants/typeConstants";
import {emitFleetAddSupply} from "../../redux/fleets/actions";
import {requiredChecker} from "../../functions/checkerFunctions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeAllSimsRequestReset} from "../../redux/requests/sims/actions";
import {dataToArrayForSelect, mappedSims} from "../../functions/arrayFunctions";
import {storeFleetSupplyRequestReset} from "../../redux/requests/fleets/actions";
import {
    applySuccess,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";

// Component
function RequestsFleetsAddSupplyComponent({fleet, request, sims, allSimsRequests, dispatch, handleClose}) {
    // Local state
    const [sim, setSim] = useState(DEFAULT_FORM_DATA);
    const [amount, setAmount] = useState({...DEFAULT_FORM_DATA, data: fleet.remaining});

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

    const handleSimSelect = (data) => {
        shouldResetErrorData();
        setSim({...sim,  isValid: true, data})
    }

    const handleAmountInput = (data) => {
        shouldResetErrorData();
        setAmount({...amount, isValid: true, data})
    }

    // Build select options
    const simSelectOptions = useMemo(() => {
        return dataToArrayForSelect(mappedSims(sims.filter(item => FLEET_TYPE === item.type.name)))
    }, [sims]);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeFleetSupplyRequestReset());
        dispatch(storeAllSimsRequestReset());
    };

    // Trigger add supply form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _sim = requiredChecker(sim);
        const _amount = requiredChecker(amount);
        // Set value
        setSim(_sim);
        setAmount(_amount);
        const validationOK = _amount.isValid && _sim.isValid;
        // Check
        if(validationOK) {
            dispatch(emitFleetAddSupply({
                id: fleet.id,
                sim: _sim.data,
                amount: _amount.data,
            }));
        }
        else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            {requestFailed(allSimsRequests) && <ErrorAlertComponent message={allSimsRequests.message} />}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-sm-6'>
                        <SelectComponent input={sim}
                                         id='inputSim'
                                         title='Choisir un compte'
                                         label='Compte de flottage'
                                         options={simSelectOptions}
                                         handleInput={handleSimSelect}
                                         requestProcessing={requestLoading(allSimsRequests)}
                        />
                    </div>
                    <div className='col-sm-6'>
                        <AmountComponent input={amount}
                                         id='inputAmount'
                                         label='Montant à flotter'
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
RequestsFleetsAddSupplyComponent.propTypes = {
    sims: PropTypes.array.isRequired,
    fleet: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    allSimsRequests: PropTypes.object.isRequired,
};

export default React.memo(RequestsFleetsAddSupplyComponent);
