import icon from "src/assets/img/check2.png";
import React, { useState, useEffect } from "react";

const Pricing = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  return message ? (
    <Message message={message} />
  ) : (
    <div className="w-full flex flex-wrap gap-20 pt-32" id="pricing">
      <div className="w-full flex flex-wrap justify-center gap-8">
        <div className="text-[#3c3c3c] text-[35px] font-bold text-center text-[#00225e]">
          PRICING & SUBSCRIPTION PLANS
        </div>
        <div className="w-full text-center text-[25px] text-[#3c3c3c] font-normal">
          Take advantage of our highly afforadable subscription plans, which
          offer unbeatable value compared to other providers.
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="relative col-span-12 md:col-span-12 lg:col-span-4 rounded-lg shadow-lg bg-white justify-center text-center">
          <div className="bg-orange-100  border-orange-500 text-orange-700 p-4 h-48">
            <span className="bg-pink-400 text-white font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-pink-900 dark:text-pink-300 absolute -top-4 -right-2">
              Popular
            </span>
            <p className="font-bold text-[25px]">Awesome</p>
            <p>
              Empower your instant resopnses with AI by taking control and
              maximizing your experience through image generation and chat ono
              WhatsApp and Telegram Pro
            </p>
          </div>
          <div className="p-6 h-80">
            <h5 className="text-xl font-medium mb-6">£5/$6/€6/Rs.499/month</h5>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">
                Send 60,000 words/mo
              </p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">
                Generate 100 + images
              </p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">Qucik rersponses</p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">Cancel anytime</p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">
                Accurate summarized response
              </p>
            </div>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            <form action="/create-checkout-session" method="POST">
              <button
                type="button"
                className=" inline-block px-6 py-2.5 rounded-[25px] bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out px-20 "
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4 rounded-lg shadow-lg bg-white justify-center text-center">
          <div className="bg-gray-200  border-blue-500 text-blue-700 p-4 h-48">
            <p className="font-bold text-[30px]">Cool</p>
            <p>
              Maximize your instatnt response capabilities with AI by taking
              ownership and fully utilizing the technology on WhatsApp and
              Telegram
            </p>
          </div>
          <div className="p-6 h-80">
            <h5 className="text-gray-900 text-xl font-medium mb-6">
              £3/$4/€4/Rs.249/month
            </h5>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">
                Send 60,000 words/month
              </p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">Quick resopnses</p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">Cancel anytime</p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">
                Accurate summarized response
              </p>
            </div>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            <form action="/create-checkout-session" method="POST">
              <button
                type="button"
                className=" inline-block px-6 py-2.5 rounded-[25px] bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out px-20 "
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4 rounded-lg shadow-lg bg-white justify-center text-center">
          <div className="bg-gray-200  border-yellow-500 text-yellow-700 p-4 h-48">
            <p className="font-bold text-[30px]">Creative</p>
            <p>
              Maximize your instant ressponse capabilities with AI by taking
              ownership and fully utilizing the technology on WhatsApp and
              Telegram
            </p>
          </div>
          <div className="p-6 h-80">
            <div className="text-gray-900 text-xl font-medium mb-6">
              £3/$4/€4/Rs.249/month
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">
                Generate 100+ images / month
              </p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">Quick responses</p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">Cancel anytime</p>
            </div>
            <div className="flex justify-start">
              <img src={icon} alt="Logo" />
              <p className="text-gray-700 text-base mb-4">
                Accurate summarized response
              </p>
            </div>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            <form action="/create-checkout-session" method="POST">
              <button
                type="button"
                className=" inline-block px-6 py-2.5 rounded-[25px] bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out px-20 "
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
