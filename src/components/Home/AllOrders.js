import React, { useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import { BusinessNavi } from '../BusinessNavi';

export default function AllOrders() {

  const { user } = React.useContext(AuthContext)
  const [orders, setOrders] = useState([])


  useEffect(() => {
    let businessService = new BusinessService();

    businessService.getAllOrders(user.token).then(result => {
      if (result.data != null) {

        console.log(result.data.data)
        setOrders(result.data.data)


      }
    })

  }, []);
  return (

    <div className><BusinessNavi />
      
      <div>
                <br></br>
                <h1 className='text-center'>Orders</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Count</th>
                                <th>Item Id</th>
                                <th>Item Name</th>
                                <th>Table Id</th>
                                <th>Is served?</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(
                                    (order) =>
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.count}</td>
                                            <td>{order.itemId}</td>
                                            <td>{order.itemName}</td>
                                            <td>{order.tableId}</td>
                                            <td>{order.isServed}</td>



                                            {/* <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td> */}
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    
                </div>
            </div>

    </div>

  )
}
