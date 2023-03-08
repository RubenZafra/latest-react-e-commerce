import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import {Home, ProductDetails} from '../pages';
import {Sidebar, Footer, Header} from '../components';

const RouterPath = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='*' element={<Navigate to='/'/>}/>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
    </Router>
  )
}

export default RouterPath