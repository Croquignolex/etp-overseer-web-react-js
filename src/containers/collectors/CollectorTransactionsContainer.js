import {connect} from "react-redux";

import CollectorTransactionsComponent from "../../components/collectors/CollectorTransactionsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.collectorsRequests.transactions,
    transactions: state.collectors.current.transactions,
});

// Map dispatch function to component propsS
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CollectorTransactionsComponent);