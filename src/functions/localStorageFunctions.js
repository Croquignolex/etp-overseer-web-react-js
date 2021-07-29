// Get item from local storage
export function getLocaleStorageItem(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

// Set item into local storage
export function setLocaleStorageItem(key, value) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
}

// Remove item from local storage
export function removeLocaleStorageItem(key) {
    localStorage.removeItem(key);
}

// Remove all item from local storage
export function removeAllLocaleStorageItems() {
    localStorage.clear();
}