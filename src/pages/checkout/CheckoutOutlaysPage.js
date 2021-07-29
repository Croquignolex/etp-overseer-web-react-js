import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import {CHECKOUT_INTERNAL_OUTLAYS_PAGE} from "../../constants/pageNameConstants";
import {emitNextOutlaysFetch, emitOutlaysFetch} from "../../redux/outlays/actions";
import CheckoutOutlaysCardsComponent from "../../components/checkout/CheckoutOutlaysCardsComponent";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeNextOutlaysRequestReset, storeOutlaysRequestReset} from "../../redux/requests/outlays/actions";
import CheckoutOutlaysAddOutlayContainer from "../../containers/checkout/CheckoutOutlaysAddOutlayContainer";

// Component
function CheckoutOutlaysPage({outlays, outlaysRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [outlayModal, setOutlayModal] = useState({show: false, header: "DECAISSEMENT D'ESPECES INTERNE"});

    // Local effects
    useEffect(() => {
        dispatch(emitOutlaysFetch());
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
        dispatch(storeOutlaysRequestReset());
        dispatch(storeNextOutlaysRequestReset());
    };

    // Fetch next outlays data to enhance infinite scroll
    const handleNextOutlaysData = () => {
        dispatch(emitNextOutlaysFetch({page}));
    }

    // Show outlay modal form
    const handleOutlayModalShow = (item) => {
        setOutlayModal({...outlayModal, item, show: true})
    }

    // Hide outlay modal form
    const handleOutlayModalHide = () => {
        setOutlayModal({...outlayModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={CHECKOUT_INTERNAL_OUTLAYS_PAGE} icon={'fa fa-arrow-circle-up'} />
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
                                            {requestFailed(outlaysRequests.list) && <ErrorAlertComponent message={outlaysRequests.list.message} />}
                                            {requestFailed(outlaysRequests.next) && <ErrorAlertComponent message={outlaysRequests.next.message} />}
                                            <button type="button"
                                                    className="btn btn-theme mb-2"
                                                    onClick={handleOutlayModalShow}
                                            >
                                                <i className="fa fa-coins" /> Décaissement interne
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <CheckoutOutlaysCardsComponent outlays={searchEngine(outlays, needle)} />
                                                : (requestLoading(outlaysRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        dataLength={outlays.length}
                                                                        loader={<LoaderComponent />}
                                                                        next={handleNextOutlaysData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <CheckoutOutlaysCardsComponent outlays={outlays} />
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
            {/* Modal */}
            <FormModalComponent modal={outlayModal} handleClose={handleOutlayModalHide}>
                <CheckoutOutlaysAddOutlayContainer handleClose={handleOutlayModalHide} />
            </FormModalComponent>
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
                needleSearch(item.manager.name, _needle) ||
                needleSearch(item.collector.name, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
CheckoutOutlaysPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    outlays: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    outlaysRequests: PropTypes.object.isRequired,
};

export default React.memo(CheckoutOutlaysPage);