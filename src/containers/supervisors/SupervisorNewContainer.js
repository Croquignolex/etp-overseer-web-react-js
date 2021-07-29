import {connect} from "react-redux";

import SupervisorNewComponent from "../../components/supervisors/SupervisorNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.supervisorsRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(SupervisorNewComponent);