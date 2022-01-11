import {connect} from "react-redux";

import ResourceAgencyEditComponent from "../../components/resources/ResourceAgencyEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agent: state.agents.current,
    agencies: state.agencies.list,
    request: state.agentsRequests.edit.zone,
    allAgenciesRequests: state.agenciesRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ResourceAgencyEditComponent);
