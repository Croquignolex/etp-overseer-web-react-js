import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {RECOVERIES_CASH_PAGE} from "../../constants/pageNameConstants";
import RecoveriesCashPage from "../../pages/recoveries/RecoveriesCashPage";

setPageTitle(RECOVERIES_CASH_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.recoveries.page,
    recoveries: state.recoveries.list,
    hasMoreData: state.recoveries.hasMoreData,
    recoveriesRequests: state.recoveriesRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(RecoveriesCashPage);