import {connect} from "react-redux";

import ManagersCardsComponent from "../../components/managers/ManagersCardsComponent";

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapDispatchToProps)(ManagersCardsComponent);