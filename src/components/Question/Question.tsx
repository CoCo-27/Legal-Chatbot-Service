import React from 'react';

const Question = (props) => {
  return (
    <div className="relative flex items-center py-2">
      <button
        className="flex w-full cursor-pointer justify-center rounded-lg py-2 text-base text-white transition-colors duration-200 bg-[#343541]/90 "
        onClick={() => props.onClick(props.index)}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Question;
