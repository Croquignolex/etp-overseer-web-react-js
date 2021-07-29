import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {VENDORS_PAGE} from "../constants/pageNameConstants";
import HeaderComponent from "../components/HeaderComponent";
import LoaderComponent from "../components/LoaderComponent";
import AppLayoutContainer from "../containers/AppLayoutContainer";
import ErrorAlertComponent from "../components/ErrorAlertComponent";
import TableSearchComponent from "../components/TableSearchComponent";
import FormModalComponent from "../components/modals/FormModalComponent";
import VendorNewContainer from "../containers/vendors/VendorNewContainer";
import VendorsCardsComponent from "../components/vendors/VendorsCardsComponent";
import {emitNextVendorsFetch, emitVendorsFetch} from "../redux/vendors/actions";
import VendorDetailsContainer from "../containers/vendors/VendorDetailsContainer";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../functions/generalFunctions";
import {storeNextVendorsRequestReset, storeVendorsRequestReset} from "../redux/requests/vendors/actions";

// Component
function VendorsPage({vendors, vendorsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [newVendorModal, setNewVendorModal] = useState({show: false, header: ''});
    const [vendorDetailsModal, setVendorDetailsModal] = useState({show: false, header: "DETAIL DU FOURNISSEUR", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitVendorsFetch());
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
        dispatch(storeVendorsRequestReset());
        dispatch(storeNextVendorsRequestReset());
    };

    // Fetch next vendors data to enhance infinite scroll
    const handleNextVendorsData = () => {
        dispatch(emitNextVendorsFetch({page}));
    }

    // Show new vendor modal form
    const handleNewVendorModalShow = () => {
        setNewVendorModal({newVendorModal, header: "NOUVEAU FOURNISSEUR", show: true})
    }

    // Hide new vendor modal form
    const handleNewVendorModalHide = () => {
        setNewVendorModal({...newVendorModal, show: false})
    }

    // Show vendor details modal form
    const handleVendorDetailsModalShow = ({id}) => {
        setVendorDetailsModal({...vendorDetailsModal, show: true, id})
    }

    // Hide vendor details modal form
    const handleVendorDetailsModalHide = () => {
        setVendorDetailsModal({...vendorDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={VENDORS_PAGE} icon={'fa fa-user-ninja'} />
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
                                            {requestFailed(vendorsRequests.list) && <ErrorAlertComponent message={vendorsRequests.list.message} />}
                                            {requestFailed(vendorsRequests.next) && <ErrorAlertComponent message={vendorsRequests.next.message} />}
                                            <button type="button"
                                                    className="btn btn-theme ml-2 mb-2"
                                                    onClick={handleNewVendorModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouveau fournisseur
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <VendorsCardsComponent vendors={searchEngine(vendors, needle)}
                                                                         handleVendorDetailsModalShow={handleVendorDetailsModalShow}
                                                />
                                                : (requestLoading(vendorsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={vendors.length}
                                                                        next={handleNextVendorsData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <VendorsCardsComponent vendors={vendors}
                                                                                   handleVendorDetailsModalShow={handleVendorDetailsModalShow}
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
            <FormModalComponent modal={newVendorModal} handleClose={handleNewVendorModalHide}>
                <VendorNewContainer handleClose={handleNewVendorModalHide} />
            </FormModalComponent>
            <FormModalComponent small={true} modal={vendorDetailsModal} handleClose={handleVendorDetailsModalHide}>
                <VendorDetailsContainer id={vendorDetailsModal.id} />
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
VendorsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    vendors: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    vendorsRequests: PropTypes.object.isRequired,
};

export default React.memo(VendorsPage);