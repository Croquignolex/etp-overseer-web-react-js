import {connect} from "react-redux";

import AgentPrimaryInfoEditComponent from "../../components/agents/AgentPrimaryInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agent: state.agents.current,
    request: state.agentsRequests.edit.info,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgentPrimaryInfoEditComponent);