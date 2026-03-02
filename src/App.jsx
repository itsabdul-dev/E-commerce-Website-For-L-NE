import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/ui/CartDrawer';
import Hero from './components/sections/Hero';
import FeatureSpotlight from './components/sections/FeatureSpotlight';
import Heritage from './components/sections/Heritage';
import CollectionGrid from './components/sections/CollectionGrid';
import Wellness from './components/sections/Wellness';
import Bundles from './components/sections/Bundles';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import './index.css';

const HomePage = () => (
    <main>
        <Hero />
        <FeatureSpotlight />
        <Heritage />
        <CollectionGrid />
        <Wellness />
        <Bundles />
    </main>
);

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <div className="app">
                    <Header />
                    <CartDrawer />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
