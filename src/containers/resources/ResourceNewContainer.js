import {connect} from "react-redux";

import ResourceNewComponent from "../../components/resources/ResourceNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agencies: state.agencies.list,
    request: state.agentsRequests.add,
    allAgenciesRequests: state.agenciesRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ResourceNewComponent);
