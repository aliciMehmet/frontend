import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CustomerService from '../../services/CustomerService';
import { CustomerNavi } from '../CustomerNavi'
import { CustomerContext } from '../../context/CustomerContext'

export default function CustomerReceipt() {

    const [orders,setOrders] = useState([])

    const {customer} = useContext(CustomerContext)

    useEffect(() => { 
 
       let customerService = new CustomerService();
       customerService.getReceipt(customer.businessId,customer.tableId).then(result => setOrders(result.data.data)
       
       )
       console.log(orders)
 
     }, []);

  return (
    <div>
            
    </div>
  )
}
