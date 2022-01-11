import {connect} from "react-redux";

import AgencyAddSimComponent from "../../components/agencies/AgencyAddSimComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agency: state.agencies.current,
    operators: state.operators.list,
    request: state.agenciesRequests.sim,
    allOperatorsRequests: state.operatorsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgencyAddSimComponent);
