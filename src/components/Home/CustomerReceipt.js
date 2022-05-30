import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CustomerService from '../../services/CustomerService';
import { CustomerNavi } from '../CustomerNavi'

export default function CustomerReceipt() {

    const [orders,setOrders] = useState([])

    const location = useLocation()
    const { businessId } = location.state;
    const { tableId } = location.state

    useEffect(() => { 
 
       let customerService = new CustomerService();
       customerService.getReceipt(businessId,tableId).then(result => setOrders(result.data.data)
       
       )
       console.log(orders)
 
     }, []);

  return (
    <div>
            
    </div>
  )
}
