import React, { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Card, ListGroup, Row } from 'react-bootstrap';
import { WaiterNavi } from '../WaiterNavi';

function WaiterHome({ user }) {

  const socketUrl = 'ws://localhost:8080/websocket';
  const [tables, setTables] = useState([])
  const [calls, setCalls] = useState([])



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
        "command": "OPEN" + user.role,
        "token": user.token
      }
      sendMessage(JSON.stringify(obj))
    },
    onMessage: (message) => {
      console.log(message.data)

      let obj = JSON.parse(message.data)

      if (obj.command == "ORDERREADY") {
        let str = "Table " + obj.tableId + "'s order is ready!"
        toast.success(str, {
          autoClose: false,
          closeButton: true

        });
        setTables(prevState => [...prevState, obj])

      } else if (obj.command == "CALL") {
        let str = "Table " + obj.tableId + " is calling you"

        toast.success(str, {
          autoClose: false,
          closeButton: true
        });
        setCalls(prevState => [...prevState, obj])
      }

    },

    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });

  const handleCall = (tableId) => {
    console.log(tableId)
    let remainingCalls = calls.filter((call) => {
      return call.tableId != tableId
    })

    setCalls(remainingCalls)
  }

  return (

    <div>
      <WaiterNavi />
      <br></br>
      <h2 className='text-center'>Waiting Orders</h2>

      <div className='container' style={{ marginTop: "1em" }}>
        {tables.map(table => {

          return (
            <Row>

              <Card style={{ width: '23rem', marginTop: '2em' }} className="mx-auto">
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Title className='text-center'>Table {table.tableId}</Card.Title>
                  <ListGroup variant="flush">

                  </ListGroup>
                  <div className='d-flex justify-content-center' style={{ marginTop: '2em' }}>

                    {/* <Link to={"detail/" + product.id} key={product.id}> */}
                    <Button variant="primary"  className>Complete Order</Button>
                    {/* </Link> */}

                  </div>


                </Card.Body>
              </Card>
            </Row>



          )
        })}
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <h2 className='text-center'>Waiting Calls</h2>

      <div className='container' style={{ marginTop: "1em" }}>
        {calls.map(call => {

          return (
            <Row>

              <Card style={{ width: '23rem', marginTop: '2em' }} className="mx-auto">
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Title className='text-center'>Table {call.tableId}</Card.Title>
                  <ListGroup variant="flush">

                  </ListGroup>
                  <div className='d-flex justify-content-center' style={{ marginTop: '2em' }}>

                    {/* <Link to={"detail/" + product.id} key={product.id}> */}
                    <Button variant="primary" onClick={() => handleCall(call.tableId)} className>Complete Call</Button>
                    {/* </Link> */}

                  </div>


                </Card.Body>
              </Card>
            </Row>



          )
        })}
      </div>

    </div>
  )
}

export default WaiterHome