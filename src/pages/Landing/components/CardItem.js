import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { isEmpty, map } from 'lodash'

import './cardItem.scss';

const CardItem = (props) => {

    const {data, isLazy} = props;

    if(!isEmpty(data)) {
        return (
            <div className="c-cardlist">
                {map(data, (item, key) => (
                    <div className="c-cardlist__item" key={`cardlist-${key}`}>
                        {(item.loved) ? <i className="fas fa-heart wishlist" /> : <i className="fas fa-heart" /> }
                        
                        <div className="c-cardlist__header">
                            <Link to={`/detail/${item.id}`}>
                                <img src={`${item.imageUrl}`} alt="" />
                            </Link>
                        </div>
                        <div className="c-cardlist__content">
                            <div className="row justify-content-between">
                                <div className="col pr-1">
                                    <Link to={`/detail/${item.id}`}>
                                        <h3 className="c-cardlist__title">{`${item.title}`}</h3>
                                    </Link>
                                    <p className="c-cardlist__price">{`${item.price}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if(isEmpty(data) && isLazy){
        return (
            <div className="c-cardlist">
                <div className="c-cardlist__placeholder" />
                <div className="c-cardlist__placeholder" />
                <div className="c-cardlist__placeholder" />
            </div>
        );
    }

    return null;

    
};

CardItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isLazy: PropTypes.bool
};

export default CardItem;