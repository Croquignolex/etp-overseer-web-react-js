import { all } from 'redux-saga/effects';

import user from './user/saga';
import sims from './sims/saga';
import zones from './zones/saga';
import agents from './agents/saga';
import fleets from './fleets/saga';
import returns from './returns/saga';
import refuels from './refuels/saga';
import affords from './affords/saga';
import vendors from './vendors/saga';
import settings from './settings/saga';
import managers from './managers/saga';
import supplies from './supplies/saga';
import payments from './payments/saga';
import expenses from './expenses/saga';
import revenues from './revenues/saga';
import operators from './operators/saga';
import transfers from './transfers/saga';
import companies from './companies/saga';
import simsTypes from './simsTypes/saga';
import overseers from './overseers/saga';
import handovers from './handovers/saga';
import clearances from './clearances/saga';
import collectors from './collectors/saga';
import recoveries from './recoveries/saga';
import supervisors from './supervisors/saga';
import accountants from './accountants/saga';
import notifications from './notifications/saga';
import administrators from './administrators/saga';

// Combine all saga middleware
export default function* sagas() {
    yield all([
        user(),
        sims(),
        zones(),
        agents(),
        fleets(),
        returns(),
        refuels(),
        affords(),
        vendors(),
        supplies(),
        revenues(),
        expenses(),
        managers(),
        payments(),
        settings(),
        overseers(),
        companies(),
        handovers(),
        simsTypes(),
        transfers(),
        operators(),
        clearances(),
        recoveries(),
        collectors(),
        accountants(),
        supervisors(),
        notifications(),
        administrators(),
    ]);
}
