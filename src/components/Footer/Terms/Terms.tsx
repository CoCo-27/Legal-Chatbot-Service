import React from 'react';
import imgUrl from 'src/assets/img/beams-basic.png';

const Terms = () => {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Last updated: May 4, 2023
          </p>
        </div>
      </div>
      <div className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[50rem] prose-xl prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
          <p>
            Welcome to Case Cruncher! These Terms of Service ("Terms") govern
            your access and use of the Case Cruncher website ("Website") and
            services ("Services") provided by Case Cruncher, Inc. ("us", "we",
            or "our"). Please read these Terms carefully before using our
            Website and Services.
          </p>
          <p>
            By accessing and using our Website and Services, you agree to be
            bound by these Terms. If you do not agree with any part of these
            Terms, you must not use our Website and Services.
          </p>

          <h2>Eligibility</h2>
          <p>
            By using our Website and Services, you represent and warrant that
            you are at least 18 years old and have the legal capacity to enter
            into and be bound by these Terms.
          </p>
          <h2>Registration and Account</h2>
          <p>
            To access certain features of our Website and Services, you may need
            to create an account. You agree to provide accurate and complete
            information when creating an account and to keep this information up
            to date. You are responsible for maintaining the confidentiality of
            your account password and for all activities that occur under your
            account. You agree to notify us immediately if you suspect any
            unauthorized access or use of your account.
          </p>
          <h2>Use of Services</h2>
          <p>By using our Services, you agree to:</p>
          <p>
            Comply with all applicable laws, regulations, and these Terms Use
            our Services only for your personal, non-commercial purposes Not use
            our Services for any illegal or harmful activities Not interfere
            with or disrupt the operation of our Services or the servers or
            networks that host them AI Responsibility and User Decision Making
            Our Services utilize Artificial Intelligence (AI) to generate data
            and suggestions based on your preferences and the information you
            provide. You understand and agree that the AI is not responsible for
            results that are not reviewed, and that you, as the user, are the
            final decision-maker in accepting or rejecting the AI-generated
            data. You acknowledge that our Services are intended as a tool to
            assist you, and that you bear the sole responsibility for reviewing,
            interpreting, and relying on the AI-generated data.
          </p>
          <h2>Intellectual Property</h2>
          <p>
            All content, features, and functionality on our Website and
            Services, including but not limited to, text, graphics, logos,
            icons, and software, are the exclusive property of Case Cruncher or
            its licensors and are protected by copyright, trademark, and other
            intellectual property laws. You may not reproduce, distribute,
            modify, create derivative works from, or otherwise exploit any
            content from our Website and Services without our prior written
            consent.
          </p>
          <h2>Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our
            Website and Services, with or without notice, for any reason,
            including but not limited to, your violation of these Terms or any
            applicable law or regulation.
          </p>
          <h2>Disclaimer of Warranties</h2>
          <p>
            Our Website and Services are provided on an "as is" and "as
            available" basis. We make no warranties or representations, express
            or implied, regarding the accuracy, reliability, completeness, or
            timeliness of the AI-generated data or any other content on our
            Website and Services. We disclaim all warranties, including but not
            limited to, the implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall Case Cruncher, its officers, directors, employees,
            or affiliates be liable for any direct, indirect, incidental,
            special, consequential, or punitive damages, including but not
            limited to, loss of profits, data, or use, arising out of or in
            connection with your use of our Website and Services, whether based
            on warranty, contract, tort, or any other legal theory, and whether
            or not we have been advised of the possibility of such damages.
          </p>
          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Case Cruncher, its
            officers, directors, employees, and affiliates from and against any
            and all claims, damages, obligations, losses, liabilities, costs,
            and expenses (including but not limited to attorney's fees) arising
            from:
          </p>
          <p>
            Your use of and access to our Website and Services Your violation of
            any term of these Terms Your violation of any third-party right,
            including without limitation any copyright, trademark, property, or
            privacy right Any claim that your use of our Services caused damage
            to a third party This indemnification obligation will survive the
            termination of these Terms and your use of our Website and Services.
          </p>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of
            any changes by posting the new Terms on this page. You are advised
            to review these Terms periodically for any changes. By continuing to
            use our Website and Services after the updated Terms have been
            posted, you agree to be bound by the revised Terms.
          </p>
          <h2>Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States and the State in which we are
            incorporated, without regard to its conflict of law provisions. You
            agree to submit to the personal and exclusive jurisdiction of the
            courts located within that State.
          </p>
          <h2>Contacting us</h2>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at:
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

export default Terms;
