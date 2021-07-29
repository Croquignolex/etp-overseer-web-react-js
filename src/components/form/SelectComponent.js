import Select from 'react-select';
import PropTypes from 'prop-types';
import React, {useMemo} from 'react';

// Component
function SelectComponent({id, multi, label, options, title, input, requestProcessing, handleInput}) {

    const handleChange = (selected) => {
        if(!multi) handleInput(selected.value);
        else {
            let handler = [];
            selected && selected.forEach(item => handler.push(item.value));
            handleInput(handler);
        }
    }

    // Data
    const {data, errorMessage, isValid} = input;

    // Build default value
    const defaultValue = useMemo(() => {
        if(!multi) return findIntoData(data, options);
        else {
            const returnedValue = [];
            data.forEach(item => {
                const found = findIntoData(item, options);
                found && returnedValue.push(found)
            });
            return returnedValue;
        }
    }, [data, options, multi]);

    // Custom style in case oed error
    const customStyles = useMemo(() => {
        return isValid ? {} : {
            control: (provided) => ({...provided, border: '1px solid #e22529'}),
            singleValue: (provided) => {
                const color = '#e22529';
                return {...provided, color}
            }
        }
    }, [isValid]);

    // Render
    return (
        <>
            <div className='mb-3'>
                <label htmlFor={id}>{label}</label>
                <Select isMulti={multi}
                        options={options}
                        placeholder={title}
                        value={defaultValue}
                        styles={customStyles}
                        onChange={handleChange}
                        isLoading={requestProcessing}
                />
                <small className={'text-danger'}>{!isValid && errorMessage}</small>
            </div>
        </>
    )
}

// Find into data array
function findIntoData(needle, dataArray) {
    return dataArray.find(item => needle.toString() === item.value.toString());
}

// Prop types to ensure destroyed props data type
SelectComponent.propTypes = {
    multi: PropTypes.bool,
    id: PropTypes.string.isRequired,
    requestProcessing: PropTypes.bool,
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    handleInput: PropTypes.func.isRequired,
};

// Prop types to ensure destroyed props data type
SelectComponent.defaultProps = {
    multi: false,
    requestProcessing: false
};

export default React.memo(SelectComponent);