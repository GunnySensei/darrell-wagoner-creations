import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Components/Header.js';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
      <Routes>
          <Route path="/" element={<Home />} />
            
          <Route path="/About" element={<About />}/>
          {/* <Route path="/Cart">
            <Cart />
          </Route> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
