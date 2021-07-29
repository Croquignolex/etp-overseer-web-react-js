import {connect} from "react-redux";

import MasterSimsPage from "../../pages/sims/MasterSimsPage";
import {setPageTitle} from "../../functions/generalFunctions";
import {MASTERS_SIMS} from "../../constants/pageNameConstants";

setPageTitle(MASTERS_SIMS);

// Map state function to component props
const mapStateToProps = (state) => ({
    sims: state.sims.list,
    page: state.sims.page,
    simsRequests: state.simsRequests,
    hasMoreData: state.sims.hasMoreData,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(MasterSimsPage);