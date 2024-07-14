import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import Protected from "./components/Protected";
import ProductList from "./components/ProductList";
import SearchProduct from "./components/SearchProduct";
import { ProductProvider } from './context/ProductContext';


function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
          <Route path="/" element={<Protected Cmp={ProductList} />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;