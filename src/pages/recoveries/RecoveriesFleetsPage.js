import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import {fleetTypeBadgeColor} from "../../functions/typeFunctions";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import {RECOVERIES_FLEET_PAGE} from "../../constants/pageNameConstants";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import {emitNextReturnsFetch, emitReturnsFetch} from "../../redux/returns/actions";
import RecoveriesFleetsCardsComponent from "../../components/recoveries/RecoveriesFleetsCardsComponent";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeReturnsRequestReset, storeNextReturnsRequestReset} from "../../redux/requests/returns/actions";
import RecoveriesFleetsAddReturnContainer from "../../containers/recoveries/RecoveriesFleetsAddReturnContainer";

// Component
function RecoveriesFleetsPage({returns, returnsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [recoveryModal, setRecoveryModal] = useState({show: false, header: "EFFECTUER UN RETOUR FLOTTE"});

    // Local effects
    useEffect(() => {
        dispatch(emitReturnsFetch());
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
        dispatch(storeReturnsRequestReset());
        dispatch(storeNextReturnsRequestReset());
    };

    // Fetch next returns data to enhance infinite scroll
    const handleNextReturnsData = () => {
        dispatch(emitNextReturnsFetch({page}));
    }

    // Show recovery modal form
    const handleRecoveryModalShow = (item) => {
        setRecoveryModal({...recoveryModal, item, show: true})
    }

    // Hide recovery modal form
    const handleRecoveryModalHide = () => {
        setRecoveryModal({...recoveryModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={RECOVERIES_FLEET_PAGE} icon={'fa fa-redo'} />
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
                                            {requestFailed(returnsRequests.list) && <ErrorAlertComponent message={returnsRequests.list.message} />}
                                            {requestFailed(returnsRequests.next) && <ErrorAlertComponent message={returnsRequests.next.message} />}
                                            <button type="button"
                                                    className="btn btn-theme mb-2"
                                                    onClick={handleRecoveryModalShow}
                                            >
                                                <i className="fa fa-redo" /> Effectuer un retour flotte
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <RecoveriesFleetsCardsComponent returns={searchEngine(returns, needle)} />
                                                : (requestLoading(returnsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        dataLength={returns.length}
                                                                        loader={<LoaderComponent />}
                                                                        next={handleNextReturnsData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <RecoveriesFleetsCardsComponent returns={returns} />
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
            <FormModalComponent modal={recoveryModal} handleClose={handleRecoveryModalHide}>
                <RecoveriesFleetsAddReturnContainer handleClose={handleRecoveryModalHide} />
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
                needleSearch(item.agent.name, _needle) ||
                needleSearch(item.operator.name, _needle) ||
                needleSearch(item.sim_incoming.number, _needle) ||
                needleSearch(item.sim_outgoing.number, _needle) ||
                needleSearch(dateToString(item.creation), _needle) ||
                needleSearch(fleetTypeBadgeColor(item.status).text, _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
RecoveriesFleetsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    returns: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    returnsRequests: PropTypes.object.isRequired,
};

export default React.memo(RecoveriesFleetsPage);