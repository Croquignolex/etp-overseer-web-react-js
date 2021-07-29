import {connect} from "react-redux";

import OperatorAddSimComponent from "../../components/operators/OperatorAddSimComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    agents: state.agents.list,
    companies: state.companies.list,
    simsTypes: state.simsTypes.list,
    collectors: state.collectors.list,
    operator: state.operators.current,
    request: state.operatorsRequests.sim,
    allAgentsRequests: state.agentsRequests.all,
    allSimsTypesRequests: state.simsTypesRequests.all,
    allCompaniesRequests: state.companiesRequests.all,
    allCollectorsRequests: state.collectorsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperatorAddSimComponent);