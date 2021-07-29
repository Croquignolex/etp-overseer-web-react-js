import {connect} from "react-redux";

import ProfilePage from "../pages/ProfilePage";
import {setPageTitle} from "../functions/generalFunctions";
import {PROFILE_PAGE} from "../constants/pageNameConstants";

setPageTitle(PROFILE_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user,
    userRequests: state.requests.user
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);