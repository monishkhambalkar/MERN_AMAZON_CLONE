import React from 'react';

const OrderItem = ({ date, total, shipTo, imageSrc, productName }) => (
  <div className="bg-white rounded-md shadow-md p-4 mb-4">
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="text-gray-600">ORDER PLACED</span>
        <span className="font-bold">{date}</span>
      </div>
      <div>
        <span className="text-gray-600">TOTAL</span>
        <span className="font-bold">{total}</span>
      </div>
      <div>
        <span className="text-gray-600">SHIP TO</span>
        <span className="font-bold">{shipTo}</span>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={imageSrc} alt={productName} className="w-16 h-16 rounded-md" />
        <div className="ml-4">
          <p className="font-bold">{productName}</p>
          <div className="flex space-x-4 mt-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Buy It again</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md">View your Item</button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">View order details</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md">Invoice</button>
        </div>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md mt-2">Write a product review</button>
      </div>
    </div>
  </div>
);

const OrdersPageSample = () => (
  <div className="bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Your Orders</h1>
        <div className="flex items-center">
          <input type="text" placeholder="Search all orders" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md ml-4">Search Orders</button>
        </div>
      </div>

      {/* Replace with OrderItem components */}
      <OrderItem
        date="11 December 2022"
        total="#439.00"
        shipTo="Monish shivaji khambalkar"
        imageSrc="https://m.media-amazon.com/images/I/61wooQhTqFL._SS142.jpg"
        productName="pTron Soundster Arcade Over-Ear Wired Headphones"
      />

      <OrderItem
        date="11 December 2022"
        total="#299.00"
        shipTo="Monish shivaji khambalkar"
        imageSrc="https://m.media-amazon.com/images/I/61wooQhTqFL._SS142.jpg"
        productName="GOOD VIBES GOOD LIFE"
      />

      <OrderItem
        date="5 October 2022"
        total="₹3,099.00"
        shipTo="Monish shivaji khambalkar"
        imageSrc="https://m.media-amazon.com/images/I/61wooQhTqFL._SS142.jpg"
        productName="Zebronic Iconic AMOLED Bluetooth Calling Smartwatch"
      />
    </div>
  </div>
);

export default OrdersPageSample;
