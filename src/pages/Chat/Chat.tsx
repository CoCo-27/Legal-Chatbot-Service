import React, { useState } from 'react';
import Chatbar from 'src/components/Chatbar/Chatbar';
import ChatMiddle from 'src/components/Chat/Chat';
import ChatRight from 'src/components/ChatRight/ChatRight';

const Chat = () => {
  return (
    <div className="flex h-screen w-full pt-[48px] sm:pt-0 ">
      <Chatbar />
      <ChatMiddle />
      <ChatRight />
    </div>
  );
};

export default Chat;
