import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Home, ProductDetails} from './pages';
import {Sidebar, Footer, Header} from './components';

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
