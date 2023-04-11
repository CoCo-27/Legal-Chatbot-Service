import React from 'react';
import TypeWriter from '../TextWriter/TextWriter';
import HumanIcon from '../Icon/HumanIcon';
import ChatGPTIcon from '../Icon/ChatGPTIcon';

const ChatMessage = (props) => {
  return (
    <div className="w-full text-base flex m-4">
      <div className="w-[30px] flex flex-col relative items-end mr-4">
        <div className="rounded-sm flex justify-center items-center relative tracking-widest h-8 w-8 text-xs">
          {props.status == true ? <HumanIcon /> : <ChatGPTIcon />}
        </div>
      </div>
      <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
        <div className="flex flex-grow flex-col gap-3">
          <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
            {props.message == '...' ? (
              <div className="animate-pulse duration-1000 h-12 w-12 dark:text-white text-blue font-mono text-xl">
                {props.message}
              </div>
            ) : (
              <TypeWriter
                content={props.message}
                speed={20}
                box_ref={props.box_ref}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
