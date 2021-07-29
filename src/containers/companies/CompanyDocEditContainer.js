import {connect} from "react-redux";

import CompanyDocEditComponent from "../../components/companies/CompanyDocEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    company: state.companies.current,
    request: state.companiesRequests.edit.doc,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CompanyDocEditComponent);