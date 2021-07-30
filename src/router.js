import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import * as path from "./constants/pagePathConstants";
import asyncComponent from './components/asyncComponent';
import {NotificationContainer} from "react-notifications";
import PublicRouteContainer from "./containers/PublicRouteContainer";
import RestrictedRouteContainer from "./containers/RestrictedRouteContainer";

// Component
function AppRoutes({history}) {
    return (
        <ConnectedRouter history={history}>
            <NotificationContainer />
            <Switch>
                {/* Available pages on guest mode */}
                <PublicRouteContainer exact path="/" component={asyncComponent(() => import('./containers/CheckUserContainer'))} />
                {/* Available pages on auth mode */}
                {/* Common pages */}
                <RestrictedRouteContainer exact path={path.PROFILE_PAGE_PATH} component={asyncComponent(() => import('./pages/ProfilePage'))} />
                <RestrictedRouteContainer exact path={path.SETTINGS_PAGE_PATH} component={asyncComponent(() => import('./containers/SettingsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.DASHBOARD_PAGE_PATH} component={asyncComponent(() => import('./containers/DashboardPageContainer'))} />
                <RestrictedRouteContainer exact path={path.NOTIFICATIONS_PAGE_PATH} component={asyncComponent(() => import('./containers/notifications/NotificationsPageContainer'))} />
                {/* Requests pages */}
                <RestrictedRouteContainer exact path={path.REQUESTS_FLEETS_PAGE_PATH} component={asyncComponent(() => import('./containers/requests/RequestsFleetsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.REQUESTS_CLEARANCES_PAGE_PATH} component={asyncComponent(() => import('./containers/requests/RequestsClearancesPageContainer'))} />
               {/* Recoveries */}
                <RestrictedRouteContainer exact path={path.RECOVERIES_CASH_PAGE_PATH} component={asyncComponent(() => import('./containers/recoveries/RecoveriesCashPageContainer'))} />
                <RestrictedRouteContainer exact path={path.RECOVERIES_FLEETS_PAGE_PATH} component={asyncComponent(() => import('./containers/recoveries/RecoveriesFleetsPageContainer'))} />
                {/* Operations */}
                <RestrictedRouteContainer exact path={path.OPERATIONS_FLEETS_PAGE_PATH} component={asyncComponent(() => import('./containers/operations/OperationsFleetsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.OPERATION_AFFORDS_PAGE_PATH} component={asyncComponent(() => import('./containers/operations/OperationsAffordsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.OPERATIONS_TRANSFERS_PAGE_PATH} component={asyncComponent(() => import('./containers/operations/OperationsTransfersPageContainer'))} />
                <RestrictedRouteContainer exact path={path.OPERATIONS_CLEARANCES_PAGE_PATH} component={asyncComponent(() => import('./containers/operations/OperationsClearancesPageContainer'))} />
                {/* Users */}
                <RestrictedRouteContainer exact path={path.AGENTS_PAGE_PATH} component={asyncComponent(() => import('./containers/agents/AgentsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.MANAGERS_PAGE_PATH} component={asyncComponent(() => import('./containers/managers/ManagersPageContainer'))} />
                <RestrictedRouteContainer exact path={path.OVERSEERS_PAGE_PATH} component={asyncComponent(() => import('./containers/overseers/OverseersPageContainer'))} />
                <RestrictedRouteContainer exact path={path.COLLECTORS_PAGE_PATH} component={asyncComponent(() => import('./containers/collectors/CollectorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.SUPERVISORS_PAGE_PATH} component={asyncComponent(() => import('./containers/supervisors/SupervisorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.ACCOUNTANTS_PAGE_PATH} component={asyncComponent(() => import('./containers/accountants/AccountantsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.ADMINS_PAGE_PATH} component={asyncComponent(() => import('./containers/administrators/AdministratorsPageContainer'))} />
                {/* Sims */}
                <RestrictedRouteContainer exact path={path.ALL_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/SimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.MASTERS_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/MasterSimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.FLEETS_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/FleetSimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.COLLECTORS_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/CollectorSimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.AGENTS_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/AgentSimsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.RESOURCES_SIMS_PAGE_PATH} component={asyncComponent(() => import('./containers/sims/ResourceSimsPageContainer'))} />
                {/* Other pages */}
                <RestrictedRouteContainer exact path={path.ZONES_PAGE_PATH} component={asyncComponent(() => import('./containers/zones/ZonesPageContainer'))} />
                <RestrictedRouteContainer exact path={path.VENDORS_PAGE_PATH} component={asyncComponent(() => import('./containers/vendors/VendorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.OPERATORS_PAGE_PATH} component={asyncComponent(() => import('./containers/operators/OperatorsPageContainer'))} />
                <RestrictedRouteContainer exact path={path.COMPANIES_PAGE_PATH} component={asyncComponent(() => import('./containers/companies/CompaniesPageContainer'))} />
                {/* Checkouts */}
                <RestrictedRouteContainer exact path={path.CHECKOUT_HANDING_OVER_PAGE_PATH} component={asyncComponent(() => import('./containers/checkout/CheckoutHandoversPageContainer'))} />
                <RestrictedRouteContainer exact path={path.CHECKOUT_EXTERNAL_OUTLAYS_PAGE_PATH} component={asyncComponent(() => import('./containers/checkout/CheckoutExpensesPageContainer'))} />
                <RestrictedRouteContainer exact path={path.CHECKOUT_EXTERNAL_PAYMENTS_PAGE_PATH} component={asyncComponent(() => import('./containers/checkout/CheckoutRevenuesPageContainer'))} />
                <RestrictedRouteContainer exact path={path.CHECKOUT_INTERNAL_PAYMENTS_PAGE_PATH} component={asyncComponent(() => import('./containers/checkout/CheckoutPaymentsPageContainer'))} />
                 {/* 404 page */}
                <Route component={asyncComponent(() => import('./pages/NotFoundPage'))} />
            </Switch>
        </ConnectedRouter>
    );
}

export default React.memo(AppRoutes);
