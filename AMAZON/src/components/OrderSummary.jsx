import React from 'react';

const OrderSummary = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="bg-gray-100 p-4 rounded">
        <div className="flex justify-between mb-2">
          <span>Items:</span>
          <span>₹13,000.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery:</span>
          <span>₹50.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Total:</span>
          <span>₹13,050.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
