import React, { useState } from "react";
import "./SubscriptionBox.css";

const SubscriptionBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subscription-box minimal-horizontal">
      <h3 className="subscription-title minimal">Stay updated with our news</h3>
      {submitted ? (
        <div className="subscription-success">Thank you! Your subscription has been received.</div>
      ) : (
        <form className="subscription-form horizontal" onSubmit={handleSubmit}>
          <input
            type="email"
            className="subscription-input minimal"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="subscription-button minimal">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default SubscriptionBox; 