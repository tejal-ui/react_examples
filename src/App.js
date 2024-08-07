import './App.css';
import Counter from './counter/Counter';
import Flag from './flag/Flag';
import FlagBoolean from './flag/FlagBoolean';
import UserDetails from './Props/UserDetails';

function App() {
  return (
    <div className="App">
      {/* <UserDetails greeting="Hello" name="Tejal"></UserDetails> */}
      {/* <Counter></Counter> */}
      {/* <Flag></Flag> */}
      <FlagBoolean></FlagBoolean>
    </div>
  );
}

export default App;
