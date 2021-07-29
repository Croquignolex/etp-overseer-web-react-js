import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import InputComponent from "../form/InputComponent";
import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {emitUserPasswordUpdate} from "../../redux/user/actions";
import {DEFAULT_FORM_DATA} from "../../constants/defaultConstants";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {storeUserPasswordEditRequestReset} from "../../redux/requests/user/actions";
import {passwordChecker, passwordConfirmChecker} from "../../functions/checkerFunctions";
import {
    applySuccess,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";

// Component
function ProfilePasswordComponent({request, dispatch}) {
    // Local state
    const [oldPassword, setOldPassword] = useState(DEFAULT_FORM_DATA);
    const [newPassword, setNewPassword] = useState(DEFAULT_FORM_DATA);
    const [confirmPassword, setConfirmPassword] = useState(DEFAULT_FORM_DATA);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(request)) {
            applySuccess(request.message);
            setOldPassword(DEFAULT_FORM_DATA);
            setNewPassword(DEFAULT_FORM_DATA);
            setConfirmPassword(DEFAULT_FORM_DATA);
        }
    }, [request]);

    // Local effects
    useEffect(() => {
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    const handleOldPasswordInput = (data) => {
        shouldResetErrorData();
        setOldPassword({...oldPassword, isValid: true, data})
    }

    const handleNewPasswordInput = (data) => {
        shouldResetErrorData();
        setNewPassword({...newPassword, isValid: true, data})
    }

    const handleConfirmPasswordInput = (data) => {
        shouldResetErrorData();
        setConfirmPassword({...confirmPassword, isValid: true, data})
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeUserPasswordEditRequestReset());
    };

    // Trigger password form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        // Check values
        const _oldPassword = passwordChecker(oldPassword);
        const _newPassword = passwordChecker(newPassword);
        const _confirmPassword = passwordConfirmChecker(confirmPassword, newPassword);
        // Set value
        setOldPassword(_oldPassword);
        setNewPassword(_newPassword);
        setConfirmPassword(_confirmPassword);
        const validationOK = (_oldPassword.isValid && _newPassword.isValid && _confirmPassword.isValid);
        // Check
        if(validationOK) {
            dispatch(emitUserPasswordUpdate({
                oldPassword: _oldPassword.data,
                newPassword: _newPassword.data,
            }));
        } else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            {/* Password form */}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-sm-6'>
                        <InputComponent label='Ancien'
                                        type='password'
                                        input={oldPassword}
                                        id='inputOldPassword'
                                        handleInput={handleOldPasswordInput}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <InputComponent label='Nouveau'
                                        type='password'
                                        input={newPassword}
                                        id='inputNewPassword'
                                        handleInput={handleNewPasswordInput}
                        />
                    </div>
                    <div className='col-sm-6'>
                        <InputComponent type='password'
                                        label='Confirmer'
                                        input={confirmPassword}
                                        id='inputConfirmPassword'
                                        handleInput={handleConfirmPasswordInput}
                        />
                    </div>
                </div>
                <div className="row">
                    <ButtonComponent processing={requestLoading(request)} />
                </div>
            </form>
        </>
    )
}

// Prop types to ensure destroyed props data type
ProfilePasswordComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
};

export default
React.memo(ProfilePasswordComponent);