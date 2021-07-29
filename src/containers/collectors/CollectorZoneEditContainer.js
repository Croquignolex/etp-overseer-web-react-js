import {connect} from "react-redux";

import CollectorZoneEditComponent from "../../components/collectors/CollectorZoneEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    zones: state.zones.list,
    collector: state.collectors.current,
    allZonesRequests: state.zonesRequests.all,
    request: state.collectorsRequests.edit.zone,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CollectorZoneEditComponent);