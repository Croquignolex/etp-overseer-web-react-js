import {connect} from "react-redux";

import ZoneAddAgentComponent from "../../components/zones/ZoneAddAgentComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    zone: state.zones.current,
    request: state.zonesRequests.edit.agent,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ZoneAddAgentComponent);