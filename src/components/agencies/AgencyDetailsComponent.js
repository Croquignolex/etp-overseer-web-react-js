import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import AgencyInfoComponent from "./AgencyInfoComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {emitAgencyFetch} from "../../redux/agencies/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeShowAgencyRequestReset} from "../../redux/requests/agencies/actions";

// Component
function AgencyDetailsComponent({id, agency, dispatch, request}) {

    // Local effects
    useEffect(() => {
        dispatch(emitAgencyFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeShowAgencyRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <AgencyInfoComponent agency={agency} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
AgencyDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    agency: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
};

export default React.memo(AgencyDetailsComponent);
