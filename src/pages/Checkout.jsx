import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <div className="checkout-page">
                <div className="checkout__success">
                    <div className="success-icon">✓</div>
                    <h2>Thank You for Your Order</h2>
                    <p>Your luxury tea selection is on its way. We'll send a confirmation to your email shortly.</p>
                    <button className="btn btn--primary" onClick={() => { clearCart(); navigate('/'); }}>Return Home</button>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="checkout-page">
                <div className="checkout__empty">
                    <h2>Your cart is empty</h2>
                    <p>Add some luxury teas before checking out.</p>
                    <button className="btn btn--primary" onClick={() => navigate('/')}>Shop Now</button>
                </div>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="checkout-page">
            <div className="checkout__container">
                <h1 className="checkout__headline">Checkout</h1>
                <div className="checkout__grid">
                    {/* Form */}
                    <form className="checkout__form" onSubmit={handleSubmit}>
                        <h3 className="form-section-title">Contact Information</h3>
                        <div className="form-row">
                            <div className="form-group"><label>First Name</label><input type="text" required placeholder="Jane" /></div>
                            <div className="form-group"><label>Last Name</label><input type="text" required placeholder="Doe" /></div>
                        </div>
                        <div className="form-group"><label>Email</label><input type="email" required placeholder="jane@example.com" /></div>
                        <div className="form-group"><label>Phone</label><input type="tel" placeholder="+27 123 456 789" /></div>

                        <h3 className="form-section-title">Shipping Address</h3>
                        <div className="form-group"><label>Address</label><input type="text" required placeholder="123 Main Street" /></div>
                        <div className="form-row">
                            <div className="form-group"><label>City</label><input type="text" required placeholder="Cape Town" /></div>
                            <div className="form-group"><label>Postal Code</label><input type="text" required placeholder="8001" /></div>
                        </div>
                        <div className="form-group"><label>Province</label>
                            <select required>
                                <option value="">Select province</option>
                                <option>Western Cape</option><option>Gauteng</option><option>KwaZulu-Natal</option>
                                <option>Eastern Cape</option><option>Free State</option><option>Limpopo</option>
                                <option>Mpumalanga</option><option>North West</option><option>Northern Cape</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn--primary checkout__submit">Place Order — R{totalPrice}</button>
                    </form>

                    {/* Order Summary */}
                    <div className="checkout__summary">
                        <h3 className="form-section-title">Order Summary</h3>
                        <div className="summary-items">
                            {items.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="summary-item__img-wrap">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="summary-item__info">
                                        <span className="summary-item__name">{item.name}</span>
                                        <span className="summary-item__qty">x{item.qty}</span>
                                    </div>
                                    <span className="summary-item__price">R{item.price * item.qty}</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-divider" />
                        <div className="summary-row"><span>Subtotal</span><span>R{totalPrice}</span></div>
                        <div className="summary-row"><span>Shipping</span><span>Free</span></div>
                        <div className="summary-divider" />
                        <div className="summary-row summary-row--total"><span>Total</span><span>R{totalPrice}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;
