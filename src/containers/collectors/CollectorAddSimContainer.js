import {connect} from "react-redux";

import CollectorAddSimComponent from "../../components/collectors/CollectorAddSimComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    operators: state.operators.list,
    collector: state.collectors.current,
    request: state.collectorsRequests.edit.sim,
    allOperatorsRequests: state.operatorsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CollectorAddSimComponent);