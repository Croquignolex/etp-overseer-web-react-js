import {connect} from "react-redux";

import DashboardPage from "../pages/DashboardPage";
import {setPageTitle} from "../functions/generalFunctions";
import {DASHBOARD_PAGE} from "../constants/pageNameConstants";

setPageTitle(DASHBOARD_PAGE);

// Map state function to component props
const mapStateToProps = (state) => ({
    user: state.user,
    sims: state.sims.list,
    zones: state.zones.list,
    settings: state.settings,
    agents: state.agents.list,
    vendors: state.vendors.list,
    managers: state.managers.list,
    companies: state.companies.list,
    operators: state.operators.list,
    collectors: state.collectors.list,
    supervisors: state.supervisors.list,
    allSimsRequests: state.simsRequests.all,
    administrators: state.administrators.list,
    allZonesRequests: state.zonesRequests.all,
    allAgentsRequests: state.agentsRequests.all,
    allVendorsRequests: state.vendorsRequests.all,
    allManagersRequests: state.managersRequests.all,
    balanceUserRequests: state.userRequests.balance,
    allCompaniesRequests: state.companiesRequests.all,
    allOperatorsRequests: state.operatorsRequests.all,
    allCollectorsRequests: state.collectorsRequests.all,
    allSupervisorsRequests: state.supervisorsRequests.all,
    allAdministratorsRequests: state.administratorsRequests.all,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);