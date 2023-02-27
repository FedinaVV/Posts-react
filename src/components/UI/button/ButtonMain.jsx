import React from 'react';
import classes from './ButtonMain.module.css';

const ButtonMain = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btnMain}>
            {children}
        </button>
    );
};

export default ButtonMain;