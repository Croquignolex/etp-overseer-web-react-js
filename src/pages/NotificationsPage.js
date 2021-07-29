import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import HeaderComponent from "../components/HeaderComponent";
import LoaderComponent from "../components/LoaderComponent";
import {NOTIFICATIONS_PAGE} from "../constants/pageNameConstants";
import AppLayoutContainer from "../containers/AppLayoutContainer";
import ErrorAlertComponent from "../components/ErrorAlertComponent";
import TableSearchComponent from "../components/TableSearchComponent";
import {emitNotificationsFetch} from "../redux/notifications/actions";
import NotificationsCardsContainer from "../containers/notifications/NotificationsCardsContainer";
import {storeNotificationsRequestReset, storeNotificationsDeleteRequestReset} from "../redux/requests/notifications/actions";
import {applySuccess, dateToString, needleSearch, requestFailed, requestLoading, requestSucceeded} from "../functions/generalFunctions";

// Component
function NotificationsPage({notifications, notificationsRequests, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(notificationsRequests.delete)) {
            applySuccess(notificationsRequests.delete.message);
        }
    }, [notificationsRequests.delete]);

    // Local effects
    useEffect(() => {
        dispatch(emitNotificationsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeNotificationsRequestReset());
        dispatch(storeNotificationsDeleteRequestReset());
    };

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={NOTIFICATIONS_PAGE} icon={'fa fa-bell'} />
                    <section className="content">
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card custom-card-outline">
                                        {/* Search input */}
                                        <div className="card-header">
                                            <div className="card-tools">
                                                <TableSearchComponent needle={needle} handleNeedle={handleNeedleInput} />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {/* Error message */}
                                            {requestFailed(notificationsRequests.list) && <ErrorAlertComponent message={notificationsRequests.list.message} />}
                                            {requestFailed(notificationsRequests.delete) && <ErrorAlertComponent message={notificationsRequests.delete.message} />}
                                            {requestLoading(notificationsRequests.list) ? <LoaderComponent /> :
                                                <NotificationsCardsContainer notifications={searchEngine(notifications, needle)} />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </AppLayoutContainer>
        </>
    )
}

// Search engine
function searchEngine(data, _needle) {
    // Avoid empty filtering
    if(_needle !== '' && _needle !== undefined) {
        // Filter
        data = data.filter((item) => {
            return (
                needleSearch(item.message, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
NotificationsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notifications: PropTypes.array.isRequired,
    notificationsRequests: PropTypes.object.isRequired,
};

export default React.memo(NotificationsPage);