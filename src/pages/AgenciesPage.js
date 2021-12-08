import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {AGENCIES_PAGE} from "../constants/pageNameConstants";
import HeaderComponent from "../components/HeaderComponent";
import LoaderComponent from "../components/LoaderComponent";
import AppLayoutContainer from "../containers/AppLayoutContainer";
import ErrorAlertComponent from "../components/ErrorAlertComponent";
import TableSearchComponent from "../components/TableSearchComponent";
import FormModalComponent from "../components/modals/FormModalComponent";
import AgencyNewContainer from "../containers/agencies/AgencyNewContainer";
import AgenciesCardsComponent from "../components/agencies/AgenciesCardsComponent";
import {emitNextAgenciesFetch, emitAgenciesFetch} from "../redux/agencies/actions";
import AgencyDetailsContainer from "../containers/agencies/AgencyDetailsContainer";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../functions/generalFunctions";
import {storeNextAgenciesRequestReset, storeAgenciesRequestReset} from "../redux/requests/agencies/actions";

// Component
function AgenciesPage({agencies, agenciesRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [newAgencyModal, setNewAgencyModal] = useState({show: false, header: ''});
    const [agencyDetailsModal, setAgencyDetailsModal] = useState({show: false, header: "DETAIL DU AGENCE", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitAgenciesFetch());
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
        dispatch(storeAgenciesRequestReset());
        dispatch(storeNextAgenciesRequestReset());
    };

    // Fetch next agencies data to enhance infinite scroll
    const handleNextAgenciesData = () => {
        dispatch(emitNextAgenciesFetch({page}));
    }

    // Show new agency modal form
    const handleNewAgencyModalShow = () => {
        setNewAgencyModal({newAgencyModal, header: "NOUVELLE AGENCE", show: true})
    }

    // Hide new agency modal form
    const handleNewAgencyModalHide = () => {
        setNewAgencyModal({...newAgencyModal, show: false})
    }

    // Show agency details modal form
    const handleAgencyDetailsModalShow = ({id}) => {
        setAgencyDetailsModal({...agencyDetailsModal, show: true, id})
    }

    // Hide agency details modal form
    const handleAgencyDetailsModalHide = () => {
        setAgencyDetailsModal({...agencyDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={AGENCIES_PAGE} icon={'fa fa-building'} />
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
                                            {requestFailed(agenciesRequests.list) && <ErrorAlertComponent message={agenciesRequests.list.message} />}
                                            {requestFailed(agenciesRequests.next) && <ErrorAlertComponent message={agenciesRequests.next.message} />}
                                            <button type="button"
                                                    className="btn btn-theme ml-2 mb-2"
                                                    onClick={handleNewAgencyModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouvelle agence
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <AgenciesCardsComponent agencies={searchEngine(agencies, needle)}
                                                                         handleAgencyDetailsModalShow={handleAgencyDetailsModalShow}
                                                />
                                                : (requestLoading(agenciesRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={agencies.length}
                                                                        next={handleNextAgenciesData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <AgenciesCardsComponent agencies={agencies}
                                                                                   handleAgencyDetailsModalShow={handleAgencyDetailsModalShow}
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
            <FormModalComponent modal={newAgencyModal} handleClose={handleNewAgencyModalHide}>
                <AgencyNewContainer handleClose={handleNewAgencyModalHide} />
            </FormModalComponent>
            <FormModalComponent small={true} modal={agencyDetailsModal} handleClose={handleAgencyDetailsModalHide}>
                <AgencyDetailsContainer id={agencyDetailsModal.id} />
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
                needleSearch(item.description, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
AgenciesPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    agencies: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    agenciesRequests: PropTypes.object.isRequired,
};

export default React.memo(AgenciesPage);
