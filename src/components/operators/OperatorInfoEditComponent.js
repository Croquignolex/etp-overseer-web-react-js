import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {requiredChecker} from "../../functions/checkerFunctions";
import {emitUpdateOperator} from "../../redux/operators/actions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeEditOperatorRequestReset} from "../../redux/requests/operators/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function OperatorInfoEditComponent({request, operator, dispatch, handleClose}) {
    // Local state
    const [name, setName] = useState({...DEFAULT_FORM_DATA, data: operator.name});
    const [description, setDescription] = useState({...DEFAULT_FORM_DATA, data: operator.description});

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

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeEditOperatorRequestReset());
    };

    const handleNameInput = (data) => {
        shouldResetErrorData();
        setName({...name, isValid: true, data})
    }

    const handleDescriptionInput = (data) => {
        shouldResetErrorData();
        setDescription({...description, isValid: true, data})
    }

    // Trigger user information form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _name = requiredChecker(name);
        // Set value
        setName(_name);
        const validationOK = _name.isValid;
        // Check
        if(validationOK) {
            dispatch(emitUpdateOperator({
                id: operator.id,
                name: _name.data,
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
OperatorInfoEditComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    operator: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default React.memo(OperatorInfoEditComponent);
