import {connect} from "react-redux";

import AgentZoneEditComponent from "../../components/agents/AgentZoneEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    zones: state.zones.list,
    agent: state.agents.current,
    request: state.agentsRequests.edit.zone,
    allZonesRequests: state.zonesRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgentZoneEditComponent);