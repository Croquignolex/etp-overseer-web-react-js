// Reducer action types
export const STORE_SET_VENDOR_DATA = 'STORE_SET_VENDOR_DATA';
export const STORE_SET_VENDORS_DATA = 'STORE_SET_VENDORS_DATA';
export const STORE_SET_NEW_VENDOR_DATA = 'STORE_SET_NEW_VENDOR_DATA';
export const STORE_SET_NEXT_VENDORS_DATA = 'STORE_SET_NEXT_VENDORS_DATA';
export const STORE_STOP_INFINITE_SCROLL_VENDORS_DATA = 'STORE_STOP_INFINITE_SCROLL_VENDORS_DATA';

// Middleware action types
export const EMIT_NEW_VENDOR = 'EMIT_NEW_VENDOR';
export const EMIT_VENDOR_FETCH = 'EMIT_VENDOR_FETCH';
export const EMIT_UPDATE_VENDOR = 'EMIT_UPDATE_VENDOR';
export const EMIT_VENDORS_FETCH = 'EMIT_VENDORS_FETCH';
export const EMIT_ALL_VENDORS_FETCH = 'EMIT_ALL_VENDORS_FETCH';
export const EMIT_NEXT_VENDORS_FETCH = 'EMIT_NEXT_VENDORS_FETCH';

//====================== Reducer trigger actions
// Set vendors data in store
export const storeSetVendorsData = ({vendors, hasMoreData, page}) => ({
    page,
    vendors,
    hasMoreData,
    type: STORE_SET_VENDORS_DATA
});

// Set vendor data in store
export const storeSetVendorData = ({vendor, alsoInList = false}) => ({
    vendor,
    alsoInList,
    type: STORE_SET_VENDOR_DATA
});

// Set next vendors data in store
export const storeSetNextVendorsData = ({vendors, hasMoreData, page}) => ({
    page,
    vendors,
    hasMoreData,
    type: STORE_SET_NEXT_VENDORS_DATA
});

// Stop infinite scroll
export const storeStopInfiniteScrollVendorData = () => ({
    type: STORE_STOP_INFINITE_SCROLL_VENDORS_DATA
});

// Set new vendor data in store
export const storeSetNewVendorData = ({vendor}) => ({
    vendor,
    type: STORE_SET_NEW_VENDOR_DATA
});

//====================== Middleware trigger actions
// Emit vendors fetch
export const emitVendorsFetch = () => ({
    type: EMIT_VENDORS_FETCH
});

// Emit next vendors fetch
export const emitNextVendorsFetch = ({page}) => ({
    page,
    type: EMIT_NEXT_VENDORS_FETCH
});

// Emit all vendors fetch
export const emitAllVendorsFetch = () => ({
    type: EMIT_ALL_VENDORS_FETCH
});

// Emit vendor fetch
export const emitVendorFetch = ({id}) => ({
    id,
    type: EMIT_VENDOR_FETCH
});

// Emit new vendor
export const emitNewVendor = ({name, description}) => ({
    name,
    description,
    type: EMIT_NEW_VENDOR
});

// Emit update vendor
export const emitUpdateVendor = ({id, name, description}) => ({
    id,
    name,
    description,
    type: EMIT_UPDATE_VENDOR
});