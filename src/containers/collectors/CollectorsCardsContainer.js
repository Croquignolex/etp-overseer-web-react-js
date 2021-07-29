import {connect} from "react-redux";

import CollectorsCardsComponent from "../../components/collectors/CollectorsCardsComponent";

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapDispatchToProps)(CollectorsCardsComponent);