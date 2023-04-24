import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { notification, Spin } from 'antd';

import authServices from 'src/services/authServices';
import Loading from 'src/components/Icon/Loader';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      token: id,
      password: e.target.password.value,
    };

    console.log(data);
    authServices
      .resetPassword(data)
      .then((result) => {
        console.log(result);
        setLoading(false);
        notification.success({
          description: result.data.message,
          message: '',
          duration: 2,
        });
        setTimeout(() => {
          navigate('/login');
        }, 500);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        notification.error({
          description: error.response.data.message,
          message: '',
          duration: 2,
        });
      });
  };

  return (
    <div className="grid w-full h-screen bg-purple-200 grid-cols-1 px-5 md:px-0 lg:grid-cols-2">
      <div className="hidden w-full rounded-br-xxl bg-gradient-to-r from-green-200 to-green-600 px-20 lg:block">
        <div className="relative w-full pt-20 ">
          <div className="mt-44 mb-3 flex"></div>
          <div className="text-white text-6xl font-bold">
            Welcome to Login Page!
          </div>
          <div className="mt-7 text-2xl font-semibold text-white">
            Use the most powerful AI tools in the world to accelerate your
            learning, improve your understanding and test yourself.
          </div>
        </div>
      </div>
      <div className="flex m-auto w-full max-w-lg">
        <form
          className="w-full flex flex-col items-center bg-[#fff] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-3xl p-8 md:p-18"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-8 text-4xl font-semibold text-txBlack">
            Reset Password
          </h1>
          <p className="mb-8 text-base text-txGray">
            Enter your new password below
          </p>
          <input
            name="password"
            autoComplete="password"
            type="password"
            className="w-full px-8 py-4 mb-8 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            placeholder="New Password"
            required
          />
          <button
            className="tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            type="submit"
            disabled={loading}
          >
            {!loading ? (
              <>
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Reset Password</span>
              </>
            ) : (
              <Spin indicator={Loading} style={{ color: 'white' }} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
