import React from 'react';

const PaymentMethod = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">2. Select a payment method</h2>
      <form>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="payment" className="mr-2" />
            Bank of Maharashtra ending in 1532 <span className="text-sm text-gray-500">(aditya)</span>
          </label>
          <label className="block mt-2">
            <input type="radio" name="payment" className="mr-2" />
            HDFC Bank Credit card ending in 5132 VISA <span className="text-sm text-gray-500">(vaibhav)</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="payment" className="mr-2" />
            Credit or debit card
          </label>
          <div className="ml-6 mt-2">
            <input type="text" placeholder="Card number" className="block border p-2 rounded w-full mb-2" />
            <input type="text" placeholder="Name on card" className="block border p-2 rounded w-full mb-2" />
            <input type="text" placeholder="Expiry date (MM/YY)" className="block border p-2 rounded w-full mb-2" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="payment" className="mr-2" />
            Net Banking
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="payment" className="mr-2" />
            Other UPI Apps
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="payment" className="mr-2" />
            Cash on Delivery/Pay on Delivery
          </label>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
