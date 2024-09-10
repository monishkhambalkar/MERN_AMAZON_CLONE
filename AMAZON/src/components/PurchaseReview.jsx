import { useState } from 'react';


function PurchaseReview() {
  const [headline, setHeadline] = useState('');
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const handleHeadlineChange = (event) => {
    setHeadline(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Review</h1>
      <div className="flex items-center mb-4">
        <img src="/path/to/headphone.png" alt="Headphone" className="w-8 h-8" />
        <p className="ml-2">pTron Soundster Arcade Over-Ear Wired Headphones, Ergonomic Headset with Mic, Adjustable...</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Overall rating</h2>
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">☆☆☆☆☆</span>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Rate features</h2>
        <div className="mb-2">
          <label htmlFor="sound-quality" className="block text-gray-700 text-sm font-bold mb-2">Sound quality</label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">☆☆☆☆☆</span>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="comfort" className="block text-gray-700 text-sm font-bold mb-2">Comfort</label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">☆☆☆☆☆</span>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="value-for-money" className="block text-gray-700 text-sm font-bold mb-2">Value for money</label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">☆☆☆☆☆</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Add a headline</h2>
        <input 
          type="text" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="What's most important to know?"
          value={headline}
          onChange={handleHeadlineChange} 
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Add a photo or video</h2>
        <p className="text-gray-600 mb-2">Shoppers find images and videos more helpful than text alone.</p>
        <div className="flex items-center justify-center border rounded w-full py-4 px-4">
          <span className="text-gray-500 text-3xl">+ </span>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Add a written review</h2>
        <textarea 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          placeholder="What did you like or dislike? What did you use this product for?"
          value={review}
          onChange={handleReviewChange} 
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Choose your public name</h2>
        <p className="text-gray-600 mb-2">This is how you'll appear to other customers</p>
        <input 
          type="text" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange} 
        />
      </div>
    </div>
  );
}

export default PurchaseReview;