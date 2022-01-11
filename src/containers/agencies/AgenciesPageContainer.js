import {connect} from "react-redux";

import AgenciesPage from "../../pages/AgenciesPage";
import {AGENCIES_PAGE} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(AGENCIES_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.agencies.page,
    agencies: state.agencies.list,
    hasMoreData: state.agencies.hasMoreData,
    agenciesRequests: state.agenciesRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgenciesPage);
