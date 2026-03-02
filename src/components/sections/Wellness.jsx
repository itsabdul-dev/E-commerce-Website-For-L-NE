import React from 'react';
import './Wellness.css';

const benefits = [
    { title: 'Antioxidant Rich', icon: '🌿', desc: 'Packed with natural protective compounds from carefully selected tea gardens.' },
    { title: 'Calm & Focus', icon: '✨', desc: 'L-Theanine to promote relaxed alertness and mindful presence.' },
    { title: 'Sustainably Sourced', icon: '🌍', desc: 'Ethically harvested from family estates with regenerative practices.' },
];

const Wellness = () => (
    <section className="wellness">
        <div className="wellness__container">
            <h2 className="wellness__headline">Wellness in Every Sip</h2>
            <div className="wellness__grid">
                {benefits.map((b, i) => (
                    <div key={i} className="wellness__card">
                        <div className="wellness__icon">{b.icon}</div>
                        <h3 className="wellness__title">{b.title}</h3>
                        <p className="wellness__desc">{b.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default Wellness;
