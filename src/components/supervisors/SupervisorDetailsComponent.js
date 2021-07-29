import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import SupervisorInfoComponent from "./SupervisorInfoComponent";
import {emitSupervisorFetch} from "../../redux/supervisors/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeSupervisorRequestReset} from "../../redux/requests/supervisors/actions";

// Component
function SupervisorDetailsComponent({id, supervisor, dispatch, request}) {
    // Local effects
    useEffect(() => {
        dispatch(emitSupervisorFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeSupervisorRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <SupervisorInfoComponent supervisor={supervisor} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
SupervisorDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    supervisor: PropTypes.object.isRequired,
};

export default React.memo(SupervisorDetailsComponent);
