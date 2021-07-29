import {connect} from "react-redux";

import AgentsCardsComponent from "../../components/agents/AgentsCardsComponent";

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapDispatchToProps)(AgentsCardsComponent);