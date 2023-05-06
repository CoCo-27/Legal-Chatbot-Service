import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { notification, Spin } from 'antd';

import auth from '../FirebaseConfig';
import authServices from 'src/services/authServices';
import Loading from 'src/components/Icon/Loader';
import './Register.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    auth.setPersistence(browserLocalPersistence);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    const loginResult = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(loginResult);
    if (!credential) throw new Error('Missing credentials!');
    notification.success({
      description: 'Register Success',
      message: '',
    });
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    authServices
      .authRegister(data)
      .then((result) => {
        notification.success({
          description: 'Register Success',
          message: '',
        });
        setLoading(false);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          notification.error({
            description: `${error.response.data.message}`,
            message: '',
          });
        } else {
          notification.error({
            description: 'Server Error',
            message: '',
          });
        }
      });
  };

  return (
    <div className="grid w-full h-screen grid-cols-1 px-5 md:px-0 lg:grid-cols-2">
      <div className="hidden w-full rounded-br-xxl bg-gradient-to-br from-blue-600 to-blue-200 px-20 lg:block">
        <div className="relative w-full pt-20 ">
          <div className="mt-44 mb-3 flex"></div>
          <div className="text-white text-6xl font-bold">
            Welcome to Sign Up Page!
          </div>
          <div className="mt-7 text-2xl font-semibold text-white">
            Use the most powerful AI tools in the world to accelerate your
            learning, improve your understanding and test yourself.
          </div>
        </div>
      </div>
      <div className="m-auto w-full max-w-3xl p-8">
        <div>
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            alt=""
            className="w-32 mx-auto"
          />
        </div>
        <div className="mt-12 flex flex-col items-center">
          <form onSubmit={handleRegister}>
            <h1 className="mb-3 text-2xl text-black xl:text-3xl font-extrabold">
              Sign Up
            </h1>
            <p className="mb-3 text-xl text-txGray">Welcome to ChatGPT 4!</p>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  className="w-full max-w-sm font-bold shadow-sm hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  onClick={() => handleGoogleLogin()}
                >
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or login in with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-sm">
                <input
                  id="firstName"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  type="first_name"
                  placeholder="First Name"
                />
                <input
                  id="lastName"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="last_name"
                  placeholder="Last Name"
                />
                <input
                  id="email"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                />
                <input
                  id="password"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-blue-300 text-gray-100 w-full py-4 rounded-lg hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
                      <span className="ml-3">Sign Up</span>
                    </>
                  ) : (
                    <Spin indicator={Loading} style={{ color: 'white' }} />
                  )}
                </button>
              </div>
            </div>
            <p className="mt-3 text-muted text-lg text-txGray">
              Have an account?{' '}
              <a className="font-medium text-green-400 text-lg" href="/login">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
