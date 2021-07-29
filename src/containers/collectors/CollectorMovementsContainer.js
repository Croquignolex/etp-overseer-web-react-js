import {connect} from "react-redux";

import CollectorMovementsComponent from "../../components/collectors/CollectorMovementsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.collectorsRequests.movements,
    movements: state.collectors.current.movements,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CollectorMovementsComponent);