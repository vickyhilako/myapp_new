import React from 'react'
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Homepage from './Components/Homepage';
import Register from './Components/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
