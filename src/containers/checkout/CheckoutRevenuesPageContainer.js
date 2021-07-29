import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {CHECKOUT_EXTERNAL_PAYMENTS_PAGE} from "../../constants/pageNameConstants";
import CheckoutRevenuesPage from "../../pages/checkout/CheckoutRevenuesPage";

setPageTitle(CHECKOUT_EXTERNAL_PAYMENTS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.revenues.page,
    revenues: state.revenues.list,
    hasMoreData: state.revenues.hasMoreData,
    revenuesRequests: state.revenuesRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutRevenuesPage);