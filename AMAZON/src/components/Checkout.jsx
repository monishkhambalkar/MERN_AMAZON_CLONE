import React from 'react';
import DeliveryAddress from './DeliveryAddress';
import PaymentMethod from './PaymentMethod';
import OrderSummary from './OrderSummary';
import ItemsAndDelivery from './ItemsAndDelivery';



function Checkout() {
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
        <DeliveryAddress />
        <PaymentMethod />
        <OrderSummary />
        <ItemsAndDelivery />
      </div>
    </div>
  );
}

export default Checkout;
