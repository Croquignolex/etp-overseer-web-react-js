import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {OPERATIONS_CLEARANCES_PAGE} from "../../constants/pageNameConstants";
import OperationsClearancesPage from "../../pages/operations/OperationsClearancesPage";

setPageTitle(OPERATIONS_CLEARANCES_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.refuels.page,
    refuels: state.refuels.list,
    hasMoreData: state.refuels.hasMoreData,
    refuelsRequests: state.refuelsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperationsClearancesPage);