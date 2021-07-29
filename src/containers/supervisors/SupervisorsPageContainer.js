import {connect} from "react-redux";

import {SUPERVISORS} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";
import SupervisorsPage from "../../pages/users/SupervisorsPage";

setPageTitle(SUPERVISORS);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.supervisors.page,
    supervisors: state.supervisors.list,
    hasMoreData: state.supervisors.hasMoreData,
    supervisorsRequests: state.supervisorsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(SupervisorsPage);