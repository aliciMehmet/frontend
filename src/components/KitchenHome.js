import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function KitchenHome({user}) {

    const options = {
        autoClose: false,
        hideProgressBar: false,
        pauseOnHover: true,
    };

    const [socket, setSocket] = useState(null);

    useEffect(() => {
      setSocket( new WebSocket('ws://localhost:8080/websocket'))
    }, []);
  
  const openSession = () => {
    var obj = {
      "command":"OPEN"+user.role,
      "token":user.token
    }
  
    socket.send(JSON.stringify(obj));
  }
  
    socket && socket.addEventListener('message',function(event){
      console.log("event : ",event.data)
     let obj =  JSON.parse(event.data)

     console.log(obj.command)
      toast.success("sdhufsdf",{
          autoClose:false
      });
    })

    const sendReadyMessage = () => {
        var obj = {
          "command":"ORDERREADY",
          "cafeId":1,
          "tableId":1
        }
        socket.send(JSON.stringify(obj));
      }

  return (
    <div>
    
    KITCHEN
    <button onClick={()=> openSession()}>START TO WORK</button>
    <button onClick={()=> sendReadyMessage()}>ready</button>
    
    </div>
  )
}

export default KitchenHome