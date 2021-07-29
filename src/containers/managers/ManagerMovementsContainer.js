import {connect} from "react-redux";

import ManagerMovementsComponent from "../../components/managers/ManagerMovementsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.managersRequests.movements,
    movements: state.managers.current.movements,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ManagerMovementsComponent);