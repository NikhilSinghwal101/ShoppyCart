import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
// import Chat from "./Chat";

function App() {

  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch("http://localhost:3000/product")
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  },[])

  return (
    <>
      <Toaster />
        <BrowserRouter>
          <Header />
          <div className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="menu/:filterby" element={<Menu />} />
              {/* <Route path="chat" element={<Chat />} /> */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="newproduct" element={<NewProduct />} />
              <Route path="signup" element={<Signup />} />
              <Route path="cart" element={<Cart />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;


// Dynamic Coding With Amit