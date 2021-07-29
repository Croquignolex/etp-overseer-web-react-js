import {connect} from "react-redux";

import SupervisorTransactionsComponent from "../../components/supervisors/SupervisorTransactionsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.supervisorsRequests.transactions,
    transactions: state.supervisors.current.transactions,
});

// Map dispatch function to component propsS
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(SupervisorTransactionsComponent);