import {connect} from "react-redux";

import SupervisorsCardsComponent from "../../components/supervisors/SupervisorsCardsComponent";

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapDispatchToProps)(SupervisorsCardsComponent);