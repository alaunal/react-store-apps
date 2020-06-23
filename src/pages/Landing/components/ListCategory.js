import React from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { isEmpty, map } from 'lodash'

import './listCategory.scss';

const slickSettings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true
};

const ListCategory = (props) => {

    const {data, isLazy} = props;

    if(!isEmpty(data)){
        return (
            <div className="c-categories">
                <Slider {...slickSettings}>
                    {map(data, (item, key) => (
                        <div className="c-categories__items" key={`list-${key}`}>
                            <img alt="" src={`${item.imageUrl}`} />
                            <p>{`${item.name}`}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }

    if(isEmpty(data) && isLazy){
        return(
            <div className="c-categories">
                <Slider {...slickSettings}>
                    <div className="c-categories__placeholder" />
                    <div className="c-categories__placeholder" />
                    <div className="c-categories__placeholder" />
                    <div className="c-categories__placeholder" />
                    <div className="c-categories__placeholder" />
                </Slider>
            </div>
        );
    }


    return null;
    
};

ListCategory.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isLazy: PropTypes.bool
};

export default ListCategory;