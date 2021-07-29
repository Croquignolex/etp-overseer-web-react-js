import {connect} from "react-redux";

import OperationsCashRecoveryComponent from "../../components/operations/OperationsCashRecoveryComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.recoveriesRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperationsCashRecoveryComponent);