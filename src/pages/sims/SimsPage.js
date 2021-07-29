import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {ALL_SIMS} from "../../constants/pageNameConstants";
import LoaderComponent from "../../components/LoaderComponent";
import HeaderComponent from "../../components/HeaderComponent";
import SimNewContainer from "../../containers/sims/SimNewContainer";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import SimsCardsComponent from "../../components/sims/SimsCardsComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";
import SimTransactionsContainer from "../../containers/sims/SimTransactionsContainer";
import TableSearchWithButtonComponent from "../../components/TableSearchWithButtonComponent";
import {emitNextSimsFetch, emitSearchSimsFetch, emitSimsFetch} from "../../redux/sims/actions";
import {storeNextSimsRequestReset, storeSimsRequestReset} from "../../redux/requests/sims/actions";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function SimsPage({sims, simsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [newSimModal, setNewSimModal] = useState({show: false, header: ''});
    const [transactionsModal, setTransactionsModal] = useState({show: false, header: '', sim: {}});
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: "DETAIL DU COMPTE", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitSimsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    const handleSearchInput = () => {
        dispatch(emitSearchSimsFetch({needle}));
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeSimsRequestReset());
        dispatch(storeNextSimsRequestReset());
    };

    // Fetch next sims data to enhance infinite scroll
    const handleNextSimsData = () => {
        dispatch(emitNextSimsFetch({page}));
    }

    // Show new sim modal form
    const handleNewSimModalShow = () => {
        setNewSimModal({newSimModal, header: "NOUVEAU COMPTE", show: true})
    }

    // Hide new sim modal form
    const handleNewSimModalHide = () => {
        setNewSimModal({...newSimModal, show: false})
    }

    // Show sim details modal form
    const handleSimDetailsModalShow = ({id}) => {
        setSimDetailsModal({...simDetailsModal, show: true, id})
    }

    // Hide sim details modal form
    const handleSimDetailsModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Show transactions modal form
    const handleTransactionsModalShow = (sim) => {
        setTransactionsModal({...transactionsModal, sim, show: true, header: 'TRANSACTIONS DE ' + sim.name})
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
                    <HeaderComponent title={ALL_SIMS} icon={'fa fa-sim-card'} />
                    <section className="content">
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card custom-card-outline">
                                        {/* Search input */}
                                        <div className="card-header">
                                            <div className="card-tools">
                                                <TableSearchWithButtonComponent needle={needle}
                                                                                handleNeedle={handleNeedleInput}
                                                                                handleSearch={handleSearchInput}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {/* Error message */}
                                            {requestFailed(simsRequests.list) && <ErrorAlertComponent message={simsRequests.list.message} />}
                                            {requestFailed(simsRequests.next) && <ErrorAlertComponent message={simsRequests.next.message} />}
                                            <button type="button"
                                                    className="btn btn-theme ml-2 mb-2"
                                                    onClick={handleNewSimModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouveau compte
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {requestLoading(simsRequests.list) ? <LoaderComponent /> : ((needle !== '' && needle !== undefined) ?
                                                    (
                                                        <SimsCardsComponent sims={searchEngine(sims, needle)}
                                                                            handleSimDetailsModalShow={handleSimDetailsModalShow}
                                                                            handleTransactionsModalShow={handleTransactionsModalShow}
                                                        />
                                                    ) :
                                                    (
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        dataLength={sims.length}
                                                                        next={handleNextSimsData}
                                                                        loader={<LoaderComponent />}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <SimsCardsComponent sims={sims}
                                                                                handleSimDetailsModalShow={handleSimDetailsModalShow}
                                                                                handleTransactionsModalShow={handleTransactionsModalShow}
                                                            />
                                                        </InfiniteScroll>
                                                    )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </AppLayoutContainer>
            {/* Modal */}
            <FormModalComponent modal={newSimModal} handleClose={handleNewSimModalHide}>
                <SimNewContainer handleClose={handleNewSimModalHide} />
            </FormModalComponent>
            <FormModalComponent small={true} modal={simDetailsModal} handleClose={handleSimDetailsModalHide}>
                <SimDetailsContainer id={simDetailsModal.id} />
            </FormModalComponent>
            <FormModalComponent modal={transactionsModal} handleClose={handleTransactionsModalHide}>
                <SimTransactionsContainer sim={transactionsModal.sim} />
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
                needleSearch(item.number, _needle) ||
                needleSearch(item.balance, _needle) ||
                needleSearch(item.type.name, _needle) ||
                needleSearch(item.agent.name, _needle) ||
                needleSearch(item.operator.name, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
SimsPage.propTypes = {
    sims: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    simsRequests: PropTypes.object.isRequired,
};

export default React.memo(SimsPage);