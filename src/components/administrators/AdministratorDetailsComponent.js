import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import AdministratorInfoComponent from "./AdministratorInfoComponent";
import {emitAdministratorFetch} from "../../redux/administrators/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeAdministratorRequestReset} from "../../redux/requests/administrators/actions";

// Component
function AdministratorDetailsComponent({id, administrator, dispatch, request}) {
    // Local effects
    useEffect(() => {
        dispatch(emitAdministratorFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAdministratorRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <AdministratorInfoComponent administrator={administrator} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
AdministratorDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    administrator: PropTypes.object.isRequired,
};

export default React.memo(AdministratorDetailsComponent);
