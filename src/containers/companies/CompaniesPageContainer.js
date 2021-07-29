import {connect} from "react-redux";

import CompaniesPage from "../../pages/CompaniesPage";
import {setPageTitle} from "../../functions/generalFunctions";
import {COMPANIES_PAGE} from "../../constants/pageNameConstants";

setPageTitle(COMPANIES_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.companies.page,
    companies: state.companies.list,
    hasMoreData: state.companies.hasMoreData,
    companiesRequests: state.companiesRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);