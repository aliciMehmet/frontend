import Login from "./components/Login";
import AuthContextProvider from "./context/AuthContext";
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Topics from "./components/Topics";
import Home from "./components/Home";
import React from "react";
import Dashboard from "./components/Dashboard";
import CustomerHome from "./components/Home/CustomerHome";
import ItemDetail from "./components/ItemDetail";
import ItemContextProvider from "./context/ItemContext";
import Denem from "./components/Home/ManageItems";

function App() {
  
  return (
    <div className="App">
      <ToastContainer />
      <AuthContextProvider>
      <ItemContextProvider>
      <Router>
        
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/customer/"  element={<CustomerHome/>} />
          <Route path="/customer/detail/:itemId" element={<ItemDetail/>} />
          <Route path="/topics" element={<Topics/>} />
          <Route path="/sdfsdf" element={<Denem/>} />
          <Route path="/" element={<Home/>} />

        </Routes>
       
    </Router>
    
    </ItemContextProvider>
    </AuthContextProvider>
    </div>
  );
}

export default App;
