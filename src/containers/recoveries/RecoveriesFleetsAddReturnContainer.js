import {connect} from "react-redux";

import RecoveriesFleetsAddReturnComponent from "../../components/recoveries/RecoveriesFleetsAddReturnComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    sims: state.sims.list,
    agents: state.agents.list,
    request: state.returnsRequests.fleet,
    allSimsRequests: state.simsRequests.all,
    allAgentsRequests: state.agentsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(RecoveriesFleetsAddReturnComponent);