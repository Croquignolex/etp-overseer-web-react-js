import {connect} from "react-redux";

import ZonesPage from "../../pages/ZonesPage";
import {OPERATORS} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(OPERATORS);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.zones.page,
    zones: state.zones.list,
    hasMoreData: state.zones.hasMoreData,
    zonesRequests: state.zonesRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ZonesPage);