import React, { PropTypes } from 'react';

export const OffersList = ({ offers }) => (
    <section className="offers-list">
        {offers.map((item, key) =>
            <Item
                key={key}
                title={item.title}
                image={item.image}
                link={item.link}
                discount={item.discount}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
            />
        )}
    </section>
);

const Item = ({ title, image, link, discount, oldPrice, newPrice }) => (
    <a href={link} className="item">
        <img className="image" src={image} alt={title} />

        <div className="content">
            <div className="title">{title}</div>

            <div className="prices">
                <div className="old">{oldPrice}</div>
                <div className="new">{newPrice}</div>
            </div>

            <div className="discount">{discount}</div>

        </div>
    </a>
);

OffersList.propTypes = {
    offers: PropTypes.array,
};

Item.propTypes = {
    discount: PropTypes.string,
    oldPrice: PropTypes.string,
    newPrice: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
};
