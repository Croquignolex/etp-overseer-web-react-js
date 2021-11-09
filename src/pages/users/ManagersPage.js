import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import {emitManagersFetch, emitNextManagersFetch} from "../../redux/managers/actions";
import ManagersCardsComponent from "../../components/managers/ManagersCardsComponent";
import ManagerDetailsContainer from "../../containers/managers/ManagerDetailsContainer";
import ManagerMovementsContainer from "../../containers/managers/ManagerMovementsContainer";
import ManagerTransactionsContainer from "../../containers/managers/ManagerTransactionsContainer";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeManagersRequestReset, storeNextManagersRequestReset,} from "../../redux/requests/managers/actions";

// Component
function ManagersPage({managers, managersRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [movementsModal, setMovementsModal] = useState({show: false, header: '', manager: {}});
    const [managerDetailsModal, setManagerDetailsModal] = useState({show: false, header: '', id: 0});
    const [transactionsModal, setTransactionsModal] = useState({show: false, header: '', manager: {}});

    // Local effects
    useEffect(() => {
        dispatch(emitManagersFetch());
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
        dispatch(storeManagersRequestReset());
        dispatch(storeNextManagersRequestReset());
    };

    // Fetch next manager data to enhance infinite scroll
    const handleNextManagersData = () => {
        dispatch(emitNextManagersFetch({page}));
    }

    // Show movements modal form
    const handleMovementsModalShow = (manager) => {
        setMovementsModal({...movementsModal, manager, show: true, header: 'MOUVEMENTS DE CAISSE DE ' + manager.name})
    }

    // Hide movements modal form
    const handleMovementsModalHide = () => {
        setMovementsModal({...movementsModal, show: false})
    }

    // Show transactions modal form
    const handleTransactionsModalShow = (manager) => {
        setTransactionsModal({...transactionsModal, manager, show: true, header: 'TRANSACTIONS DE ' + manager.name})
    }

    // Hide transactions modal form
    const handleTransactionsModalHide = () => {
        setTransactionsModal({...transactionsModal, show: false})
    }

    // Show manager details modal form
    const handleManagerDetailsModalShow = ({id, name}) => {
        setManagerDetailsModal({...managerDetailsModal, show: true, id, header: "DETAIL DE " + name})
    }

    // Hide manager details modal form
    const handleManagerDetailsModalHide = () => {
        setManagerDetailsModal({...managerDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title="Gestinnaires de flottes" icon={'fa fa-user-tag'} />
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
                                            {requestFailed(managersRequests.list) && <ErrorAlertComponent message={managersRequests.list.message} />}
                                            {requestFailed(managersRequests.next) && <ErrorAlertComponent message={managersRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <ManagersCardsComponent managers={searchEngine(managers, needle)}
                                                                          handleMovementsModalShow={handleMovementsModalShow}
                                                                          handleTransactionsModalShow={handleTransactionsModalShow}
                                                                          handleManagerDetailsModalShow={handleManagerDetailsModalShow}
                                                />
                                                : (requestLoading(managersRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={managers.length}
                                                                        next={handleNextManagersData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <ManagersCardsComponent managers={managers}
                                                                                    handleMovementsModalShow={handleMovementsModalShow}
                                                                                    handleTransactionsModalShow={handleTransactionsModalShow}
                                                                                    handleManagerDetailsModalShow={handleManagerDetailsModalShow}
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
            <FormModalComponent modal={managerDetailsModal} handleClose={handleManagerDetailsModalHide}>
                <ManagerDetailsContainer id={managerDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent modal={movementsModal} handleClose={handleMovementsModalHide}>
                <ManagerMovementsContainer manager={movementsModal.manager} />
            </FormModalComponent>
            <FormModalComponent modal={transactionsModal} handleClose={handleTransactionsModalHide}>
                <ManagerTransactionsContainer manager={transactionsModal.manager} />
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
                needleSearch(item.creator.name, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
ManagersPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    managers: PropTypes.array.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    managersRequests: PropTypes.object.isRequired,
};

export default React.memo(ManagersPage);
