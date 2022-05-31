import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import BusinessService from '../../services/BusinessService';
import useWebSocket from 'react-use-websocket';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { KitchenNavi } from '../KitchenNavi';

function KitchenHome({user}) {

    const [orders,setOrders] = useState([])

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
      onMessage:(message)=>{
        console.log(message.data)
      let obj =  JSON.parse(message.data)

      let notification = obj.count + " X " + obj.itemName
       toast.success(notification,{
           autoClose:false
       });

       setOrders(prevState => [...prevState,obj])
      },
      //Will attempt to reconnect on all close events, such as server shutting down
      shouldReconnect: (closeEvent) => true,
    });

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
    
    <KitchenNavi/>
    <br></br>
    <h2 className='text-center'>Waiting Orders</h2>
    <div id='waiting_orders'>
      {orders.map(order => {
        return(
          <Card style={{ width: '23rem', marginTop: '2em' }} className="mx-auto">
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Title className='text-center'>{order.itemName}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Count: {order.count}</ListGroup.Item>
                    <ListGroup.Item>Table Number: {order.tableId}</ListGroup.Item>
                  </ListGroup>
                  <div className='d-flex justify-content-center' style={{ marginTop: '2em' }}>

                   
                      <Button onClick={() => sendReadyMessage(order.tableId)} variant="primary" className>Ready</Button>
                    

                  </div>

                </Card.Body>
              </Card>
        )
      })}
    </div>
    
    </div>
  )
}

export default KitchenHome