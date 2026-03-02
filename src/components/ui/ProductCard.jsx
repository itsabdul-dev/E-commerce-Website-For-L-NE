import React from 'react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addItem } = useCart();

    return (
        <div className="product-card">
            <div className="product-card__visual" style={{ '--bg-color': product.color }}>
                <div className="product-card__circle"></div>
                <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
            </div>
            <div className="product-card__info">
                <h3 className="product-card__title">{product.name}</h3>
                <p className="product-card__desc">{product.description}</p>
                <div className="product-card__bottom">
                    <span className="product-card__price">R{product.price}</span>
                    <button className="btn btn--secondary btn--pill add-btn" onClick={() => addItem(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
