import {connect} from "react-redux";

import ProfileDetailComponent from "../../components/profile/ProfileDetailComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user
});

// Connect component to Redux
export default connect(mapStateToProps)(ProfileDetailComponent);