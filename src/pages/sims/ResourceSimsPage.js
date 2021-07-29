import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import LoaderComponent from "../../components/LoaderComponent";
import HeaderComponent from "../../components/HeaderComponent";
import {RESOURCES_SIMS} from "../../constants/pageNameConstants";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import SimsCardsComponent from "../../components/sims/SimsCardsComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import SimDetailsContainer from "../../containers/sims/SimDetailsContainer";
import {emitNextResourcesSimsFetch, emitResourcesSimsFetch} from "../../redux/sims/actions";
import {storeNextSimsRequestReset, storeSimsRequestReset} from "../../redux/requests/sims/actions";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function ResourceSimsPage({sims, simsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [simDetailsModal, setSimDetailsModal] = useState({show: false, header: "DETAIL DU COMPTE", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitResourcesSimsFetch());
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
        dispatch(storeSimsRequestReset());
        dispatch(storeNextSimsRequestReset());
    };

    // Fetch next sims data to enhance infinite scroll
    const handleNextSimsData = () => {
        dispatch(emitNextResourcesSimsFetch({page}));
    }

    // Show sim details modal form
    const handleSimDetailsModalShow = ({id}) => {
        setSimDetailsModal({...simDetailsModal, show: true, id})
    }

    // Hide sim details modal form
    const handleSimDetailsModalHide = () => {
        setSimDetailsModal({...simDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={RESOURCES_SIMS} icon={'fa fa-sim-card'} />
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
                                            {requestFailed(simsRequests.list) && <ErrorAlertComponent message={simsRequests.list.message} />}
                                            {requestFailed(simsRequests.next) && <ErrorAlertComponent message={simsRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <SimsCardsComponent sims={searchEngine(sims, needle)} handleSimDetailsModalShow={handleSimDetailsModalShow} />
                                                : (requestLoading(simsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        dataLength={sims.length}
                                                                        next={handleNextSimsData}
                                                                        loader={<LoaderComponent />}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <SimsCardsComponent sims={sims} handleSimDetailsModalShow={handleSimDetailsModalShow} />
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
            <FormModalComponent small={true} modal={simDetailsModal} handleClose={handleSimDetailsModalHide}>
                <SimDetailsContainer id={simDetailsModal.id} />
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
ResourceSimsPage.propTypes = {
    sims: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    simsRequests: PropTypes.object.isRequired,
};

export default React.memo(ResourceSimsPage);