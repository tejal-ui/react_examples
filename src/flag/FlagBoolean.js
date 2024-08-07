import { useState } from 'react';
import './flag.css';
export default function FlagBoolean() {
  const [isOnline, setIsOnline] = useState(false);
  const on = () => {
    setIsOnline(true);
  };
  const off = () => {
    setIsOnline(false);
  };
  const getButton = (handler, buttonName) => {
    return <button onClick={handler}>{buttonName}</button>;
  };
  return (
    <div className="flag">
      {isOnline ? <h2>I am Online</h2> : <h2>I am Offline</h2>}
      <br></br>
      {getButton(on, 'On')}
      {getButton(off, 'Off')}
    </div>
  );
}
