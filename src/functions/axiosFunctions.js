import axios from "axios";

import {getLocaleStorageItem} from "./localStorageFunctions";
import {API_SERVER_URL} from "../constants/generalConstants";
import {LOCAL_STORAGE_USER_DATA} from "../constants/localStorageConstants";
import {PROFILE_SCOPE} from "../constants/defaultConstants";

// Axios request interceptor to add automatically token
axios.interceptors.request.use(config => {
    const userData = getLocaleStorageItem(LOCAL_STORAGE_USER_DATA);
    config.headers.ContentType = 'Application/json';
    if(userData !== null) config.headers.Authorization = 'Bearer ' + userData.token;
    return config;
}, error => Promise.reject(error));

// Emit GET request to API and format response
export function apiGetRequest(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                const apiResponse = res.data;
                apiResponse.status
                    ? resolve(apiResponse)
                    : reject(apiResponse.message);
            })
            .catch(e => {
                reject(apiErrorManagement(e.message));
                if(process.env.NODE_ENV !== 'production') console.log({e});
            })
    });
}

// Emit POST request to API and format response
export function apiPostRequest(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(res => {
                const apiResponse = res.data;
                apiResponse.status
                    ? resolve(apiResponse)
                    : reject(apiResponse.message);
            })
            .catch(e => {
                reject(apiErrorManagement(e.message));
                if(process.env.NODE_ENV !== 'production') console.log({e});
            })
    });
}

// Get file from server url
export function getFileFromServer(file) {
    return (file === null)
        ? false
        : `${API_SERVER_URL}/storage/${file}`;
}

// Get image from server url
export function getImageFromServer(image, scope) {
    const defaultImage = (scope === PROFILE_SCOPE)
        ? require('../assets/images/default.jpg')
        : require('../assets/images/no-image.jpg');

    return (image === null)
        ? defaultImage
        : `${API_SERVER_URL}/storage/${image}`;
}

// Format known API error response
function apiErrorManagement(errorMessage) {
    switch (errorMessage) {
        case "Network Error": return "Erreur du reseau. Merci de vérifier votre connexion internet";
        case "Request failed with status code 500": return "Erreur du serveur. Le serveur ne parvient pas traiter la requêtte";
        default: return errorMessage;
    }
}