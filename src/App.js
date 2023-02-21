import logo from './logo.svg';
import './App.css';
import CycleCounter from "./components/CycleCounter";
function App({cycle}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CycleCounter cycle={cycle} />
      </header>
    </div>
  );
}

export default App;
