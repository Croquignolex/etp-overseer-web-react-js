import React, {useEffect} from 'react';
import PropTypes from "prop-types";

import LoaderComponent from "../LoaderComponent";
import SimCardComponent from "./SimCardComponent";
import {emitSimFetch} from "../../redux/sims/actions";
import ErrorAlertComponent from "../ErrorAlertComponent";
import {simTypeBadgeColor} from "../../functions/typeFunctions";
import {storeShowSimRequestReset} from "../../redux/requests/sims/actions";
import {requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function SimDetailsComponent({id, sim, dispatch, request}) {
    // Local states
    // const [infoEditModal, setInfoEditModal] = useState({show: false, header: ''});

   /* // Show info edit modal form
    const handleInfoEditModalShow = () => {
        setInfoEditModal({...infoEditModal, show: true, header: 'MODIFIER LES INFO DE ' + sim.name})
    }

    // Hide info edit modal form
    const handleInfoEditModalHide = () => {
        setInfoEditModal({...infoEditModal, show: false})
    }*/

    // Local effects
    useEffect(() => {
        dispatch(emitSimFetch({id}));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeShowSimRequestReset());
    };

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            {/*<button type="button" className="btn btn-theme mb-1" onClick={handleInfoEditModalShow}>
                                <i className="fa fa-edit" /> Modifier les info
                            </button>*/}
                            <div className="card">
                                <div className={`${simTypeBadgeColor(sim.type.name).background} card-header`}>
                                    <h3 className="card-title">COMPTE {simTypeBadgeColor(sim.type.name).text}</h3>
                                </div>
                                <div className="card-body"><SimCardComponent sim={sim} /></div>
                            </div>
                        </div>
                    </div>
                )
            )}
            {/* Modal */}
            {/*<FormModalComponent small={true} modal={infoEditModal} handleClose={handleInfoEditModalHide}>
                <SimInfoEditContainer handleClose={handleInfoEditModalHide} />
            </FormModalComponent>*/}
        </>
    )
}

// Prop types to ensure destroyed props data type
SimDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    sim: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
};

export default React.memo(SimDetailsComponent);
