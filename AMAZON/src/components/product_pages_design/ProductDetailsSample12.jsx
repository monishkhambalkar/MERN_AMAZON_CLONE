import React from 'react';

const ProductDetailsSample = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-4">
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/500"
            alt="Product"
            className="w-full h-auto"
          />
          <div className="flex space-x-2 mt-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <img
                key={index}
                src="https://via.placeholder.com/100"
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover border border-gray-300"
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold mb-2">
            InstaCuppa Premium French Press Coffee Makers with 4 Part Superior
            Filteration, Heat Resistant Borosilicate Glass Carafe (1000 ML with
            Protective Sleeve, Black)
          </h1>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-lg">★★★★☆</span>
            <span className="ml-2 text-gray-600">(726 ratings)</span>
          </div>
          <p className="text-xl text-gray-700 mb-2">
            <span className="line-through text-gray-500">₹2,499</span>{' '}
            <span className="font-bold text-green-600">-12% ₹2,199</span>
          </p>
          <p className="text-gray-600 mb-4">Inclusive of all taxes</p>
          <div className="border-t border-b border-gray-300 py-4 mb-4">
            <p className="text-gray-700 font-semibold mb-2">Offers</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Up to ₹200 EMI interest savings on select cards</li>
              <li>Buy 2 or more and get 5% off</li>
            </ul>
          </div>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">
            Add to Cart
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4 ml-4">
            Buy Now
          </button>
          <div className="mt-6">
            <p className="font-semibold mb-2">Size:</p>
            <div className="flex space-x-2">
              <button className="border border-gray-300 px-4 py-2 rounded">
                600 ML
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded">
                1000 ML
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded">
                1000 ML with Protective Sleeve
              </button>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold mb-2">Colour:</p>
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-black border border-gray-300"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border border-gray-300"></div>
            </div>
          </div>
          <table className="mt-6 text-gray-600">
            <tbody>
              <tr>
                <td className="pr-4 font-semibold">Brand</td>
                <td>InstaCuppa</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Colour</td>
                <td>Black</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Special Feature</td>
                <td>Filtration</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Coffee Maker Type</td>
                <td>French Press</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Filter Type</td>
                <td>Reusable</td>
              </tr>
              <tr>
                <td className="pr-4 font-semibold">Specific Uses For Product</td>
                <td>Coffee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSample;
