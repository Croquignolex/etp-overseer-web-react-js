import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import FileDocumentComponent from "../form/FileDocumentComponent";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {emitUpdateCompanyDoc} from "../../redux/companies/actions";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {requiredFileChecker} from "../../functions/checkerFunctions";
import {storeCompanyEditDocRequestReset} from "../../redux/requests/companies/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function CompanyDocEditComponent({request, company, dispatch, handleClose}) {
    // Local state
    const [doc, setDoc] = useState(DEFAULT_FORM_DATA);

    // Local effects
    useEffect(() => {
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(request)) {
            applySuccess(request.message);
            handleClose()
        }
        // eslint-disable-next-line
    }, [request]);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeCompanyEditDocRequestReset());
    };

    const handleFileInput = (data) => {
        shouldResetErrorData();
        setDoc({...doc, isValid: true, data})
    }

    // Trigger user information form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _doc = requiredFileChecker(doc);
        // Set value
        setDoc(_doc);
        const validationOK = _doc.isValid;
        // Check
        if(validationOK) {
            dispatch(emitUpdateCompanyDoc({id: company.id, doc: _doc.data}));
        } else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col'>
                        <FileDocumentComponent id='file'
                                               input={doc}
                                               label='Dossier agent'
                                               handleInput={handleFileInput}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <ButtonComponent processing={requestLoading(request)} />
                </div>
            </form>
        </>
    )
}

// Prop types to ensure destroyed props data type
CompanyDocEditComponent.propTypes = {
    company: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default React.memo(CompanyDocEditComponent);
