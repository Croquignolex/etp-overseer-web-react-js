import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {APPROVE} from "../../constants/typeConstants";
import {PROFILE_SCOPE} from "../../constants/defaultConstants";
import {dateToString, shortDateToString} from "../../functions/generalFunctions";
import {apiGetRequest, apiPostRequest, getImageFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_MANAGER,
    EMIT_MANAGER_FETCH,
    storeSetManagerData,
    EMIT_MANAGERS_FETCH,
    storeSetManagersData,
    storeSetNewManagerData,
    EMIT_ALL_MANAGERS_FETCH,
    EMIT_NEXT_MANAGERS_FETCH,
    storeSetNextManagersData,
    EMIT_UPDATE_MANAGER_INFO,
    storeSetManagerActionData,
    storeSetManagerToggleData,
    EMIT_TOGGLE_MANAGER_STATUS,
    storeSetManagerMovementsData,
    EMIT_MANAGER_MOVEMENTS_FETCH,
    EMIT_MANAGER_TRANSACTIONS_FETCH,
    storeSetManagerTransactionsData,
    storeStopInfiniteScrollManagerData
} from "./actions";
import {
    storeManagerRequestInit,
    storeManagersRequestInit,
    storeManagerRequestFailed,
    storeAddManagerRequestInit,
    storeManagersRequestFailed,
    storeManagerRequestSucceed,
    storeManagersRequestSucceed,
    storeAllManagersRequestInit,
    storeNextManagersRequestInit,
    storeAddManagerRequestFailed,
    storeAllManagersRequestFailed,
    storeAddManagerRequestSucceed,
    storeAllManagersRequestSucceed,
    storeNextManagersRequestFailed,
    storeManagerEditInfoRequestInit,
    storeNextManagersRequestSucceed,
    storeManagerMovementsRequestInit,
    storeManagerEditInfoRequestFailed,
    storeManagerEditInfoRequestSucceed,
    storeManagerMovementsRequestFailed,
    storeManagerMovementsRequestSucceed,
    storeManagerStatusToggleRequestInit,
    storeManagerTransactionsRequestInit,
    storeManagerStatusToggleRequestFailed,
    storeManagerTransactionsRequestFailed,
    storeManagerStatusToggleRequestSucceed,
    storeManagerTransactionsRequestSucceed
} from "../requests/managers/actions";

// Fetch all managers from API
export function* emitAllManagersFetch() {
    yield takeLatest(EMIT_ALL_MANAGERS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllManagersRequestInit());
            const apiResponse = yield call(apiGetRequest, api.ALL_MANAGERS_API_PATH);
            // Extract data
            const managers = extractManagersData(apiResponse.data.gestionnaires);
            // Fire event to redux
            yield put(storeSetManagersData({managers, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllManagersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllManagersRequestFailed({message}));
        }
    });
}

// Fetch managers from API
export function* emitManagersFetch() {
    yield takeLatest(EMIT_MANAGERS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeManagersRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.MANAGERS_API_PATH}?page=1`);
            // Extract data
            const managers = extractManagersData(apiResponse.data.gestionnaires);
            // Fire event to redux
            yield put(storeSetManagersData({managers, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeManagersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeManagersRequestFailed({message}));
        }
    });
}

// Fetch next managers from API
export function* emitNextManagersFetch() {
    yield takeLatest(EMIT_NEXT_MANAGERS_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextManagersRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.MANAGERS_API_PATH}?page=${page}`);
            // Extract data
            const managers = extractManagersData(apiResponse.data.gestionnaires);
            // Fire event to redux
            yield put(storeSetNextManagersData({managers, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextManagersRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextManagersRequestFailed({message}));
            yield put(storeStopInfiniteScrollManagerData());
        }
    });
}

// Toggle manager status into API
export function* emitToggleManagerStatus() {
    yield takeLatest(EMIT_TOGGLE_MANAGER_STATUS, function*({id}) {
        try {
            // Fire event for request
            yield put(storeSetManagerActionData({id}));
            yield put(storeManagerStatusToggleRequestInit());
            const apiResponse = yield call(apiPostRequest, `${api.TOGGLE_MANAGER_STATUS_API_PATH}/${id}`);
            // Fire event to redux
            yield put(storeSetManagerToggleData({id}));
            // Fire event for request
            yield put(storeManagerStatusToggleRequestSucceed({message: apiResponse.message}));
            yield put(storeSetManagerActionData({id}));
        } catch (message) {
            // Fire event for request
            yield put(storeSetManagerActionData({id}));
            yield put(storeManagerStatusToggleRequestFailed({message}));
        }
    });
}

// New manager into API
export function* emitNewManager() {
    yield takeLatest(EMIT_NEW_MANAGER, function*({name, address, phone, email, password,  description}) {
        try {
            // Fire event for request
            yield put(storeAddManagerRequestInit());
            // From data
            const data = {name, phone, email, password, description, adresse: address}
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_MANAGER_API_PATH, data);
            // Extract data
            const manager = extractManagerData(
                apiResponse.data.gestionnaire,
                apiResponse.data.caisse,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetNewManagerData({manager}));
            // Fire event for request
            yield put(storeAddManagerRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddManagerRequestFailed({message}));
        }
    });
}

// Fetch manager from API
export function* emitManagerFetch() {
    yield takeLatest(EMIT_MANAGER_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeManagerRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.MANAGER_DETAILS_API_PATH}/${id}`);
            // Extract data
            const manager = extractManagerData(
                apiResponse.data.user,
                apiResponse.data.caisse,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetManagerData({manager}));
            // Fire event for request
            yield put(storeManagerRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeManagerRequestFailed({message}));
        }
    });
}

// Update manager info
export function* emitUpdateManagerInfo() {
    yield takeLatest(EMIT_UPDATE_MANAGER_INFO, function*({id, email, name, address, description}) {
        try {
            // Fire event for request
            yield put(storeManagerEditInfoRequestInit());
            const data = {email, name, adresse: address, description};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_MANAGER_API_PATH}/${id}`, data);
            // Extract data
            const manager = extractManagerData(
                apiResponse.data.user,
                apiResponse.data.caisse,
                apiResponse.data.createur,
            );
            // Fire event to redux
            yield put(storeSetManagerData({manager, alsoInList: true}));
            // Fire event for request
            yield put(storeManagerEditInfoRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeManagerEditInfoRequestFailed({message}));
        }
    });
}

// Fetch manager movements from API
export function* emitManagerMovementsFetch() {
    yield takeLatest(EMIT_MANAGER_MOVEMENTS_FETCH, function*({id, selectedStartDay, selectedEndDay}) {
        try {
            // Fire event for request
            yield put(storeManagerMovementsRequestInit());
            const data = {
                debut: shortDateToString(selectedStartDay),
                fin: shortDateToString(selectedEndDay),
            };
            const apiResponse = yield call(apiPostRequest, `${api.USER_MOVEMENTS_API_PATH}/${id}`, data);
            // Extract data
            const movements = extractManagerMovementsData(
                apiResponse.data.movements
            );
            // Fire event to redux
            yield put(storeSetManagerMovementsData({movements}));
            // Fire event for request
            yield put(storeManagerMovementsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeManagerMovementsRequestFailed({message}));
        }
    });
}

// Fetch manager transactions from API
export function* emitManagerTransactionsFetch() {
    yield takeLatest(EMIT_MANAGER_TRANSACTIONS_FETCH, function*({id, selectedStartDay, selectedEndDay}) {
        try {
            // Fire event for request
            yield put(storeManagerTransactionsRequestInit());
            const data = {
                debut: shortDateToString(selectedStartDay),
                fin: shortDateToString(selectedEndDay),
            };
            const apiResponse = yield call(apiPostRequest, `${api.USER_TRANSACTIONS_API_PATH}/${id}`, data);
            // Extract data
            const transactions = extractManagerTransactionsData(
                apiResponse.data.transactions
            );
            // Fire event to redux
            yield put(storeSetManagerTransactionsData({transactions}));
            // Fire event for request
            yield put(storeManagerTransactionsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeManagerTransactionsRequestFailed({message}));
        }
    });
}

// Extract manager data
function extractManagerData(apiManager, apiAccount, apiCreator) {
    let manager = {
        id: '', name: '', phone: '', email: '', avatar: '', address: '', creation: '', description: '',

        creator: {id: '', name: ''},
        account: {id: '', balance: ''},

        movements: [],
        transactions: [],
    };

    if(apiCreator) {
        manager.creator = {
            name: apiCreator.name,
            id: apiCreator.id.toString(),
        }
    }
    if(apiAccount) {
        manager.account = {
            balance: apiAccount.solde,
            id: apiAccount.id.toString(),
        }
    }
    if(apiManager) {
        manager.actionLoader = false;
        manager.toggleLoader = false;
        manager.name = apiManager.name;
        manager.phone = apiManager.phone;
        manager.email = apiManager.email;
        manager.address = apiManager.adresse;
        manager.id = apiManager.id.toString();
        manager.creation = apiManager.created_at;
        manager.description = apiManager.description;
        manager.status = apiManager.statut === APPROVE;
        manager.avatar = getImageFromServer(apiManager.avatar, PROFILE_SCOPE);
    }
    return manager;
}

// Extract manager movements data
function extractManagerMovementsData(apiMovements) {
    let movements = [];

    apiMovements.forEach(movement => {
        movements.push({
            in: movement.in,
            out: movement.out,
            type: movement.type,
            label: movement.name,
            balance: movement.balance,
            creation: dateToString(movement.created_at),
        });
    });

    return movements;
}

// Extract manager transactions data
function extractManagerTransactionsData(apiTransactions) {
    let transactions = [];

    apiTransactions.forEach(transaction => {
        transactions.push({
            in: transaction.in,
            out: transaction.out,
            type: transaction.type,
            balance: transaction.balance,
            left_account: transaction.left,
            operator: transaction.operator,
            right_account: transaction.right,
            creation: dateToString(transaction.created_at),
        });
    });

    return transactions;
}

// Extract managers data
function extractManagersData(apiManagers) {
    const managers = [];
    if(apiManagers) {
        apiManagers.forEach(data => {
            managers.push(extractManagerData(
                data.gestionnaire,
                data.caisse,
                data.createur,
            ));
        });
    }
    return managers;
}

// Combine to export all functions at once
export default function* sagaManagers() {
    yield all([
        fork(emitNewManager),
        fork(emitManagerFetch),
        fork(emitManagersFetch),
        fork(emitAllManagersFetch),
        fork(emitUpdateManagerInfo),
        fork(emitNextManagersFetch),
        fork(emitToggleManagerStatus),
        fork(emitManagerMovementsFetch),
        fork(emitManagerTransactionsFetch),
    ]);
}