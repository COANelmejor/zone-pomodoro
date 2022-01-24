import './App.css';
import WorkTimer from './components/WorkTimer';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div className="App">
      <WorkTimer />
      <CountdownTimer time={new Date() + 5000} />
    </div>
  );
}

export default App;
