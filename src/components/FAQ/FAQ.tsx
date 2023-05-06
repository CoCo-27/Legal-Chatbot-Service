import Data from './data.json';
import MobileImage from './MobileImage';
import DesktopImage from './DesktopImage';
import useWindowDimensions from '../../useWindowDimensions';
import bgMobile from '../../assets/img/bg-pattern-mobile.svg';
import bgDesktop from '../../assets/img/bg-pattern-desktop.svg';
import { useState } from 'react';
import Arrow from '../../assets/img/icon-arrow-down.svg';

const Content = () => {
  const { width } = useWindowDimensions();
  const backgroundMobile = {
    backgroundImage: `url(${bgMobile})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundDesktop = {
    backgroundImage: `url(${bgDesktop})`,
    backgroundPosition: 'left -10rem top 4rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const [active, setActive] = useState(null);
  const handleToggle = (index) => {
    active === index ? setActive(null) : setActive(index);
  };
  return (
    <div className="w-full flex flex-wrap gap-20 pt-32" id="contact">
      <div className="w-full bg-white shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] rounded-bl-[7.5rem] rounded-tr-[7.5rem] min-h-[535px] pr-16 pb-16 flex m-0 flex-col md:flex-row md:justify-around md:min-h-[500px]">
        <div
          className="md:w-[50%] md:h-[535px] relative"
          style={width < 960 ? backgroundMobile : backgroundDesktop}
        >
          {width < 960 ? <MobileImage /> : <DesktopImage />}
        </div>

        <div className="md:w-[50%] md:min-h-[636px]">
          <h1 className="text-[#000000] font-bold text-center text-4xl ml-4 mt-[2.75rem] md:text-left md:mt-[3.75rem]">
            FAQ
          </h1>
          <div className="flex flex-col mt-[2.25rem] md:mt-[2.75rem] md:mb-0">
            {Data.map((item, index) => {
              return (
                <div className="m-0 p-0 w-full" key={index}>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center gap-3 my-2 mx-4">
                      <p
                        className={
                          active === index
                            ? 'text-[#000000] text-xl font-bold cursor-pointer'
                            : 'text-[#29465B] text-xl cursor-pointer'
                        }
                        onClick={() => handleToggle(index)}
                      >
                        {item.title}
                      </p>

                      <img
                        src={Arrow}
                        alt="arrow-icon"
                        onClick={() => handleToggle(index)}
                        className={
                          active === index
                            ? 'cursor-pointer w-[10px] h-[8px] rotate-180'
                            : 'cursor-pointer w-[10px] h-[8px]'
                        }
                      />
                    </div>
                    <hr
                      className={
                        active === index
                          ? 'border-hidden'
                          : 'border-b-1 border-LightGrayishBlue mt-[8px]'
                      }
                    ></hr>
                    <p
                      onClick={() => handleToggle(index)}
                      className={
                        active === index
                          ? 'text-[#29465B] text-lg w-full p-0 mt-[8px] ml-4 mr-8 cursor-pointer'
                          : 'invisible max-h-0'
                      }
                    >
                      {item.content}
                    </p>
                    <hr
                      className={
                        active === index
                          ? 'border-b-1 border-LightGrayishBlue mt-[10px]'
                          : 'border-hidden'
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
