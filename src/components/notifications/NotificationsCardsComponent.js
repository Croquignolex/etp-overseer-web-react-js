import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import LoaderComponent from "../LoaderComponent";
import {dateToString} from "../../functions/generalFunctions";
import DeleteModalComponent from "../modals/DeleteModalComponent";
import {emitNotificationDelete, emitNotificationRead} from "../../redux/notifications/actions";

// Component
function NotificationsCardsComponent({notifications, dispatch}) {
    // Local states
    const [deleteModal, setDeleteModal] = useState({show: false, body: '', id: 0});

    // Show delete confirmation modal
    const handleDeleteModalShow = ({id, creation}) => {
        setDeleteModal({...deleteModal, id, body: `Supprimer cette la notification du ${dateToString(creation)}?`, show: true})
    }

    // Hide delete confirmation modal
    const handleDeleteModalHide = () => {
        setDeleteModal({...deleteModal, show: false})
    }

    // Trigger when operator delete confirmed on modal
    const handleDelete = (id) => {
        handleDeleteModalHide();
        dispatch(emitNotificationDelete({id}));
    };

    // Render
    return (
        <div>
            <div className="row m-1">
                {notifications.map((item, key) => {
                    return (
                        <div className="col-lg-4 col-md-6" key={key}>
                            <div className={`${item.read ? '' : 'bg-theme-light'} card`}>
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className={`far fa-clock mr-2 ${item.className}`} />
                                        <Link to={item.url}
                                              title="Détails"
                                              className="text-secondary"
                                              onClick={() => dispatch(emitNotificationRead({id: item.id}))}
                                        >
                                            {dateToString(item.creation)}
                                        </Link>
                                    </h3>
                                    <div className="card-tools">
                                        {item.actionLoader ? <LoaderComponent little={true}/> :
                                            <button type="button"
                                                    title="Supprimer"
                                                    className="btn btn-tool"
                                                    onClick={() => handleDeleteModalShow(item)}
                                            >
                                                <i className="fas fa-trash-alt" />
                                            </button>
                                        }
                                    </div>
                                </div>
                                <div className="card-body">{item.message}</div>
                            </div>
                        </div>
                    )
                })}
                {notifications.length === 0 &&
                    <div className="col-12">
                        <div className='alert custom-active text-center'>
                            Pas de notifications
                        </div>
                    </div>
                }
            </div>
            {/* Modal */}
            <DeleteModalComponent modal={deleteModal}
                                  handleModal={handleDelete}
                                  handleClose={handleDeleteModalHide}
            />
        </div>
    )
}

// Prop types to ensure destroyed props data type
NotificationsCardsComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    notifications: PropTypes.array.isRequired
};

export default React.memo(NotificationsCardsComponent);
