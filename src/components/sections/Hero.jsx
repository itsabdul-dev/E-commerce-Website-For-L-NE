import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import './Hero.css';
import TeapotSequence from './TeapotSequence';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
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
        <div ref={ref} className="hero-track" id="home">
            <div className="hero-sticky">
                <section className="hero">
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
                            <div className="hero__sequence"><TeapotSequence scrollYProgress={scrollYProgress} /></div>
                            <div className="leaf leaf--1"></div>
                            <div className="leaf leaf--2"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Hero;
