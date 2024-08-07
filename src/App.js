import './App.css';
import Counter from './counter/Counter';
import UserDetails from './Props/UserDetails';

function App() {
  return (
    <div className="App">
      <UserDetails greeting="Hello" name="Tejal"></UserDetails>
      <Counter></Counter>
    </div>
  );
}

export default App;
