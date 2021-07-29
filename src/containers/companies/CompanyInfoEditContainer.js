import {connect} from "react-redux";

import CompanyInfoEditComponent from "../../components/companies/CompanyInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    company: state.companies.current,
    request: state.companiesRequests.edit.info,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfoEditComponent);