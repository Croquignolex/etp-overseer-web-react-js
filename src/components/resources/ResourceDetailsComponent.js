import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import AgentCniComponent from "../agents/AgentCniComponent";
import {emitResourceFetch} from "../../redux/agents/actions";
import {storeAgentRequestReset} from "../../redux/requests/agents/actions";
import AgentPrimaryInfoComponent from "../agents/AgentPrimaryInfoComponent";
import ResourceSecondaryInfoComponent from "./ResourceSecondaryInfoComponent";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function ResourceDetailsComponent({id, agent, dispatch, request}) {
    // Local effects
    useEffect(() => {
        dispatch(emitResourceFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeAgentRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <AgentPrimaryInfoComponent agent={agent} />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ResourceSecondaryInfoComponent agent={agent} />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <AgentCniComponent agent={agent} />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
ResourceDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    agent: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
};

export default React.memo(ResourceDetailsComponent);
