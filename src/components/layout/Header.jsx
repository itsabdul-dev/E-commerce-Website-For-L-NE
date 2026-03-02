import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { openCart, totalItems } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (hash) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <a href="/" className="header__logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>LÜNE</a>
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>Home</a></li>
                        <li><a href="#shop" onClick={(e) => { e.preventDefault(); handleNav('shop'); }}>Shop</a></li>
                        <li><a href="#blends" onClick={(e) => { e.preventDefault(); handleNav('blends'); }}>Blends</a></li>
                        <li><a href="#story" onClick={(e) => { e.preventDefault(); handleNav('story'); }}>Story</a></li>
                    </ul>
                </nav>
                <div className="header__utilities">
                    <button className="icon-btn" aria-label="Search">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </button>
                    <button className="icon-btn cart-icon-btn" aria-label="Cart" onClick={openCart}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>
                        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                    </button>
                    <Button variant="primary" className="btn--pill" onClick={() => navigate('/contact')}>Contact</Button>
                </div>
            </div>
        </header>
    );
};
export default Header;
