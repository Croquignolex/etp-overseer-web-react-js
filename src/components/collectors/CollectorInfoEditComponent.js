import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {requiredChecker} from "../../functions/checkerFunctions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {emitUpdateCollectorInfo} from "../../redux/collectors/actions";
import {storeCollectorEditInfoRequestReset} from "../../redux/requests/collectors/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function CollectorInfoEditComponent({request, collector, dispatch, handleClose}) {
    // Local state
    const [name, setName] = useState({...DEFAULT_FORM_DATA, data: collector.name});
    const [email, setEmail] = useState({...DEFAULT_FORM_DATA, data: collector.email});
    const [address, setAddress] = useState({...DEFAULT_FORM_DATA, data: collector.address});
    const [description, setDescription] = useState({...DEFAULT_FORM_DATA, data: collector.description});

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
        dispatch(storeCollectorEditInfoRequestReset());
    };

    const handleNameInput = (data) => {
        shouldResetErrorData();
        setName({...name, isValid: true, data})
    }

    const handleEmailInput = (data) => {
        shouldResetErrorData();
        setEmail({...email, isValid: true, data})
    }

    const handleAddressInput = (data) => {
        shouldResetErrorData();
        setAddress({...address, isValid: true, data})
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
            dispatch(emitUpdateCollectorInfo({
                id: collector.id,
                name: _name.data,
                email: email.data,
                address: address.data,
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
                        <InputComponent type='text'
                                        label='Email'
                                        input={email}
                                        id='inputEmail'
                                        handleInput={handleEmailInput}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <TextareaComponent label='Adresse'
                                           input={address}
                                           id='inputAddress'
                                           handleInput={handleAddressInput}
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
CollectorInfoEditComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    collector: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default React.memo(CollectorInfoEditComponent);
