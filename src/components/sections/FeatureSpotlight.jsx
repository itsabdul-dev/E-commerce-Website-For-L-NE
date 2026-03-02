import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import './FeatureSpotlight.css';

const spotlightProduct = {
    id: 'arabic-lemon',
    name: 'Arabic Lemon Black Tea Bags',
    price: 129,
    category: 'Citrus & Fresh',
    description: 'Zesty lemon meets bold black tea.',
    color: '#F8E8C9',
    image: '/images/products/Arabic Lemon Black Tea Bags.png'
};

const FeatureSpotlight = () => {
    const { addItem } = useCart();

    return (
        <section className="spotlight" id="blends">
            <div className="spotlight__container">
                <h2 className="spotlight__title">Arabic Lemon Black Tea Bags</h2>
                <div className="spotlight__price">R129</div>
                <Button variant="primary" onClick={() => addItem(spotlightProduct)}>Buy Tea Bags</Button>
                <div className="spotlight__visual">
                    <div className="spotlight__circle"></div>
                    <div className="spotlight__product">
                        <img src="/images/products/Arabic Lemon Black Tea Bags.png" alt="Arabic Lemon Black Tea Bags" className="spotlight__image" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FeatureSpotlight;
