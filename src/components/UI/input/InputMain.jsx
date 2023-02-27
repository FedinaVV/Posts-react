import React from 'react';
import classes from './InputMain.module.css';

const InputMain = React.forwardRef((props, ref) => {
    return (
            <input ref={ref} {...props} className={classes.inputMain}/>
    );
});

export default InputMain;