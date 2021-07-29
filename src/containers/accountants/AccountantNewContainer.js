import {connect} from "react-redux";

import AccountantNewComponent from "../../components/accountants/AccountantNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.accountantsRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AccountantNewComponent);