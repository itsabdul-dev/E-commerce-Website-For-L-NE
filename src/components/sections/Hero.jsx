import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    const scrollToShop = () => {
        const el = document.getElementById('shop');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToBlends = () => {
        const el = document.getElementById('blends');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">Tea, Reimagined<br /><span className="hero__title--italic">in Every Bag</span></h1>
                    <p className="hero__subtitle">At LÜNE, every tea bag is crafted as a luxury ritual — calm, wellness, and flavor in perfect balance.</p>
                    <div className="hero__actions">
                        <Button variant="primary" onClick={scrollToShop}>Shop Tea Bags</Button>
                        <Button variant="secondary" onClick={scrollToBlends}>Explore Blends</Button>
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__circle"></div>
                    <img src="/images/lune-hero.png" alt="LÜNE Hero" className="hero__image" />
                </div>
            </div>
        </section>
    );
};
export default Hero;
