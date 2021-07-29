import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {TRANSACTIONS_REPORTS} from "../../constants/pageNameConstants";
import TransactionsReportsPage from "../../pages/reports/TransactionsReportsPage";

setPageTitle(TRANSACTIONS_REPORTS);

// Map state function to component props
const mapStateToProps = (state) => ({
    transactions: state.transactions.list,
    transactionsRequests: state.transactionsRequests
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(TransactionsReportsPage);