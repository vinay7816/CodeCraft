
import './App.css';
import Home from './Components/Home';
import Dataprovider from './Context/Dataprovider';

function App() {
  
  return (
    <Dataprovider>
      <Home/>
    </Dataprovider>
    
  );
}

export default App;
