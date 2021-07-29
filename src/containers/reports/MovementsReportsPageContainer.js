import {connect} from "react-redux";

import {setPageTitle} from "../../functions/generalFunctions";
import {MOVEMENTS_REPORTS} from "../../constants/pageNameConstants";
import MovementsReportsPage from "../../pages/reports/MovementsReportsPage";

setPageTitle(MOVEMENTS_REPORTS);

// Map state function to component props
const mapStateToProps = (state) => ({
    movements: state.movements.list,
    movementsRequests: state.movementsRequests
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(MovementsReportsPage);