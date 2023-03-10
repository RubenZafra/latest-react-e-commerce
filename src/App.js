import { ProductProvider, SidebarProvider, CartProvider } from './contexts';
import RouterPath from './routes/RouterPath';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <RouterPath />
          <ToastContainer />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  );
}

export default App;