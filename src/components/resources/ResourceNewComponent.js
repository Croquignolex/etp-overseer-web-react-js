import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import SelectComponent from "../form/SelectComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {emitNewResource} from "../../redux/agents/actions";
import FileImageComponent from "../form/FileImageComponent";
import * as constants from "../../constants/defaultConstants";
import FileDocumentComponent from "../form/FileDocumentComponent";
import {emitAllAgenciesFetch} from "../../redux/agencies/actions";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {dataToArrayForSelect} from "../../functions/arrayFunctions";
import {storeAllZonesRequestReset} from "../../redux/requests/zones/actions";
import {storeAddAgentRequestReset} from "../../redux/requests/agents/actions";
import {fileChecker, imageChecker, phoneChecker, requiredChecker} from "../../functions/checkerFunctions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function ResourceNewComponent({agencies, request, allAgenciesRequests, dispatch, handleClose}) {
    // Local state
    const [doc, setDoc] = useState(constants.DEFAULT_FORM_DATA);
    const [name, setName] = useState(constants.DEFAULT_FORM_DATA);
    const [phone, setPhone] = useState(constants.DEFAULT_FORM_DATA);
    const [email, setEmail] = useState(constants.DEFAULT_FORM_DATA);
    const [agency, setAgency] = useState(constants.DEFAULT_FORM_DATA);
    const [address, setAddress] = useState(constants.DEFAULT_FORM_DATA);
    const [backIDCard, setBackIDCard] = useState(constants.DEFAULT_FORM_DATA);
    const [frontIDCard, setFrontIDCard] = useState(constants.DEFAULT_FORM_DATA);
    const [description, setDescription] = useState(constants.DEFAULT_FORM_DATA);

    // Local effects
    useEffect(() => {
        dispatch(emitAllAgenciesFetch());
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

    const handleAgencySelect = (data) => {
        shouldResetErrorData();
        setAgency({...agency, isValid: true, data})
    }

    const handleFileInput = (data) => {
        shouldResetErrorData();
        setDoc({...doc, isValid: true, data})
    }

    // Build select options
    const agencySelectOptions = useMemo(() => {
        return dataToArrayForSelect(agencies)
    }, [agencies]);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAllZonesRequestReset());
        dispatch(storeAddAgentRequestReset());
    };

    // Trigger new agent form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _document = fileChecker(doc);
        const _phone = phoneChecker(phone);
        const _name = requiredChecker(name);
        const _agency = requiredChecker(agency);
        const _backIDCard = imageChecker(backIDCard);
        const _frontIDCard = imageChecker(frontIDCard);
        // Set value
        setName(_name);
        setPhone(_phone);
        setDoc(_document);
        setAgency(_agency);
        setBackIDCard(_backIDCard);
        setFrontIDCard(_frontIDCard);
        const validationOK = (
            _name.isValid && _phone.isValid &&
            _document.isValid && _agency.isValid &&
            _backIDCard.isValid && _frontIDCard.isValid
        );
        // Check
        if(validationOK)
            dispatch(emitNewResource({
                name: _name.data,
                email: email.data,
                phone: _phone.data,
                agency: _agency.data,
                address: address.data,
                document: _document.data,
                description: description.data,
                backIDCard: _backIDCard.data.file,
                frontIDCard: _frontIDCard.data.file,
            }));
        else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            {requestFailed(allAgenciesRequests) && <ErrorAlertComponent message={allAgenciesRequests.message} />}
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
                            <div className='col-sm-6'>
                                <SelectComponent label='Agence'
                                                 input={agency}
                                                 id='inputZone'
                                                 title='Choisir une agence'
                                                 options={agencySelectOptions}
                                                 handleInput={handleAgencySelect}
                                                 requestProcessing={requestLoading(allAgenciesRequests)}
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
ResourceNewComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    agencies: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired,
    allAgenciesRequests: PropTypes.object.isRequired,
};

export default React.memo(ResourceNewComponent);
