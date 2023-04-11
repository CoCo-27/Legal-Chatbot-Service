import whatsapp from 'src/assets/img/whatsapp.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Land = () => {
  const navigate = useNavigate();

  const handleGoPage = (path: string) => {
    navigate('/' + path);
  };
  return (
    <div
      className="w-full flex flex-wrap md:flex-nowrap justify-between gap-8 pt-40"
      id="home"
    >
      <div className="flex flex-wrap gap-8 text-center">
        <div className="text-6xl text-[#3c3c3c] font-bold ">
          Let AI Condense your text in seconds. Got Questions? Get Answers
        </div>
        <div className="text-3xl text-[#3c3c3c]">
          Provide your text, our AI will analyze, we'll instantly summarize it
          in an easy read manner, and if you have any questions about the text,
          our AI has an answer
        </div>
      </div>
    </div>
  );
};

export default Land;
