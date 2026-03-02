import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartDrawer.css';

const CartDrawer = () => {
    const { items, isOpen, closeCart, removeItem, updateQty, totalPrice, totalItems } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        closeCart();
        navigate('/checkout');
    };

    return (
        <>
            <div className={`cart-overlay ${isOpen ? 'cart-overlay--visible' : ''}`} onClick={closeCart} />
            <aside className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}>
                <div className="cart-drawer__header">
                    <h3 className="cart-drawer__title">Your Cart ({totalItems})</h3>
                    <button className="cart-drawer__close" onClick={closeCart} aria-label="Close cart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="cart-drawer__empty">
                        <p className="cart-drawer__empty-text">Your cart is empty</p>
                        <p className="cart-drawer__empty-sub">Discover our signature blends</p>
                        <button className="btn btn--primary" onClick={() => { closeCart(); navigate('/'); }}>Continue Shopping</button>
                    </div>
                ) : (
                    <>
                        <div className="cart-drawer__items">
                            {items.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item__image-wrap">
                                        <img src={item.image} alt={item.name} className="cart-item__image" />
                                    </div>
                                    <div className="cart-item__details">
                                        <h4 className="cart-item__name">{item.name}</h4>
                                        <p className="cart-item__price">R{item.price}</p>
                                        <div className="cart-item__controls">
                                            <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                                            <span className="qty-display">{item.qty}</span>
                                            <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="cart-item__remove" onClick={() => removeItem(item.id)} aria-label="Remove">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-drawer__footer">
                            <div className="cart-drawer__total">
                                <span>Total</span>
                                <span className="cart-drawer__total-price">R{totalPrice}</span>
                            </div>
                            <button className="btn btn--primary cart-drawer__checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </aside>
        </>
    );
};
export default CartDrawer;
