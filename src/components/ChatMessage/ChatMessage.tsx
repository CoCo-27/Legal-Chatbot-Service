import React from 'react';
import TypeWriter from '../TextWriter/TextWriter';
import HumanIcon from '../Icon/HumanIcon';
import ChatGPTIcon from '../Icon/ChatGPTIcon';

const ChatMessage = (props) => {
  return (
    <div className="w-full text-base flex m-4">
      <div className="w-[30px] flex flex-col relative items-end mr-4">
        <div className="rounded-sm flex justify-center items-center relative tracking-widest h-8 w-8 text-xs">
          {props.status === false ? <HumanIcon /> : <ChatGPTIcon />}
        </div>
      </div>
      <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
        <div className="flex flex-grow flex-col gap-3 justify-center">
          <div className="min-h-[20px] flex flex-col justify-center items-start gap-4">
            {props.message == '...' ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse bg-violet-400"></div>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse bg-violet-600"></div>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse bg-violet-800"></div>
              </div>
            ) : (
              <TypeWriter
                content={props.message}
                speed={10}
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
