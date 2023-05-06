import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';
import * as firebase from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const Sign = (props) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const initialize = () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyDzqZdoLP5tIoYIW08YKJyj48d5Okh5Aa8',
      authDomain: 'gpt3-6a41f.firebaseapp.com',
      projectId: 'gpt3-6a41f',
      storageBucket: 'gpt3-6a41f.appspot.com',
      messagingSenderId: '136930218738',
      appId: '1:136930218738:web:516fdb6c9e852f6d7ef66b',
      measurementId: 'G-59Z79PQ9RB',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
  };

  const handleGoogleLogin = async () => {
    if (firebase.getApps().length === 0) {
      initialize();
    }

    getAuth().setPersistence(browserLocalPersistence);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    const auth = getAuth();

    const loginResult: any = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(loginResult);
    if (!credential) throw 'Missing credentials!';

    if (credential.accessToken) {
      //save google user info
      const db = getDatabase();
      set(ref(db, `users/${loginResult.user.uid}`), {
        email: loginResult.user.email,
        access_token: loginResult.user.accessToken,
        created_date: new Date().toString(),
        update_date: new Date().toString(),
        type: 1,
      });

      localStorage.setItem('email', loginResult.user.email);
      localStorage.setItem('loggedIn', 'true');

      navigate('/Welcome');
    }
  };

  return (
    <form className="w-full flex gap-8 pt-10" id="Sign">
      {/* <div className="w-full flex flex-col justify-center gap-10">
        <div className="lg:px-48 text-[#3c3c3c] text-[35px] font-bold text-center text-[#00225e] gap-8">
          Sign up
        </div>
        <div className="relative w-auto my-6 mx-auto max-w-3xl absolute margin-auto">
          <div className="rounded overflow-visible shadow-lg p-8">
            <label
              htmlFor="fullname"
              placeholder="Email"
              className="w-full mt-4"
            >
              Full name
              <span className="text-red-500 dark:text-gray-500">*</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
              className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />
            <label htmlFor="email" className="w-full mt-4">
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />
            <label htmlFor="Phone_number" className="w-full mt-4">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Phone_number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />
            <div className="flex flex-row justify-between pt-6 px-2">
              <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-10">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="px-20 mt-10 py-2 h-10 bg-blue-500 text-gray-50 font-medium rounded-[30px] text-lg flex flex-row items-center"
                >
                  Submit
                </button>
                <div className="grid grid-rows-2 gap-8">
                  <FacebookLoginButton onClick={() => alert('Hello')} />
                  <GoogleLoginButton onClick={() => handleGoogleLogin()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </form>
  );
};

export default Sign;
