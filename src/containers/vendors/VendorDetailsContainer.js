import {connect} from "react-redux";

import VendorDetailsComponent from "../../components/vendors/VendorDetailsComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    vendor: state.vendors.current,
    request: state.vendorsRequests.show,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(VendorDetailsComponent);