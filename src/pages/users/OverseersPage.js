import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {OVERSEER} from "../../constants/pageNameConstants";
import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import OverseersCardsComponent from "../../components/overseers/OverseersCardsComponent";
import {emitOverseersFetch, emitNextOverseersFetch} from "../../redux/overseers/actions";
import OverseerDetailsContainer from "../../containers/overseers/OverseerDetailsContainer";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeOverseersRequestReset, storeNextOverseersRequestReset} from "../../redux/requests/overseers/actions";

// Component
function OverseersPage({overseers, overseersRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [overseerDetailsModal, setOverseerDetailsModal] = useState({show: false, header: '', id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitOverseersFetch());
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
        dispatch(storeOverseersRequestReset());
        dispatch(storeNextOverseersRequestReset());
    };

    // Fetch next overseer data to enhance infinite scroll
    const handleNextOverseersData = () => {
        dispatch(emitNextOverseersFetch({page}));
    }

    // Show overseer details modal form
    const handleOverseerDetailsModalShow = ({id, name}) => {
        setOverseerDetailsModal({...overseerDetailsModal, show: true, id, header: "DETAIL DE " + name})
    }

    // Hide overseer details modal form
    const handleOverseerDetailsModalHide = () => {
        setOverseerDetailsModal({...overseerDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={OVERSEER} icon={'fa fa-user-astronaut'} />
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
                                            {requestFailed(overseersRequests.list) && <ErrorAlertComponent message={overseersRequests.list.message} />}
                                            {requestFailed(overseersRequests.next) && <ErrorAlertComponent message={overseersRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <OverseersCardsComponent overseers={searchEngine(overseers, needle)}
                                                                                handleOverseerDetailsModalShow={handleOverseerDetailsModalShow}
                                                />
                                                : (requestLoading(overseersRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={overseers.length}
                                                                        next={handleNextOverseersData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <OverseersCardsComponent overseers={overseers}
                                                                                     handleOverseerDetailsModalShow={handleOverseerDetailsModalShow}
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
            <FormModalComponent modal={overseerDetailsModal} handleClose={handleOverseerDetailsModalHide}>
                <OverseerDetailsContainer id={overseerDetailsModal.id} />
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
OverseersPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    overseers: PropTypes.array.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    overseersRequests: PropTypes.object.isRequired,
};

export default React.memo(OverseersPage);