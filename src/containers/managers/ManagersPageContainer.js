import {connect} from "react-redux";

import ManagersPage from "../../pages/users/ManagersPage";
import {MANAGERS} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(MANAGERS);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.managers.page,
    managers: state.managers.list,
    hasMoreData: state.managers.hasMoreData,
    managersRequests: state.managersRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ManagersPage);