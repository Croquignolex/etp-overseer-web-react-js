import {connect} from "react-redux";

import CompanyDetailsComponent from "../../components/companies/CompanyDetailsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    company: state.companies.current,
    request: state.companiesRequests.show,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetailsComponent);