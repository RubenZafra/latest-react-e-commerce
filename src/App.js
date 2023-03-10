import { ProductProvider, SidebarProvider, CartProvider } from './contexts';
import RouterPath from './routes/RouterPath';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <CartProvider>
          <ProductProvider>
            <RouterPath />
            <ToastContainer />
          </ProductProvider>
        </CartProvider>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;