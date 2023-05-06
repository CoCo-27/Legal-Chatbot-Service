import ImageDesktop from '../../assets/img/illustration-woman-online-desktop.svg';

import Box from '../../assets/img/illustration-box-desktop.svg';

const DesktopImage = () => {
  return (
    <>
      <div className="relative overflow-hidden w-[465px] h-full">
        <img
          src={ImageDesktop}
          alt="Desktop-woman-online"
          className="relative left-[-5rem] bottom-[-7rem]"
        />
      </div>
      <img
        src={Box}
        alt="box"
        className="absolute left-[-6rem] top-[15rem] z-2"
      />
    </>
  );
};

export default DesktopImage;
