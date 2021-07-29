import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {ADMINS} from "../../constants/pageNameConstants";
import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import AdministratorsCardsComponent from "../../components/administrators/AdministratorsCardsComponent";
import {emitAdministratorsFetch, emitNextAdministratorsFetch} from "../../redux/administrators/actions";
import AdministratorDetailsContainer from "../../containers/administrators/AdministratorDetailsContainer";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";
import {storeAdministratorsRequestReset, storeNextAdministratorsRequestReset} from "../../redux/requests/administrators/actions";

// Component
function AdministratorsPage({administrators, administratorsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [administratorDetailsModal, setAdministratorDetailsModal] = useState({show: false, header: '', id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitAdministratorsFetch());
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
        dispatch(storeAdministratorsRequestReset());
        dispatch(storeNextAdministratorsRequestReset());
    };

    // Fetch next administrator data to enhance infinite scroll
    const handleNextAdministratorsData = () => {
        dispatch(emitNextAdministratorsFetch({page}));
    }

    // Show administrator details modal form
    const handleAdministratorDetailsModalShow = ({id, name}) => {
        setAdministratorDetailsModal({...administratorDetailsModal, show: true, id, header: "DETAIL DE " + name})
    }

    // Hide administrator details modal form
    const handleAdministratorDetailsModalHide = () => {
        setAdministratorDetailsModal({...administratorDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={ADMINS} icon={'fa fa-user-secret'} />
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
                                            {requestFailed(administratorsRequests.list) && <ErrorAlertComponent message={administratorsRequests.list.message} />}
                                            {requestFailed(administratorsRequests.next) && <ErrorAlertComponent message={administratorsRequests.next.message} />}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <AdministratorsCardsComponent administrators={searchEngine(administrators, needle)}
                                                                                handleAdministratorDetailsModalShow={handleAdministratorDetailsModalShow}
                                                />
                                                : (requestLoading(administratorsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={administrators.length}
                                                                        next={handleNextAdministratorsData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <AdministratorsCardsComponent administrators={administrators}
                                                                                          handleAdministratorDetailsModalShow={handleAdministratorDetailsModalShow}
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
            <FormModalComponent modal={administratorDetailsModal} handleClose={handleAdministratorDetailsModalHide}>
                <AdministratorDetailsContainer id={administratorDetailsModal.id} />
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
AdministratorsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    administrators: PropTypes.array.isRequired,
    administratorsRequests: PropTypes.object.isRequired,
};

export default React.memo(AdministratorsPage);