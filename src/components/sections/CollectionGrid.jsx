import React from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';
import './CollectionGrid.css';

const CollectionGrid = () => (
    <section className="collection" id="shop">
        <div className="collection__container">
            <h2 className="collection__title">Discover Our Signature Tea Bag Blends</h2>
            <div className="collection__grid">
                {products.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
        </div>
    </section>
);
export default CollectionGrid;
