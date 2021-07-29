import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import * as api from "../../constants/apiConstants";
import * as type from "../../constants/typeConstants";
import * as path from "../../constants/pagePathConstants";
import {BASE_URL} from "../../constants/generalConstants";
import {playSuccessSound} from "../../functions/playSoundFunctions";
import {apiGetRequest, apiPostRequest} from "../../functions/axiosFunctions";
import {LOCAL_STORAGE_USER_RECEIVED_NOTIFICATIONS} from "../../constants/localStorageConstants";
import {getLocaleStorageItem, setLocaleStorageItem} from "../../functions/localStorageFunctions";
import {
    EMIT_READ_NOTIFICATION,
    EMIT_NOTIFICATION_DELETE,
    EMIT_NOTIFICATIONS_FETCH,
    storeSetNotificationsData,
    storeDeleteNotificationData,
    storeSetNotificationActionData,
    storeSetUnreadNotificationsData,
    EMIT_UNREAD_NOTIFICATIONS_FETCH
} from './actions'
import {
    storeNotificationsRequestInit,
    storeNotificationsRequestFailed,
    storeNotificationsRequestSucceed,
    storeNotificationsDeleteRequestInit,
    storeNotificationsDeleteRequestFailed,
    storeNotificationsDeleteRequestSucceed
} from "../requests/notifications/actions";

// Fetch notifications from API
export function* emitNotificationsFetch() {
    yield takeLatest(EMIT_NOTIFICATIONS_FETCH, function*() {
        try {
            // Fire event for request
            yield put(storeNotificationsRequestInit());
            const apiResponse = yield call(apiGetRequest, api.NOTIFICATIONS_API_PATH);
            // Extract data
            const notifications = extractNotificationsData(apiResponse.data);
            // Fire event to redux
            yield put(storeSetNotificationsData({notifications}));
            // Fire event for request
            yield put(storeNotificationsRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeNotificationsRequestFailed({message}));
        }
    });
}

// Fetch unread notifications from API
export function* emitUnreadNotificationsFetch() {
    yield takeLatest(EMIT_UNREAD_NOTIFICATIONS_FETCH, function*() {
        try {
            // Fire event for request
            const apiResponse = yield call(apiGetRequest, api.UNREAD_NOTIFICATIONS_API_PATH);
            const notifications = extractNotificationsData(apiResponse.data);
            const currentNotifications = notifications.length;
            // Notification sound
            const receivedNotifications = yield call(getLocaleStorageItem, LOCAL_STORAGE_USER_RECEIVED_NOTIFICATIONS);
            if(receivedNotifications != null && receivedNotifications) {
                if(currentNotifications > receivedNotifications) {
                    playSuccessSound()
                    // Only show desktop notification if focus is lost
                    let hidden;
                    if (typeof document.hidden !== "undefined") hidden = "hidden";
                    else if (typeof document.msHidden !== "undefined") hidden = "msHidden";
                    else if (typeof document.webkitHidden !== "undefined") hidden = "webkitHidden";
                    // Show desktop notification & focus on tab after user click on the notification
                    if (document[hidden]) {
                        if (Notification.permission === "granted") {
                            const options = {
                                body: notifications[0].message,
                                icon: `${BASE_URL}/logo.png`
                            };
                            const notification = new Notification("Notification MMAC", options);
                            notification.onclick = (e)  => {
                                window.open(`${BASE_URL}${notifications[0].url}`);
                            };
                        }
                   }
                }
            }
            // Keep data
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_RECEIVED_NOTIFICATIONS, currentNotifications);
            // Fire event to redux
            yield put(storeSetUnreadNotificationsData({notifications}));
        } catch (message) {}
    });
}

// Fetch read notification from API
export function* emitNotificationRead() {
    yield takeLatest(EMIT_READ_NOTIFICATION, function*({id}) {
        try {
            // API call
            yield call(apiGetRequest, `${api.READ_NOTIFICATIONS_API_PATH}/${id}`);
            // Update received notification number
            const receivedNotifications = yield call(getLocaleStorageItem, LOCAL_STORAGE_USER_RECEIVED_NOTIFICATIONS);
            if(receivedNotifications != null && receivedNotifications) {
                yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_RECEIVED_NOTIFICATIONS, (receivedNotifications - 1));
            }
        } catch (message) {}
    });
}

// Delete notification from API
export function* emitNotificationDelete() {
    yield takeLatest(EMIT_NOTIFICATION_DELETE, function*({id}) {
        try {
            // Fire event at redux to toggle action loader
            yield put(storeSetNotificationActionData({id}));
            // Fire event for request
            yield put(storeNotificationsDeleteRequestInit());
            // Fire event for request
            const apiResponse = yield call(apiPostRequest, `${api.DELETE_NOTIFICATIONS_API_PATH}/${id}`);
            // Fire event to redux
            yield put(storeDeleteNotificationData({id}));
            // Fire event for request
            yield put(storeNotificationsDeleteRequestSucceed({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request
            yield put(storeSetNotificationActionData({id}));
            yield put(storeNotificationsDeleteRequestFailed({message}));
        }
    });
}

// Extract notification data
function extractNotificationData(apiNotification) {
    let notification = {
        id: '', url: '', message: '', creation: '', className: '', read: false
    };
    const notificationDetail = getNotificationDetail(apiNotification.type);
    if(apiNotification) {
        notification.actionLoader = false;
        notification.url = notificationDetail.url;
        notification.id = apiNotification.id.toString();
        notification.creation = apiNotification.created_at;
        notification.read = apiNotification.read_at !== null;
        notification.className = notificationDetail.className;
        notification.message = apiNotification.data.Notification.message;
    }
    return notification;
}

// Extract notifications data
function extractNotificationsData(apiNotifications) {
    const notifications = [];
    if(apiNotifications) {
        apiNotifications.forEach(data => {
            notifications.push(extractNotificationData(data));
        });
    }
    return notifications;
}

// URL
function getNotificationDetail(notificationType) {
    switch (notificationType) {
        case type.CASH_RECOVERY_NOTIFICATION: return {url: path.RECOVERIES_CASH_PAGE_PATH, className: 'text-primary'};
        case type.REQUEST_FLEET_NOTIFICATION: return {url: path.REQUESTS_FLEETS_PAGE_PATH, className: 'text-dark'};
        case type.FLEET_RECOVERY_NOTIFICATION: return {url: path.RECOVERIES_FLEETS_PAGE_PATH, className: 'text-info'};
        case type.FLEET_OPERATION_NOTIFICATION: return {url: path.OPERATIONS_FLEETS_PAGE_PATH, className: 'text-warning'};
        case type.REQUEST_CLEARANCE_NOTIFICATION: return {url: path.REQUESTS_CLEARANCES_PAGE_PATH, className: 'text-success'};
        case type.CLEARANCE_OPERATION_NOTIFICATION: return {url: path.OPERATIONS_CLEARANCES_PAGE_PATH, className: 'text-danger'};
        default: return {url: path.DASHBOARD_PAGE_PATH, className: 'text-secondary'};
    }
}

// Combine to export all functions at once
export default function* sagaNotifications() {
    yield all([
        fork(emitNotificationRead),
        fork(emitNotificationDelete),
        fork(emitNotificationsFetch),
        fork(emitUnreadNotificationsFetch),
    ]);
}