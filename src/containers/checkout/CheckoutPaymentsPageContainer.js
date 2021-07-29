import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import CheckoutPaymentsPage from "../../pages/checkout/CheckoutPaymentsPage";
import {CHECKOUT_INTERNAL_PAYMENTS_PAGE} from "../../constants/pageNameConstants";

setPageTitle(CHECKOUT_INTERNAL_PAYMENTS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.payments.page,
    payments: state.payments.list,
    hasMoreData: state.payments.hasMoreData,
    paymentsRequests: state.paymentsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPaymentsPage);