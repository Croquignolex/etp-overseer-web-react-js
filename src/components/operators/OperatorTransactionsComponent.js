import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import ExcelFile from "react-data-export/dist/ExcelPlugin/components/ExcelFile";
import ExcelSheet from "react-data-export/dist/ExcelPlugin/elements/ExcelSheet";
import ExcelColumn from "react-data-export/dist/ExcelPlugin/elements/ExcelColumn";

import LoaderComponent from "../LoaderComponent";
import ErrorAlertComponent from "../ErrorAlertComponent";
import DatePickerComponent from "../form/DatePickerComponent";
import {emitOperatorTransactionsFetch} from "../../redux/operators/actions";
import {storeOperatorTransactionsRequestReset} from "../../redux/requests/operators/actions";
import {formatString, requestFailed, requestLoading, shortDateToString} from "../../functions/generalFunctions";

// Component
function OperatorTransactionsComponent({operator, transactions, dispatch, request}) {
    // Local states
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());

    // Local effects
    useEffect(() => {
        dispatch(emitOperatorTransactionsFetch({
            id: operator.id,
            selectedEndDay: new Date(),
            selectedStartDay: new Date(),
        }));
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeOperatorTransactionsRequestReset());
    };

    const handleSelectedStartDate = (selectedDay) => {
        shouldResetErrorData();
        setSelectedStartDate(selectedDay)
        dispatch(emitOperatorTransactionsFetch({
            id: operator.id,
            selectedStartDay: selectedDay,
            selectedEndDay: selectedEndDate
        }));
    }

    const handleSelectedEndDate = (selectedDay) => {
        shouldResetErrorData();
        setSelectedEndDate(selectedDay)
        dispatch(emitOperatorTransactionsFetch({
            id: operator.id,
            selectedEndDay: selectedDay,
            selectedStartDay: selectedStartDate
        }));
    }

    // Custom export button
    const ExportButton = () => {
        const tabName = `Tansactions de flotte de ${operator.name} du ${shortDateToString(selectedStartDate, '-')} au ${shortDateToString(selectedEndDate, '-')}`;

        return (
            <ExcelFile element={
                <button type="button" className="btn btn-theme mb-1 mr-1">
                    <i className="fa fa-file-export" /> Exporter sous excel
                </button>
            } filename={tabName}>
                <ExcelSheet data={transactions} name="Transactions">
                    <ExcelColumn label="DATE" value="creation"/>
                    <ExcelColumn label="TYPE" value="type"/>
                    <ExcelColumn label="RESPONSABLE" value="user"/>
                    <ExcelColumn label="COMPTE" value="left_account"/>
                    <ExcelColumn label="RECIPROQUE" value="right_account"/>
                    <ExcelColumn label="ENTREES" value="in"/>
                    <ExcelColumn label="SORTIES" value="out"/>
                    <ExcelColumn label="SOLDES" value="balance"/>
                </ExcelSheet>
            </ExcelFile>
        )
    }

    // Render
    return (
        <>
            {requestLoading(request)  ? <LoaderComponent /> : (
                requestFailed(request) ? <ErrorAlertComponent message={request.message} /> : (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ExportButton />
                            <DatePickerComponent
                                end={selectedEndDate}
                                start={selectedStartDate}
                                handleEnd={handleSelectedEndDate}
                                handleStart={handleSelectedStartDate}
                            />
                            <div className="card">
                                <div className="table-responsive">
                                    <table className="table table-hover text-nowrap table-bordered">
                                        <thead>
                                            <tr>
                                                <th>DATE</th>
                                                <th>TYPE</th>
                                                <th>RESPONSABLE</th>
                                                <th>COMPTE</th>
                                                <th>RECIPROQUE</th>
                                                <th>ENTREES</th>
                                                <th>SORTIES</th>
                                                <th>SOLDES</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactions.map((item, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{item.creation}</td>
                                                        <td>{item.type}</td>
                                                        <td>{formatString(item.user, 20)}</td>
                                                        <td>{formatString(item.left_account, 20)}</td>
                                                        <td>{formatString(item.right_account, 20)}</td>
                                                        <td>{item.in}</td>
                                                        <td>{item.out}</td>
                                                        <td>{item.balance}</td>
                                                    </tr>
                                                )
                                            })}
                                            {transactions.length === 0 && (
                                                <tr>
                                                    <td colSpan={8}>
                                                        <div className='alert custom-active text-center'>
                                                            Pas de transactions
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    )
}

// Prop types to ensure destroyed props data type
OperatorTransactionsComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    operator: PropTypes.object.isRequired,
    transactions: PropTypes.array.isRequired,
};

export default React.memo(OperatorTransactionsComponent);
