import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

const Welcome = () => {
  const email = localStorage.getItem('email');

  return (
    <>
      <header className="w-full flex justify-between fixed bg-white-300 shadow-md w-full flex justify-between z-10 transition-all duration-300">
        <Header menu="flex" />
      </header>
      <div className="w-full h-10" style={{ minHeight: '140px' }} />
      <div className="flex flex-wrap justify-center min-h-[calc(100vh_-_140px_-_96px)]">
        {/* 140px: header, 96px: footer */}
        <div className="text-[44px] text-[#3c3c3c] text-center">
          Welcome to visit ChatGPT 4!
        </div>

        <div className="w-full h-10" style={{ minHeight: '40px' }} />
        {email}
      </div>
      <Footer menu="flex" />
    </>
  );
};

export default Welcome;
