import React from 'react';
import { Link } from 'react-router-dom';

import './bottomBar.scss';

const BottomBar = () => {
    return (
        <div className="row c-bottombar align-items-center">
            <div className="col">
                <Link className="c-bottombar__item" to="/">
                    <i className="fas fa-home" />
                    <p>Home</p>
                </Link>
            </div>
            <div className="col">
                <Link className="c-bottombar__item" to="/">
                    <i className="fas fa-image" />
                    <p>Feed</p>
                </Link>
            </div>
            <div className="col">
                <Link className="c-bottombar__item" to="/purchase">
                    <i className="fas fa-shopping-cart" />
                    <p>Cart</p>
                </Link>
            </div>
            <div className="col">
                <Link className="c-bottombar__item" to="/profile">
                    <i className="fas fa-user" />
                    <p>Profile</p>
                </Link>
            </div>
        </div>
    );
};

export default BottomBar;