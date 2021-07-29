import {connect} from "react-redux";

import CheckUserPage from "../pages/CheckUserPage";
import {setPageTitle} from "../functions/generalFunctions";

setPageTitle("Redirection");

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.userRequests.check
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CheckUserPage);