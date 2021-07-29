import {connect} from "react-redux";

import SimNewComponent from "../../components/sims/SimNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agents: state.agents.list,
    operators: state.operators.list,
    request: state.simsRequests.add,
    companies: state.companies.list,
    simsTypes: state.simsTypes.list,
    collectors: state.collectors.list,
    allAgentsRequests: state.agentsRequests.all,
    allSimsTypesRequests: state.simsTypesRequests.all,
    allCompaniesRequests: state.companiesRequests.all,
    allOperatorsRequests: state.operatorsRequests.all,
    allCollectorsRequests: state.collectorsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(SimNewComponent);