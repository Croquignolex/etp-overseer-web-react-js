import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {OPERATIONS_AFFORDS_PAGE} from "../../constants/pageNameConstants";
import OperationsAffordsPage from "../../pages/operations/OperationsAffordsPage";

setPageTitle(OPERATIONS_AFFORDS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.affords.page,
    affords: state.affords.list,
    hasMoreData: state.affords.hasMoreData,
    affordsRequests: state.affordsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperationsAffordsPage);