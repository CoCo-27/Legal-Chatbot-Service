import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import Chatbar from 'src/components/Chatbar/Chatbar';
import ChatMiddle from 'src/components/Chat/Chat';
import ChatRight from 'src/components/ChatRight/ChatRight';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sumText, setSumText] = useState({
    data: '',
    type: '',
  });
  const [buttonFlag, setButtonFlag] = useState(
    localStorage.getItem('disable_flag')
      ? JSON.parse(localStorage.getItem('disable_flag'))
      : false
  );
  const [historyFlag, setHistoryFlag] = useState(
    localStorage.getItem('historyFlag')
      ? localStorage.getItem('historyFlag')
      : 'false'
  );

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`flex h-screen w-full pt-[48px] sm:pt-0 ${
        loading === true ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {loading ? (
        <div className="absolute w-full h-full z-10 flex justify-center items-center">
          <Spin
            tip="Loading..."
            spinning={loading}
            size="large"
            style={{ width: '100%' }}
          ></Spin>
        </div>
      ) : (
        <></>
      )}
      <Chatbar
        setHistoryFlag={setHistoryFlag}
        setText={setSumText}
        setLoading={setLoading}
        setButtonFlag={setButtonFlag}
      />
      <ChatMiddle
        text={sumText}
        setHistoryFlag={setHistoryFlag}
        buttonFlag={buttonFlag}
        setLoading={setLoading}
        setButtonFlag={setButtonFlag}
      />
      <ChatRight historyFlag={historyFlag} />
    </div>
  );
};

export default Chat;
