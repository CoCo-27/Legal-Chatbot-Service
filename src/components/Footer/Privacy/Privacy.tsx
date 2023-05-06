import React from 'react';
import imgUrl from 'src/assets/img/beams-basic.png';
const Privacy = () => {
  return (
    <div className="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]">
      <img
        src={imgUrl}
        alt=""
        className="absolute left-1/2 top-0 -ml-[39rem] w-[113.125rem] max-w-none"
        data-xblocker="passed"
        style={{ visibility: 'visible' }}
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Privacy policy
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Last updated: May 4, 2023
          </p>
        </div>
      </div>
      <div className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[50rem] prose-xl prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
          <p>
            Welcome to Case Cruncher! Case Cruncher is an Artificial
            Intelligence (AI) powered website that helps users reduce reading
            time and make suggestions based on their preferences. This Privacy
            Policy explains how we collect, use, share, and protect your
            personal information when you use our website. By using our website,
            you agree to the collection and use of your information in
            accordance with this Privacy Policy.
          </p>
          <h2>Information We Collect</h2>
          <h3>1.1. Personal Information</h3>
          <p>
            When you create an account on Case Cruncher, we collect personal
            information such as your name, email address, and password. This
            information is used to identify and authenticate you, provide access
            to our services, and communicate with you about your account.
          </p>
          <h3>1.2. Usage Data</h3>
          <p>
            We automatically collect usage data when you interact with our
            website, including the pages you visit, the time spent on the
            website, and other usage statistics. This data helps us understand
            how users interact with our website and improve our services.
          </p>
          <h3>1.3. Cookies</h3>
          <p>
            We use cookies to enhance your experience on our website. Cookies
            are small text files that are stored on your device and allow us to
            remember your preferences and provide personalized content.
          </p>
          <h2>
            How We Use Your Information We use your personal information to:
          </h2>
          <h3>
            Provide our services and improve your experience on our website
          </h3>
          <p>
            Personalize content and make recommendations Communicate with you
            about your account and our services Analyze and understand how our
            website is used Detect, prevent, and address technical and security
            issues Sharing Your Information We do not sell or rent your personal
            information to third parties. We may share your information in the
            following circumstances:
          </p>
          <h3>
            With service providers that help us operate and maintain our website
          </h3>
          <p>
            When required by law, regulation, or legal process To protect the
            rights, property, or safety of Case Cruncher, our users, or the
            public In connection with a merger, acquisition, or other business
            transaction Data Security We take the security of your personal
            information seriously and have implemented technical and
            organizational measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
          </p>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. This Privacy
            Policy does not apply to the privacy practices of those websites,
            and we encourage you to review their privacy policies before
            providing any personal information.
          </p>
          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for use by children under the age of 13.
            We do not knowingly collect personal information from children under
            13. If we become aware that a child under 13 has provided us with
            personal information, we will take steps to delete such information
            from our records.
          </p>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
          <h2>Contacting us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at:
          </p>
          <p>Case Cruncher</p>
          <p>
            Email:{' '}
            <a href="mailto:support@tailwindui.com">support@tailwindui.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
