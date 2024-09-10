import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import Search from './Search';

export const NavBar = () => {
  const cart = useSelector((state) => state.cart.productNumber);
  const [isHovered, setIsHovered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header className="min-w-[1000px] ">
      <div className="flex text-white bg-amazonClone h-[60px] ">
        <div className="flex items-center m-4">
          <Link to={'/'}>
            <img
              className="h-[35px] w-[100px] m-2"
              src="../images/amazon.png"
              alt=""
            />
          </Link>

          <div className="pr-4 pl-4 ">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">United Kingdom</div>
          </div>
        </div>
        <div className="flex grow items-center ">
          <Search />
        </div>
        <div className="flex items-center">
          <div
            className="pr-4 pl-4 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="text-xs xl:text-sm">
              Hello, {isLogin ? 'Monish' : 'Sign in'}
            </div>
            <div className="text-sm xl:text-base font-bold">
              Accounts and Lists
            </div>
          </div>
          <Link to={'/my-order-return'}>
            <div className="pr-4 pl-4 ">
              <div className="text-xs xl:text-sm">Returns</div>
              <div className="text-sm xl:text-base font-bold">& Orders</div>
            </div>
          </Link>
        </div>
        <Link to={'/cart'}>
          <div className="flex pr-3 pl-3 m-4">
            <ShoppingCartIcon className="h-[40px]" />
            <div className="relative">
              <div className="absolute right-[8px] font-bold m-1 text-orange-400">
                {cart}
              </div>
            </div>
            <div className="mt-7 text-xs xl:text-sm font-bold ">Cart</div>
          </div>
        </Link>
      </div>
      <div className="flex gap-10 bg-amazonClone-light_blue text-white p-3 pl-6 space-x-3 text-xs xl:text-sm">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Card</div>
        <div>Sell</div>
      </div>

      {/* // USER AND ACCOUNT MODEL */}

      {isLogin
        ? isHovered && (
            <div
              className="absolute top-14 right-0 w-100 p-4 bg-white border border-gray-300 shadow-lg z-50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex justify-between">
                <div className="font-bold">Buy it again</div>
                <div className="text-sm text-gray-500 mr-14">
                  Manage Profiles
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="font-medium">Your Lists</div>
                  <div className="font-medium mr-14">Your Account</div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="text-sm text-gray-600 mr-6">
                    <ul>
                      <Link to={'/wish-list'}>
                        <li className="text-base">Create a Wish List</li>
                      </Link>
                      <li className="text-base">Furniture Wishlist</li>
                      <li className="text-base">device Wishlist</li>
                      <li className="text-base">Discover Your Style</li>{' '}
                      {/*Fashion Cloth*/}
                      <li className="text-base">Explore Showroom</li>{' '}
                      {/*All Products*/}
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600 ml-6">
                    <ul>
                      <Link to={'/my-order-return'}>
                        <li className="text-base">Your Orders</li>
                      </Link>
                      <Link to={'/wish-list'}>
                        <li className="text-base">Your Wish List</li>
                      </Link>
                      <li className="text-base">Keep shopping for</li>
                      {/* in keep shopping for show all product which he buy yet */}
                      <li className="text-base">Your Recommendations</li>{' '}
                      {/* for Recommendations add all product of category which he buy yet */}
                      <hr />
                      <li className="text-base">Help / Chat</li>
                      <li className="text-base">Sign Out</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        : isHovered && (
            <div
              className="absolute top-14 right-28 w-100 p-4 bg-white border border-gray-300 shadow-lg z-50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="mt-4">
                <div className="flex justify-between">
                  <Link to={'/login'}>
                    <button class="w-60 bg-yellow-400 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
                      Sign In
                    </button>
                  </Link>
                </div>
                <div className="flex justify-between mt-2">
                  New customer?{' '}
                  <Link to={'/register'}>
                    <a href="#" class="text-blue-500 hover:text-blue-700">
                      Start here.
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
    </header>
  );
};

export default NavBar;
