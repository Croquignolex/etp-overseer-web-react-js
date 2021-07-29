import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import LoaderComponent from "../../components/LoaderComponent";
import HeaderComponent from "../../components/HeaderComponent";
import {emitMovementsFetch} from "../../redux/movements/actions";
import AppLayoutContainer from "../../containers/AppLayoutContainer";
import ErrorAlertComponent from "../../components/ErrorAlertComponent";
import TableSearchComponent from "../../components/TableSearchComponent";
import {storeMovementsRequestReset} from "../../redux/requests/movements/actions";
import MovementsReportsComponent from "../../components/reports/MovementsReportsComponent";
import {dateToString, needleSearch, requestFailed, requestLoading} from "../../functions/generalFunctions";

// Component
function MovementsReportsPage({movements, movementsRequests, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());

    // Local effects
    useEffect(() => {
        dispatch(emitMovementsFetch({
            selectedEndDay: new Date(),
            selectedStartDay: new Date(),
        }));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeMovementsRequestReset());
    };

    const handleSelectedStartDate = (selectedDay) => {
        shouldResetErrorData();
        setSelectedStartDate(selectedDay)
        dispatch(emitMovementsFetch({
            selectedStartDay: selectedDay,
            selectedEndDay: selectedEndDate
        }));
    }

    const handleSelectedEndDate = (selectedDay) => {
        shouldResetErrorData();
        setSelectedEndDate(selectedDay)
        dispatch(emitMovementsFetch({
            selectedEndDay: selectedDay,
            selectedStartDay: selectedStartDate
        }));
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title="Mes mouvements de caisse" icon={'fa fa-table'} />
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
                                            {requestFailed(movementsRequests.list) && <ErrorAlertComponent message={movementsRequests.list.message} />}
                                             {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <MovementsReportsComponent selectedEndDate={selectedEndDate}
                                                                             selectedStartDate={selectedStartDate}
                                                                             movements={searchEngine(movements, needle)}
                                                                             handleSelectedEndDate={handleSelectedEndDate}
                                                                             handleSelectedStartDate={handleSelectedStartDate}
                                                />
                                                : (requestLoading(movementsRequests.list) ?
                                                        <LoaderComponent /> :
                                                        <MovementsReportsComponent movements={movements}
                                                                                   selectedEndDate={selectedEndDate}
                                                                                   selectedStartDate={selectedStartDate}
                                                                                   handleSelectedEndDate={handleSelectedEndDate}
                                                                                   handleSelectedStartDate={handleSelectedStartDate}
                                                        />
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
                needleSearch(item.in, _needle) ||
                needleSearch(item.out, _needle) ||
                needleSearch(item.type, _needle) ||
                needleSearch(item.label, _needle) ||
                needleSearch(item.balance, _needle) ||
                needleSearch(dateToString(item.creation), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
MovementsReportsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    movements: PropTypes.array.isRequired,
    movementsRequests: PropTypes.object.isRequired,
};

export default React.memo(MovementsReportsPage);