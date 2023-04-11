import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import Modal from "src/components/Card";

type Props = {
  menu: any;
};

const Footer = ({ menu }: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="w-full h-full rounded-t-2xl ">
        <div
          className="h-auto flex justify-center  items-top backdrop-blur-[4px] border-t-[#353535]"
          id="footer"
        >
          <div
            className="cursor-pointer text-black font-bold uppercase text-sm px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => setShowModal(true)}
          >
            © 2023 ChatGPT 4 Technology, Inc.
          </div>
        </div>
        {showModal ? (
          <div>
            <div className="justify-center items-center flex fixed inset-4 z-50 outline-none focus-outline-none">
              <div className="relative w-auto my-6 mx-auto ny-auto max-w-3xl absolute margin-auto">
                {/*content*/}
                <div
                  className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full overflow-auto"
                  style={{ height: '90vh' }}
                >
                  {/*header*/}
                  <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Privacy and Cancellation policy
                    </h3>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </div>
                  {/*body*/}
                  <div
                    className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full overflow-auto"
                    style={{ height: '800px' }}
                  >
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-3xl font-semibold">Privacy Policy</h2>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        We are committed to protecting the privacy of our
                        customers and their personal information. Our website
                        provides a subscription-based AI chatbot service for
                        WhatsApp and Telegram using OpenAI API's. This privacy
                        policy outlines the information we collect, how it is
                        used, and how we ensure its protection.
                      </p>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-3xl font-semibold">
                        Information Collection and Use
                      </h2>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        We collect basic information such as name, phone number,
                        and email address when a customer subscribes to our AI
                        chatbot service. This information is used solely for the
                        purpose of subscription and to provide the service.
                      </p>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-3xl font-semibold">
                        Payment Information
                      </h2>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        All payment transactions are handled directly through
                        Stripe payment gateway. We do not store any payment
                        information on our website database.
                      </p>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-3xl font-semibold">
                        Use of OpenAI API's
                      </h2>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        The AI chatbot responses are generated through OpenAI
                        API's. We do not control the content or accuracy of
                        these responses.
                      </p>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-3xl font-semibold">
                        Data Protection
                      </h2>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        We take the protection of our customer's personal
                        information very seriously. All collected information is
                        securely stored and protected against unauthorized
                        access.
                      </p>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-3xl font-semibold">
                        Refunds and Cancellations
                      </h2>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Customers have the option to cancel their subscription
                        at any time by using our contact form. If there is a
                        valid issue, we offer a refund within 10 days of the
                        transaction.
                      </p>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-3xl font-semibold">
                        Changes to this Privacy Policy
                      </h2>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        We reserve the right to update this privacy policy as
                        needed. Any changes will be posted on this page, and
                        customers will be notified of any material changes.
                      </p>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-3xl font-semibold">
                        Contact Information
                      </h2>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        If you have any questions or concerns about our privacy
                        policy, please contact us through our contact form.
                      </p>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h1 className="text-2xl font-semibold">
                        This privacy policy was last updated on [15-02-2023].
                      </h1>
                    </div>
                    {/* <div className="relative p-6 flex items-center justify-center  ">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div> */}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Footer;
