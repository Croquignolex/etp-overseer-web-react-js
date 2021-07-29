import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import SelectComponent from "../form/SelectComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {emitAllZonesFetch} from "../../redux/zones/actions";
import * as constants from "../../constants/defaultConstants";
import {emitNewCollector} from "../../redux/collectors/actions";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeAllZonesRequestReset} from "../../redux/requests/zones/actions";
import {phoneChecker, requiredChecker} from "../../functions/checkerFunctions";
import {dataToArrayForSelect, mappedZones} from "../../functions/arrayFunctions";
import {storeAddCollectorRequestReset} from "../../redux/requests/collectors/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function CollectorNewComponent({zones, request, allZonesRequests, dispatch, handleClose}) {
    // Local state
    const [zone, setZone] = useState(constants.DEFAULT_FORM_DATA);
    const [name, setName] = useState(constants.DEFAULT_FORM_DATA);
    const [phone, setPhone] = useState(constants.DEFAULT_FORM_DATA);
    const [email, setEmail] = useState(constants.DEFAULT_FORM_DATA);
    const [address, setAddress] = useState(constants.DEFAULT_FORM_DATA);
    const [description, setDescription] = useState(constants.DEFAULT_FORM_DATA);

    // Local effects
    useEffect(() => {
        dispatch(emitAllZonesFetch());
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

    const handleZoneSelect = (data) => {
        shouldResetErrorData();
        setZone({...zone, isValid: true, data})
    }

    // Build select options
    const zoneSelectOptions = useMemo(() => {
        return dataToArrayForSelect(mappedZones(zones))
    }, [zones]);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAllZonesRequestReset());
        dispatch(storeAddCollectorRequestReset());
    };

    // Trigger new agent form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _phone = phoneChecker(phone);
        const _name = requiredChecker(name);
        const _zone = requiredChecker(zone);
        // Set value
        setName(_name);
        setZone(_zone);
        setPhone(_phone);
        const validationOK = (_name.isValid && _phone.isValid && _zone.isValid);
        // Check
        if(validationOK)
            dispatch(emitNewCollector({
                name: _name.data,
                zone: _zone.data,
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
            {requestFailed(allZonesRequests) && <ErrorAlertComponent message={allZonesRequests.message} />}
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
                                <SelectComponent label='Zone'
                                                 input={zone}
                                                 id='inputZone'
                                                 title='Choisir une zone'
                                                 options={zoneSelectOptions}
                                                 handleInput={handleZoneSelect}
                                                 requestProcessing={requestLoading(allZonesRequests)}
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
CollectorNewComponent.propTypes = {
    zones: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    allZonesRequests: PropTypes.object.isRequired,
};

export default React.memo(CollectorNewComponent);
