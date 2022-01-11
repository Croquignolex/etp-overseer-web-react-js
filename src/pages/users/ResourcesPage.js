import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../../components/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent";
import {agentTypeBadgeColor} from "../../functions/typeFunctions";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import FormModalComponent from "../../components/modals/FormModalComponent";
import BlockModalComponent from "../../components/modals/BlockModalComponent";
import ResourceNewContainer from "../../containers/resources/ResourceNewContainer";
import ResourcesCardsComponent from "../../components/resources/ResourcesCardsComponent";
import ResourceDetailsContainer from "../../containers/resources/ResourceDetailsContainer";
import TableSearchWithButtonComponent from "../../components/TableSearchWithButtonComponent";
import {
    storeAgentsRequestReset,
    storeNextAgentsRequestReset,
    storeAgentStatusToggleRequestReset
} from "../../redux/requests/agents/actions";
import {
    applySuccess,
    dateToString,
    needleSearch,
    requestFailed,
    requestLoading,
    requestSucceeded
} from "../../functions/generalFunctions";
import {
    emitResourcesFetch,
    emitSearchAgentsFetch,
    emitToggleAgentStatus,
    emitNextResourcesFetch
} from "../../redux/agents/actions";

// Component
function AgentsPage({agents, agentsRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [blockModal, setBlockModal] = useState({show: false, body: '', id: 0});
    const [newAgentModal, setNewAgentModal] = useState({show: false, header: '', type: ''});
    const [agentDetailsModal, setAgentDetailsModal] = useState({show: false, header: '', id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitResourcesFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Local effects
    useEffect(() => {
        // Reset inputs while toast (well done) into current scope
        if(requestSucceeded(agentsRequests.status)) {
            applySuccess(agentsRequests.status.message);
        }
        // eslint-disable-next-line
    }, [agentsRequests.status]);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    const handleSearchInput = () => {
        dispatch(emitSearchAgentsFetch({needle}));
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAgentsRequestReset());
        dispatch(storeNextAgentsRequestReset());
        dispatch(storeAgentStatusToggleRequestReset());
    };

    // Fetch next agents data to enhance infinite scroll
    const handleNextAgentsData = () => {
        dispatch(emitNextResourcesFetch({page}));
    }

    // Show new agent modal form
    const handleNewAgentModalShow = () => {
        setNewAgentModal({newAgentModal, header: "NOUVELLE RESSOURCE", show: true})
    }

    // Hide new agent modal form
    const handleNewAgentModalHide = () => {
        setNewAgentModal({...newAgentModal, show: false})
    }

    // Show agent details modal form
    const handleAgentDetailsModalShow = ({id, name}) => {
        setAgentDetailsModal({...agentDetailsModal, show: true, id, header: "DETAIL DE " + name})
    }

    // Hide agent details modal form
    const handleAgentDetailsModalHide = () => {
        setAgentDetailsModal({...agentDetailsModal, show: false})
    }

    // Trigger when user block status confirmed on modal
    const handleBlockModalShow = ({id, name}) => {
        setBlockModal({...blockModal, show: true, id, body: `Bloquer la ressource ${name}?`})
    };

    // Hide block confirmation modal
    const handleBlockModalHide = () => {
        setBlockModal({...blockModal, show: false})
    }

    // Trigger when user change status confirmed on modal
    const handleBlock = (id) => {
        handleBlockModalHide();
        dispatch(emitToggleAgentStatus({id}));
    };

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title="Toutes les ressources" icon={'fa fa-user-cog'} />
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
                                            {requestFailed(agentsRequests.list) && <ErrorAlertComponent message={agentsRequests.list.message} />}
                                            {requestFailed(agentsRequests.next) && <ErrorAlertComponent message={agentsRequests.next.message} />}
                                            {requestFailed(agentsRequests.status) && <ErrorAlertComponent message={agentsRequests.status.message} />}
                                            <button type="button"
                                                    className="btn btn-theme ml-2 mb-2"
                                                    onClick={handleNewAgentModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouvelle ressource
                                            </button>
                                            {/* Search result & Infinite scroll */}
                                            {requestLoading(agentsRequests.list) ? <LoaderComponent /> : ((needle !== '' && needle !== undefined) ?
                                                    (
                                                        <ResourcesCardsComponent handleBlock={handleBlock}
                                                                              agents={searchEngine(agents, needle)}
                                                                              handleBlockModalShow={handleBlockModalShow}
                                                                              handleAgentDetailsModalShow={handleAgentDetailsModalShow}
                                                        />
                                                    ) :
                                                    (
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        dataLength={agents.length}
                                                                        next={handleNextAgentsData}
                                                                        loader={<LoaderComponent />}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <ResourcesCardsComponent agents={agents}
                                                                                  handleBlock={handleBlock}
                                                                                  handleBlockModalShow={handleBlockModalShow}
                                                                                  handleAgentDetailsModalShow={handleAgentDetailsModalShow}
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
            <BlockModalComponent modal={blockModal}
                                 handleBlock={handleBlock}
                                 handleClose={handleBlockModalHide}
            />
            <FormModalComponent modal={newAgentModal} handleClose={handleNewAgentModalHide}>
                <ResourceNewContainer handleClose={handleNewAgentModalHide} />
            </FormModalComponent>
            <FormModalComponent modal={agentDetailsModal} handleClose={handleAgentDetailsModalHide}>
                <ResourceDetailsContainer id={agentDetailsModal.id} />
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
                needleSearch(item.reference, _needle) ||
                needleSearch(item.zone.name, _needle) ||
                needleSearch(item.creator.name, _needle) ||
                needleSearch(item.zone.reference, _needle) ||
                needleSearch(dateToString(item.creation), _needle) ||
                needleSearch(agentTypeBadgeColor(item.reference).text, _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
AgentsPage.propTypes = {
    page: PropTypes.number.isRequired,
    agents: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    agentsRequests: PropTypes.object.isRequired,
};

export default React.memo(AgentsPage);
