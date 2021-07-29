import {connect} from "react-redux";

import VendorInfoEditComponent from "../../components/vendors/VendorInfoEditComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    vendor: state.vendors.current,
    request: state.vendorsRequests.edit,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(VendorInfoEditComponent);