import { ProductProvider, SidebarProvider, CartProvider } from './contexts';
import RouterPath from './routes/RouterPath';

function App() {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <RouterPath />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  );
}

export default App;