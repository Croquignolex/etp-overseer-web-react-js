import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import VendorInfoComponent from "./VendorInfoComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {emitVendorFetch} from "../../redux/vendors/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeShowVendorRequestReset} from "../../redux/requests/vendors/actions";

// Component
function VendorDetailsComponent({id, vendor, dispatch, request}) {

    // Local effects
    useEffect(() => {
        dispatch(emitVendorFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeShowVendorRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <VendorInfoComponent vendor={vendor} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
VendorDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    vendor: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
};

export default React.memo(VendorDetailsComponent);
