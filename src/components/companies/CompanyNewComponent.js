import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {emitNewCompany} from "../../redux/companies/actions";
import FileDocumentComponent from "../form/FileDocumentComponent";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeAddCompanyRequestReset} from "../../redux/requests/companies/actions";
import {fileChecker, phoneChecker, requiredChecker} from "../../functions/checkerFunctions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function CompanyNewComponent({request, dispatch, handleClose}) {
    // Local state
    const [doc, setDoc] = useState(DEFAULT_FORM_DATA);
    const [name, setName] = useState(DEFAULT_FORM_DATA);
    const [phone, setPhone] = useState(DEFAULT_FORM_DATA);
    const [manager, setManager] = useState(DEFAULT_FORM_DATA);
    const [address, setAddress] = useState(DEFAULT_FORM_DATA);
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

    const handleManagerInput = (data) => {
        shouldResetErrorData();
        setManager({...manager, isValid: true, data})
    }

    const handlePhoneInput = (data) => {
        shouldResetErrorData();
        setPhone({...phone, isValid: true, data})
    }

    const handleDescriptionInput = (data) => {
        shouldResetErrorData();
        setDescription({...description, isValid: true, data})
    }

    const handleFileInput = (data) => {
        shouldResetErrorData();
        setDoc({...doc, isValid: true, data})
    }

    const handleAddressInput = (data) => {
        shouldResetErrorData();
        setAddress({...address, isValid: true, data})
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAddCompanyRequestReset());
    };

    // Trigger new agent form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _document = fileChecker(doc);
        const _phone = phoneChecker(phone);
        const _name = requiredChecker(name);
        const _manager = requiredChecker(manager);
        const _address = requiredChecker(address);
        // Set value
        setName(_name);
        setPhone(_phone);
        setDoc(_document);
        setManager(_manager);
        setAddress(_address);
        const validationOK = ( _name.isValid && _phone.isValid && _document.isValid && _manager.isValid && _address.isValid);
        // Check
        if(validationOK)
            dispatch(emitNewCompany({
                name: _name.data,
                phone: _phone.data,
                address: _address.data,
                manager: _manager.data,
                document: _document.data,
                description: description.data,
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
                        </div>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <InputComponent type='text'
                                                input={manager}
                                                id='inputManager'
                                                label='Responsable'
                                                handleInput={handleManagerInput}
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
        </div>
    )
}

// Prop types to ensure destroyed props data type
CompanyNewComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default React.memo(CompanyNewComponent);
