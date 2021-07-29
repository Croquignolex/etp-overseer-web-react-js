import {connect} from "react-redux";

import PublicRouteComponent from "../components/router/PublicRouteComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user
});

// Connect component to Redux
export default connect(mapStateToProps)(PublicRouteComponent);