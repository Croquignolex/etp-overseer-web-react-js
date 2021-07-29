import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import AccountantInfoComponent from "./AccountantInfoComponent";
import {emitAccountantFetch} from "../../redux/accountants/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeAccountantRequestReset} from "../../redux/requests/accountants/actions";

// Component
function AccountantDetailsComponent({id, accountant, dispatch, request}) {
    // Local effects
    useEffect(() => {
        dispatch(emitAccountantFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAccountantRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <AccountantInfoComponent accountant={accountant} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
AccountantDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    accountant: PropTypes.object.isRequired,
};

export default React.memo(AccountantDetailsComponent);
