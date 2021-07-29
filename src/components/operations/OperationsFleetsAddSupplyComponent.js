import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import ButtonComponent from "../form/ButtonComponent";
import AmountComponent from "../form/AmountComponent";
import SelectComponent from "../form/SelectComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {MASTER_TYPE} from "../../constants/typeConstants";
import {emitAllSimsFetch} from "../../redux/sims/actions";
import CheckBoxComponent from "../form/CheckBoxComponent";
import {emitAddSupply} from "../../redux/supplies/actions";
import {emitAllAgentsFetch} from "../../redux/agents/actions";
import {requiredChecker} from "../../functions/checkerFunctions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeAllSimsRequestReset} from "../../redux/requests/sims/actions";
import {storeAllAgentsRequestReset} from "../../redux/requests/agents/actions";
import {dataToArrayForSelect, mappedSims} from "../../functions/arrayFunctions";
import {storeAddSupplyRequestReset} from "../../redux/requests/supplies/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function OperationsFleetsAddSupplyComponent({request, sims, agents, allAgentsRequests, allSimsRequests, dispatch, handleClose}) {
    // Local state
    const [amount, setAmount] = useState(DEFAULT_FORM_DATA);
    const [selectedOp, setSelectedOp] = useState('');
    const [directPay, setDirectPay] = useState(false);
    const [outgoingSim, setOutgoingSim] = useState(DEFAULT_FORM_DATA);
    const [incomingSim, setIncomingSim] = useState(DEFAULT_FORM_DATA);
    const [agent, setAgent] = useState({...DEFAULT_FORM_DATA, data: 0});

    // Local effects
    useEffect(() => {
        dispatch(emitAllSimsFetch());
        dispatch(emitAllAgentsFetch());
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

    const handleOutgoingSelect = (data) => {
        shouldResetErrorData();
        const foundSim = sims.find(item => item.id === data);
        setSelectedOp(foundSim && foundSim.operator.id);
        setOutgoingSim({...outgoingSim,  isValid: true, data})
    }

    const handleIncomingSelect = (data) => {
        shouldResetErrorData();
        setIncomingSim({...incomingSim,  isValid: true, data})
    }

    const handleDirectPaySelect = (data) => {
        shouldResetErrorData();
        setDirectPay(!data)
    }

    const handleAgentSelect = (data) => {
        shouldResetErrorData();
        setAgent({...agent,  isValid: true, data})
    }

    const handleAmountInput = (data) => {
        shouldResetErrorData();
        setAmount({...amount, isValid: true, data})
    }

    // Build select options
    const incomingSelectOptions = useMemo(() => {
        return dataToArrayForSelect(mappedSims(sims.filter(
            item => (item.agent.id === agent.data) && (item.operator.id === selectedOp)
        )))
    }, [sims, agent.data, selectedOp]);

    // Build select options
    const outgoingSelectOptions = useMemo(() => {
        return dataToArrayForSelect(mappedSims(sims.filter(item => MASTER_TYPE === item.type.name)))
    }, [sims]);

    // Build select options
    const agentSelectOptions = useMemo(() => {
        return dataToArrayForSelect(agents)
    }, [agents]);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAllSimsRequestReset());
        dispatch(storeAddSupplyRequestReset());
        dispatch(storeAllAgentsRequestReset());
    };

    // Trigger add supply form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _agent = requiredChecker(agent);
        const _amount = requiredChecker(amount);
        const _outgoingSim = requiredChecker(outgoingSim);
        const _incomingSim = requiredChecker(incomingSim);
        // Set value
        setAgent(_agent);
        setAmount(_amount);
        setOutgoingSim(_outgoingSim);
        setIncomingSim(_incomingSim);
        const validationOK = (
            _amount.isValid && _incomingSim.isValid &&
            _outgoingSim.isValid && _agent.isValid
        );
        // Check
        if(validationOK) {
            dispatch(emitAddSupply({
                pay: directPay,
                agent: _agent.data,
                amount: _amount.data,
                agentSim: _incomingSim.data,
                managerSim: _outgoingSim.data,
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
                        <SelectComponent input={agent}
                                         id='inputSimAgent'
                                         label='Agent/ressource'
                                         options={agentSelectOptions}
                                         handleInput={handleAgentSelect}
                                         title='Choisir un agent/ressource'
                                         requestProcessing={requestLoading(allAgentsRequests)}
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
                <div className='row'>
                    <div className='col-sm-6'>
                        <SelectComponent input={outgoingSim}
                                         id='inputSimManger'
                                         label='Compte émetteur'
                                         title='Choisir un compte'
                                         options={outgoingSelectOptions}
                                         handleInput={handleOutgoingSelect}
                                         requestProcessing={requestLoading(allSimsRequests)}
                        />
                    </div>
                    <div className='col-sm-6'>
                        <SelectComponent input={incomingSim}
                                         id='inputSimCollector'
                                         label='Compte recepteur'
                                         title='Choisir un compte'
                                         options={incomingSelectOptions}
                                         handleInput={handleIncomingSelect}
                                         requestProcessing={requestLoading(allSimsRequests)}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <label htmlFor="inputAutoPay">Paiement immédiat?</label>
                        <CheckBoxComponent input={directPay}
                                           id='inputAutoPay'
                                           handleInput={handleDirectPaySelect}
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
OperationsFleetsAddSupplyComponent.propTypes = {
    sims: PropTypes.array.isRequired,
    agents: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    allSimsRequests: PropTypes.object.isRequired,
    allAgentsRequests: PropTypes.object.isRequired,
};

export default React.memo(OperationsFleetsAddSupplyComponent);
