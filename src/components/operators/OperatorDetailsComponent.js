import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import OperatorInfoComponent from "./OperatorInfoComponent";
import {emitOperatorFetch} from "../../redux/operators/actions";
import OperatorSimsListComponent from "./OperatorSimsListComponent";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeShowOperatorRequestReset} from "../../redux/requests/operators/actions";

// Component
function OperatorDetailsComponent({id, operator, dispatch, request}) {

    // Local effects
    useEffect(() => {
        dispatch(emitOperatorFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeShowOperatorRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <OperatorInfoComponent operator={operator} />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <OperatorSimsListComponent operator={operator} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
OperatorDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    operator: PropTypes.object.isRequired,
};

export default React.memo(OperatorDetailsComponent);
