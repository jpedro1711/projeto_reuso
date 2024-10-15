import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Borrows from "./pages/Borrows";
import Login from "./pages/Login";
import Reserves from "./pages/Reserves";
import "./App.css";
import RegisterBooks from "./pages/RegisterBooks";
import RegisterReserves from "./pages/RegisterReserves";
import RegisterBorrows from "./pages/RegisterBorrows";
import EditBooks from "./pages/EditBooks";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/borrows" element={<Borrows />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reserves" element={<Reserves />} />
          <Route path="/books/register" element={<RegisterBooks />} />
          <Route path="/reserves/register" element={<RegisterReserves />} />
          <Route path="/borrows/register" element={<RegisterBorrows />} />
          {/* <Route path="/books/edit" element={<EditBooks />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
