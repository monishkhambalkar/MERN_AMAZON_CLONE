import React from 'react';

const products = [
  {
    id: 1,
    title:
      'STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad, Non-Slip Rubber Base...',
    price: '₹149.00',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title:
      'Tizum 2.4 GHz Retro Wireless Keyboard & Optical Mouse Combo with 2-in-1 Nano...',
    price: '₹1,199.00',
    imgSrc: 'https://via.placeholder.com/150',
  },
];

const ProductList = () => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">whatch</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex items-center space-x-4 mb-4">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-24 h-24 object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded">
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const WishList = () => {
  return (
    <div
      className="min-h-screen "
      style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 10px' }}
    >
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Lists</h1>
          <div className="flex items-center space-x-4">
            <button className="text-blue-500">Your Friends</button>
            <button className="text-gray-500">Create a List</button>
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-6">
        <ProductList />
      </main>
    </div>
  );
};

export default WishList;
