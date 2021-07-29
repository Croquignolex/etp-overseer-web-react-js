import {connect} from "react-redux";

import SettingsPage from "../pages/SettingsPage";
import {setPageTitle} from "../functions/generalFunctions";
import {SETTINGS_PAGE} from "../constants/pageNameConstants";

setPageTitle(SETTINGS_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    settings: state.settings,
    request: state.settingsRequests
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);