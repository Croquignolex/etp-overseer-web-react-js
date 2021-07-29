import {connect} from "react-redux";

import ProfileAvatarComponent from "../../components/profile/ProfileAvatarComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.userRequests.avatar
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ProfileAvatarComponent);