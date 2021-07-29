import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import ButtonComponent from "../form/ButtonComponent";
import AmountComponent from "../form/AmountComponent";
import SelectComponent from "../form/SelectComponent";
import {emitAddFleet} from "../../redux/fleets/actions";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {requiredChecker} from "../../functions/checkerFunctions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeAddFleetRequestReset} from "../../redux/requests/fleets/actions";
import {dataToArrayForSelect, mappedSims} from "../../functions/arrayFunctions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function RequestsFleetsAddFleetComponent({request, sims, agents, allAgentsRequests, allSimsRequests, dispatch, handleClose}) {
    // Local state
    const [amount, setAmount] = useState(DEFAULT_FORM_DATA);
    const [incomingSim, setIncomingSim] = useState(DEFAULT_FORM_DATA);
    const [agent, setAgent] = useState({...DEFAULT_FORM_DATA, data: 0});

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

    const handleIncomingSelect = (data) => {
        shouldResetErrorData();
        setIncomingSim({...incomingSim,  isValid: true, data})
    }

    const handleAmountInput = (data) => {
        shouldResetErrorData();
        setAmount({...amount, isValid: true, data})
    }

    const handleAgentSelect = (data) => {
        shouldResetErrorData();
        setAgent({...agent,  isValid: true, data})
    }

    // Build select options
    const agentSelectOptions = useMemo(() => {
        return dataToArrayForSelect(agents)
    }, [agents]);

    // Build select options
    const incomingSelectOptions = useMemo(() => {
        return dataToArrayForSelect(mappedSims(sims.filter(item => item.agent.id === agent.data)))
    }, [sims, agent.data]);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAddFleetRequestReset());
    };

    // Trigger add supply form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _agent = requiredChecker(agent);
        const _amount = requiredChecker(amount);
        const _incomingSim = requiredChecker(incomingSim);
        // Set value
        setAgent(_agent);
        setAmount(_amount);
        setIncomingSim(_incomingSim);
        const validationOK = (_amount.isValid && _incomingSim.isValid && _agent.isValid);
        // Check
        if(validationOK) {
            dispatch(emitAddFleet({
                agent: _agent.data,
                amount: _amount.data,
                sim: _incomingSim.data,
            }));
        }
        else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            {requestFailed(allSimsRequests) && <ErrorAlertComponent message={allSimsRequests.message} />}
            {requestFailed(allAgentsRequests) && <ErrorAlertComponent message={allAgentsRequests.message} />}
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
                        <SelectComponent input={incomingSim}
                                         id='inputSimAgent'
                                         title='Choisir un compte'
                                         options={incomingSelectOptions}
                                         label="Puce de l'agent/ressource"
                                         handleInput={handleIncomingSelect}
                                         requestProcessing={requestLoading(allSimsRequests)}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <AmountComponent input={amount}
                                         id='inputFleet'
                                         label='Flotte demandé'
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
RequestsFleetsAddFleetComponent.propTypes = {
    sims: PropTypes.array.isRequired,
    agents: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    allSimsRequests: PropTypes.object.isRequired,
    allAgentsRequests: PropTypes.object.isRequired,
};

export default React.memo(RequestsFleetsAddFleetComponent);
