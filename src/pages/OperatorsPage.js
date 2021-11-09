import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {OPERATORS} from "../constants/pageNameConstants";
import HeaderComponent from "../components/HeaderComponent";
import LoaderComponent from "../components/LoaderComponent";
import AppLayoutContainer from "../containers/AppLayoutContainer";
import ErrorAlertComponent from "../components/ErrorAlertComponent";
import TableSearchComponent from "../components/TableSearchComponent";
import FormModalComponent from "../components/modals/FormModalComponent";
import OperatorsCardsComponent from "../components/operators/OperatorsCardsComponent";
import {emitNextOperatorsFetch, emitOperatorsFetch} from "../redux/operators/actions";
import OperatorDetailsContainer from "../containers/operators/OperatorDetailsContainer";
import OperatorTransactionsContainer from "../containers/operators/OperatorTransactionsContainer";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../functions/generalFunctions";
import {storeNextOperatorsRequestReset, storeOperatorsRequestReset} from "../redux/requests/operators/actions";

// Component
function OperatorsPage({operators, operatorsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [transactionsModal, setTransactionsModal] = useState({show: false, header: '', operator: {}});
    const [operatorDetailsModal, setOperatorDetailsModal] = useState({show: false, header: "DETAIL DE L'OPERATEUR", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitOperatorsFetch());
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
        dispatch(storeOperatorsRequestReset());
        dispatch(storeNextOperatorsRequestReset());
    };

    // Fetch next operators data to enhance infinite scroll
    const handleNextOperatorsData = () => {
        dispatch(emitNextOperatorsFetch({page}));
    }

    // Show operator details modal form
    const handleOperatorDetailsModalShow = ({id}) => {
        setOperatorDetailsModal({...operatorDetailsModal, show: true, id})
    }

    // Hide operator details modal form
    const handleOperatorDetailsModalHide = () => {
        setOperatorDetailsModal({...operatorDetailsModal, show: false})
    }

    // Show transactions modal form
    const handleTransactionsModalShow = (operator) => {
        setTransactionsModal({...transactionsModal, operator, show: true, header: 'TRANSACTIONS DE ' + operator.name})
    }

    // Hide transactions modal form
    const handleTransactionsModalHide = () => {
        setTransactionsModal({...transactionsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={OPERATORS} icon={'fa fa-globe'} />
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
                                            {requestFailed(operatorsRequests.list) && <ErrorAlertComponent message={operatorsRequests.list.message} />}
                                            {requestFailed(operatorsRequests.next) && <ErrorAlertComponent message={operatorsRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <OperatorsCardsComponent operators={searchEngine(operators, needle)}
                                                                           handleTransactionsModalShow={handleTransactionsModalShow}
                                                                           handleOperatorDetailsModalShow={handleOperatorDetailsModalShow}
                                                />
                                                : (requestLoading(operatorsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={operators.length}
                                                                        next={handleNextOperatorsData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <OperatorsCardsComponent operators={operators}
                                                                                     handleTransactionsModalShow={handleTransactionsModalShow}
                                                                                     handleOperatorDetailsModalShow={handleOperatorDetailsModalShow}
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
            <FormModalComponent modal={operatorDetailsModal} handleClose={handleOperatorDetailsModalHide}>
                <OperatorDetailsContainer id={operatorDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent modal={transactionsModal} handleClose={handleTransactionsModalHide}>
                <OperatorTransactionsContainer operator={transactionsModal.operator} />
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
                needleSearch(item.name, _needle) ||
                needleSearch(item.sims, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
OperatorsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    operators: PropTypes.array.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    operatorsRequests: PropTypes.object.isRequired,
};

export default React.memo(OperatorsPage);
