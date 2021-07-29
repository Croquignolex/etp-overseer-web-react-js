import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import {emitNewZone} from "../../redux/zones/actions";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {requiredChecker} from "../../functions/checkerFunctions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeAddZoneRequestReset} from "../../redux/requests/zones/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function ZoneNewComponent({request, dispatch, handleClose}) {
    // Local state
    const [name, setName] = useState(DEFAULT_FORM_DATA);
    const [reference, setReference] = useState(DEFAULT_FORM_DATA);
    const [description, setDescription] = useState(DEFAULT_FORM_DATA);

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

    const handleNameInput = (data) => {
        shouldResetErrorData();
        setName({...name, isValid: true, data})
    }

    const handleReferenceInput = (data) => {
        shouldResetErrorData();
        setReference({...reference, isValid: true, data})
    }

    const handleDescriptionInput = (data) => {
        shouldResetErrorData();
        setDescription({...description, isValid: true, data})
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAddZoneRequestReset());
    };

    // Trigger new agent form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _name = requiredChecker(name);
        // Set value
        setName(_name);
        const validationOK = (_name.isValid);
        // Check
        if(validationOK)
            dispatch(emitNewZone({
                name: _name.data,
                reference: reference.data,
                description: description.data
            }));
        else playWarningSound();
    };

    // Render
    return (
        <div>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            <div className="row">
                <div className="col">
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
                                <InputComponent type='text'
                                                label='Reference'
                                                input={reference}
                                                id='inputReference'
                                                handleInput={handleReferenceInput}
                                />
                            </div>
                        </div>
                        <div className='row'>
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
                </div>
            </div>
        </div>
    )
}

// Prop types to ensure destroyed props data type
ZoneNewComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default React.memo(ZoneNewComponent);
