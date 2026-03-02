import React from 'react';
import './Heritage.css';

const Heritage = () => (
    <section className="heritage" id="story">
        <div className="heritage__container">
            <div className="heritage__content">
                <h2 className="heritage__title">Where Generations Meet In A Cup Of Warmth</h2>
                <p className="heritage__text">For centuries, tea has been more than a drink—it's a connection. At LÜNE, we honor this tradition by sourcing only the finest leaves from heritage estates, ensuring that every cup tells a story of craftsmanship, soil, and sun.</p>
                <p className="heritage__text">Our blends are crafted to bring pause to your busy day, a moment of luxury that belongs entirely to you.</p>
            </div>
            <div className="heritage__visual">
                <div className="collage-item item-1">
                    <img src="/images/products/Ceremonial Matcha Green Tea Bags.png" alt="Ceremonial Matcha" />
                </div>
                <div className="collage-item item-2">
                    <img src="/images/products/Classic Earl Grey Reserve Tea Bags.png" alt="Classic Earl Grey" />
                </div>
                <div className="collage-item item-3">
                    <img src="/images/products/Darjeeling Gold Tea Bags.png" alt="Darjeeling Gold" />
                </div>
            </div>
        </div>
    </section>
);
export default Heritage;
