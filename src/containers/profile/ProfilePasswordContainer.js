import {connect} from "react-redux";

import ProfilePasswordComponent from "../../components/profile/ProfilePasswordComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.userRequests.password
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePasswordComponent);