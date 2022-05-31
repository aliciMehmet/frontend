import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CustomerService from '../../services/CustomerService';
import { CustomerNavi } from '../CustomerNavi'
import { CustomerContext } from '../../context/CustomerContext'

export default function CustomerReceipt() {

    let total=0;

    const [orders,setOrders] = useState([])

    const {customer} = useContext(CustomerContext)

    useEffect(() => { 
 
       let customerService = new CustomerService();
       customerService.getReceipt(customer.businessId,customer.tableId).then(result => {setOrders(result.data.data)
        console.log(result.data.data)
        
    }
       )
       
 
     }, []);

  return (
    <div>
        <CustomerNavi/>
        <br></br>
        <h1 className='text-center'>Receipt</h1>
        <hr></hr>
                <div className="container" >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Count</th>
                                <th>Total Price</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(
                                    (order) =>
                                    {total = total+order.totalPrice;
                                    return(
                                        <tr >
                                        <td>{order.itemName}</td>
                                        <td>{order.count}</td>
                                        

                                        <td>{order.totalPrice}</td>


                                        {/* <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td> */}
                                    </tr>

                                    )
                                    }
                                       
                                )
                            }
                        </tbody>
                    </table>
                    <hr></hr>
                    <h4 className='text-center'>Total Price Of All Orders: {total}</h4>
                    
                </div>
            
    </div>
  )
}
