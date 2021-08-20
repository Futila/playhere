import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.css';
import logo from '../../assets/PlayHere.svg';


const Header = () => (
    <div className="header">
        <img src={logo} width={100} alt="Logo" />

        <div className="options">
            <Link to="/">
                Home
            </Link>

            <Link to="/favourites">
                Favourites
            </Link>
        </div>
    </div>
);



export default Header;