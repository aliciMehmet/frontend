import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import BusinessService from '../../services/BusinessService';
import "./KitchenHome.css"

function KitchenHome({user}) {

    const options = {
        autoClose: false,
        hideProgressBar: false,
        pauseOnHover: true,
    };

    const [socket, setSocket] = useState(null);
    const [orders,setOrders] = useState([])
    
    useEffect(() => { 
       setSocket( new WebSocket('ws://localhost:8080/websocket')) 

      let businessService = new BusinessService();
      businessService.getWaitingOrders(user.token).then(result => setOrders(result.data.data))

    }, []);

    /*console.log("naber")
    socket && socket.addEventListener('message',function(event){
      let obj =  JSON.parse(event.data)
       console.log(obj)
      let notification = obj.count + " X " + obj.itemName
       toast.success(notification,{
           autoClose:false
       });
       setOrders(prevState => [...prevState,obj])
       console.log(orders)
     })*/

      
  
  const openSession = () => {
    var obj = {
      "command":"OPEN"+user.role,
      "token":user.token
    }
  
    socket.send(JSON.stringify(obj));

    socket.addEventListener('message',function(event){
      let obj =  JSON.parse(event.data)
       console.log(obj)
      let notification = obj.count + " X " + obj.itemName
       toast.success(notification,{
           autoClose:false
       });
       setOrders(prevState => [...prevState,obj])
       console.log(orders)
     })

  }

    //TODO
    const sendReadyMessage = (tableId) => {
      console.log("tableId: ",tableId)
        var obj = {
          "command":"ORDERREADY",
          "cafeId":1,
          "tableId":1
        }
        socket.send(JSON.stringify(obj));
      }

  return (
    <div id='kitchen_home'>
    
    KITCHEN
    <button className='btn btn-primary' onClick={()=> openSession()}>START TO WORK</button>
    

    <div id='waiting_orders'>
      {orders.map(order => {
        return(
          <div id='order_container'>
            <div>Item Name: {order.itemName}</div>
            <div>Count: {order.count}</div>
            <div>Table Number: {order.tableId}</div>
            <button onClick={()=> sendReadyMessage(order.tableId)}>ready</button>
            </div> 
        )
      })}
    </div>
    
    </div>
  )
}

export default KitchenHome