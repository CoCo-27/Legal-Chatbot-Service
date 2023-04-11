import Header from 'src/components/Header/Header';
import Land from 'src/components/Land/Land';
import Works from 'src/components/Works/Works';
import Product from 'src/components/Product/Product';
import Pricing from 'src/components/Pricing/Pricing';
import Footer from 'src/components/Footer/Footer';
import FAQ from 'src/components/FAQ/FAQ';

import { useState, useEffect } from 'react';

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const [offset, setOffset] = useState(0);
  const [headerAnimation, setHeaderAnimation] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.pageYOffset > 500 ? 500 : window.pageYOffset);
      if (window.pageYOffset > 300) {
        setShowButton(true);
        setHeaderAnimation(true);
      } else {
        setShowButton(false);
        setHeaderAnimation(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex w-full justify-center bg-gradient-to-tr from-blue-200">
      {/* <header className="w-full flex justify-between fixed bg-white-300 shadow-md w-full flex justify-between z-10 transition-all duration-300"> */}
      <Header menu="flex" isSmall={headerAnimation} />
      {/* <Navbar /> */}
      {/* </header> */}

      <div className="w-full flex flex-col px-32 pt-16">
        <div className="w-full max-w-full  flex flex-wrap gap-30 px-4">
          <Land />
          <Product />
          <Works />
          <Pricing />
          <FAQ />
        </div>
        <div className="w-full h-10" style={{ minHeight: '40px' }} />
        <button
          onClick={scrollToTop}
          className={
            (showButton
              ? 'opacity-100 p-2 lg:p-4 bottom-12 right-8 lg:bottom-20 lg:right-16'
              : 'opacity-0 p-0 bottom-14 right-10 lg:bottom-24 lg:right-20') +
            ' fixed border-[3px] border-[#0094FF]/60 hover:border-[#0094FF] color-[#FAFAFA] hover:bg-[#022457]/60 active:bg-[#003F9A]/60 bg-[#0B0B0B]/30 transition-all duration-300 backdrop-blur-[2px] cursor-pointer rounded-full shadow-2xl'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 172 172"
            style={{ fill: '#000000' }}
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: 'normal' }}
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#fafafa">
                <path d="M85.98925,83.05987l72.5625,42.2475v-26.875l-72.55175,-58.11987l-72.57325,58.11987v26.875z"></path>
              </g>
            </g>
          </svg>
        </button>
        <Footer menu="flex" />
      </div>
    </div>
  );
};

export default Home;
