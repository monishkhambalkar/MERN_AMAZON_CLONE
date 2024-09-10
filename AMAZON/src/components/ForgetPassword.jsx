import React, { useState } from 'react';

const amazonLogo =
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg';

function ForgetPassword() {
  const [isContinue, setIsContinue] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const ForgetPasswordUser = () => {
    const [emailChangePass, setEmailChangePass] = useState({
      email: '',
    });

    const emailForChangePass = (e) => {
      const { name, value } = e.target;
      setEmailChangePass({ ...emailChangePass, [name]: value });
    };

    console.log(emailChangePass);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <div className="flex justify-center mb-4">
            <img src={amazonLogo} alt="Amazon Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Password assistance
          </h2>
          <p>
            Enter the email address or mobile associated with your Amazon
            account.
          </p>
          <br />
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="email"
                name="email" // added name attribute
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={emailChangePass.email}
                onChange={emailForChangePass}
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={() => setIsContinue(true)}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ForgetPasswordEmailVerify = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <div className="flex justify-center mb-4">
            <img src={amazonLogo} alt="Amazon Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Enter Email OTP
          </h2>
          <p>Please check you Email for opt</p>
          <br />
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter OTP"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={() => setIsVerified(true)}
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ForgetPasswordNewPassword = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <div className="flex justify-center mb-4">
            <img src={amazonLogo} alt="Amazon Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Enter New Password
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter OTP"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Re-Enter Password
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter OTP"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={() => setIsVerified(true)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  let ComponentToRender;
  if (isVerified) {
    ComponentToRender = <ForgetPasswordNewPassword />;
  } else {
    if (isContinue) {
      ComponentToRender = <ForgetPasswordEmailVerify />;
    } else {
      ComponentToRender = <ForgetPasswordUser />;
    }
  }

  return <>{ComponentToRender}</>;
}

export default ForgetPassword;
