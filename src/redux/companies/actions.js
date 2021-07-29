// Reducer action types
export const STORE_SET_COMPANY_DATA = 'STORE_SET_COMPANY_DATA';
export const STORE_SET_COMPANIES_DATA = 'STORE_SET_COMPANIES_DATA';
export const STORE_SET_NEW_COMPANY_DATA = 'STORE_SET_NEW_COMPANY_DATA';
export const STORE_SET_NEXT_COMPANIES_DATA = 'STORE_SET_NEXT_COMPANIES_DATA';
export const STORE_STOP_INFINITE_SCROLL_COMPANIES_DATA = 'STORE_STOP_INFINITE_SCROLL_COMPANIES_DATA';

// Middleware action types
export const EMIT_NEW_COMPANY = 'EMIT_NEW_COMPANY';
export const EMIT_COMPANY_FETCH = 'EMIT_COMPANY_FETCH';
export const EMIT_UPDATE_COMPANY = 'EMIT_UPDATE_COMPANY';
export const EMIT_COMPANIES_FETCH = 'EMIT_COMPANIES_FETCH';
export const EMIT_ADD_COMPANY_SIMS = 'EMIT_ADD_COMPANY_SIMS';
export const EMIT_UPDATE_COMPANY_DOC = 'EMIT_UPDATE_COMPANY_DOC';
export const EMIT_ALL_COMPANIES_FETCH = 'EMIT_ALL_COMPANIES_FETCH';
export const EMIT_NEXT_COMPANIES_FETCH = 'EMIT_NEXT_COMPANIES_FETCH';

//====================== Reducer trigger actions
// Set companies data in store
export const storeSetCompaniesData = ({companies, hasMoreData, page}) => ({
    page,
    companies,
    hasMoreData,
    type: STORE_SET_COMPANIES_DATA
});

// Set company data in store
export const storeSetCompanyData = ({company, alsoInList = false}) => ({
    company,
    alsoInList,
    type: STORE_SET_COMPANY_DATA
});

// Set next companies data in store
export const storeSetNextCompaniesData = ({companies, hasMoreData, page}) => ({
    page,
    companies,
    hasMoreData,
    type: STORE_SET_NEXT_COMPANIES_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollCompanyData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_COMPANIES_DATA
});

// Set new company data in store
export const storeSetNewCompanyData = ({company}) => ({
    company,
    type: STORE_SET_NEW_COMPANY_DATA
});

//====================== Middleware trigger actions
// Emit all companies fetch
export const emitAllCompaniesFetch = () => ({
    type: EMIT_ALL_COMPANIES_FETCH
});

// Emit companies fetch
export const emitCompaniesFetch = () => ({
    type: EMIT_COMPANIES_FETCH
});

// Emit next companies fetch
export const emitNextCompaniesFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_COMPANIES_FETCH
});

// Emit company fetch
export const emitCompanyFetch = ({id}) => ({
    id,
    type: EMIT_COMPANY_FETCH
});

// Emit new company
export const emitNewCompany = ({name, phone, address, manager, document, description}) => ({
    name,
    phone,
    address,
    manager,
    document,
    description,
    type: EMIT_NEW_COMPANY
});

// Emit update company
export const emitUpdateCompany = ({id, name, description, phone, address, manager}) => ({
    id,
    name,
    phone,
    address,
    manager,
    description,
    type: EMIT_UPDATE_COMPANY
});

// Emit add company sims
export const emitAddCompanySims = ({id, name, reference, number, description, operator}) => ({
    id,
    name,
    number,
    operator,
    reference,
    description,
    type: EMIT_ADD_COMPANY_SIMS
});

// Emit update company doc
export const emitUpdateCompanyDoc = ({id, doc}) => ({
    id,
    doc,
    type: EMIT_UPDATE_COMPANY_DOC
});
