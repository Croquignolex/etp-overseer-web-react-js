import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import OverseerInfoComponent from "./OverseerInfoComponent";
import {emitOverseerFetch} from "../../redux/overseers/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeOverseerRequestReset} from "../../redux/requests/overseers/actions";

// Component
function OverseerDetailsComponent({id, overseer, dispatch, request}) {
    // Local effects
    useEffect(() => {
        dispatch(emitOverseerFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeOverseerRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <OverseerInfoComponent overseer={overseer} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
OverseerDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    overseer: PropTypes.object.isRequired,
};

export default React.memo(OverseerDetailsComponent);
