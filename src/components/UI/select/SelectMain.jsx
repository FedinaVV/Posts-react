import React from 'react';
import classes from './SelectMain.module.css';

const SelectMain = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={classes.mainSelect} value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default SelectMain;