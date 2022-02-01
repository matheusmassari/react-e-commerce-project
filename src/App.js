import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          {/* Private Routes Start*/}
          <Route element={<PrivateRoute />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          {/* Private Routes END*/}
          <Route path="/private-route" element={<PrivateRoute />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
};

export default App;
