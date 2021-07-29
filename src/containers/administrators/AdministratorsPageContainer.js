import {connect} from "react-redux";

import {ADMINS} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";
import AdministratorsPage from "../../pages/users/AdministratorsPage";

setPageTitle(ADMINS);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.administrators.page,
    administrators: state.administrators.list,
    hasMoreData: state.administrators.hasMoreData,
    administratorsRequests: state.administratorsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AdministratorsPage);