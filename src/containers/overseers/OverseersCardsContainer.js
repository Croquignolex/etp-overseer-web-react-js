import {connect} from "react-redux";

import OverseersCardsComponent from "../../components/overseers/OverseersCardsComponent";

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapDispatchToProps)(OverseersCardsComponent);