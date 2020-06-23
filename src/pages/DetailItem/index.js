import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { isEmpty, map } from 'lodash';

import { setdataPurchase } from '../../actions/dataPurchase';

import Nav from '../../components/Nav';

import './main.scss';

const detailData = (data, id) => {
    let rawData = {};
    map(data, (item) => {
        if(item.id  === id){
            rawData = item;
        }
    });

    return rawData;
};

const DetailItem = (props) => {

    const { 
        dataAuth, 
        dataStore, 
        match, 
        dataPurchase, 
        setdataPurchase,
        history 
    } = props;

    const dataItems = !isEmpty(dataStore.productPromo) ? detailData(dataStore.productPromo, match.params.id) : {};
    const dataItemRaw = !isEmpty(dataStore.productPromo) ? dataStore.productPromo : {};

    const addItemPurchase = id => {

        let CurrentData = dataPurchase;

        map(dataItemRaw, (item) => {
            if(item.id === id){
                CurrentData.push(item);
            }
        });

        setdataPurchase(CurrentData);
        history.push('/purchase');
    };

    if(!dataAuth.isLogin) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="c-detail">
            <Nav headerTitle="Detail Item" />

            <div className="row">
                <div className="col-12 px-2 py-3">
                    <div className="c-detail__header mb-3">
                        <img src={`${dataItems.imageUrl}`} />
                        <i className="fas fa-share-alt" />
                    </div>
                    <div className="c-detail__content">
                        <div className="row justify-between align-items-center mb-2">
                            <div className="col"><h3 className="c-detail__title">{`${dataItems.title}`}</h3></div>
                            <div className="col-auto px-1">
                                {(dataItems.loved) ? <i className="fas fa-heart wishlist" /> : <i className="fas fa-heart" /> }
                            </div>
                            
                        </div>

                        <div className="row mb-2">
                            <div className="col-12 c-detail__desc">
                            {`${dataItems.description}`}
                            </div>
                        </div>

                        <div className="row justify-between align-items-center">
                            <div className="col"><h3 className="c-detail__price">{`${dataItems.price}`}</h3></div>
                            <div className="col-auto pl-1">
                                <button className="c-detail__btn" type="button" onClick={(e) => addItemPurchase(dataItems.id)}>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
      dataStore: state.dataStore,
      dataPurchase: state.dataPurchase,
      dataAuth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
    setdataPurchase: (data) => { dispatch(setdataPurchase(data)) }
});

DetailItem.propTypes = {
    dataAuth: PropTypes.object,
    dataStore: PropTypes.object,
    setdataPurchase: PropTypes.func,
    dataPurchase: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailItem);