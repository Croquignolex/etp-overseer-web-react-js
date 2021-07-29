import {connect} from "react-redux";

import NotificationsPage from "../pages/NotificationsPage";
import {setPageTitle} from "../functions/generalFunctions";
import {NOTIFICATIONS_PAGE} from "../constants/pageNameConstants";

setPageTitle(NOTIFICATIONS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    notifications: state.notifications.list,
    notificationsRequests: state.notificationsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(NotificationsPage);