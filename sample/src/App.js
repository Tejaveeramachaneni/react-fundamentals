import logo from './logo.svg';
import Hello from './components/Hello';
import Greet from './components/Greet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name = "Bruce" />
      <Greet name = "Clark" />
        <button>Click Button</button>
      <Greet />
      <Greet name = "Diana" heroName = "wonderwoman" />
      <p>This is children props</p><Greet /> 
    </div>
  )
}

export default App;
