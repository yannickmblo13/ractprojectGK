import './App.css';
import Dashboad from '../Dashboad/Dashboad';
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Datesearch from '../Datesearch/Datesearch';
import Search from '../Search/Search';
import Login from '../login/login'
import Inforequest from './../Inforequest/Inforequest';
import Reset from '../Reset/Reset';
import Error from '../Error/Error';

function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element= {<Home/>} />  
            <Route path="/dashboad" element= {<Dashboad/>} /> 
            <Route path="/reset" element= {<Reset />} />  
            <Route path="/*" element= {<Error />} />  
          </Routes>  
      </div>
  );
}

export default App;
