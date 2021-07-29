import PropTypes from 'prop-types';
import React, {forwardRef} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// Component
function DatePickerComponent({end, start, bigButtons, handleEnd, handleStart}) {
    // Custom component
    const CustomInput = forwardRef(({ value, onClick, isBegin }, ref) => (
        <button className={`btn btn-theme mb-1 mr-1 ${!bigButtons && 'btn-sm'}`} type="button" onClick={onClick} ref={ref}>
            <i className="fa fa-calendar-week" /> {isBegin ? 'Du' : 'Au'} {value}
        </button>
    ));

    const handleSelectedStartDate = (data) => {
        handleStart(data);
    }

    const handleSelectedEndDate = (data) => {
        handleEnd(data);
    }

    // Render
    return (
        <div className="d-flex">
            <DatePicker selected={start}
                        maxDate={end}
                        calendarStartDay={1}
                        dateFormat="dd/MM/yyyy"
                        onChange={handleSelectedStartDate}
                        customInput={<CustomInput isBegin />}
                        selectsStart
                        startDate={start}
                        endDate={end}
            />
            <DatePicker selected={end}
                        maxDate={new Date()}
                        calendarStartDay={1}
                        dateFormat="dd/MM/yyyy"
                        onChange={handleSelectedEndDate}
                        customInput={<CustomInput />}
                        selectsEnd
                        startDate={start}
                        minDate={start}
                        endDate={end}
            />
        </div>
    )
}

// Prop types to ensure destroyed props data type
DatePickerComponent.propTypes = {
    end: PropTypes.object.isRequired,
    start: PropTypes.object.isRequired,
    handleEnd: PropTypes.func.isRequired,
    bigButtons: PropTypes.bool.isRequired,
    handleStart: PropTypes.func.isRequired,
};

// Prop types to ensure destroyed props data type
DatePickerComponent.defaultProps = {
    bigButtons: false
};

export default React.memo(DatePickerComponent);