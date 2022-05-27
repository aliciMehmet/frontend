import Login from "./components/Login";
import AuthContextProvider from "./context/AuthContext";
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './boostrap.css';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Topics from "./components/Topics";
import Home from "./components/Home";
import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import CustomerHome from "./components/Home/CustomerHome";
import ItemDetail from "./components/ItemDetail";
import ItemContextProvider from "./context/ItemContext";
import Denem from "./components/Home/ManageItems";
import AddItem from "./components/Home/AddItem";
import OnlineWaiters from "./components/Home/OnlineWaiters";
import AllWaiters from "./components/Home/AllWaiters";
import AllOrders from "./components/Home/AllOrders";
import CustomerContextProvider from "./context/CustomerContext";

function App() {

  
  return (
    <div className="App">
      <ToastContainer />
      <AuthContextProvider>
      <ItemContextProvider>
        <CustomerContextProvider>
      <Router>
        
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/customer/"  element={<CustomerHome/>} />
          <Route path="/customer/detail/:itemId" element={<ItemDetail/>} />
          <Route path="/topics" element={<Topics/>} />
          <Route path="/sdfsdf" element={<Denem/>} />
          <Route path="/addItem" element={<AddItem/>} />
          <Route path="/onlineWaiters" element={<OnlineWaiters/>} />
          <Route path="/allWaiters" element={<AllWaiters/>} />
          <Route path="/allOrders" element={<AllOrders/>} />




          <Route path="/" element={<Home/>} />

        </Routes>
       
    </Router>
    </CustomerContextProvider>
    </ItemContextProvider>
    </AuthContextProvider>
    </div>
  );
}

export default App;
