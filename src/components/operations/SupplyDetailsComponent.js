import PropTypes from "prop-types";
import React, {useEffect} from 'react';

import SupplyInfoComponent from "./SupplyInfoComponent";
import {emitSupplyReturnsFetch} from "../../redux/returns/actions";
import SupplyReturnsListComponent from "./SupplyReturnsListComponent";
import {emitSupplyRecoveriesFetch} from "../../redux/recoveries/actions";
import SupplyRecoveriesListComponent from "./SupplyRecoveriesListComponent";
import {storeReturnsRequestReset} from "../../redux/requests/returns/actions";
import {storeRecoveriesRequestReset} from "../../redux/requests/recoveries/actions";

// Component
function SupplyDetailsComponent({supply, returns, recoveries, returnsRequests, recoveriesRequests, dispatch}) {
    // Local effects
    useEffect(() => {
        const {id} = supply;
        dispatch(emitSupplyRecoveriesFetch({id}));
        dispatch(emitSupplyReturnsFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeReturnsRequestReset());
        dispatch(storeRecoveriesRequestReset());
    };

    // Render
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <SupplyInfoComponent supply={supply} />
            </div>
            <div className="col-lg-12 col-md-12">
                <SupplyRecoveriesListComponent recoveries={recoveries}
                                               recoveriesRequestsList={recoveriesRequests.list}
                />
            </div>
            <div className="col-lg-12 col-md-12">
                <SupplyReturnsListComponent returns={returns}
                                            returnsRequestsList={returnsRequests.list}
                />
            </div>
        </div>
    )
}

// Prop types to ensure destroyed props data type
SupplyDetailsComponent.propTypes = {
    supply: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    returns: PropTypes.array.isRequired,
    recoveries: PropTypes.array.isRequired,
    returnsRequests: PropTypes.object.isRequired,
    recoveriesRequests: PropTypes.object.isRequired,
};

export default React.memo(SupplyDetailsComponent);
