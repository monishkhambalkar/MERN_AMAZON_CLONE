import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const amazonLogo =
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg';

function Login() {
  const [loginContinue, setLoginContinue] = useState(false);

  const LoginUser = () => {
    const [isNotification, setIsNotification] = useState(false);
    var [loginEmail, setLoginEmail] = useState({ email: '' });

    const handleLoginEmailInput = (e) => {
      const { name, value } = e.target;
      setLoginEmail({ ...loginEmail, [name]: value });
    };

    const submitLoginEmail = (e) => {
      e.preventDefault();
      if (loginEmail.email == '') {
        setIsNotification(true);
        return false;
      }
      setLoginContinue(true);
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-sm p-6 bg-white shadow-md">
          <div className="flex justify-center mb-4">
            <img src={amazonLogo} alt="Amazon Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                name="email"
                value={loginEmail.value}
                onChange={handleLoginEmailInput}
              />
              <br />
              {isNotification && (
                <span className="text-red-500">Enter Your email</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={submitLoginEmail}
            >
              Continue
            </button>
            <p className="mt-4 text-sm text-center text-gray-600">
              By continuing, you agree to Amazon's{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Conditions of Use
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Notice
              </a>
              .
            </p>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Need help?n
              </a>
            </div>
            <div className="flex justify-center mt-6">
              <hr className="w-full border-t border-gray-300" />
              <span className="absolute px-3 text-gray-600 bg-white -mt-3">
                or
              </span>
            </div>
            <div className="mt-6 text-center">
              <Link to={'/register'}>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Create your Amazon account
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const LoginPassword = () => {
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
                value={''}
                readOnly
              />

              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setLoginContinue(false)}
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
              <Link to={'/forget-password'}>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return <>{loginContinue ? <LoginPassword /> : <LoginUser />}</>;
}

export default Login;
