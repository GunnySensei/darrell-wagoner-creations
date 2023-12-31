import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Components/Header.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productName" element={<Product />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Cart" element={<Cart />}/>
          {/* <Route path="/Cart">
            <Cart />
          </Route> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
