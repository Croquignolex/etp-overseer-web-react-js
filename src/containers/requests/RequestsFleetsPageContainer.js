import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {REQUESTS_FLEETS_PAGE} from "../../constants/pageNameConstants";
import RequestsFleetsPage from "../../pages/requests/RequestsFleetsPage";

setPageTitle(REQUESTS_FLEETS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.fleets.page,
    fleets: state.fleets.list,
    fleetsRequests: state.fleetsRequests,
    hasMoreData: state.fleets.hasMoreData,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(RequestsFleetsPage);