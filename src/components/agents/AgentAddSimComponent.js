import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import DisabledInput from "../form/DisabledInput";
import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import SelectComponent from "../form/SelectComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {emitAddAgentSims} from "../../redux/agents/actions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {dataToArrayForSelect} from "../../functions/arrayFunctions";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {emitAllOperatorsFetch} from "../../redux/operators/actions";
import {phoneChecker, requiredChecker} from "../../functions/checkerFunctions";
import {storeAgentAddSimRequestReset} from "../../redux/requests/agents/actions";
import {storeAllOperatorsRequestReset} from "../../redux/requests/operators/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function AgentAddSimComponent({request, agent, operators, allOperatorsRequests, dispatch, handleClose}) {
    // Local state
    const [name, setName] = useState(DEFAULT_FORM_DATA);
    const [number, setNumber] = useState(DEFAULT_FORM_DATA);
    const [operator, setOperator] = useState(DEFAULT_FORM_DATA);
    const [description, setDescription] = useState(DEFAULT_FORM_DATA);

    // Local effects
    useEffect(() => {
        dispatch(emitAllOperatorsFetch());
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

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAgentAddSimRequestReset());
        dispatch(storeAllOperatorsRequestReset());
    };

    const handleDescriptionInput = (data) => {
        shouldResetErrorData();
        setDescription({...description, isValid: true, data})
    }

    const handleNameInput = (data) => {
        shouldResetErrorData();
        setName({...name, isValid: true, data})
    }

    const handleNumberInput = (data) => {
        shouldResetErrorData();
        setNumber({...number, isValid: true, data})
    }

    const handleOperatorSelect = (data) => {
        shouldResetErrorData();
        setOperator({...operator,  isValid: true, data})
    }

    // Build select options
    const operatorSelectOptions = useMemo(() => {
        return dataToArrayForSelect(operators);
    }, [operators]);

    // Trigger user information form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _name = requiredChecker(name);
        const _number = phoneChecker(number);
        const _operator = requiredChecker(operator);
        // Set value
        setName(_name);
        setOperator(_operator);
        setNumber(_number);
        const validationOK = (_name.isValid && _number.isValid && _operator.isValid);

        // Check
        if(validationOK) {
            dispatch(emitAddAgentSims({
                id: agent.id,
                name: _name.data,
                number: _number.data,
                operator: _operator.data,
                reference: agent.reference,
                description: description.data
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
                                       val={agent.name}
                                       label='Agent/Ressource'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <InputComponent label='Nom'
                                        type='text'
                                        input={name}
                                        id='inputName'
                                        handleInput={handleNameInput}
                        />
                    </div>
                    <div className='col-sm-6'>
                        <InputComponent type='text'
                                        label='Numéro'
                                        input={number}
                                        id='inputNumber'
                                        handleInput={handleNumberInput}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <SelectComponent input={operator}
                                         label='Opérateur'
                                         id='inputOperator'
                                         title='Choisir un oprétateur'
                                         options={operatorSelectOptions}
                                         handleInput={handleOperatorSelect}
                                         requestProcessing={requestLoading(allOperatorsRequests)}
                        />
                    </div>
                    <div className='col-sm-6'>
                        <TextareaComponent label='Description'
                                           input={description}
                                           id='inputDescription'
                                           handleInput={handleDescriptionInput}
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
AgentAddSimComponent.propTypes = {
    agent: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    operators: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired,
    allOperatorsRequests: PropTypes.object.isRequired,
};

export default React.memo(AgentAddSimComponent);
