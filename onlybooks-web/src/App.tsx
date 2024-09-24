import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importando Routes
import Home from "./pages/Home";
import Books from "./pages/Books"; 
import Borrows from "./pages/Borrows"; 
import Login from "./pages/Login"; 
import Reserve from "./pages/Reserve"; 
import './App.css';
import RegisterBooks from "./pages/RegisterBooks";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/borrows" element={<Borrows />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/books/register" element={<RegisterBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
