import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import Case_Cruncher from 'src/assets/img/Case_Cruncher.png';

import Card from '../Card';

const Aibot = () => {
  const navigate = useNavigate();

  const handleChat = () => {
    if (!localStorage.getItem('email')) {
      notification.info({
        description: 'Please log in before going to the chat page.',
        message: '',
      });
      setTimeout(() => {
        navigate('/login');
      }, 500);
    } else {
      navigate('/chat');
    }
  };

  return (
    <div
      className="w-full flex flex-wrap gap-20 pt-32 items-center justify-center text-white"
      id="ai-bots"
    >
      <div className="w-full flex flex-wrap justify-center gap-8">
        <div className="text-[35px] font-bold text-center">Case Cruncher</div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <Card
          title="Chat with Case Cruncher"
          description=""
          logo={Case_Cruncher}
          onClick={() => handleChat()}
        />

        {/* <div className="col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <Card
            title="Instantly connect with AI on Telegram"
            description="Send your questions to Chat Buddy via Telegram in seconds and
						receive precise information with effortless ease."
            logo={Tele}
            comingSoon={false}
            onClick={() => {}}
          />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Card
            title="Bring Your Imagination to Life with DALL-E"
            description="Create and share stunning AI-generated images directly from
						your WhatsApp and Telegram with the power of DALL-E."
            logo={Dalle}
            comingSoon={false}
            onClick={() => {}}
          />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Card
            title="Unleash Your Musical Creativity with AI"
            description="Generate unique and inspiring music withh AI technology on
						your WhatsApp and Telegram, and take your audio experience to
						the next level."
            logo={Musical}
            comingSoon={false}
            onClick={() => {}}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Aibot;
