import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import {Home, ProductDetails} from '../pages';
import {Sidebar, Footer, Header} from '../components';
import Login from '../pages/Login';

const RouterPath = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='*' element={<Navigate to='/'/>}/>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
    </Router>
  )
}

export default RouterPath