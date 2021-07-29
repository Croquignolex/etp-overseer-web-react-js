import React from 'react';
import PropTypes from 'prop-types';

import {USER_ROLE} from "../../constants/defaultConstants";
import {dateToString} from "../../functions/generalFunctions";

// Component
function ProfileDetailComponent({user}) {
    // Data
    const {avatar, name, post, phone, description, email, address, creation} = user;

    // Render
    return (
        <>
            {/* Primary information */}
            <div className="card custom-card-outline">
                <div className="card-body box-profile">
                    <span className="mr-1"><i className='fa fa-lock-open text-success' /></span>
                    <span className="badge badge-success">{USER_ROLE}</span>
                    <div className="text-center">
                        <img src={avatar} alt="avatar..."
                             className="profile-user-img img-fluid img-circle"
                        />
                    </div>
                    <h3 className="profile-username text-center">{name}</h3>
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b><i className='fa fa-phone' /> Tel personnel</b>
                            <span className="float-right">{phone}</span>
                        </li>
                        <li className="list-group-item">
                            <b><i className='fa fa-at' /> Email</b>
                            <span className="float-right">{email}</span>
                        </li>
                        <li className="list-group-item">
                            <b><i className='fa fa-user-tie' /> Poste</b>
                            <span className="float-right">{post}</span>
                        </li>
                        <li className="list-group-item">
                            <b><i className='fa fa-calendar-alt' /> Date de céation</b>
                            <span className="float-right">{dateToString(creation)}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Secondary information */}
            <div className="card custom-card-outline">
                <div className="card-body">
                    <strong><i className="fa fa-map-marker mr-1" /> Address</strong>
                    <p className="text-muted">{address}</p>
                    <hr />
                    <strong><i className="fa fa-user-secret mr-1" /> Description</strong>
                    <p className="text-muted">{description}</p>
                </div>
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
ProfileDetailComponent.propTypes = {
    user: PropTypes.object.isRequired
};

export default React.memo(ProfileDetailComponent);
