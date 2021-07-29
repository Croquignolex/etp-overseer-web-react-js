import {connect} from "react-redux";

import ZoneNewComponent from "../../components/zones/ZoneNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.zonesRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ZoneNewComponent);