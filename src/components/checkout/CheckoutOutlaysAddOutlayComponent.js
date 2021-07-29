import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import ButtonComponent from "../form/ButtonComponent";
import AmountComponent from "../form/AmountComponent";
import SelectComponent from "../form/SelectComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {emitAddOutlay} from "../../redux/outlays/actions";
import TextareaComponent from "../form/TextareaComponent";
import {requiredChecker} from "../../functions/checkerFunctions";
import {emitAllManagersFetch} from "../../redux/managers/actions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {dataToArrayForSelect} from "../../functions/arrayFunctions";
import {emitAllCollectorsFetch} from "../../redux/collectors/actions";
import {storeAddOutlayRequestReset} from "../../redux/requests/outlays/actions";
import {storeAllManagersRequestReset} from "../../redux/requests/managers/actions";
import {storeAllCollectorsRequestReset} from "../../redux/requests/collectors/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function CheckoutOutlaysAddOutlayComponent({request, collectors, managers, dispatch, handleClose,
                                               allCollectorsRequests, allManagersRequests}) {
    // Local state
    const [amount, setAmount] = useState(DEFAULT_FORM_DATA);
    const [reason, setReason] = useState(DEFAULT_FORM_DATA);
    const [collector, setCollector] = useState(DEFAULT_FORM_DATA);

    // Local effects
    useEffect(() => {
        dispatch(emitAllManagersFetch());
        dispatch(emitAllCollectorsFetch());
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

    const handleCollectorSelect = (data) => {
        shouldResetErrorData();
        setCollector({...collector,  isValid: true, data})
    }

    const handleAmountInput = (data) => {
        shouldResetErrorData();
        setAmount({...amount, isValid: true, data})
    }

    const handleReasonInput = (data) => {
        shouldResetErrorData();
        setReason({...reason, isValid: true, data})
    }

    // Build select options
    const collectorSelectOptions = useMemo(() => {
        return dataToArrayForSelect([...managers, ...collectors])
    }, [collectors, managers]);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAddOutlayRequestReset());
        dispatch(storeAllManagersRequestReset());
        dispatch(storeAllCollectorsRequestReset());
    };

    // Trigger add supply form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _reason = requiredChecker(reason);
        const _amount = requiredChecker(amount);
        const _collector = requiredChecker(collector);
        // Set value
        setAmount(_amount);
        setReason(_reason);
        setCollector(_collector);
        const validationOK = (_amount.isValid && _collector.isValid && _reason.isValid);
        // Check
        if(validationOK) {
            dispatch(emitAddOutlay({
                amount: _amount.data,
                reason: _reason.data,
                collector: _collector.data,
            }));
        }
        else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            {requestFailed(allManagersRequests) && <ErrorAlertComponent message={allManagersRequests.message} />}
            {requestFailed(allCollectorsRequests) && <ErrorAlertComponent message={allCollectorsRequests.message} />}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-sm-6'>
                        <SelectComponent input={collector}
                                         label='Recepteur'
                                         id='inputSimManager'
                                         title='Choisir le recepteur'
                                         options={collectorSelectOptions}
                                         handleInput={handleCollectorSelect}
                                         requestProcessing={
                                             requestLoading(allCollectorsRequests) ||
                                             requestLoading(allManagersRequests)
                                         }
                        />
                    </div>
                    <div className='col-sm-6'>
                        <AmountComponent input={amount}
                                         id='inputAmount'
                                         label='Montant à décaisser'
                                         handleInput={handleAmountInput}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <TextareaComponent input={reason}
                                           id='inputReason'
                                           label="Motif du déciassement"
                                           handleInput={handleReasonInput}
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
CheckoutOutlaysAddOutlayComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    managers: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired,
    collectors: PropTypes.array.isRequired,
    allManagersRequests: PropTypes.object.isRequired,
    allCollectorsRequests: PropTypes.object.isRequired,
};

export default React.memo(CheckoutOutlaysAddOutlayComponent);
