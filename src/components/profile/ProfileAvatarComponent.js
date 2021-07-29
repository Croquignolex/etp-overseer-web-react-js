import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import ButtonComponent from "../form/ButtonComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import FileImageComponent from "../form/FileImageComponent";
import {emitUserAvatarUpdate} from "../../redux/user/actions";
import {playWarningSound} from "../../functions/playSoundFunctions";
import {requiredImageChecker} from "../../functions/checkerFunctions";
import {DEFAULT_OBJECT_FORM_DATA} from "../../constants/defaultConstants";
import {storeUserAvatarEditRequestReset} from "../../redux/requests/user/actions";
import {
    applySuccess,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";

// Component
function ProfileAvatarComponent({dispatch, request}) {
    // Local state
    const [avatar, setAvatar] = useState(DEFAULT_OBJECT_FORM_DATA);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(request)) {
            applySuccess(request.message);
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

    const handleAvatarInput = (data) => {
        shouldResetErrorData();
        setAvatar({...avatar, isValid: true, data})
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeUserAvatarEditRequestReset());
    };

    // Trigger avatar form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _avatar = requiredImageChecker(avatar);
        // Set value
        setAvatar(_avatar);
        const validationOK = _avatar.isValid && _avatar.data.base64;
        // Make sure file has been well parsed
        if(validationOK) {
            dispatch(emitUserAvatarUpdate({avatar: _avatar.data.base64}));
        }
        else playWarningSound();
    };

    // Render
    return (
        <>
            {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
            {/* Avatar form */}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <FileImageComponent input={avatar}
                                        id='inputAvatar'
                                        label='Image de profil'
                                        handleInput={handleAvatarInput}
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
ProfileAvatarComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
};

export default React.memo(ProfileAvatarComponent);
