import React, { useState, useEffect, useRef } from 'react';
import { IconMessagesOff } from '@tabler/icons-react';
import { Drawer } from 'antd';
import historyServices from 'src/services/historyServices';
import authServices from 'src/services/authServices';
import ChatHistory from '../ChatHistory/ChatHistory';
import ChatMessage from '../ChatMessage/ChatMessage';

const ChatRight = ({ historyFlag }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [historyCount, setHistoryCount] = useState([]);
  const [editable, setEditable] = useState(false);
  const [userInfo, setUserInfo] = useState({
    billing: {
      value: -1,
      state: '',
    },
    first_name: '',
    last_name: '',
    email: '',
    usage_tracking: 0,
  });
  const [historyName, setHistoryName] = useState(
    localStorage.getItem('historyName')
      ? localStorage.getItem('historyName')
      : 'CHAT HISTORY'
  );
  const req_qa_box = useRef(null);

  const handlePlus = () => {
    historyCount.push('1');
    setHistoryCount([...historyCount]);
  };

  useEffect(() => {
    authServices
      .getUser({ email: localStorage.getItem('email') })
      .then((result) => {
        setUserInfo(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    historyServices
      .getHistory(localStorage.getItem('email'))
      .then((result) => {
        console.log('!!!! = ', result);
        setHistoryCount(result.data.data);
      })
      .catch((error) => {
        console.log('historyError = ', error);
      });
  }, []);

  const handleUpgrade = () => {
    window.location.reload();
  };

  const handleGetHistory = () => {
    showDrawer();
    historyServices
      .getHistory(localStorage.getItem('email'))
      .then((result) => {
        setHistoryCount(result.data.data);
      })
      .catch((error) => {
        console.log('historyError = ', error);
      });
  };
  const searchHistory = () => {};

  const handleEdit = () => {
    setEditable(!editable);
  };

  const handleSave = (text) => {
    setHistoryName(text);
    localStorage.setItem('historyName', text);
    setEditable(!editable);
  };

  const usedPersent = () => {
    const value =
      userInfo.billing.value === 0
        ? -1
        : userInfo.billing.value === -1
        ? (100 * userInfo.usage_tracking) / -userInfo.billing.value
        : (100 * userInfo.usage_tracking) / userInfo.billing.value;
    const string =
      value === -1 ? 'You can use infinitly' : Math.trunc(value) + '%';
    return string;
  };

  return (
    <div className="fixed top-0 right-0 z-50 flex h-full w-1/6 flex-none flex-col space-y-2 bg-gray-800 p-4 text-[14px] transition-all sm:relative sm:top-0">
      <Drawer
        title={historyName}
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key={'left'}
        width={'1500px'}
      >
        <div
          ref={req_qa_box}
          className="relative flex w-full h-full flex-grow flex-col rounded-md border border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] overflow-y-auto overflow-x-hidden"
        >
          {historyCount &&
            historyCount.map((item, index) => {
              return (
                <ChatMessage
                  key={index}
                  box_ref={req_qa_box}
                  message={item.message}
                  status={item.flag}
                />
              );
            })}
        </div>
      </Drawer>
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
            {historyFlag === 'true' ? (
              <div className="h-full">
                <ChatHistory
                  onClick={handleGetHistory}
                  name={historyName}
                  onSave={handleSave}
                  editable={editable}
                  onEdit={handleEdit}
                />
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

      <div className="relative flex items-center">
        <div className="flex flex-col w-full items-center rounded-lg bg-navy-800 p-4 text-sm text-white transition-colors duration-200 hover:bg-navy-900 ">
          <div
            className="flex flex-row w-full justify-center hover:cursor-pointer"
            onClick={() => handleUpgrade()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                clipRule="evenodd"
              />
            </svg>
            <p className="pl-4 font-dm text-sm font-medium text-white">
              UPGRADE PLAN
            </p>
          </div>
          <div className="flex flex-row w-full justify-center pt-4">
            <p className="font-dm text-sm font-medium text-white">
              {usedPersent()}
            </p>
            <p className="pl-4 font-dm text-sm font-medium text-white">
              USED OF CURRENT PLAN
            </p>
          </div>
          <div className="flex flex-row w-full justify-center pt-4">
            <button className="border-px flex h-[60px] w-[60px] items-center justify-center rounded-full border-black bg-[#44fcf9] p-0">
              {userInfo.first_name.charAt(0) + userInfo.last_name.charAt(0)}
            </button>
            <p className="flex items-center pl-4 font-dm text-sm font-medium text-white">
              {userInfo.first_name + ' ' + userInfo.last_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRight;
