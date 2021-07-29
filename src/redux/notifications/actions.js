// Reducer action types
export const STORE_SET_NOTIFICATIONS_DATA = 'STORE_SET_NOTIFICATIONS_DATA';
export const STORE_DELETE_NOTIFICATION_DATA = 'STORE_DELETE_NOTIFICATION_DATA';
export const STORE_SET_NOTIFICATION_ACTION_DATA = 'STORE_SET_NOTIFICATION_ACTION_DATA';
export const STORE_SET_UNREAD_NOTIFICATIONS_DATA = 'STORE_SET_UNREAD_NOTIFICATIONS_DATA';

// Middleware action types
export const EMIT_NOTIFICATION_DELETE = 'EMIT_USER_DELETE';
export const EMIT_READ_NOTIFICATION = 'EMIT_READ_NOTIFICATION';
export const EMIT_NOTIFICATIONS_FETCH = 'EMIT_NOTIFICATIONS_FETCH';
export const EMIT_UNREAD_NOTIFICATIONS_FETCH = 'EMIT_UNREAD_NOTIFICATIONS_FETCH';

//====================== Reducer trigger actions
// Set notifications data in store
export const storeSetNotificationsData = ({notifications}) => ({
    notifications,
    type: STORE_SET_NOTIFICATIONS_DATA
});

// Set notifications data in store
export const storeDeleteNotificationData = ({id}) => ({
    id,
    type: STORE_DELETE_NOTIFICATION_DATA
});

// Set notification data in store
export const storeSetUnreadNotificationsData = ({notifications}) => ({
    notifications,
    type: STORE_SET_UNREAD_NOTIFICATIONS_DATA
});

// Set notification action data in store
export const storeSetNotificationActionData = ({id}) => ({
    id,
    type: STORE_SET_NOTIFICATION_ACTION_DATA
});

//====================== Middleware trigger actions
// Emit notifications fetch
export const emitNotificationsFetch = () => ({
    type: EMIT_NOTIFICATIONS_FETCH
});

// Emit unread notifications fetch
export const emitUnreadNotificationsFetch = () => ({
    type: EMIT_UNREAD_NOTIFICATIONS_FETCH
});

// Emit notification read by id
export const emitNotificationRead = ({id}) => ({
    id,
    type: EMIT_READ_NOTIFICATION
});

// Emit notification delete by id
export const emitNotificationDelete = ({id}) => ({
    id,
    type: EMIT_NOTIFICATION_DELETE
});
