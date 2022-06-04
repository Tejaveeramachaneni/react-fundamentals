import logo from './logo.svg';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import UserGreeting from './components/UserGreeting';
import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinder from './components/EventBinder';

function App() {
  return (
    <div className="App">
      {/* <Greet name = "Bruce" /> */}
      {/* <Greet name = "Clark" /> */}
        {/* <button>Click Button</button> */}
      {/* <Greet /> */}
      {/* <Greet name = "Diana" heroName = "wonderwoman" /> */}
      {/* <p>This is children props</p><Greet />  */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <UserGreeting /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      <EventBinder />
    </div>
  )
}

export default App;
