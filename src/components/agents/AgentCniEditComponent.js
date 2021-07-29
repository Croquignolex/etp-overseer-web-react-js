import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import FileImageComponent from "../form/FileImageComponent";
import {emitUpdateAgentCNI} from "../../redux/agents/actions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {requiredImageChecker} from "../../functions/checkerFunctions";
import {storeAgentEditCniRequestReset} from "../../redux/requests/agents/actions";
import {applySuccess, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";

// Component
function AgentCniEditComponent({request, agent, dispatch, handleClose}) {
    // Local state
    const [backIDCard, setBackIDCard] = useState(DEFAULT_FORM_DATA);
    const [frontIDCard, setFrontIDCard] = useState(DEFAULT_FORM_DATA);

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
        dispatch(storeAgentEditCniRequestReset());
    };

    const handleFrontIDCardInput = (data) => {
        shouldResetErrorData();
        setFrontIDCard({...frontIDCard, isValid: true, data})
    }

    const handleBackIDCardInput = (data) => {
        shouldResetErrorData();
        setBackIDCard({...backIDCard, isValid: true, data})
    }

    // Trigger user information form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _backIDCard = requiredImageChecker(backIDCard);
        const _frontIDCard = requiredImageChecker(frontIDCard);
        // Set value
        setBackIDCard(_backIDCard);
        setFrontIDCard(_frontIDCard);
        const validationOK = _backIDCard.isValid && _frontIDCard.isValid;
        // Check
        if(validationOK) {
            dispatch(emitUpdateAgentCNI({
                id: agent.id,
                backIDCard: _backIDCard.data.file,
                frontIDCard: _frontIDCard.data.file,
            }));
        }
        else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <FileImageComponent input={frontIDCard}
                                        id='inputFrontIDCard'
                                        label='Image avant CNI'
                                        handleInput={handleFrontIDCardInput}
                    />
                </div>
                <div className='row'>
                    <FileImageComponent input={backIDCard}
                                        id='inputBackIDCard'
                                        label='Image arrière CNI'
                                        handleInput={handleBackIDCardInput}
                    />
                </div>
                <div className="form-group row">
                    <ButtonComponent processing={requestLoading(request)} />
                </div>
            </form>
        </>
    )
}

// Prop types to ensure destroyed props data type
AgentCniEditComponent.propTypes = {
    agent: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default React.memo(AgentCniEditComponent);
