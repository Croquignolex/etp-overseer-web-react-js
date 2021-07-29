import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import {CHECKOUT_EXTERNAL_PAYMENTS_PAGE} from "../../constants/pageNameConstants";
import {emitNextRevenuesFetch, emitRevenuesFetch} from "../../redux/revenues/actions";
import CheckoutRevenuesCardsComponent from "../../components/checkout/CheckoutRevenuesCardsComponent";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeNextRevenuesRequestReset, storeRevenuesRequestReset} from "../../redux/requests/revenues/actions";

// Component
function CheckoutRevenuesPage({revenues, revenuesRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');

    // Local effects
    useEffect(() => {
        dispatch(emitRevenuesFetch());
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
        dispatch(storeRevenuesRequestReset());
        dispatch(storeNextRevenuesRequestReset());
    };

    // Fetch next revenues data to enhance infinite scroll
    const handleNextRevenuesData = () => {
        dispatch(emitNextRevenuesFetch({page}));
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={CHECKOUT_EXTERNAL_PAYMENTS_PAGE} icon={'fa fa-arrow-circle-down'} />
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
                                            {requestFailed(revenuesRequests.list) && <ErrorAlertComponent message={revenuesRequests.list.message} />}
                                            {requestFailed(revenuesRequests.next) && <ErrorAlertComponent message={revenuesRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <CheckoutRevenuesCardsComponent revenues={searchEngine(revenues, needle)} />
                                                : (requestLoading(revenuesRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={revenues.length}
                                                                        next={handleNextRevenuesData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <CheckoutRevenuesCardsComponent revenues={revenues} />
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
                needleSearch(item.name, _needle) ||
                needleSearch(item.amount, _needle) ||
                needleSearch(item.reason, _needle) ||
                needleSearch(item.manager.name, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
CheckoutRevenuesPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    revenues: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    revenuesRequests: PropTypes.object.isRequired,
};

export default React.memo(CheckoutRevenuesPage);