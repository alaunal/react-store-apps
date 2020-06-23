import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './searchBar.scss';

const SearchBar = () => {

    return (
        <div className="row c-searchbar align-items-center">
            <div className="col-auto px-2">
                <Link className="c-searchbar__btn-wishlist" to="/profile"><i className="fas fa-heart" /></Link>
            </div>
            <div className="col pr-2">
                <Link className="c-searchbar__form" to="/search">
                    <input
                        type="text"
                        className="c-searchbar__input"
                        placeholder="search item ..."
                        readOnly
                    />

                    <i className="fas fa-search" />
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;