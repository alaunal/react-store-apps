import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { isEmpty, filter } from 'lodash';

import ListItem from '../../components/ListItem';

import './main.scss';

const Search = (props) => {

    const { dataAuth, dataStore } = props;
    const [ dataFilter, setDataFilter ] = useState([]);
    const dataItems = !isEmpty(dataStore.productPromo) ? dataStore.productPromo : [];
    

    const searchFilter = useRef();

    useEffect(() => {
        if(searchFilter.current){
            searchFilter.current.focus();
        }
    });

    const handleDataFilter = (key) => {
        let keyword = key.trim().toLowerCase();

        const result = filter(dataItems, rows => {
            let stringKey = `${rows.title}`;
    
            const byStringKey = stringKey ? stringKey.toLowerCase().indexOf(keyword) !== -1 : false;
    
            return byStringKey;
        });

        setDataFilter(result);
    };

    if(!dataAuth.isLogin) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="c-search">
            <div className="row c-searchbar align-items-center">
                <div className="col-auto px-2">
                    <Link className="c-searchbar__btn-wishlist" to="/"><i className="fas fa-arrow-left" /></Link>
                </div>
                <div className="col pr-2">
                    <div className="c-searchbar__form">
                        <input
                            ref={searchFilter}
                            type="text"
                            className="c-searchbar__input"
                            placeholder="search item ..."
                            onChange={(e) => { handleDataFilter(e.target.value) }}
                        />

                        <i className="fas fa-search" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 px-2 py-3">
                    {!isEmpty(dataFilter) ? <ListItem data={dataFilter} isLazy={false} /> : (
                        <div className="c-search__notfound pt-6">
                            <h2>Search Item!</h2>
                            <p>please use another keyword!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    
};

const mapStateToProps = state => {
    return {
      dataStore: state.dataStore,
      dataAuth: state.auth
    }
}

Search.propTypes = {
    dataAuth: PropTypes.object,
    dataStore: PropTypes.object
};

export default connect(mapStateToProps)(Search);