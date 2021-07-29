import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ZoneInfoComponent from "./ZoneInfoComponent";
import {emitZoneFetch} from "../../redux/zones/actions";
import ErrorAlertComponent from "../ErrorAlertComponent";
import ZoneAgentsListComponent from "./ZoneAgentsListComponent";
import {storeShowZoneRequestReset} from "../../redux/requests/zones/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function ZoneDetailsComponent({id, zone, dispatch, request}) {

    // Local effects
    useEffect(() => {
        dispatch(emitZoneFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeShowZoneRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ZoneInfoComponent zone={zone} />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <ZoneAgentsListComponent zone={zone} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
ZoneDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    zone: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
};

export default React.memo(ZoneDetailsComponent);
