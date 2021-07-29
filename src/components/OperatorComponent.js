import React from "react";
import PropTypes from "prop-types";

// Component
function OperatorComponent({operator}) {
    switch(operator.id) {
        case "1": return <img alt="..." src={require('../assets/images/mtn.png')} width={30} />;
        case "3": return <img alt="..." src={require('../assets/images/yup.png')} width={30} />;
        case "2": return <img alt="..." src={require('../assets/images/orange.png')} width={30} />;
        default: return <img alt="..." src={require('../assets/images/unknown.png')} width={30} />;
    }
}

// Prop types to ensure destroyed props data type
OperatorComponent.propTypes = {
    operator: PropTypes.object.isRequired
};

export default React.memo(OperatorComponent);
