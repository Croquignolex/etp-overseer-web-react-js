import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import ConfirmModalComponent from "../../components/modals/ConfirmModalComponent";
import {CHECKOUT_INTERNAL_PAYMENTS_PAGE} from "../../constants/pageNameConstants";
import CheckoutPaymentsCardsComponent from "../../components/checkout/CheckoutPaymentsCardsComponent";
import {emitConfirmPayment, emitNextPaymentsFetch, emitPaymentsFetch} from "../../redux/payments/actions";
import {
    storePaymentsRequestReset,
    storeNextPaymentsRequestReset,
    storeConfirmPaymentRequestReset
} from "../../redux/requests/payments/actions";
import {
    applySuccess,
    dateToString,
    formatNumber,
    needleSearch,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";

// Component
function CheckoutPaymentsPage({payments, paymentsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [confirmModal, setConfirmModal] = useState({show: false, body: '', id: 0});

    // Local effects
    useEffect(() => {
        dispatch(emitPaymentsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(paymentsRequests.apply)) {
            applySuccess(paymentsRequests.apply.message);
        }
        // eslint-disable-next-line
    }, [paymentsRequests.apply]);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storePaymentsRequestReset());
        dispatch(storeNextPaymentsRequestReset());
        dispatch(storeConfirmPaymentRequestReset());
    };

    // Fetch next payments data to enhance infinite scroll
    const handleNextPaymentsData = () => {
        dispatch(emitNextPaymentsFetch({page}));
    }

    // Show confirm modal form
    const handleConfirmModalShow = ({id, amount, collector}) => {
        setConfirmModal({...confirmModal, id, body: `Confirmer l'encaissement de ${collector.name} de ${formatNumber(amount)}?`, show: true})
    }

    // Hide confirm modal form
    const handleConfirmModalHide = () => {
        setConfirmModal({...confirmModal, show: false})
    }

    // Trigger when clearance confirm confirmed on modal
    const handleConfirm = (id) => {
        handleConfirmModalHide();
        dispatch(emitConfirmPayment({id}));
    };

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={CHECKOUT_INTERNAL_PAYMENTS_PAGE} icon={'fa fa-arrow-circle-up'} />
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
                                            {requestFailed(paymentsRequests.list) && <ErrorAlertComponent message={paymentsRequests.list.message} />}
                                            {requestFailed(paymentsRequests.next) && <ErrorAlertComponent message={paymentsRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <CheckoutPaymentsCardsComponent payments={searchEngine(payments, needle)}
                                                                                  handleConfirmModalShow={handleConfirmModalShow}
                                                />
                                                : (requestLoading(paymentsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={payments.length}
                                                                        next={handleNextPaymentsData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <CheckoutPaymentsCardsComponent payments={payments}
                                                                                            handleConfirmModalShow={handleConfirmModalShow}
                                                            />
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
            <ConfirmModalComponent modal={confirmModal}
                                   handleModal={handleConfirm}
                                   handleClose={handleConfirmModalHide}
            />
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
CheckoutPaymentsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    payments: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    paymentsRequests: PropTypes.object.isRequired,
};

export default React.memo(CheckoutPaymentsPage);