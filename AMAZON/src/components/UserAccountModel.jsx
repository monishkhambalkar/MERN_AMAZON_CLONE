import React, { useState } from 'react';

const UserAccountModel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center mt-10">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="p-4 bg-gray-200 rounded cursor-pointer"
      >
        Hover over me
      </div>
      
      {isHovered && (
        <div className="absolute top-16 left-50 w-80 p-4 bg-white border border-gray-300 shadow-lg" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          <div className="flex justify-between">
            <div className="font-bold">Buy it again</div>
            <div className="text-sm text-gray-500">Manage Profiles</div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <div className="font-medium">Your Lists</div>
              <div className="font-medium">Your Account</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-sm text-gray-600">
                <ul>
                  <li>Create a Wish List</li>
                  <li>Wish from Any Website</li>
                  <li>Baby Wishlist</li>
                  <li>Discover Your Style</li>
                  <li>Explore Showroom</li>
                </ul>
              </div>
              <div className="text-sm text-gray-600">
                <ul>
                  <li>Your Account</li>
                  <li>Your Orders</li>
                  <li>Your Wish List</li>
                  <li>Keep shopping for</li>
                  <li>Your Recommendations</li>
                  <li>Your Prime Membership</li>
                  <li>Your Prime Video</li>
                  <li>Your Subscribe & Save Items</li>
                  <li>Memberships & Subscriptions</li>
                  <li>Your Seller Account</li>
                  <li>Content Library</li>
                  <li>Devices</li>
                  <li>Your Free Amazon Business Account</li>
                  <li>Switch Accounts</li>
                  <li>Sign Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAccountModel;
