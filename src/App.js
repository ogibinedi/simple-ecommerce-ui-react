import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Cart, Contact, Home, Login, ProductList, Register, Reset, SingleProduct } from "./pages";
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" exact element={<ProductList />} />
            <Route path="/product" exact element={<SingleProduct />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<Reset />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
