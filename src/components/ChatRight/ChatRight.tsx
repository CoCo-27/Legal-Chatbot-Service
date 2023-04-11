import React, { useState } from 'react';
import { IconMessagesOff } from '@tabler/icons-react';
import ChatHistory from '../ChatHistory/ChatHistory';

const ChatRight = () => {
  const [historyCount, setHistoryCount] = useState([]);

  const handlePlus = () => {
    historyCount.push('1');
    setHistoryCount([...historyCount]);
  };

  const searchHistory = () => {};

  return (
    <div className="fixed top-0 right-0 z-50 flex h-full w-1/6 flex-none flex-col space-y-2 bg-gray-800 p-4 text-[14px] transition-all sm:relative sm:top-0">
      <input
        className="w-full  rounded-md border border-neutral-600 bg-gray-800 p-4 text-[14px] leading-3 text-white"
        type="text"
        placeholder="Search Chat History..."
        value=""
        onChange={() => searchHistory()}
      />
      <div className="flex-grow overflow-auto">
        <div className="flex w-full flex-col ">
          <div className="flex w-full flex-col ">
            {historyCount.length > 0 ? (
              <div className="h-full">
                {historyCount.map((item) => {
                  return <ChatHistory />;
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-3 items-center text-sm leading-normal mt-8 text-white opacity-50">
                <IconMessagesOff />
                No History.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRight;
