import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import {RECOVERIES_CASH_PAGE} from "../../constants/pageNameConstants";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import {emitNextRecoveriesFetch, emitRecoveriesFetch} from "../../redux/recoveries/actions";
import RecoveriesCashCardsComponent from "../../components/recoveries/RecoveriesCashCardsComponent";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeRecoveriesRequestReset, storeNextRecoveriesRequestReset} from "../../redux/requests/recoveries/actions";

// Component
function RecoveriesCashPage({recoveries, recoveriesRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');

    // Local effects
    useEffect(() => {
        dispatch(emitRecoveriesFetch());
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
        dispatch(storeRecoveriesRequestReset());
        dispatch(storeNextRecoveriesRequestReset());
    };

    // Fetch next recoveries data to enhance infinite scroll
    const handleNextRecoveriesData = () => {
        dispatch(emitNextRecoveriesFetch({page}));
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={RECOVERIES_CASH_PAGE} icon={'fa fa-coins'} />
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
                                            {requestFailed(recoveriesRequests.list) && <ErrorAlertComponent message={recoveriesRequests.list.message} />}
                                            {requestFailed(recoveriesRequests.next) && <ErrorAlertComponent message={recoveriesRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <RecoveriesCashCardsComponent recoveries={searchEngine(recoveries, needle)} />
                                                : (requestLoading(recoveriesRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        style={{ overflow: 'hidden' }}
                                                                        dataLength={recoveries.length}
                                                                        next={handleNextRecoveriesData}
                                                        >
                                                            <RecoveriesCashCardsComponent recoveries={recoveries} />
                                                        </InfiniteScroll>
                                                )
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
                needleSearch(item.amount, _needle) ||
                needleSearch(item.agent.name, _needle) ||
                needleSearch(dateToString(item.creation), _needle) ||
                needleSearch(fleetTypeBadgeColor(item.status).text, _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
RecoveriesCashPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    recoveries: PropTypes.array.isRequired,
    recoveriesRequests: PropTypes.object.isRequired,
};

export default React.memo(RecoveriesCashPage);