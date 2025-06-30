import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import { Toaster } from "react-hot-toast";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #0B4DB7",
            padding: "10px",
            color: "#0B4DB7",
          },
        }}
      />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
