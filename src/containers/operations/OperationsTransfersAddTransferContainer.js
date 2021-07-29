import {connect} from "react-redux";

import OperationsTransfersAddTransferComponent from "../../components/operations/OperationsTransfersAddTransferComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user,
    sims: state.sims.list,
    request: state.transfersRequests.add,
    allSimsRequests: state.simsRequests.internal,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperationsTransfersAddTransferComponent);