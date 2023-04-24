import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CheckPassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
      <div className="max-w-[500px] mx-auto flex items-center">
        <div className="flex flex-col items-center bg-[#fff] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-3xl p-8 md:p-18">
          <div className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84">
              <g
                stroke="#1BC462"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              >
                <circle cx="42" cy="42" r="40.5" />
                <path d="M21 27.5a.5.5 0 0 0-.5.5v28a.5.5 0 0 0 .5.5h42a.5.5 0 0 0 .5-.5V28a.5.5 0 0 0-.5-.5H21z" />
                <path d="M21 28l21 19 21-19M37.07 42.19L21 56m26-13.81L63.07 56" />
              </g>
            </svg>
          </div>
          <h2 className="text-[32px] font-inter text-gray-800 font-bold mb-8">
            Check Your Email
          </h2>
          <p className="mb-8 text-muted text-base text-txGray">
            Please check your email address for instructions to reset your
            password
          </p>
          <button
            className="tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            onClick={() => navigate('/forgotPassword')}
          >
            Resend email
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckPassword;
