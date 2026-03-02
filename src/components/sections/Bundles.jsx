import React from 'react';
import Button from '../ui/Button';
import './Bundles.css';

const Bundles = () => (
    <section className="bundles">
        <div className="bundles__container">
            <h2 className="bundles__headline">Curated Tea Bag Collections</h2>
            <div className="bundles__grid">
                <div className="bundle-card bundle-card--dark">
                    <div className="bundle-card__content">
                        <h3 className="bundle-card__title">Evening Calm Tea Bag Box Set</h3>
                        <p className="bundle-card__desc">A collection of our most soothing herbal blends for the perfect night's rest.</p>
                        <div className="bundle-card__price">R299</div>
                        <Button variant="primary" className="btn--pill" style={{ backgroundColor: '#F8E8C9', color: '#0B1A12' }}>Shop Bundle</Button>
                    </div>
                    <div className="bundle-card__visual">
                        <img src="/images/products/Evening Calm Tea Bag Box Set.png" alt="Evening Calm Tea Bag Box Set" className="bundle-card__image" />
                    </div>
                </div>
                <div className="bundle-card bundle-card--light">
                    <div className="bundle-card__content">
                        <h3 className="bundle-card__title">Matcha &amp; Energy Tea Bag Collection</h3>
                        <p className="bundle-card__desc">Revitalize your mornings with our premium matcha energy set.</p>
                        <div className="bundle-card__price">R349</div>
                        <Button variant="secondary" className="btn--pill">Shop Bundle</Button>
                    </div>
                    <div className="bundle-card__visual">
                        <img src="/images/products/Matcha & Energy Tea Bag Collection.png" alt="Matcha & Energy Tea Bag Collection" className="bundle-card__image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default Bundles;
