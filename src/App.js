import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Home, ProductDetails} from './pages';
import {Sidebar, CartItem, Footer, Header, Hero, Product} from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
