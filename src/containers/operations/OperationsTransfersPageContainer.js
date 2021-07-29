import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {OPERATIONS_TRANSFERS_PAGE} from "../../constants/pageNameConstants";
import OperationsTransfersPage from "../../pages/operations/OperationsTransfersPage";

setPageTitle(OPERATIONS_TRANSFERS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.transfers.page,
    transfers: state.transfers.list,
    hasMoreData: state.transfers.hasMoreData,
    transfersRequests: state.transfersRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperationsTransfersPage);