import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import {emitCollectorsFetch, emitNextCollectorsFetch} from "../../redux/collectors/actions";
import CollectorsCardsComponent from "../../components/collectors/CollectorsCardsComponent";
import CollectorDetailsContainer from "../../containers/collectors/CollectorDetailsContainer";
import CollectorMovementsContainer from "../../containers/collectors/CollectorMovementsContainer";
import CollectorTransactionsContainer from "../../containers/collectors/CollectorTransactionsContainer";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeCollectorsRequestReset, storeNextCollectorsRequestReset} from "../../redux/requests/collectors/actions";

// Component
function CollectorsPage({collectors, collectorsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [movementsModal, setMovementsModal] = useState({show: false, header: '', collector: {}});
    const [transactionsModal, setTransactionsModal] = useState({show: false, header: '', collector: {}});
    const [collectorDetailsModal, setCollectorDetailsModal] = useState({show: false, header: '', id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitCollectorsFetch());
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
        dispatch(storeCollectorsRequestReset());
        dispatch(storeNextCollectorsRequestReset());
    };

    // Fetch next collector data to enhance infinite scroll
    const handleNextCollectorsData = () => {
        dispatch(emitNextCollectorsFetch({page}));
    }

    // Show collector details modal form
    const handleCollectorDetailsModalShow = ({id, name}) => {
        setCollectorDetailsModal({...collectorDetailsModal, show: true, id, header: "DETAIL DE " + name})
    }

    // Hide collector details modal form
    const handleCollectorDetailsModalHide = () => {
        setCollectorDetailsModal({...collectorDetailsModal, show: false})
    }

    // Show transactions modal form
    const handleTransactionsModalShow = (collector) => {
        setTransactionsModal({...transactionsModal, collector, show: true, header: 'TRANSACTIONS DE ' + collector.name})
    }

    // Hide transactions modal form
    const handleTransactionsModalHide = () => {
        setTransactionsModal({...transactionsModal, show: false})
    }

    // Show movements modal form
    const handleMovementsModalShow = (collector) => {
        setMovementsModal({...movementsModal, collector, show: true, header: 'MOUVEMENTS DE CAISSE DE ' + collector.name})
    }

    // Hide movements modal form
    const handleMovementsModalHide = () => {
        setMovementsModal({...movementsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title="Responsables de zones" icon={'fa fa-user-clock'} />
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
                                            {requestFailed(collectorsRequests.list) && <ErrorAlertComponent message={collectorsRequests.list.message} />}
                                            {requestFailed(collectorsRequests.next) && <ErrorAlertComponent message={collectorsRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <CollectorsCardsComponent collectors={searchEngine(collectors, needle)}
                                                                            handleMovementsModalShow={handleMovementsModalShow}
                                                                            handleTransactionsModalShow={handleTransactionsModalShow}
                                                                            handleCollectorDetailsModalShow={handleCollectorDetailsModalShow}
                                                />
                                                : (requestLoading(collectorsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        dataLength={collectors.length}
                                                                        next={handleNextCollectorsData}
                                                                        loader={<LoaderComponent />}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <CollectorsCardsComponent collectors={collectors}
                                                                                      handleMovementsModalShow={handleMovementsModalShow}
                                                                                      handleTransactionsModalShow={handleTransactionsModalShow}
                                                                                      handleCollectorDetailsModalShow={handleCollectorDetailsModalShow}
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
            <FormModalComponent modal={collectorDetailsModal} handleClose={handleCollectorDetailsModalHide}>
                <CollectorDetailsContainer id={collectorDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent modal={movementsModal} handleClose={handleMovementsModalHide}>
                <CollectorMovementsContainer collector={movementsModal.collector} />
            </FormModalComponent>
            <FormModalComponent modal={transactionsModal} handleClose={handleTransactionsModalHide}>
                <CollectorTransactionsContainer collector={transactionsModal.collector} />
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
                needleSearch(item.phone, _needle) ||
                needleSearch(item.email, _needle) ||
                needleSearch(item.zone.name, _needle) ||
                needleSearch(item.creator.name, _needle) ||
                needleSearch(item.zone.reference, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
CollectorsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    collectors: PropTypes.array.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    collectorsRequests: PropTypes.object.isRequired,
};

export default React.memo(CollectorsPage);
