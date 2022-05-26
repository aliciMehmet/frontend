import React, { useEffect } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';

import "./BusinessHome.css"
import Denem from './ManageItems';


function BusinessHome() {
  const { user } = React.useContext(AuthContext)
  const getWaiters=()=>{
    let businessService = new BusinessService();


    businessService.getWaiters(user.token).then(result => {
      if (result.data != null) {
        
        console.log(result.data)


      }})}

      

  

  useEffect(() => {
    
  }, []);

  return (
    <div>
        <div id='business_header'>
      {/* <button className="btn btn-warning" onClick={() => getWaiters()}>Get Online Waiters</button>
      <button className="btn btn-warning" onClick={() => getEmployee()}>Get All Waiters</button>


            <Link to={"sdfsdf"}>Manage Items</Link>
            <Link to={"tablesStatus"}>Tables Status</Link>
            <Link to={"sdfsdf"}>Tables Status</Link> */}
            <div className='container'>
              <hr></hr>
            <h1 className='text-center' >Welcome</h1>

            </div>

        </div>
    </div>
  )
}

export default BusinessHome