import {connect} from "react-redux";

import SideBarComponent from "../components/SideBarComponent";

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user,
});

// Connect component to Redux
export default connect(mapStateToProps)(SideBarComponent);