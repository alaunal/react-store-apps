import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { isEmpty, map } from 'lodash';
import { Helmet } from 'react-helmet';

import Nav from '../../components/Nav';
import ListItem from '../../components/ListItem';

import './main.scss';

const dataWishlist = (data) => {
        let rawData = [];
        map(data, (item) => {
            if(item.loved){
                rawData.push(item);
            }
        });

    return rawData;
}

const Profile = (props) => {

    const { dataAuth, dataStore } = props;
    const dataItems = !isEmpty(dataStore.productPromo) ? dataWishlist(dataStore.productPromo) : [];

    if(!dataAuth.isLogin) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="c-profile">
            <Helmet>
                <title>Profile Page - Store Apps</title>
                <meta
                name="description"
                content="A React.js Boilerplate application homepage storeApps | Profile page"
                />
            </Helmet>
            <Nav headerTitle="Profle" />
            <div className="c-profile__content">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <div className="c-profile__avatar">
                            <i className="fas fa-user" />
                        </div>
                    </div>
                    <div className="col pl-2">
                        <h3 className="c-profile__name">{dataAuth.name}</h3>
                        <p className="c-profile__email">{dataAuth.email}</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 px-2 py-3">
                    <h3 className="c-profile__title mb-2">Wishlist</h3>
                    <ListItem data={dataItems} isLazy={true} />
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

Profile.propTypes = {
    dataAuth: PropTypes.object,
    dataStore: PropTypes.object
};

export default connect(mapStateToProps)(Profile);