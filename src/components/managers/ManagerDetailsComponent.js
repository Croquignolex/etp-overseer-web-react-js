import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import ManagerInfoComponent from "./ManagerInfoComponent";
import {emitManagerFetch} from "../../redux/managers/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeManagerRequestReset} from "../../redux/requests/managers/actions";

// Component
function ManagerDetailsComponent({id, manager, dispatch, request}) {
    // Local effects
    useEffect(() => {
        dispatch(emitManagerFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeManagerRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ManagerInfoComponent manager={manager} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
ManagerDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    manager: PropTypes.object.isRequired,
};

export default React.memo(ManagerDetailsComponent);
