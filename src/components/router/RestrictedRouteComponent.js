import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from 'react-router-dom';

// Component
const RestrictedRouteComponent = ({ component: Component, user, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            user.isLoggedIn
                ? <Component {...props} />
                : <Redirect to={{pathname: "/"}} />
        }
    />
);

// Prop types to ensure destroyed props data type
RestrictedRouteComponent.propTypes = {
    rest: PropTypes.object,
    user: PropTypes.object.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

// Connect component to Redux
export default React.memo(RestrictedRouteComponent);
