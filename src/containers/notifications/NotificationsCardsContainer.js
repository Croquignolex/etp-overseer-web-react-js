import {connect} from "react-redux";

import NotificationsCardsComponent from "../../components/notifications/NotificationsCardsComponent";

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapDispatchToProps)(NotificationsCardsComponent);