import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import '../assets/scss/footer.scss';

import LoaderComponent from "../components/LoaderComponent";
import ErrorAlertComponent from "../components/ErrorAlertComponent";
import {emitAttemptUserAuthentication} from "../redux/user/actions";
import {DEFAULT_GUEST_MESSAGE} from "../constants/defaultConstants";
import {storeUserCheckRequestFailed} from "../redux/requests/user/actions";
import {requestFailed, requestLoading} from "../functions/generalFunctions";

// Component
function CheckUserPage({location, request, dispatch}) {
    // local effects
    useEffect(() => {
        // Extract token from URL
        const token = (new URLSearchParams(location.search)).get('token');
        if(token === null) {
            // Display unauthenticated error
            dispatch(storeUserCheckRequestFailed({message: DEFAULT_GUEST_MESSAGE}))
        }
        else {
            // Attempt to authenticate user
            dispatch(emitAttemptUserAuthentication({token}))
        }
        // eslint-disable-next-line
    }, []);

    // Render
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mx-auto">
                    <img alt="..." src={require('../assets/images/overseer.png')} className="img-fluid" />
                </div>
                <div className="col-12 mt-4">
                    {requestLoading(request) && <LoaderComponent />}
                    {requestFailed(request) && <ErrorAlertComponent message={request.message} />}
                </div>
            </div>
            <footer className="app-footer text-right">
                <small><strong>Copyright &copy; 2020.</strong>&nbsp;&nbsp;All rights reserved.</small>
            </footer>
        </div>
    )
}

// Prop types to ensure destroyed props data type
CheckUserPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};

export default React.memo(CheckUserPage);