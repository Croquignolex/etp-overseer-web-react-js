import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {CHECKOUT_HANDING_OVER_PAGE} from "../../constants/pageNameConstants";
import CheckoutHandoversPage from "../../pages/checkout/CheckoutHandoversPage";

setPageTitle(CHECKOUT_HANDING_OVER_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.handovers.page,
    handovers: state.handovers.list,
    hasMoreData: state.handovers.hasMoreData,
    handoversRequests: state.handoversRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutHandoversPage);