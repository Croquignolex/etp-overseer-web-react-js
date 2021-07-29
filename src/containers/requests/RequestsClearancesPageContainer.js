import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {REQUESTS_CLEARANCES_PAGE} from "../../constants/pageNameConstants";
import RequestsClearancesPage from "../../pages/requests/RequestsClearancesPage";

setPageTitle(REQUESTS_CLEARANCES_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.clearances.page,
    clearances: state.clearances.list,
    hasMoreData: state.clearances.hasMoreData,
    clearancesRequests: state.clearancesRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(RequestsClearancesPage);