import {connect} from "react-redux";

import RequestsClearancesAddDeclareComponent from "../../components/requests/RequestsClearancesAddDeclareComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.clearancesRequests.declare
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(RequestsClearancesAddDeclareComponent);