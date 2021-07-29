import moment from 'moment';

import {playInfoSound} from "./playSoundFunctions";
import {CURRENCY} from "../constants/defaultConstants";
import {NotificationManager} from "react-notifications";
import {API_SERVER_URL, APP_NAME} from "../constants/generalConstants";

// Input text color
export function getFieldColor(field) {
    return {color: (field.isValid ? '#22252a' : '#e22529')}
}

// Add app name on page title
export function setPageTitle(title) {
    document.title = `${title} - ${APP_NAME}`;
}

// Apply success sound & toast
export function applySuccess(message) {
    playInfoSound();
    NotificationManager.success(message);
}

// Check if request has succeeded
export function requestSucceeded(requests) {
    const {failed, loading, succeeded} = requests
    return succeeded && !failed && !loading;
}

// Check if request has failed
export function requestFailed(requests) {
    const {failed, loading, succeeded} = requests
    return !succeeded && failed && !loading;
}

// Check if request is in loading
export function requestLoading(requests) {
    const {failed, loading, succeeded} = requests
    return !succeeded && !failed && loading;
}

// Check if request is in reset
export function requestReset(requests) {
    const {failed, loading, succeeded} = requests
    return !succeeded && !failed && !loading;
}

// Get user profile image
export function getProfileImageFromServer(image) {
    const defaultImage = require('../assets/images/default.jpg');
    return (image === null) ? defaultImage : `${API_SERVER_URL}/storage/${image}`;
}

// Get CNI image
export function getCNIImageFromServer(image, scope) {
    const defaultImage = require('../assets/images/no-image.jpg');
    return (image === null) ? defaultImage : `${API_SERVER_URL}/storage/${image}`;
}

// Convert API date to string
export function dateToString(date, separator = '/') {
    return date && moment(date).format(`DD${separator}MM${separator}YYYY HH:mm`);
}

// Convert API date to short string
export function shortDateToString(date, separator = '/') {
    return date && moment(date).format(`DD${separator}MM${separator}YYYY`);
}

// Format string to handle space
export function formatString(text, maxCharacters) {
    // Extract
    try {
        if(text.length > maxCharacters) return text.substring(0, maxCharacters) + '...';
    } catch (e) {
        if(process.env.NODE_ENV !== 'production') console.log({e});
    }
    return text;
}

// Format number to handle decimal
export function formatNumber(number) {
    // Extract
    try {
        if(number.toString().length > 3)
            return new Intl.NumberFormat('en-EN', {
                style: 'decimal'
            }).format(number) + CURRENCY
    } catch (e) {
        if(process.env.NODE_ENV !== 'production') console.log({e});
    }
    return number + CURRENCY;
}

// Search a needle in a string
export function needleSearch(set, needle) {
    if(set !== null && set !== '' && set !== undefined && set) {
        return set.toString().toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    }
    return false;
}

// Upper first case
export function upperFirstCase(str) {
    if (typeof str !== 'string') return '';
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1)
}