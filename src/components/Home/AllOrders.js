import React from 'react'
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';

export default function AllOrders() {

    const { user } = React.useContext(AuthContext)
    const getAllOrders=()=>{
        let businessService = new BusinessService();
    
    
        businessService.getAllOrders(user.token).then(result => {
          if (result.data != null) {
            
            console.log(result.data)
    
    
          }})}
  return (
    <div className='container'>AllOrders
    <button className="btn btn-warning" onClick={() => getAllOrders()}>Get All Orders</button>
    
    </div>

  )
}
