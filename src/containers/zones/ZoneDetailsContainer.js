import {connect} from "react-redux";

import ZoneDetailsComponent from "../../components/zones/ZoneDetailsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    zone: state.zones.current,
    request: state.zonesRequests.show,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ZoneDetailsComponent);