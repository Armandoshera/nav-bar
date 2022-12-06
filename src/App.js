import Navbar from './components/Navbar'
import Services from './components/Services'
import Partnership from './components/Partnership'
import Work from './components/How-We-Work'
import FreeQuote from './components/Get-A-Free-Quote'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Navbar />
                {/* <Router> */}
        {/* <Navbar /> */}

        {/* <Routes> */}
          {/* <Route path='/' compoent={Services} exact> */}
            {/* <Services /> */}
          {/* </Route> */}
          {/* <Route path='/about' compoent={Work} exact> */}
            {/* <Work /> */}
          {/* </Route> */}
          {/* <Route path='/skills' compoent={Partnership} exact> */}
            {/* <Partnership /> */}
          {/* </Route> */}
          {/* <Route path='/contact' compoent={FreeQuote} exact> */}
            {/* <FreeQuote /> */}
          {/* </Route> */}
        {/* </Routes> */}
       {/* </Router> */}
    </div>
  );
}

export default App;
