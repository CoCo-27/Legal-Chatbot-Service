import React, { useState } from 'react';

const ChatHistory = (props) => {
  const [text, setText] = useState(props.name ? props.name : '');

  return (
    <div className="relative flex items-center py-2">
      {props.editable === true ? (
        <div className="flex w-full rounded-lg py-2 text-base text-white transition-colors duration-200 bg-[#343541]/90">
          <input
            className="pl-4 mr-12 overflow-hidden overflow-ellipsis border-neutral-400 bg-transparent text-left text-base text-white outline-none focus:border-neutral-100"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      ) : (
        <button
          className="flex w-full cursor-pointer rounded-lg pl-4 py-2 text-base text-white transition-colors duration-200 bg-[#343541]/90"
          onClick={props.onClick}
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
        >
          {text}
        </button>
      )}
      <div className="absolute right-1 z-10 flex text-gray-300">
        {props.editable === true ? (
          <div>
            <button
              className="min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100"
              onClick={() => props.onSave(text)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-check"
              >
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </button>
            <button
              className="min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100"
              onClick={props.onEdit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-x"
              >
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        ) : (
          <button
            className="min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100"
            onClick={props.onEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-pencil"
            >
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
              <path d="M13.5 6.5l4 4"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatHistory;
