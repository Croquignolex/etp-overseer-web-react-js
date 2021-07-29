import {connect} from "react-redux";

import SimsPage from "../../pages/sims/SimsPage";
import {SIMS_PAGE} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(SIMS_PAGE);

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
export default connect(mapStateToProps, mapDispatchToProps)(SimsPage);