import React, { useEffect, useState } from 'react';
import { IconMessagesOff, IconPlus, IconHome } from '@tabler/icons-react';
import { notification } from 'antd';

import auth from '../../pages/Auth/FirebaseConfig';
import summarizeServices from 'src/services/summarizeServices';
import uploadServices from 'src/services/uploadServices';
import questionServices from 'src/services/questionServices';
import Question from '../Question/Question';
import { isEmpty } from 'src/utils/isEmpty';
import { useNavigate } from 'react-router-dom';

const Chatbar = ({
  text,
  setText,
  setLoading,
  setButtonFlag,
}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  const [conversationCount, setConversationCount] = useState(
    isEmpty(JSON.parse(localStorage.getItem('conversationHistory')))
      ? []
      : JSON.parse(localStorage.getItem('conversationHistory'))
  );

  useEffect(() => {
    questionServices
      .getQuestion()
      .then((result) => {
        setQuestionArray(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const gotoHome = () => {
    navigate('/');
  };

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        notification.success({
          description: 'Logout Success',
          message: '',
        });
        localStorage.clear();
        navigate('/');
      })
      .catch((error) => {
        console.log('Log Out', error);
      });
  };

  const handleNewAction = () => {
    localStorage.setItem('fileName', '');
    window.location.reload();
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

  const getPrompt = async () => {
    const data = await uploadServices.getPrompt();
    console.log('Get Prompt = ', data);
    return data.data.data;
  };

  const getResponse = async (index) => {
    setLoading(true);
    setButtonFlag(true);
    localStorage.setItem('disable_flag', JSON.stringify(true));

    const email = localStorage.getItem('email');
    const fileName = localStorage.getItem('fileName');
    const prompt = await getPrompt();
    if (!fileName) {
      setLoading(false);
      notification.info({
        description: 'Please upload your PDF file',
        message: '',
        duration: 2,
      });
    } else {
      summarizeServices
        .summarize(email, fileName, prompt[index])
        .then((res) => {
          console.log('Summarize Suc = ', res);
          setLoading(false);
          setText(res.data.text);
        })
        .catch((err) => {
          localStorage.setItem('disable_flag', JSON.stringify(false));
          setLoading(false);
          notification.error({
            description: 'Something went wrong',
            message: '',
            duration: 2,
          });
          console.log('Summarize Err= ', err);
        });
    }
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
          onClick={() => handleNewAction()}
        >
          <IconPlus size={18} />
          New Document
        </button>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="flex border-b border-white/20 pb-2 pr-2">
          <div className="flex w-full flex-col ">
            <label className="flex text-white font-bold text-xl justify-center mt-8 mb-4 underline-offset-4">
              QUICK QUESTION
            </label>

            {questionArray.length > 0 ? (
              questionArray.map((item, index) => {
                return (
                  <div key={index}>
                    <Question index={index} name={item} onClick={getResponse} />
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col gap-3 items-center text-sm leading-normal mt-8 text-white opacity-50">
                <IconMessagesOff />
                No Questions.
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        className="flex w-full gap-3 items-center cursor-pointer select-none rounded-md border border-white/20 p-4 mt-4 text-[14px] leading-normal text-white transition-colors duration-200 hover:bg-gray-500/10"
        onClick={() => handleLogOut()}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        Log Out
      </button>
    </div>
  );
};

export default Chatbar;
