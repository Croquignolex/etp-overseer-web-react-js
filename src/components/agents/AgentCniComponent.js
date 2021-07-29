import PropTypes from 'prop-types';
import React, {useState} from 'react';

import FormModalComponent from "../modals/FormModalComponent";
import AgentCniEditContainer from "../../containers/agents/AgentCniEditContainer";

// Component
function AgentCniComponent({agent}) {
    // Local states
    const [cniEditModal, setCniEditModal] = useState({show: false, header: 'MODIFIER LA CNI DE ' + agent.name});

    // Show cni edit modal form
    const handleCniEditModalShow = () => {
        setCniEditModal({...cniEditModal, show: true})
    }

    // Hide cni edit modal form
    const handleCniEditModalHide = () => {
        setCniEditModal({...cniEditModal, show: false})
    }

    // Data
    const Ribbon = ({text, image}) => {
        return (
            <div className="col-sm-6">
                <div className="position-relative">
                    <a href={image} data-toggle="lightbox" data-title={text} data-gallery="gallery">
                        <img src={image} className="img-fluid mb-2" alt="..."/>
                    </a>
                    <div className="ribbon-wrapper ribbon-lg">
                        <div className="ribbon bg-theme">{text}</div>
                    </div>
                </div>
            </div>
        )
    };

    // Render
    return (
        <>
            <button type="button" className="btn btn-theme mb-1" onClick={handleCniEditModalShow}>
                <i className="fa fa-pencil" /> Modifier la CNI
            </button>
            <div className='row'>
                <Ribbon text='Image avant' image={agent.frontIDCard} />
                <Ribbon text='Image arrière' image={agent.backIDCard} />
            </div>
            {/* Modal */}
            <FormModalComponent modal={cniEditModal} handleClose={handleCniEditModalHide}>
                <AgentCniEditContainer handleClose={handleCniEditModalHide} />
            </FormModalComponent>
        </>
    )
}

// Prop types to ensure destroyed props data type
AgentCniComponent.propTypes = {
    agent: PropTypes.object.isRequired
};

// Connect component to Redux
export default React.memo(AgentCniComponent);
