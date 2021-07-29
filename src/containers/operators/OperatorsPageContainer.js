import {connect} from "react-redux";

import OperatorsPage from "../../pages/OperatorsPage";
import {OPERATORS} from "../../constants/pageNameConstants";
import {setPageTitle} from "../../functions/generalFunctions";

setPageTitle(OPERATORS);

// Map state function to component props
const mapStateToProps = (state) => ({
    page: state.operators.page,
    operators: state.operators.list,
    hasMoreData: state.operators.hasMoreData,
    operatorsRequests: state.operatorsRequests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(OperatorsPage);