import {connect} from "react-redux";

import ManagerTransactionsComponent from "../../components/managers/ManagerTransactionsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.managersRequests.transactions,
    transactions: state.managers.current.transactions,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ManagerTransactionsComponent);