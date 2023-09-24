import './App.css';
import Header from './Components/Header.js';
import ProductSection from './Components/ProductSection';

function App() {
  return (
    <div className='App'>
      <header className='App-header h-25'>
        <Header />
      </header>
      <div className='product-section container'>
        <ProductSection />
      </div>
    </div>
  );
}

export default App;
