const Works = () => {
  return (
    <div className="w-full flex flex-wrap gap-20 pt-32" id="works">
      <div className="w-full flex flex-wrap justify-center gap-8">
        <div className="text-[#3c3c3c] text-[35px] font-bold text-center text-[#00225e]">
          How it Works
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div className="flex justify-center">
            <button
              type="button"
              className="w-36 h-12 rounded-full text-white
							bg-gradient-to-r from-red-500  via-red-500 to-yellow-500"
            >
              Step 1
            </button>
          </div>
          <div className="mt-5"></div>
          <div className="flex justify-center">
            <p className="text-gray-700 text-base">A simple and easy sign up</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div className="flex justify-center">
            <button
              type="button"
              className="w-36 h-12 rounded-full text-white
							bg-gradient-to-r from-blue-500  via-blue-500 to-white-30"
            >
              Step 2
            </button>
          </div>
          <div className="mt-5"></div>
          <div className="flex justify-center">
            <p className="text-gray-700 text-base">
              Choose minium subscription plan
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div className="flex justify-center">
            <button
              type="button"
              className="w-36 h-12 rounded-full text-white
							bg-gradient-to-r from-green-500  via-green-500 to-yellow-500"
            >
              Step 3
            </button>
          </div>
          <div className="mt-5"></div>
          <div className="flex justify-center">
            <p className="text-gray-700 text-base">
              Receive message to WhatsApp / Telegram
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[23px] font-normal">
          <div className="flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Enjoy messaging experience with the convenience of chatGPT at your
            fingertips on WhatsApp or Telegram
          </div>
        </div>
        <div className="text-[23px] font-normal">
          <div className="flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Simply add the AI bot to your contacts and start chatting
          </div>
        </div>
        <div className="text-[23px] font-normal">
          <div className="flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Impress your friends and family with stunning AI-generated images
            created and shared
          </div>
        </div>
        <div className="text-[23px] font-normal">
          <div className="flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            You have the flexibility to cancel your subscription and remove the
            AI bot contact at any time..
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
