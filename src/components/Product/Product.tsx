import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import Whatsaapp from 'src/assets/img/whatsico.png';
import Tele from 'src/assets/img/tele.png';
import Dalle from 'src/assets/img/dalle.png';
import Musical from 'src/assets/img/musical.png';

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
    <div className="w-full flex flex-wrap gap-20 pt-32 " id="ai-bots">
      <div className="w-full flex flex-wrap justify-center gap-8">
        <div className="text-[#3c3c3c] text-[35px] font-bold text-center text-[#00225e]">
          AI BOTS TO SOCIAL MEDIA
        </div>
        <div className="w-full text-center text-[25px] text-[#3c3c3c] font-normal">
          Completely personalized AI chatbot experience with messaging
          capabilities with cool features, now available on WhatsApp and
          Telegram.
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Card
            title="Chat with ChatGPT in Open AI"
            description="Quickly send your questions to Chat Buddy and receive fast and
            accyrate answers with ease and simplicity."
            logo={Whatsaapp}
            comingSoon={false}
            onClick={() => handleChat()}
          />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 text-center">
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
        </div>
      </div>
    </div>
  );
};

export default Aibot;
