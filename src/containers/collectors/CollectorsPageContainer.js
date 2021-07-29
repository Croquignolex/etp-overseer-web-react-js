import {connect} from "react-redux";

import CollectorsPage from "../../pages/users/CollectorsPage";
import {COLLECTORS} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(COLLECTORS);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.collectors.page,
    collectors: state.collectors.list,
    collectorsRequests: state.collectorsRequests,
    hasMoreData: state.collectors.hasMoreData,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CollectorsPage);