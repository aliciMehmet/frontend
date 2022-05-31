import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { CustomerContext } from '../../context/CustomerContext';
import BusinessService from '../../services/BusinessService';
import CustomerService from '../../services/CustomerService';
import { CustomerNavi } from '../CustomerNavi'

export default function CallWaiter() {
    const {customer} = useContext(CustomerContext)
  
  
  
     function callWaiter(){
        
        let customerService = new CustomerService();
        customerService.callWaiter(customer.businessId,customer.tableId).then(result => {
          if (result) {
    
            console.log("başarılı");
          
    
              
    
    
          }}).catch(error=> console.log(error.message))}
    


  return(
    <div>
        <CustomerNavi/>
        <br/><br/><br/><br/>
        <div className='row d-flex justify-content-center' size="lg">
        <button className="btn btn-primary btn-lg" onClick={() => callWaiter()}>Call Waiter</button>
            </div>




    </div>
  )
}
