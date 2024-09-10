import React from 'react';
import { Link } from 'react-router-dom'

const OrderItem = ({ date, total, shipTo, imageSrc, productName }) => (
  <div className="bg-white rounded-md shadow-md p-4 mb-4">
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="text-gray-600">ORDER PLACED</span>
        <span className="font-bold">{" "+ date}</span>
      </div>
      <div>
        <span className="text-gray-600">Order No.</span>
        <span className="font-bold">{"  $ORN0-774584"}</span>
      </div>
      <div>
        <span className="text-gray-600">TOTAL</span>
        <span className="font-bold">{" "+ total}</span>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={imageSrc} alt={productName} className="w-16 h-16 rounded-md" />
        <div className="ml-4">
          <p className="font-bold">{productName}</p>
          <div className="flex space-x-4 mt-2">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md">Buy It Again</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md">View Your Item</button>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/purchase-review"}>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md mt-2">Write a Product Review</button>
        </Link>
      </div>
    </div>
  </div>
);

const OrdersPage = () => (
  <div className="bg-gray-100 min-h-screen">
    <br/>
    <div className="container mx-auto p-4" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 10px' }}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Your Orders</h1>
        <div className="relative w-full md:w-auto flex flex-col md:flex-row items-center">
          <input
            type="text"
            placeholder="Search all orders"
            className="w-full md:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-yellow-500"
          />
          <span className="absolute right-10 md:right-auto top-1/2 -translate-y-1/2 md:translate-y-0 md:top-auto">

          </span>
          <button className="mt-2 md:mt-0 md:ml-4 px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600">
            Search Orders
          </button>
        </div>
      </div>
      <ul className="flex space-x-4 text-sm">
        <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer pb-1">Orders</li>
        <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer pb-1">Buy Again</li>
        <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer pb-1">Not Yet Shipped</li>
        <li className="hover:border-b-2 hover:border-orange-500 cursor-pointer pb-1">Cancelled Orders</li>
      </ul>
      <br />
    </div>

    <div className="container mx-auto px-4" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <OrderItem
        date=" 11 December 2022"
        total=" ₹439.00"
        shipTo="Monish Shivaji Khambalkar"
        imageSrc="https://m.media-amazon.com/images/I/61wooQhTqFL._SS142.jpg"
        productName="pTron Soundster Arcade Over-Ear Wired Headphones"
      />

      <OrderItem
        date=" 11 December 2022"
        total=" ₹299.00"
        shipTo="Monish Shivaji Khambalkar"
        imageSrc="https://m.media-amazon.com/images/I/61wooQhTqFL._SS142.jpg"
        productName="GOOD VIBES GOOD LIFE"
      />

      <OrderItem
        date=" 5 October 2022"
        total=" ₹3,099.00"
        shipTo="Monish Shivaji Khambalkar"
        imageSrc="https://m.media-amazon.com/images/I/61wooQhTqFL._SS142.jpg"
        productName="Zebronic Iconic AMOLED Bluetooth Calling Smartwatch"
      />
    </div>
  </div>
);

export default OrdersPage;
