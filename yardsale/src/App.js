import logo from './logo.svg';

import './App.css';

function App() {
  let num = 1;
  return (
    <div className="App">
      <header className="App-header">
      <img src={require('./assets/testPic' + num + '.png')}/>
        <p>1</p>
        
      </header>
    </div>
  );
}

export default App;
