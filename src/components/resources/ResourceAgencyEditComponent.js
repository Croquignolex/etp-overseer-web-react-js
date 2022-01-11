import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import SelectComponent from "../form/SelectComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {emitUpdateAgentAgency} from "../../redux/agents/actions";
import {requiredChecker} from "../../functions/checkerFunctions";
import {emitAllAgenciesFetch} from "../../redux/agencies/actions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {dataToArrayForSelect} from "../../functions/arrayFunctions";
import {storeAllZonesRequestReset} from "../../redux/requests/zones/actions";
import {storeAgentEditZoneRequestReset} from "../../redux/requests/agents/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function ResourceAgencyEditComponent({request, agent, agencies, allAgenciesRequests, dispatch, handleClose}) {
    // Local state
    const [agency, setAgency] = useState({...DEFAULT_FORM_DATA, data: agent.agency.id});

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

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAllZonesRequestReset());
        dispatch(storeAgentEditZoneRequestReset());
    };

    // Build select options
    const agenciesSelectOptions = useMemo(() => {
        return dataToArrayForSelect(agencies)
    }, [agencies]);

    const handleAgencySelect = (data) => {
        shouldResetErrorData();
        setAgency({...agency, isValid: true, data})
    }

    // Trigger user information form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _agency = requiredChecker(agency);
        // Set value
        setAgency(_agency);
        const validationOK = _agency.isValid;
        // Check
        if(validationOK) {
            dispatch(emitUpdateAgentAgency({id: agent.id, agency: _agency.data}))
        } else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-sm-6'>
                        <SelectComponent input={agency}
                                         label='Agence'
                                         id='inputZone'
                                         title='Choisir une agence'
                                         options={agenciesSelectOptions}
                                         handleInput={handleAgencySelect}
                                         requestProcessing={requestLoading(allAgenciesRequests)}
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
ResourceAgencyEditComponent.propTypes = {
    agent: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    agencies: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired,
    allAgenciesRequests: PropTypes.object.isRequired,
};

export default React.memo(ResourceAgencyEditComponent);
