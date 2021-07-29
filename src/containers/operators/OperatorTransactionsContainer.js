import {connect} from "react-redux";

import OperatorTransactionsComponent from "../../components/operators/OperatorTransactionsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.operatorsRequests.transactions,
    transactions: state.operators.current.transactions,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperatorTransactionsComponent);