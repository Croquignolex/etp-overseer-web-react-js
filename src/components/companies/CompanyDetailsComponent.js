import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import CompanyInfoComponent from "./CompanyInfoComponent";
import {emitCompanyFetch} from "../../redux/companies/actions";
import CompanySimsListComponent from "./CompanySimsListComponent";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeShowCompanyRequestReset} from "../../redux/requests/companies/actions";

// Component
function CompanyDetailsComponent({id, company, dispatch, request}) {

    // Local effects
    useEffect(() => {
        dispatch(emitCompanyFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeShowCompanyRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-12">
                            <CompanyInfoComponent company={company} />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <CompanySimsListComponent company={company} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
CompanyDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    company: PropTypes.object.isRequired,
};

export default React.memo(CompanyDetailsComponent);
