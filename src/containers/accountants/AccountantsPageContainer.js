import {connect} from "react-redux";

import {ACCOUNTANTS} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";
import AccountantsPage from "../../pages/users/AccountantsPage";

setPageTitle(ACCOUNTANTS);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.accountants.page,
    accountants: state.accountants.list,
    hasMoreData: state.accountants.hasMoreData,
    accountantsRequests: state.accountantsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AccountantsPage);