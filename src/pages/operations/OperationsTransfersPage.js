import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import {OPERATIONS_TRANSFERS_PAGE} from "../../constants/pageNameConstants";
import ConfirmModalComponent from "../../components/modals/ConfirmModalComponent";
import {emitConfirmTransfer, emitNextTransfersFetch, emitTransfersFetch} from "../../redux/transfers/actions";
import OperationsTransfersCardsComponent from "../../components/operations/OperationsTransfersCardsComponent";
import OperationsTransfersAddTransferContainer from "../../containers/operations/OperationsTransfersAddTransferContainer";
import {
    applySuccess,
    dateToString,
    formatNumber,
    needleSearch,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";
import {
    storeTransfersRequestReset,
    storeNextTransfersRequestReset,
    storeConfirmTransferRequestReset
} from "../../redux/requests/transfers/actions";

// Component
function OperationsTransfersPage({transfers, transfersRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [confirmModal, setConfirmModal] = useState({show: false, body: '', id: 0});
    const [transferModal, setTransferModal] = useState({show: false, header: 'EFFECTUER UN TRANSFERT DE FLOTTE'});

    // Local effects
    useEffect(() => {
        dispatch(emitTransfersFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(transfersRequests.apply)) {
            applySuccess(transfersRequests.apply.message);
        }
        // eslint-disable-next-line
    }, [transfersRequests.apply]);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeTransfersRequestReset());
        dispatch(storeNextTransfersRequestReset());
        dispatch(storeConfirmTransferRequestReset());
    };

    // Fetch next transfers data to enhance infinite scroll
    const handleNextTransfersData = () => {
        dispatch(emitNextTransfersFetch({page}));
    }

    // Show transfer modal form
    const handleTransferModalShow = (item) => {
        setTransferModal({...transferModal, item, show: true})
    }

    // Hide transfer modal form
    const handleTransferModalHide = () => {
        setTransferModal({...transferModal, show: false})
    }

    // Show confirm modal form
    const handleConfirmModalShow = ({id, amount, user}) => {
        setConfirmModal({...confirmModal, id, body: `Confirmer le transfert de flotte de ${user.name} de ${formatNumber(amount)}?`, show: true})
    }

    // Hide confirm modal form
    const handleConfirmModalHide = () => {
        setConfirmModal({...confirmModal, show: false})
    }

    // Trigger when clearance confirm confirmed on modal
    const handleConfirm = (id) => {
        handleConfirmModalHide();
        dispatch(emitConfirmTransfer({id}));
    };

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={OPERATIONS_TRANSFERS_PAGE} icon={'fa fa-exchange'} />
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
                                            {requestFailed(transfersRequests.list) && <ErrorAlertComponent message={transfersRequests.list.message} />}
                                            {requestFailed(transfersRequests.next) && <ErrorAlertComponent message={transfersRequests.next.message} />}
                                            {requestFailed(transfersRequests.apply) && <ErrorAlertComponent message={transfersRequests.apply.message} />}
                                            <button type="button"
                                                    className="btn btn-theme mb-2"
                                                    onClick={handleTransferModalShow}
                                            >
                                                <i className="fa fa-exchange" /> Effectuer un transfert
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <OperationsTransfersCardsComponent transfers={searchEngine(transfers, needle)} />
                                                : (requestLoading(transfersRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={transfers.length}
                                                                        next={handleNextTransfersData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <OperationsTransfersCardsComponent transfers={transfers}
                                                                                               handleConfirmModalShow={handleConfirmModalShow}
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
            <ConfirmModalComponent modal={confirmModal}
                                   handleModal={handleConfirm}
                                   handleClose={handleConfirmModalHide}
            />
            <FormModalComponent modal={transferModal} handleClose={handleTransferModalHide}>
                <OperationsTransfersAddTransferContainer handleClose={handleTransferModalHide} />
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
                needleSearch(item.user.name, _needle) ||
                needleSearch(item.operator.name, _needle) ||
                needleSearch(item.sim_incoming.number, _needle) ||
                needleSearch(item.sim_outgoing.number, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
OperationsTransfersPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    transfers: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    transfersRequests: PropTypes.object.isRequired,
};

export default React.memo(OperationsTransfersPage);