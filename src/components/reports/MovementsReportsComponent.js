import React from 'react';
import PropTypes from "prop-types";

import ExcelFile from "react-data-export/dist/ExcelPlugin/components/ExcelFile";
import ExcelSheet from "react-data-export/dist/ExcelPlugin/elements/ExcelSheet";
import ExcelColumn from "react-data-export/dist/ExcelPlugin/elements/ExcelColumn";

import DatePickerComponent from "../form/DatePickerComponent";
import {formatString, shortDateToString} from "../../functions/generalFunctions";

// Component
function CollectorMovementsComponent({movements, selectedEndDate, selectedStartDate,
                                         handleSelectedStartDate, handleSelectedEndDate}) {
    // Custom export button
    const ExportButton = () => {
        const tabName = `Mes mouvements de caisse du ${shortDateToString(selectedStartDate, '-')} au ${shortDateToString(selectedEndDate, '-')}`;

        return (
            <ExcelFile element={
                <button type="button" className="btn btn-theme mb-1 mr-1">
                    <i className="fa fa-file-export" /> Exporter sous excel
                </button>
            } filename={tabName}>
                <ExcelSheet data={movements} name="Mouvements">
                    <ExcelColumn label="DATE" value="creation"/>
                    <ExcelColumn label="TYPE" value="type"/>
                    <ExcelColumn label="NATURE" value="label"/>
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
                                <thead className="bg-secondary">
                                    <tr>
                                        <th>DATE</th>
                                        <th>TYPE</th>
                                        <th>NATURE</th>
                                        <th>ENTREES</th>
                                        <th>SORTIES</th>
                                        <th>SOLDES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movements.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{item.creation}</td>
                                                <td>{item.type}</td>
                                                <td>{formatString(item.label, 20)}</td>
                                                <td>{item.in}</td>
                                                <td>{item.out}</td>
                                                <td>{item.balance}</td>
                                            </tr>
                                        )
                                    })}
                                    {movements.length === 0 && (
                                        <tr>
                                            <td colSpan={6}>
                                                <div className='alert custom-active text-center'>
                                                    Pas de mouvements de caisse
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
        </>
    )
}

// Prop types to ensure destroyed props data type
CollectorMovementsComponent.propTypes = {
    movements: PropTypes.array.isRequired,
    selectedEndDate: PropTypes.object.isRequired,
    selectedStartDate: PropTypes.object.isRequired,
    handleSelectedEndDate: PropTypes.func.isRequired,
    handleSelectedStartDate: PropTypes.func.isRequired,
};

export default React.memo(CollectorMovementsComponent);
