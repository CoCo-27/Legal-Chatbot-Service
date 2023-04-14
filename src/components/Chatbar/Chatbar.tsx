import React, { useState } from 'react';
import { IconPlus, IconHome } from '@tabler/icons-react';

import summarizeServices from 'src/services/summarizeServices';
import ChatConversation from '../ChatConversation/ChatConversation';
import Question from '../Question/Question';
import { isEmpty } from 'src/utils/isEmpty';
import { useNavigate } from 'react-router-dom';

const Chatbar = ({ text, setText }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [conversationCount, setConversationCount] = useState(
    isEmpty(JSON.parse(localStorage.getItem('conversationHistory')))
      ? []
      : JSON.parse(localStorage.getItem('conversationHistory'))
  );

  const gotoHome = () => {
    navigate('/');
  };

  const handlePlus = () => {
    conversationCount.push('1');
    localStorage.setItem(
      'conversationHistory',
      JSON.stringify(conversationCount)
    );
    setConversationCount([...conversationCount]);
  };

  const onDelete = (index) => {
    conversationCount.splice(index, 1);
    localStorage.setItem(
      'conversationHistory',
      JSON.stringify(conversationCount)
    );
    setConversationCount([...conversationCount]);
  };

  const handleClickConversation = (index) => {
    setCount(index);
  };

  const handleSummarize = () => {
    console.log('name');
    const email = localStorage.getItem('email');
    summarizeServices
      .summarize(email)
      .then((res) => {
        console.log('Summarize Suc = ', res);
        setText(res.data.text);
      })
      .catch((err) => {
        console.log('Summarize Err= ', err);
      });
  };

  return (
    <div
      className={`fixed top-0 bottom-0 z-50 flex h-full w-1/6 flex-none flex-col space-y-2 bg-gray-800 p-4 transition-all sm:relative sm:top-0`}
    >
      <div>
        <button
          className="flex w-full gap-3 items-center cursor-pointer select-none rounded-md p-4 text-[14px] leading-normal bg-blue-400 text-white transition-colors duration-200 hover:bg-gray-500/10"
          onClick={() => gotoHome()}
        >
          <IconHome size={18} />
          Customer Dash Board
        </button>

        <button
          className="flex w-full gap-3 items-center cursor-pointer select-none rounded-md border border-white/20 p-4 mt-4 text-[14px] leading-normal text-white transition-colors duration-200 hover:bg-gray-500/10"
          // onClick={() => handlePlus()}
        >
          <IconPlus size={18} />
          New Question
        </button>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="flex border-b border-white/20 pb-2 pr-2">
          <div className="flex w-full flex-col ">
            <label className="flex text-white font-bold text-xl justify-center mt-8 mb-4 underline-offset-4">
              QUICK QUESTION
            </label>

            <Question name={'SUMMARIZE'} onClick={handleSummarize} />
            <Question name={'KEY POINTS'} />
            <Question name={'WHY'} />
            <Question name={'OTHER 1'} />
            <Question name={'OTHER 2'} />
            <Question name={'OTHER 3'} />
            {/* {conversationCount.length > 0 ? (
              <div className="h-full">
                {conversationCount.map((item, index) => {
                  return (
                    <ChatConversation
                      index={index}
                      count={count}
                      click={handleClickConversation}
                      delete={onDelete}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-3 items-center text-sm leading-normal mt-8 text-white opacity-50">
                <IconMessagesOff />
                No conversations.
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbar;
