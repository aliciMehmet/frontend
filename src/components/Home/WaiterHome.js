import React, { useEffect, useState } from 'react'

function WaiterHome({user}) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
      setSocket( new WebSocket('ws://localhost:8080/websocket'))
    }, []);
  
  const openSession = () => {
      console.log("openSession cagrıldı")
    var obj = {
      "command":"OPEN"+user.role,
      "token":user.token
    }
  
    socket.send(JSON.stringify(obj));
  }
  
    socket && socket.addEventListener('message',function(event){
      console.log("event : ",event.data)
    })
  return (
    <div>
    
    WAITER

    <button onClick={()=> openSession()}>START TO WORK</button>
    
    </div>
  )
}

export default WaiterHome