const Welcome = () => {
  return (
    <>
      <div className="pt-32 text-white rounded-bl-full">
        <div className="flex bg-gradient-to-b from-blue-600 to-blue-400 flex-col pt-36 px-10 lg:flex-row lg:pl-32 lg:pr-0 mt-[-25px]">
          <div className="lg:mr-20">
            <h1>Find peace of mind about your child's mental health.</h1>
            <div className="space-y-3 text-lg my-10">
              <p>
                Sonar identifies when youth are struggling with mental health
                and provides them with the support and resources they need.
              </p>
              <p>
                We notify parents/caregivers, counselors, and friends who care
                about the youth to provide interventions before a mental health
                crisis happens.
              </p>
              <p>Sign up to join our pod to get early access to Sonar today!</p>
            </div>
            <button className="bg-blue-400 cursor-pointer rounded-lg text-white font-semibold h-17 w-38 text-xl bg-purple-100 text-blue-600">
              Join Now
            </button>
          </div>
          <img
            className="mx-0"
            src="https://storage.googleapis.com/sonar-assets/home/hero.svg"
            alt="Dashboard Mockup Large Size"
          ></img>
        </div>
        <div className="bg-blue-400 h-[100px] rounded-bl-full"></div>
      </div>
      <div>
        <div className="px-10 pt-20 pb-20 flex flex-col items-center space-y-10">
          <h1 className="text-center mb-10">Why We Care</h1>
          <div className="grid grid-cols-1 gap-y-20 md:gap-x-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-10">
            <div className="relative h-[250px] w-[260px] bg-white justify-items-center">
              <div className="bg-white-100 rounded-2xl lg:w-[306px] shadow-2xl p-5">
                <div className="flex justify-center">
                  <img
                    src="https://storage.googleapis.com/sonar-assets/home/icon-chat.svg"
                    alt="General Icon"
                    className="absolute h-[75px] w-[75px] top-[-38px] object-right-top"
                  />
                </div>
                <p className="text-md mt-7 mb-5">
                  <span className="text-2xl font-bold text-blue-400">82%</span>
                  of youth believe we should
                  <span className="font-bold">
                    {' '}
                    talk more openly about mental health issues.
                  </span>
                </p>
                <p className="font-bold text-blue-400">(NAMI, 2020)</p>
              </div>
            </div>
            <div className="relative h-[250px] w-[260px] bg-white justify-items-center">
              <div className="bg-white-100 rounded-2xl lg:w-[306px] shadow-2xl p-5">
                <div className="flex justify-center">
                  <img
                    src="https://storage.googleapis.com/sonar-assets/home/icon-chat.svg"
                    alt="General Icon"
                    className="absolute h-[75px] w-[75px] top-[-38px] object-right-top"
                  />
                </div>
                <p className="text-md mt-7 mb-5">
                  <span className="text-2xl font-bold text-blue-400">82%</span>
                  of youth believe we should
                  <span className="font-bold">
                    {' '}
                    talk more openly about mental health issues.
                  </span>
                </p>
                <p className="font-bold text-blue-400">(NAMI, 2020)</p>
              </div>
            </div>
            <div className="relative h-[250px] w-[260px] bg-white justify-items-center">
              <div className="bg-white-100 rounded-2xl lg:w-[306px] shadow-2xl p-5">
                <div className="flex justify-center">
                  <img
                    src="https://storage.googleapis.com/sonar-assets/home/icon-chat.svg"
                    alt="General Icon"
                    className="absolute h-[75px] w-[75px] top-[-38px] object-right-top"
                  />
                </div>
                <p className="text-md mt-7 mb-5">
                  <span className="text-2xl font-bold text-blue-400">82%</span>
                  of youth believe we should
                  <span className="font-bold">
                    {' '}
                    talk more openly about mental health issues.
                  </span>
                </p>
                <p className="font-bold text-blue-400">(NAMI, 2020)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-white rounded-tr-[200px] rounded-bl-[200px] md:rounded-tr-[400px] md:rounded-bl-[400px] py-36">
        <h1 className="text-center">
          How Sonar Supports You and Your Loved Ones
        </h1>
        <div className="pt-20 space-y-20 lg:space-y-0 lg:px-32">
          <div
            className="flex flex-col-reverse lg:flex-row items-center"
            style={{ opacity: '1', transform: 'none' }}
          >
            <img
              src="https://storage.googleapis.com/sonar-assets/home/signup.svg"
              alt=""
            />
            <div className="space-y-5 px-10 text-center lg:px-0 lg:text-left">
              <h3>Sign up</h3>
              <p>
                Registration can occur through youth, parents, or their school.
                The youth will then be prompted to opt-in to securely and
                anonymously share their social and web search activity.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col-reverse lg:flex-row items-center"
            style={{
              opacity: '0',
              transform: 'translateX(10px) translateY(0px) translateZ(0px)',
            }}
          >
            <img
              src="https://storage.googleapis.com/sonar-assets/home/dashboard.svg"
              alt=""
            />
            <div className="space-y-5 px-10 text-center lg:px-0 lg:text-left">
              <h3>
                We listen to the needs of youth and get them the support they
                need
              </h3>
              <p>
                Sonar analyzes pulse check surveys, social media, and web search
                in real time to determine whether or not a youth needs support.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col-reverse lg:flex-row items-center"
            style={{
              opacity: '0',
              transform: 'translateX(-10px) translateY(0px) translateZ(0px)',
            }}
          >
            <img
              src="https://storage.googleapis.com/sonar-assets/home/notification.svg"
              alt=""
            />
            <div className="space-y-5 px-10 text-center lg:px-0 lg:text-left">
              <h3>We provide notifications and recommendations.</h3>
              <p>
                If we detect a youth is at risk of crisis or mental illness, you
                will be alerted in real-time. Sonar's trained safety monitors
                will suggest resources and next steps and connect to care if
                needed.
              </p>
              <div className="flex space-x-5">
                <a
                  rel="noopener noreferrer"
                  className="g-purple-400 rounded-lg text-white font-semibold h-12 w-30 text-lg flex items-center justify-center bg-purple-400"
                  href="/faq"
                  target="_blank"
                >
                  See FAQs
                </a>
                <a
                  className="cursor-pointer rounded-lg bg-white text-purple-400 border-2 border-purple-400 text-lg px-3 font-semibold flex items-center justify-center"
                  rel="noopener noreferrer"
                  href="/privacy-policy"
                  target="_blank"
                >
                  About Data Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
