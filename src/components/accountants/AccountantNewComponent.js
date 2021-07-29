import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import * as constants from "../../constants/defaultConstants";
import {emitNewAccountant} from "../../redux/accountants/actions";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {phoneChecker, requiredChecker} from "../../functions/checkerFunctions";
import {storeAddAccountantRequestReset} from "../../redux/requests/accountants/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function AccountantNewComponent({request, dispatch, handleClose}) {
    // Local state
    const [name, setName] = useState(constants.DEFAULT_FORM_DATA);
    const [phone, setPhone] = useState(constants.DEFAULT_FORM_DATA);
    const [email, setEmail] = useState(constants.DEFAULT_FORM_DATA);
    const [address, setAddress] = useState(constants.DEFAULT_FORM_DATA);
    const [description, setDescription] = useState(constants.DEFAULT_FORM_DATA);

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

    const handlePhoneInput = (data) => {
        shouldResetErrorData();
        setPhone({...phone, isValid: true, data})
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

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAddAccountantRequestReset());
    };

    // Trigger new agent form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _phone = phoneChecker(phone);
        const _name = requiredChecker(name);
        // Set value
        setName(_name);
        setPhone(_phone);
        const validationOK = (_name.isValid && _phone.isValid);
        // Check
        if(validationOK)
            dispatch(emitNewAccountant({
                name: _name.data,
                email: email.data,
                phone: _phone.data,
                address: address.data,
                description: description.data,
                password: constants.DEFAULT_PASSWORD,
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
                                                input={phone}
                                                id='inputPhone'
                                                label='Téléphone'
                                                handleInput={handlePhoneInput}
                                />
                            </div>
                        </div>
                        <div className='row'>
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
                </div>
            </div>
        </div>
    )
}

// Prop types to ensure destroyed props data type
AccountantNewComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default React.memo(AccountantNewComponent);
