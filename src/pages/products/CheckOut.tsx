import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../pages/products/CheckOutFormt";

const stripePromise = loadStripe("your-publishable-key");

const Checkout = ({ amount }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <Elements stripe={stripePromise}>
        <PaymentForm amount={amount} />
      </Elements>
    </div>
  );
};

export default Checkout;
