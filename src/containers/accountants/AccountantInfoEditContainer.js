import {connect} from "react-redux";

import AccountantInfoEditComponent from "../../components/accountants/AccountantInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    accountant: state.accountants.current,
    request: state.accountantsRequests.edit,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AccountantInfoEditComponent);