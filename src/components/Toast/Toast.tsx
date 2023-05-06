import React from 'react';
import './Toast.css';

const Toast = ({ toast, position, onClick }) => {
  return (
    <>
      <div className={`notification-container ${position}`}>
        <div
          className={`notification toast ${position}`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={onClick}>X</button>
          <div className="notification-image">
            <img src={toast.icon} alt="" />
          </div>
          <div>
            <p className="notification-title">{toast.title}</p>
            <p className="notification-message">{toast.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
