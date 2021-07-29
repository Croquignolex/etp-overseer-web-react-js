import {connect} from "react-redux";

import AgentDocEditComponent from "../../components/agents/AgentDocEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agent: state.agents.current,
    request: state.agentsRequests.edit.doc,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgentDocEditComponent);