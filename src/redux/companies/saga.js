import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import {apiGetRequest, apiPostRequest, getFileFromServer} from "../../functions/axiosFunctions";
import {
    EMIT_NEW_COMPANY,
    EMIT_COMPANY_FETCH,
    storeSetCompanyData,
    EMIT_UPDATE_COMPANY,
    EMIT_COMPANIES_FETCH,
    storeSetCompaniesData,
    EMIT_ADD_COMPANY_SIMS,
    storeSetNewCompanyData,
    EMIT_UPDATE_COMPANY_DOC,
    EMIT_ALL_COMPANIES_FETCH,
    storeSetNextCompaniesData,
    EMIT_NEXT_COMPANIES_FETCH,
    storeStopInfiniteScrollCompanyData
} from "./actions";
import {
    storeCompaniesRequestInit,
    storeAddCompanyRequestInit,
    storeCompaniesRequestFailed,
    storeShowCompanyRequestInit,
    storeEditCompanyRequestInit,
    storeAllCompaniesRequestInit,
    storeCompaniesRequestSucceed,
    storeAddCompanyRequestFailed,
    storeNextCompaniesRequestInit,
    storeShowCompanyRequestFailed,
    storeAddCompanyRequestSucceed,
    storeEditCompanyRequestFailed,
    storeCompanyAddSimRequestInit,
    storeAllCompaniesRequestFailed,
    storeShowCompanyRequestSucceed,
    storeEditCompanyRequestSucceed,
    storeCompanyEditDocRequestInit,
    storeAllCompaniesRequestSucceed,
    storeNextCompaniesRequestFailed,
    storeCompanyAddSimRequestFailed,
    storeNextCompaniesRequestSucceed,
    storeCompanyAddSimRequestSucceed,
    storeCompanyEditDocRequestFailed,
    storeCompanyEditDocRequestSucceed
} from "../requests/companies/actions";

// Fetch all companies from API
export function* emitAllCompaniesFetch() {
    yield takeLatest(EMIT_ALL_COMPANIES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeAllCompaniesRequestInit());
            const apiResponse = yield call(apiGetRequest, api.All_COMPANIES_API_PATH);
            // Extract data
            const companies = extractCompaniesData(apiResponse.data.entreprises);
            // Fire event to redux
            yield put(storeSetCompaniesData({companies, hasMoreData: false, page: 0}));
            // Fire event for request
            yield put(storeAllCompaniesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAllCompaniesRequestFailed({message}));
        }
    });
}

// Fetch companies from API
export function* emitCompaniesFetch() {
    yield takeLatest(EMIT_COMPANIES_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeCompaniesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.COMPANIES_API_PATH}?page=1`);
            // Extract data
            const companies = extractCompaniesData(apiResponse.data.entreprises);
            // Fire event to redux
            yield put(storeSetCompaniesData({companies, hasMoreData: apiResponse.data.hasMoreData, page: 2}));
            // Fire event for request
            yield put(storeCompaniesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeCompaniesRequestFailed({message}));
        }
    });
}

// Fetch next companies from API
export function* emitNextCompaniesFetch() {
    yield takeLatest(EMIT_NEXT_COMPANIES_FETCH, function*({page}) {
        try {
            // Fire event for request
            yield put(storeNextCompaniesRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.COMPANIES_API_PATH}?page=${page}`);
            // Extract data
            const companies = extractCompaniesData(apiResponse.data.entreprises);
            // Fire event to redux
            yield put(storeSetNextCompaniesData({companies, hasMoreData: apiResponse.data.hasMoreData, page: page + 1}));
            // Fire event for request
            yield put(storeNextCompaniesRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNextCompaniesRequestFailed({message}));
            yield put(storeStopInfiniteScrollCompanyData());
        }
    });
}


// New company into API
export function* emitNewCompany() {
    yield takeLatest(EMIT_NEW_COMPANY, function*({name, phone, address, manager, document, description}) {
        try {
            // Fire event for request
            yield put(storeAddCompanyRequestInit());
            // From data
            const data = new FormData();
            data.append('nom', name);
            data.append('phone', phone);
            data.append('adresse', address);
            data.append('dossier', document);
            data.append('responsable', manager);
            data.append('description', description);
            // API request
            const apiResponse = yield call(apiPostRequest, api.CREATE_COMPANY_API_PATH, data);
            // Extract data
            const company = extractCompanyData(apiResponse.data.entreprise);
            // Fire event to redux
            yield put(storeSetNewCompanyData({company}));
            // Fire event for request
            yield put(storeAddCompanyRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeAddCompanyRequestFailed({message}));
        }
    });
}

// Fetch company from API
export function* emitCompanyFetch() {
    yield takeLatest(EMIT_COMPANY_FETCH, function*({id}) {
        try {
            // Fire event for request
            yield put(storeShowCompanyRequestInit());
            const apiResponse = yield call(apiGetRequest, `${api.COMPANY_API_PATH}/${id}`);
            // Extract data
            const company = extractCompanyData(apiResponse.data.entreprise,);
            // Fire event to redux
            yield put(storeSetCompanyData({company}));
            // Fire event for request
            yield put(storeShowCompanyRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeShowCompanyRequestFailed({message}));
        }
    });
}

// Add company sim
export function* emitAddCompanySims() {
    yield takeLatest(EMIT_ADD_COMPANY_SIMS, function*({id, name, reference, number, description, operator}) {
        try {
            // Fire event for request
            yield put(storeCompanyAddSimRequestInit());
            const data = {reference, nom: name, description, numero: number, id_flotte: operator,}
            const apiResponse = yield call(apiPostRequest, `${api.COMPANY_ADD_SIM}/${id}`, data);
            // Extract data
            const company = extractCompanyData(apiResponse.data.entreprise);
            // Fire event to redux
            yield put(storeSetCompanyData({company, alsoInList: true}));
            // Fire event for request
            yield put(storeCompanyAddSimRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeCompanyAddSimRequestFailed({message}));
        }
    });
}

// Update company doc
export function* emitUpdateCompanyDoc() {
    yield takeLatest(EMIT_UPDATE_COMPANY_DOC, function*({id, doc}) {
        try {
            // Fire event for request
            yield put(storeCompanyEditDocRequestInit());
            const data = new FormData();
            data.append('dossier', doc);
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_COMPANY_DOC_API_PATH}/${id}`, data);
            // Extract data
            const company = extractCompanyData(apiResponse.data.entreprise);
            // Fire event to redux
            yield put(storeSetCompanyData({company, alsoInList: true}));
            // Fire event for request
            yield put(storeCompanyEditDocRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeCompanyEditDocRequestFailed({message}));
        }
    });
}

// Update company info
export function* emitUpdateCompany() {
    yield takeLatest(EMIT_UPDATE_COMPANY, function*({id, name, description, phone, address, manager}) {
        try {
            // Fire event for request
            yield put(storeEditCompanyRequestInit());
            const data = { phone, nom: name, description, adresse: address, responsable: manager};
            const apiResponse = yield call(apiPostRequest, `${api.EDIT_COMPANY_INFO_API_PATH}/${id}`, data);
            // Extract data
            const company = extractCompanyData(apiResponse.data.entreprise);
            // Fire event to redux
            yield put(storeSetCompanyData({company, alsoInList: true}));
            // Fire event for request
            yield put(storeEditCompanyRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeEditCompanyRequestFailed({message}));
        }
    });
}

// Extract company data
function extractCompanyData(apiCompany) {
    let company = {
        id: '', name: '', manager: '', phone: '', document: '',
        address: '', creation: '', description: '',

        sims: []
    };
    const apiSims = apiCompany.puces;
    if(apiSims) {
        apiSims.forEach(data => {
            company.sims.push({
                name: data.nom,
                number: data.numero,
                balance: data.solde,
                id: data.id.toString(),
                creation: data.created_at
            })
        });
    }
    if(apiCompany) {
        company.actionLoader = false;
        company.name = apiCompany.nom;
        company.phone = apiCompany.phone;
        company.address = apiCompany.adresse;
        company.id = apiCompany.id.toString();
        company.manager = apiCompany.responsable;
        company.creation = apiCompany.created_at;
        company.description = apiCompany.description;
        company.document = getFileFromServer(apiCompany.dossier);
    }
    return company;
}

// Extract operators data
function extractCompaniesData(apiCompanies) {
    const companies = [];
    if(apiCompanies) {
        apiCompanies.forEach(data => {
            companies.push(extractCompanyData(data));
        });
    }
    return companies;
}

// Combine to export all functions at once
export default function* sagaCompanies() {
    yield all([
        fork(emitNewCompany),
        fork(emitCompanyFetch),
        fork(emitUpdateCompany),
        fork(emitCompaniesFetch),
        fork(emitAddCompanySims),
        fork(emitUpdateCompanyDoc),
        fork(emitAllCompaniesFetch),
        fork(emitNextCompaniesFetch),
    ]);
}