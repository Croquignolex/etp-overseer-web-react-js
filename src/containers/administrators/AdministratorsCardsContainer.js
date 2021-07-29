import {connect} from "react-redux";

import AdministratorsCardsComponent from "../../components/administrators/AdministratorsCardsComponent";

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapDispatchToProps)(AdministratorsCardsComponent);