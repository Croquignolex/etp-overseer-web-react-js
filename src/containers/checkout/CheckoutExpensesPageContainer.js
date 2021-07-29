import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import CheckoutExpensesPage from "../../pages/checkout/CheckoutExpensesPage";
import {CHECKOUT_EXTERNAL_OUTLAYS_PAGE} from "../../constants/pageNameConstants";

setPageTitle(CHECKOUT_EXTERNAL_OUTLAYS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.expenses.page,
    expenses: state.expenses.list,
    hasMoreData: state.expenses.hasMoreData,
    expensesRequests: state.expensesRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutExpensesPage);