import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import {CHECKOUT_EXTERNAL_OUTLAYS_PAGE} from "../../constants/pageNameConstants";
import {emitNextExpensesFetch, emitExpensesFetch} from "../../redux/expenses/actions";
import CheckoutExpensesCardsComponent from "../../components/checkout/CheckoutExpensesCardsComponent";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeNextExpensesRequestReset, storeExpensesRequestReset} from "../../redux/requests/expenses/actions";

// Component
function CheckoutExpensesPage({expenses, expensesRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');

    // Local effects
    useEffect(() => {
        dispatch(emitExpensesFetch());
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
        dispatch(storeExpensesRequestReset());
        dispatch(storeNextExpensesRequestReset());
    };

    // Fetch next expenses data to enhance infinite scroll
    const handleNextExpensesData = () => {
        dispatch(emitNextExpensesFetch({page}));
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={CHECKOUT_EXTERNAL_OUTLAYS_PAGE} icon={'fa fa-arrow-circle-up'} />
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
                                            {requestFailed(expensesRequests.list) && <ErrorAlertComponent message={expensesRequests.list.message} />}
                                            {requestFailed(expensesRequests.next) && <ErrorAlertComponent message={expensesRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <CheckoutExpensesCardsComponent expenses={searchEngine(expenses, needle)} />
                                                : (requestLoading(expensesRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={expenses.length}
                                                                        next={handleNextExpensesData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <CheckoutExpensesCardsComponent expenses={expenses} />
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
CheckoutExpensesPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    expenses: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    expensesRequests: PropTypes.object.isRequired,
};

export default React.memo(CheckoutExpensesPage);