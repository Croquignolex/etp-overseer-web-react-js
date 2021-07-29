import {connect} from "react-redux";

import AdministratorDetailsComponent from "../../components/administrators/AdministratorDetailsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.administratorsRequests.show,
    administrator: state.administrators.current,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AdministratorDetailsComponent);