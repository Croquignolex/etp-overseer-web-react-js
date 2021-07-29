import {connect} from "react-redux";

import VendorsPage from "../../pages/VendorsPage";
import {VENDORS_PAGE} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(VENDORS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.vendors.page,
    vendors: state.vendors.list,
    hasMoreData: state.vendors.hasMoreData,
    vendorsRequests: state.vendorsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(VendorsPage);