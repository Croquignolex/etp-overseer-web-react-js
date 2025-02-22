import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import TextareaComponent from "../form/TextareaComponent";
import {emitNewAgency} from "../../redux/agencies/actions";
import {requiredChecker} from "../../functions/checkerFunctions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeAllAgentsRequestReset} from "../../redux/requests/agents/actions";
import {storeAddAgencyRequestReset} from "../../redux/requests/agencies/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
// function AgencyNewComponent({agents, allAgentsRequests, request, dispatch, handleClose}) {
function AgencyNewComponent({request, dispatch, handleClose}) {
    // Local state
    const [name, setName] = useState(DEFAULT_FORM_DATA);
    // const [manager, setManger] = useState(DEFAULT_FORM_DATA);
    const [description, setDescription] = useState(DEFAULT_FORM_DATA);

    // Local effects
    useEffect(() => {
        // dispatch(emitAllAgentsFetch());
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

    const handleDescriptionInput = (data) => {
        shouldResetErrorData();
        setDescription({...description, isValid: true, data})
    }

    /*const handleManagerSelect = (data) => {
        shouldResetErrorData();
        setManger({...manager,  isValid: true, data})
    }*/

    // Build select options
    /*const managerSelectOptions = useMemo(() => {
        return dataToArrayForSelect(agents)
    }, [agents]);*/

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAllAgentsRequestReset());
        dispatch(storeAddAgencyRequestReset());
    };

    // Trigger new agent form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _name = requiredChecker(name);
        // const _manager = requiredChecker(manager);
        // Set value
        setName(_name);
        // const validationOK = (_name.isValid && _manager.isValid);
        const validationOK = (_name.isValid);
        // Check
        if(validationOK)
            dispatch(emitNewAgency({
                name: _name.data,
                // manager: _manager.data,
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
                                <TextareaComponent label='Description'
                                                   input={description}
                                                   id='inputDescription'
                                                   handleInput={handleDescriptionInput}
                                />
                            </div>
                            {/*<div className='col-sm-6'>
                                <SelectComponent input={manager}
                                                 id='inputSimAgent'
                                                 label='Responsable'
                                                 title='Choisir un responsable'
                                                 options={managerSelectOptions}
                                                 handleInput={handleManagerSelect}
                                                 requestProcessing={requestLoading(allAgentsRequests)}
                                />
                            </div>*/}
                        </div>
                        {/*<div className='row'>
                            <div className='col-sm-6'>
                                <TextareaComponent label='Description'
                                                   input={description}
                                                   id='inputDescription'
                                                   handleInput={handleDescriptionInput}
                                />
                            </div>
                        </div>*/}
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
AgencyNewComponent.propTypes = {
    // agents: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    // allAgentsRequests: PropTypes.object.isRequired,
};

export default React.memo(AgencyNewComponent);
