import './App.css';
import Counter from './counter/Counter';
import Flag from './flag/Flag';
import FlagBoolean from './flag/FlagBoolean';
import UserDetails from './Props/UserDetails';
import UserProfile from './userprofile/UserProfile';

function App() {
  return (
    <div className="App">
      {/* <UserDetails greeting="Hello" name="Tejal"></UserDetails> */}
      {/* <Counter></Counter> */}
      {/* <Flag></Flag> */}
      {/* <FlagBoolean></FlagBoolean> */}
      <UserProfile></UserProfile>
    </div>
  );
}

export default App;
