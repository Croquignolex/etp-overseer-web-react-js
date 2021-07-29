import {connect} from "react-redux";

import ProfileEditComponent from "../../components/profile/ProfileEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user,
    request: state.userRequests.profile
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditComponent);