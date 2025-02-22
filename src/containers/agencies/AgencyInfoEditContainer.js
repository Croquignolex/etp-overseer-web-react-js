import {connect} from "react-redux";

import AgencyInfoEditComponent from "../../components/agencies/AgencyInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agency: state.agencies.current,
    request: state.agenciesRequests.edit,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgencyInfoEditComponent);
