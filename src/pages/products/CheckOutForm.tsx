/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

// Load Stripe outside of a component’s render to avoid recreating the Stripe object on every render.
const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { item, quantity } = location.state || {};

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
    });

    if (error) {
      console.error(error);
    } else {
      // Send paymentMethod.id and item data to your backend for further processing
      console.log(paymentMethod, item, quantity);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Name: {item?.title}</p>
        <p>Price: ${item?.price * quantity}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <CardElement />
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
};

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeWrapper;
