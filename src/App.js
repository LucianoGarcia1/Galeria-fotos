import { Aside } from './components/Aside/Aside.js';
import { Content } from './components/Content/Content.js';
import Api from '../src/components/Api/Api.js';
import './App.css';

const App = ()=> {
  return (
    <div className="App">
      <Aside></Aside>
      <Content></Content> 
    </div>
  );
}

export default App;
