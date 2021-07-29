import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import {ACCOUNTANTS} from "../../constants/pageNameConstants";
import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import BlockModalComponent from "../../components/modals/BlockModalComponent";
import AccountantNewContainer from "../../containers/accountants/AccountantNewContainer";
import AccountantsCardsComponent from "../../components/accountants/AccountantsCardsComponent";
import AccountantDetailsContainer from "../../containers/accountants/AccountantDetailsContainer";
import {emitAccountantsFetch, emitNextAccountantsFetch, emitToggleAccountantStatus} from "../../redux/accountants/actions";
import {applySuccess, dateToString, needleSearch, requestFailed, requestLoading, requestSucceeded} from "../../functions/generalFunctions";
import {storeAccountantsRequestReset, storeNextAccountantsRequestReset, storeAccountantStatusToggleRequestReset,} from "../../redux/requests/accountants/actions";

// Component
function AccountantsPage({accountants, accountantsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [blockModal, setBlockModal] = useState({show: false, body: '', id: 0});
    const [newAccountantModal, setNewAccountantModal] = useState({show: false, header: ''});
    const [accountantDetailsModal, setAccountantDetailsModal] = useState({show: false, header: '', id: 0});

    // Local effects
    useEffect(() => {
        dispatch(emitAccountantsFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(accountantsRequests.status)) {
            applySuccess(accountantsRequests.status.message);
        }
        // eslint-disable-next-line
    }, [accountantsRequests.status]);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAccountantsRequestReset());
        dispatch(storeNextAccountantsRequestReset());
        dispatch(storeAccountantStatusToggleRequestReset());
    };

    // Fetch next accountant data to enhance infinite scroll
    const handleNextAccountantsData = () => {
        dispatch(emitNextAccountantsFetch({page}));
    }

    // Show new accountant modal form
    const handleNewAccountantModalShow = () => {
        setNewAccountantModal({newAccountantModal, header: "NOUVEAU COMPTABLE", show: true})
    }

    // Hide new accountant modal form
    const handleNewAccountantModalHide = () => {
        setNewAccountantModal({...newAccountantModal, show: false})
    }

    // Show accountant details modal form
    const handleAccountantDetailsModalShow = ({id, name}) => {
        setAccountantDetailsModal({...accountantDetailsModal, show: true, id, header: "DETAIL DE " + name})
    }

    // Hide accountant details modal form
    const handleAccountantDetailsModalHide = () => {
        setAccountantDetailsModal({...accountantDetailsModal, show: false})
    }

    // Trigger when user block status confirmed on modal
    const handleBlockModalShow = ({id, name}) => {
        setBlockModal({...blockModal, show: true, id, body: `Bloquer le comptable ${name}?`})
    };

    // Hide block confirmation modal
    const handleBlockModalHide = () => {
        setBlockModal({...blockModal, show: false})
    }

    // Trigger when user change status confirmed on modal
    const handleBlock = (id) => {
        handleBlockModalHide();
        dispatch(emitToggleAccountantStatus({id}));
    };

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={ACCOUNTANTS} icon={'fa fa-user-shield'} />
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
                                            {requestFailed(accountantsRequests.list) && <ErrorAlertComponent message={accountantsRequests.list.message} />}
                                            {requestFailed(accountantsRequests.next) && <ErrorAlertComponent message={accountantsRequests.next.message} />}
                                            {requestFailed(accountantsRequests.status) && <ErrorAlertComponent message={accountantsRequests.status.message} />}
                                            <button type="button"
                                                    className="btn btn-theme ml-2 mb-2"
                                                    onClick={handleNewAccountantModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouveau comptable
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <AccountantsCardsComponent handleBlock={handleBlock}
                                                                             handleBlockModalShow={handleBlockModalShow}
                                                                             accountants={searchEngine(accountants, needle)}
                                                                             handleAccountantDetailsModalShow={handleAccountantDetailsModalShow}
                                                />
                                                : (requestLoading(accountantsRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={accountants.length}
                                                                        next={handleNextAccountantsData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <AccountantsCardsComponent accountants={accountants}
                                                                                       handleBlock={handleBlock}
                                                                                       handleBlockModalShow={handleBlockModalShow}
                                                                                       handleAccountantDetailsModalShow={handleAccountantDetailsModalShow}
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
            <BlockModalComponent modal={blockModal}
                                 handleBlock={handleBlock}
                                 handleClose={handleBlockModalHide}
            />
            <FormModalComponent modal={newAccountantModal} handleClose={handleNewAccountantModalHide}>
                <AccountantNewContainer type={newAccountantModal.type} handleClose={handleNewAccountantModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={accountantDetailsModal} handleClose={handleAccountantDetailsModalHide}>
                <AccountantDetailsContainer id={accountantDetailsModal.id} />
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
AccountantsPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    accountants: PropTypes.array.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    accountantsRequests: PropTypes.object.isRequired,
};

export default React.memo(AccountantsPage);