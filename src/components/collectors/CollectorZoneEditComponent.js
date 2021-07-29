import PropTypes from "prop-types";
import React, {useEffect, useMemo, useState} from 'react';

import SelectComponent from "../form/SelectComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {emitAllZonesFetch} from "../../redux/zones/actions";
import {requiredChecker} from "../../functions/checkerFunctions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {emitUpdateCollectorZone} from "../../redux/collectors/actions";
import {storeAllZonesRequestReset} from "../../redux/requests/zones/actions";
import {dataToArrayForSelect, mappedZones} from "../../functions/arrayFunctions";
import {storeCollectorEditZoneRequestReset} from "../../redux/requests/collectors/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function CollectorZoneEditComponent({request, collector, zones, allZonesRequests, dispatch, handleClose}) {
    // Local state
    const [zone, setZone] = useState({...DEFAULT_FORM_DATA, data: collector.zone.id});

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

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAllZonesRequestReset());
        dispatch(storeCollectorEditZoneRequestReset());
    };

    // Build select options
    const zonesSelectOptions = useMemo(() => {
        return dataToArrayForSelect(mappedZones(zones))
    }, [zones]);

    const handleZoneSelect = (data) => {
        shouldResetErrorData();
        setZone({...zone,  isValid: true, data})
    }

    // Trigger user information form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _zone = requiredChecker(zone);
        // Set value
        setZone(_zone);
        const validationOK = _zone.isValid;
        // Check
        if(validationOK) {
            dispatch(emitUpdateCollectorZone({id: collector.id, zone: _zone.data}))
        } else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-sm-6'>
                        <SelectComponent input={zone}
                                         label='Zone'
                                         id='inputZone'
                                         title='Choisir une zone'
                                         options={zonesSelectOptions}
                                         handleInput={handleZoneSelect}
                                         requestProcessing={requestLoading(allZonesRequests)}
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
CollectorZoneEditComponent.propTypes = {
    zones: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    collector: PropTypes.object.isRequired,
    allZonesRequests: PropTypes.object.isRequired,
};

export default React.memo(CollectorZoneEditComponent);
