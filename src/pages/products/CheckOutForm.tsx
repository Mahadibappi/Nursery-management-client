/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M6eOGCnxyBmnrrVLNr4LHEpniAkZ1FhXx1cjpSZ5p6yVqQxOgF4HPGbqBs7FhDHHZFSOERMRGoOP61VqNAqa1ix008QRtthlG"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { item, quantity } = location.state || {};
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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
      console.log(paymentMethod, item, quantity);
      setPaymentSuccess(true); // Set payment success state to true
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl m-20 p-10">
        <div className="md:flex">
          <div className="w-full p-4">
            {paymentSuccess && (
              <div
                className="bg-green-100 border-l-4 border-green-500 text-green-900 p-4 mb-4"
                role="alert"
              >
                <p className="font-bold">Payment successful!</p>
                <p>Your payment has been processed.</p>
              </div>
            )}
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Payment</h2>
            </div>
            <div className="mb-4 tex-lg">
              <p className=" mb-2 text-black">Name: {item?.title}</p>
              <p className=" mb-2 text-black">
                Price: ${item?.price * quantity}
              </p>
              <p className=" text-black">Quantity: {quantity}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Card Details
              </label>
              <div className="mt-1">
                <CardElement className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={!stripe}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
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
