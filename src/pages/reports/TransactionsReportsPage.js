import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import LoaderComponent from "../../components/LoaderComponent";
import HeaderComponent from "../../components/HeaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import {emitTransactionsFetch} from "../../redux/transactions/actions";
import TableSearchComponent from "../../components/TableSearchComponent";
import {storeTransactionsRequestReset} from "../../redux/requests/transactions/actions";
import TransactionsReportsComponent from "../../components/reports/TransactionsReportsComponent";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function AgentSimsPage({transactions, transactionsRequests, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());

    // Local effects
    useEffect(() => {
        dispatch(emitTransactionsFetch({
            selectedEndDay: new Date(),
            selectedStartDay: new Date(),
        }));
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
        dispatch(storeTransactionsRequestReset());
    };

    const handleSelectedStartDate = (selectedDay) => {
        shouldResetErrorData();
        setSelectedStartDate(selectedDay)
        dispatch(emitTransactionsFetch({
            selectedStartDay: selectedDay,
            selectedEndDay: selectedEndDate
        }));
    }

    const handleSelectedEndDate = (selectedDay) => {
        shouldResetErrorData();
        setSelectedEndDate(selectedDay)
        dispatch(emitTransactionsFetch({
            selectedEndDay: selectedDay,
            selectedStartDay: selectedStartDate
        }));
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title="Mes transactions de flotte" icon={'fa fa-table'} />
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
                                            {requestFailed(transactionsRequests.list) && <ErrorAlertComponent message={transactionsRequests.list.message} />}
                                             {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <TransactionsReportsComponent selectedEndDate={selectedEndDate}
                                                                                selectedStartDate={selectedStartDate}
                                                                                handleSelectedEndDate={handleSelectedEndDate}
                                                                                transactions={searchEngine(transactions, needle)}
                                                                                handleSelectedStartDate={handleSelectedStartDate}
                                                />
                                                : (requestLoading(transactionsRequests.list)
                                                        ? <LoaderComponent />
                                                        : <TransactionsReportsComponent transactions={transactions}
                                                                                        selectedEndDate={selectedEndDate}
                                                                                        selectedStartDate={selectedStartDate}
                                                                                        handleSelectedEndDate={handleSelectedEndDate}
                                                                                        handleSelectedStartDate={handleSelectedStartDate}
                                                        />
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
                needleSearch(item.in, _needle) ||
                needleSearch(item.out, _needle) ||
                needleSearch(item.type, _needle) ||
                needleSearch(item.operator, _needle) ||
                needleSearch(item.left_account, _needle) ||
                needleSearch(item.right_account, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
AgentSimsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    transactions: PropTypes.array.isRequired,
    transactionsRequests: PropTypes.object.isRequired,
};

export default React.memo(AgentSimsPage);