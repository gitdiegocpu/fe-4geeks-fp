// dependencies first

//local files
import Front from './components/Front/index.jsx';
import Intro from './components/Intro/index.jsx';
import Products from './components/Products/index.jsx';

//styles
import './App.css';


function App() {
  return (
    <div className="App">
      <Front />
      <Intro />
      <Products />
    </div>
  );
}

export default App;
