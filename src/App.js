import logo from './logo.svg';
import './App.css';

import Firstcomponent from './components/firstcomponents';
import Secondcomponent from './components/secondcomponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning react</h1>
        <h2>React is fun</h2>
        <Firstcomponent/>
        <Secondcomponent/>

      </header>
    </div>
  );
}

export default App;
