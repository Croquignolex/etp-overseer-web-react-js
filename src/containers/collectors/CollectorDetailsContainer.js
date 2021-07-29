import {connect} from "react-redux";

import CollectorDetailsComponent from "../../components/collectors/CollectorDetailsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    collector: state.collectors.current,
    request: state.collectorsRequests.show,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CollectorDetailsComponent);