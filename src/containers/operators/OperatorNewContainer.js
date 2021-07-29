import {connect} from "react-redux";

import OperatorNewComponent from "../../components/operators/OperatorNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.operatorsRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperatorNewComponent);