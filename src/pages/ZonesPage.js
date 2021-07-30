import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {ZONES_PAGE} from "../constants/pageNameConstants";
import {emitAllAgentsFetch} from "../redux/agents/actions";
import HeaderComponent from "../components/HeaderComponent";
import LoaderComponent from "../components/LoaderComponent";
import AppLayoutContainer from "../containers/AppLayoutContainer";
import {emitAllCollectorsFetch} from "../redux/collectors/actions";
import ErrorAlertComponent from "../components/ErrorAlertComponent";
import TableSearchComponent from "../components/TableSearchComponent";
import FormModalComponent from "../components/modals/FormModalComponent";
import ZonesCardsComponent from "../components/zones/ZonesCardsComponent";
import {emitNextZonesFetch, emitZonesFetch} from "../redux/zones/actions";
import {storeAllAgentsRequestReset} from "../redux/requests/agents/actions";
import ZoneDetailsContainer from "../containers/zones/ZoneDetailsContainer";
import {storeAllCollectorsRequestReset} from "../redux/requests/collectors/actions";
import {storeNextZonesRequestReset, storeZonesRequestReset} from "../redux/requests/zones/actions";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../functions/generalFunctions";

// Component
function ZonesPage({zones, zonesRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    // const [newZoneModal, setNewZoneModal] = useState({show: false, header: ''});
    const [zoneDetailsModal, setZoneDetailsModal] = useState({show: false, header: "DETAIL DE LA ZONE", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitZonesFetch());
        dispatch(emitAllAgentsFetch());
        dispatch(emitAllCollectorsFetch());
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
        dispatch(storeZonesRequestReset());
        dispatch(storeAllAgentsRequestReset());
        dispatch(storeNextZonesRequestReset());
        dispatch(storeAllCollectorsRequestReset());
    };

    // Fetch next zones data to enhance infinite scroll
    const handleNextZonesData = () => {
        dispatch(emitNextZonesFetch({page}));
    }

   /* // Show new zone modal form
    const handleNewZoneModalShow = () => {
        setNewZoneModal({newZoneModal, header: "NOUVELLE ZONE", show: true})
    }

    // Hide new zone modal form
    const handleNewZoneModalHide = () => {
        setNewZoneModal({...newZoneModal, show: false})
    }*/

    // Show zone details modal form
    const handleZoneDetailsModalShow = ({id}) => {
        setZoneDetailsModal({...zoneDetailsModal, show: true, id})
    }

    // Hide zone details modal form
    const handleZoneDetailsModalHide = () => {
        setZoneDetailsModal({...zoneDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={ZONES_PAGE} icon={'fa fa-map-marked'} />
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
                                            {requestFailed(zonesRequests.list) && <ErrorAlertComponent message={zonesRequests.list.message} />}
                                            {requestFailed(zonesRequests.next) && <ErrorAlertComponent message={zonesRequests.next.message} />}
                                            {/*<button type="button"
                                                    className="btn btn-theme ml-2 mb-2"
                                                    onClick={handleNewZoneModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouvelle zone
                                            </button>*/}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <ZonesCardsComponent zones={searchEngine(zones, needle)}
                                                                       handleZoneDetailsModalShow={handleZoneDetailsModalShow}
                                                />
                                                : (requestLoading(zonesRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        dataLength={zones.length}
                                                                        next={handleNextZonesData}
                                                                        loader={<LoaderComponent />}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <ZonesCardsComponent zones={zones}
                                                                                 handleZoneDetailsModalShow={handleZoneDetailsModalShow}
                                                      k      />
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
            {/*<FormModalComponent modal={newZoneModal} handleClose={handleNewZoneModalHide}>
                <ZoneNewContainer handleClose={handleNewZoneModalHide} />
            </FormModalComponent>*/}
            <FormModalComponent modal={zoneDetailsModal} handleClose={handleZoneDetailsModalHide}>
                <ZoneDetailsContainer id={zoneDetailsModal.id} />
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
                needleSearch(item.reference, _needle) ||
                needleSearch(item.collector.name, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
ZonesPage.propTypes = {
    zones: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    zonesRequests: PropTypes.object.isRequired,
};

export default React.memo(ZonesPage);