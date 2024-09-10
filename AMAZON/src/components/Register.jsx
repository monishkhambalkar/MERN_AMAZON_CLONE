import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const amazonLogo =
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg';

const Register = () => {
  const [registerVerify, setRegisterVerify] = useState(false);

  const RegisterNumber = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img src={amazonLogo} alt="Amazon" className="w-32 mb-4" />
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">Create Account</h2>
          <form>
            <label className="block mb-2">
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="First and last name"
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Mobile number</span>
              <div className="flex">
                <select className="mt-1 block w-1/4 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>IN +91</option>
                  {/* Add more country codes here */}
                </select>
                <input
                  type="number"
                  className="mt-1 block w-3/4 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Mobile number"
                />
              </div>
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Password</span>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="At least 6 characters"
              />
            </label>
            <button
              type="submit"
              className="w-full mt-4 bg-yellow-500 text-white py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-yellow-600"
              onClick={() => setRegisterVerify(true)}
            >
              Verify Email
            </button>
            <p className="text-gray-600 text-sm mt-4">
              By creating an account or logging in, you agree to Amazon's{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Conditions of Use
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
            <p className="text-gray-600 text-sm mt-4">
              Already have an account?{' '}
              <Link to={'/login'}>
                <a href="#" className="text-blue-600 hover:underline">
                  Sign in
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  };

  const RegisterVerify = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <div className="flex justify-center mb-4">
            <img src={amazonLogo} alt="Amazon Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value="+91960791240"
                readOnly
              />
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setRegisterVerify(false)}
              >
                Change
              </a>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Sign in
              </button>
            </div>
            {/* <div className="flex items-center justify-between mb-6">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">
                Keep me signed in.{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Details
                </a>
              </span>
            </div> 
            <div className="text-center">
              <span className="text-sm text-gray-700">or</span>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button
                type="button"
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Get an OTP on your phone
              </button>
            </div>*/}
          </form>
        </div>
      </div>
    );
  };

  return <>{registerVerify ? <RegisterVerify /> : <RegisterNumber />}</>;
};

export default Register;
