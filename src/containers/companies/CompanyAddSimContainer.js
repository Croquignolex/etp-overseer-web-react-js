import {connect} from "react-redux";

import CompanyAddSimComponent from "../../components/companies/CompanyAddSimComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    operators: state.operators.list,
    company: state.companies.current,
    request: state.companiesRequests.edit.sim,
    allOperatorsRequests: state.operatorsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CompanyAddSimComponent);