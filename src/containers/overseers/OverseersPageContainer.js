import {connect} from "react-redux";

import {OVERSEER} from "../../constants/pageNameConstants";
import OverseersPage from "../../pages/users/OverseersPage";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(OVERSEER);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.overseers.page,
    overseers: state.overseers.list,
    hasMoreData: state.overseers.hasMoreData,
    overseersRequests: state.overseersRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OverseersPage);