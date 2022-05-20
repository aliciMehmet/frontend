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
import CustomerHome from "./components/CustomerHome";
import ItemDetail from "./components/ItemDetail";
import ItemContextProvider from "./context/ItemContext";

function App() {
  
  return (
    <div className="App">
      <ToastContainer />
      <AuthContextProvider>
      <ItemContextProvider>
      <Dashboard />
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/customer/"  element={<CustomerHome/>} />
          <Route path="/customer/detail/:itemId" element={<ItemDetail/>} />
          <Route path="/topics" element={<Topics/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
       
      </div>
    </Router>
    
    </ItemContextProvider>
    </AuthContextProvider>
    </div>
  );
}

export default App;
