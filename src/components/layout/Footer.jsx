import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();

    const scrollTo = (id) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer__cta">
                <h2 className="footer__headline">Save up to 30% on luxury tea bag bundles</h2>
                <Button variant="primary" style={{ backgroundColor: '#F8E8C9', color: '#0B1A12' }} onClick={() => scrollTo('shop')}>Shop Gift Sets</Button>
            </div>
            <div className="footer__main">
                <div className="footer__brand">
                    <span className="footer__logo">LÜNE</span>
                    <p className="footer__desc">Tea, reimagined in every bag.</p>
                </div>
                <div className="footer__links">
                    <div className="footer__col"><h4>Shop</h4><ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo('shop'); }}>All Teas</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo('blends'); }}>Blends</a></li>
                    </ul></div>
                    <div className="footer__col"><h4>Company</h4><ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo('story'); }}>Our Story</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>Contact</a></li>
                    </ul></div>
                    <div className="footer__col"><h4>Follow</h4><ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul></div>
                </div>
            </div>
            <div className="footer__bottom"><p>&copy; 2026 LÜNE. All rights reserved.</p></div>
        </footer>
    );
};
export default Footer;
