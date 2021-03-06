import logo from './logo.svg';
import './descriptions.json';

import './App.css';

function App() {
  const descriptions = require('./descriptions.json');

  function getImage(id) {
    
    return (
      <div class="container">
        <img src={require('./assets/realPic' + id + '.JPG')}/>
        <div class="itemID">
          <label class="container">{id}
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </div>
        <p class="itemID">{descriptions.Descriptions[id - 1].description}</p>
      </div>);
  }

  var myData = [1,2];

  const children = myData.map((val) => (
    getImage(val)
  ));

  return (<div class="wrapper">{children}</div>)
}

export default App;
