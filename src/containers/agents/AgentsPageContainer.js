import {connect} from "react-redux";

import AgentsPage from "../../pages/users/AgentsPage";
import {AGENTS} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(AGENTS);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.agents.page,
    agents: state.agents.list,
    agentsRequests: state.agentsRequests,
    hasMoreData: state.agents.hasMoreData,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AgentsPage);