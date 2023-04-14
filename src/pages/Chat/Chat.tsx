import React, { useState } from 'react';
import Chatbar from 'src/components/Chatbar/Chatbar';
import ChatMiddle from 'src/components/Chat/Chat';
import ChatRight from 'src/components/ChatRight/ChatRight';

const Chat = () => {
  const [sumText, setSumText] = useState('');

  return (
    <div className="flex h-screen w-full pt-[48px] sm:pt-0">
      <Chatbar text={sumText} setText={setSumText} />
      <ChatMiddle text={sumText} />
      <ChatRight />
    </div>
  );
};

export default Chat;
