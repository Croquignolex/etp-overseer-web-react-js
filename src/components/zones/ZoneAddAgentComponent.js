import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import DisabledInput from "../form/DisabledInput";
import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {emitAddZoneAgents} from "../../redux/zones/actions";
import FileImageComponent from "../form/FileImageComponent";
import * as constants from "../../constants/defaultConstants";
import FileDocumentComponent from "../form/FileDocumentComponent";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeZoneAddAgentRequestReset} from "../../redux/requests/zones/actions";
import {fileChecker, imageChecker, phoneChecker, requiredChecker} from "../../functions/checkerFunctions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function ZoneAddAgentComponent({type, request, zone, dispatch, handleClose}) {
    // Local state
    const [doc, setDoc] = useState(constants.DEFAULT_FORM_DATA);
    const [name, setName] = useState(constants.DEFAULT_FORM_DATA);
    const [phone, setPhone] = useState(constants.DEFAULT_FORM_DATA);
    const [email, setEmail] = useState(constants.DEFAULT_FORM_DATA);
    const [address, setAddress] = useState(constants.DEFAULT_FORM_DATA);
    const [backIDCard, setBackIDCard] = useState(constants.DEFAULT_FORM_DATA);
    const [frontIDCard, setFrontIDCard] = useState(constants.DEFAULT_FORM_DATA);
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

    const handleFrontIDCardInput = (data) => {
        shouldResetErrorData();
        setFrontIDCard({...frontIDCard, isValid: true, data})
    }

    const handleBackIDCardInput = (data) => {
        shouldResetErrorData();
        setBackIDCard({...backIDCard, isValid: true, data})
    }

    const handleFileInput = (data) => {
        shouldResetErrorData();
        setDoc({...doc, isValid: true, data})
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeZoneAddAgentRequestReset());
    };

    // Trigger user information form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _document = fileChecker(doc);
        const _phone = phoneChecker(phone);
        const _name = requiredChecker(name);
        const _backIDCard = imageChecker(backIDCard);
        const _frontIDCard = imageChecker(frontIDCard);
        // Set value
        setName(_name);
        setPhone(_phone);
        setDoc(_document);
        setBackIDCard(_backIDCard);
        setFrontIDCard(_frontIDCard);
        const validationOK = (
            _name.isValid && _phone.isValid && _document.isValid &&
            _backIDCard.isValid && _frontIDCard.isValid
        );
        // Check
        if(validationOK)
            dispatch(emitAddZoneAgents({
                id: zone.id,
                reference: type,
                name: _name.data,
                email: email.data,
                phone: _phone.data,
                address: address.data,
                document: _document.data,
                town: constants.DEFAULT_TOWN,
                description: description.data,
                backIDCard: _backIDCard.data.file,
                country: constants.DEFAULT_COUNTRY,
                frontIDCard: _frontIDCard.data.file,
                password: constants.DEFAULT_PASSWORD,
            }));
        else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <DisabledInput label='Zone'
                                               id='inputZone'
                                               val={zone.name}
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
                        <div className='row'>
                            <FileImageComponent input={frontIDCard}
                                                id='inputFrontIDCard'
                                                label='Image avant CNI (facultatif)'
                                                handleInput={handleFrontIDCardInput}
                            />
                        </div>
                        <div className='row'>
                            <FileImageComponent input={backIDCard}
                                                id='inputBackIDCard'
                                                label='Image arrière CNI (facultatif)'
                                                handleInput={handleBackIDCardInput}
                            />
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <FileDocumentComponent id='file'
                                                       input={doc}
                                                       label='Dossier (facultatif)'
                                                       handleInput={handleFileInput}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <ButtonComponent processing={requestLoading(request)} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
ZoneAddAgentComponent.propTypes = {
    zone: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default React.memo(ZoneAddAgentComponent);
