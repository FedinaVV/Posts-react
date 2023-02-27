import React from 'react';
import classes from './ModalMain.module.css';

const ModalMain = ({children, visible, setVisible}) => {

    const rootClasses = [classes.modalMain];

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalMainContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalMain;