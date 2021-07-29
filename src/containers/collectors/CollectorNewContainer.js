import {connect} from "react-redux";

import CollectorNewComponent from "../../components/collectors/CollectorNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    zones: state.zones.list,
    request: state.collectorsRequests.add,
    allZonesRequests: state.zonesRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CollectorNewComponent);