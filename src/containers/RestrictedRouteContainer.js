import {connect} from "react-redux";

import RestrictedRouteComponent from "../components/router/RestrictedRouteComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user
});

// Connect component to Redux
export default connect(mapStateToProps)(RestrictedRouteComponent);