import {connect} from "react-redux";

import VendorNewComponent from "../../components/vendors/VendorNewComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    request: state.vendorsRequests.add
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(VendorNewComponent);