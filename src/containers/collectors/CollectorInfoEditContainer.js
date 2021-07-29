import {connect} from "react-redux";

import CollectorInfoEditComponent from "../../components/collectors/CollectorInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    collector: state.collectors.current,
    request: state.collectorsRequests.edit.info,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CollectorInfoEditComponent);