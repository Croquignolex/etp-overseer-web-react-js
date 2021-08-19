import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from 'react-router-dom';
import {PROFILE_PAGE_PATH} from "../../constants/pagePathConstants";

// Component
const PublicRouteComponent = ({ component: Component, user, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !user.isLoggedIn
                ? <Component {...props} />
                : <Redirect to={{pathname: PROFILE_PAGE_PATH}} />
        }
    />
);

// Prop types to ensure destroyed props data type
PublicRouteComponent.propTypes = {
    rest: PropTypes.object,
    user: PropTypes.object.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

// Connect component to Redux
export default React.memo(PublicRouteComponent);
