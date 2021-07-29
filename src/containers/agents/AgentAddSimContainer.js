import {connect} from "react-redux";

import AgentAddSimComponent from "../../components/agents/AgentAddSimComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agent: state.agents.current,
    operators: state.operators.list,
    request: state.agentsRequests.edit.sim,
    allOperatorsRequests: state.operatorsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgentAddSimComponent);