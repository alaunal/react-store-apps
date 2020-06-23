import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { isEmpty, map } from 'lodash';

import './main.scss';

const ListItem = (props) => {

    const {data, isLazy} = props;

    if (!isEmpty(data)) {
        return (
            <div className="c-listItem">
                {map(data, (item, key) => (
                    <div className="c-listItem__wrapper" key={`itemlist-${key}`}>
                        <Link className="row align-items-center" to={`/detail/${item.id}`}>
                            <div className="col-auto px-2">
                                <div className="c-listItem__img">
                                    <img src={`${item.imageUrl}`} />
                                </div>
                            </div>
                            <div className="col pr-2">
                                <h4 className="c-listItem__title">{`${item.title}`}</h4>
                                <p className="c-listItem__price">{`${item.price}`}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }

    if (isEmpty(data) && isLazy) {
        <div className="c-listItem">
            <div className="c-listItem__placeholder" />
            <div className="c-listItem__placeholder" />
            <div className="c-listItem__placeholder" />
        </div>
    }

    return null;
};

ListItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isLazy: PropTypes.bool
};


export default ListItem;