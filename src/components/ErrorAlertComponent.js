import React from "react";
import PropTypes from "prop-types";
import {Alert} from "react-bootstrap";

import {AUTH_URL} from "../constants/generalConstants";
import {playErrorSound} from "../functions/playSoundFunctions";
import {DEFAULT_GUEST_MESSAGE} from "../constants/defaultConstants";

// Component
function ErrorAlertComponent({message}) {
    // Play sound
    playErrorSound();

    // Render
    return (
        <Alert variant="danger" className='text-center'>
            <i className="fa fa-ban" />&nbsp;
            {message !== DEFAULT_GUEST_MESSAGE
                ? message
                : <>Erreur d'authentification. Merci de vous authentifier en cliquant <a href={AUTH_URL}>ici</a>.</>
            }
        </Alert>
    )
}

// Prop types to ensure destroyed props data type
ErrorAlertComponent.propTypes = {
    message: PropTypes.string.isRequired
};

// Connect component to Redux
export default React.memo(ErrorAlertComponent);
