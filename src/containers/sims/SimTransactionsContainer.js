import {connect} from "react-redux";

import SimTransactionsComponent from "../../components/sims/SimTransactionsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.simsRequests.transactions,
    transactions: state.sims.current.transactions,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(SimTransactionsComponent);