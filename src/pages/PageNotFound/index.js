import React from 'react';
import { Link } from 'react-router-dom';

import './main.scss';

const PageNotFound = () => {
    return (
        <div className="c-404">
            <div className="c-404__wrapper">
                <h1 className="c-404__heading">404</h1>
                <h3 className="c-404__title">Oops! Page not found!</h3>

                <p className="c-404__desc">
                    The page yout were looking for doesn't exist.
                    you may have mistyped the address or the page may have moved.
                </p>

                <Link to="/" className="c-404__cta">Back to Home</Link>
            </div>
        </div>
    );
};

export default PageNotFound;