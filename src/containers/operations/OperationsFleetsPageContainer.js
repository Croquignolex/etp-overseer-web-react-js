import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {OPERATIONS_FLEETS_PAGE} from "../../constants/pageNameConstants";
import OperationsFleetsPage from "../../pages/operations/OperationsFleetsPage";

setPageTitle(OPERATIONS_FLEETS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.supplies.page,
    supplies: state.supplies.list,
    hasMoreData: state.supplies.hasMoreData,
    suppliesRequests: state.suppliesRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperationsFleetsPage);