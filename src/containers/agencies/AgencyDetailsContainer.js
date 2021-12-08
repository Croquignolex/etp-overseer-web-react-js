import {connect} from "react-redux";

import AgencyDetailsComponent from "../../components/agencies/AgencyDetailsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agency: state.agencies.current,
    request: state.agenciesRequests.show,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgencyDetailsComponent);
