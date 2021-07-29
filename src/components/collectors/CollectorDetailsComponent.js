import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import CollectorInfoComponent from "./CollectorInfoComponent";
import {emitCollectorFetch} from "../../redux/collectors/actions";
import CollectorSimsListComponent from "./CollectorSimsListComponent";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeCollectorRequestReset} from "../../redux/requests/collectors/actions";

// Component
function CollectorDetailsComponent({id, collector, dispatch, request}) {
    // Local effects
    useEffect(() => {
        dispatch(emitCollectorFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeCollectorRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <CollectorInfoComponent collector={collector} />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <CollectorSimsListComponent collector={collector} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
CollectorDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    collector: PropTypes.object.isRequired,
};

export default React.memo(CollectorDetailsComponent);
