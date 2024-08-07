import { useState } from 'react';
import './flag.css';
export default function Flag() {
  const [currentSate, changeState] = useState('online');
  const on = () => {
    changeState('Online');
  };
  const off = () => {
    changeState('Offline');
  };

  return (
    <div className="flag">
      <h2>I'm {currentSate}</h2>
      <button className="btn on" onClick={on}>
        On
      </button>
      <button className="btn off" onClick={off}>
        Off
      </button>
      {/* 2nd way to add function in button when onClick  */}
      {/* <button
        className="off"
        onClick={() => {
          changeState('Offline');
        }}
      >
        Off
      </button> */}
    </div>
  );
}
