import React, { useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailOrPhone.trim() !== "") {
      setShowSuccess(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <Link to="/"><img src="/disney-logo.png" alt="Disney" /></Link>
      </div>

      <h2>Lots of shopping privileges and benefits await you</h2>
      <p className="sub-title">Exclusive benefits for you when joining Disney account</p>

      <div className="benefits">
        <div className="benefit-item">
          <img src="https://i.pinimg.com/736x/86/ab/8e/86ab8ec4bd0c09f0a832ae8d04fd6472.jpg" alt="voucher" />
          <span>DISCOUNT VOUCHER</span>
        </div>
        <div className="benefit-item">
          <img src="https://i.pinimg.com/736x/d2/01/a4/d201a4e368e776e425c30261201bc74c.jpg" alt="gift" />
          <span>EXCLUSIVE GIFT</span>
        </div>
        <div className="benefit-item">
          <img src="https://i.pinimg.com/736x/4b/f5/f0/4bf5f0f7b288df34bea35287317a7656.jpg" alt="cashback" />
          <span>CASHBACK OFFER</span>
        </div>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email address or phone number <span>*</span></label>
        <input
          type="text"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />
        <button type="submit" className="login-btn"><b>SEND REQUEST</b></button>
      </form>

      {showSuccess && (
        <div className="success-popup">
          <p>We had sent a new password for your phone number.<br />
            Please try login again!</p>
          <button className="popup-btn" onClick={() => { setShowSuccess(false); navigate("/login"); }}>OK</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
