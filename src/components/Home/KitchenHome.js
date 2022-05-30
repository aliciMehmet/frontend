import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import BusinessService from '../../services/BusinessService';
import "./KitchenHome.css"
import useWebSocket from 'react-use-websocket';

function KitchenHome({user}) {

    const options = {
        autoClose: false,
        hideProgressBar: false,
        pauseOnHover: true,
    };

    const socketUrl = 'ws://localhost:8080/websocket';

    const {
      sendMessage,
      sendJsonMessage,
      lastMessage,
      lastJsonMessage,
      readyState,
      getWebSocket,
    } = useWebSocket(socketUrl, {
      onOpen: () => {

        let obj = {
          "command": "OPENKITCHEN",
          "token": user.token
        }

        sendMessage(JSON.stringify(obj))
      },
      onmessage:(event)=>{
      let obj =  JSON.parse(event.data)

      let notification = obj.count + " X " + obj.itemName
       toast.success(notification,{
           autoClose:false
       });

       setOrders(prevState => [...prevState,obj])
      },
      //Will attempt to reconnect on all close events, such as server shutting down
      shouldReconnect: (closeEvent) => true,
    });

    const [orders,setOrders] = useState([])
    
    useEffect(() => { 
      let businessService = new BusinessService();
      businessService.getWaitingOrders(user.token).then(result => setOrders(result.data.data))

    }, []);


    const sendReadyMessage = (tableId) => {
        var obj = {
          "command":"ORDERREADY",
          "token":user.token,
          "tableId":tableId
        }

        sendMessage(JSON.stringify(obj));
      }

  return (
    <div id='kitchen_home'>
    
    KITCHEN

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