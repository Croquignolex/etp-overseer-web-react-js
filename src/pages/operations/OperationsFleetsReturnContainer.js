import {connect} from "react-redux";

import OperationsFleetsReturnComponent from "../../components/operations/OperationsFleetsReturnComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    sims: state.sims.list,
    request: state.returnsRequests.add,
    allSimsRequests: state.simsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperationsFleetsReturnComponent);