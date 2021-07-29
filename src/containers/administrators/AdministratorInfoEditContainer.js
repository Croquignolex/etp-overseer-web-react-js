import {connect} from "react-redux";

import ManagerInfoEditComponent from "../../components/managers/ManagerInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    manager: state.managers.current,
    request: state.managersRequests.edit,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ManagerInfoEditComponent);