import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Header from "./components/NewHeader";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
