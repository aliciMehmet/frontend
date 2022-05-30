import React, { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket';
import { ToastContainer, toast } from 'react-toastify';

function WaiterHome({user}) {

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
            "command":"OPEN"+user.role,
            "token":user.token
          }
            sendMessage(JSON.stringify(obj))
        },
        onMessage:(message)=>{
         let obj = JSON.parse(message.data)
         let str = "Table "+obj.tableId+"'s order is ready!"
          toast.success(str,{
            autoClose:false,
            closeButton:true
        });
        },
      
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
      });

    const [socket, setSocket] = useState(null);

  
    socket && socket.addEventListener('message',function(event){
      console.log("event : ",event.data)
    })

  return (
    <div>
    
    WAITER
    
    </div>
  )
}

export default WaiterHome