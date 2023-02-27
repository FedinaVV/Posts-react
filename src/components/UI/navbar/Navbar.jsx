import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper-links">
                <Link className="navbar-links" to="/about">О приложении</Link>
                <Link className="navbar-links" to="/posts">Приложение с постами</Link>
            </div>
        </div>
    );
};

export default Navbar;