import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, Modal, Row } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import CustomerService from '../../services/CustomerService';
import { BusinessNavi } from '../BusinessNavi';
import Home from '../Home';


function TablesStatus() {
  const { user } = React.useContext(AuthContext)
  const [tables, setTables] = useState([])
  let a;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [orders,setOrders] = useState([])


  const getReceipt = (tableId) => {

    console.log(user.businessId)
    let businessService = new BusinessService();
    businessService.getReceipt(user.token,tableId).then(result => {setOrders(result.data.data)
     console.log(orders)
     setShow(true)
     
 }
    )



  }

  const completePayment = (tableId) => {

    console.log(user.businessId)
    let businessService = new BusinessService();
    businessService.completePayment(user.token,tableId).then(result => {
     console.log(result)
     
 }
    )



  }




  useEffect(() => {
    let businessService = new BusinessService();
    businessService.getTablesStatus(user.token).then(result => {
      console.log(result.data.data)
      setTables(result.data.data)

    })
  }, []);
  return (
    <div>
      <BusinessNavi />
      <div className='container' style={{ marginTop: "3em" }}>
        {tables.map(table => {
          a = table.status ? 'Occupied' : "Available";
          return (
            <Row>

              <Card style={{ width: '23rem', marginTop: '2em' }} className="mx-auto">
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Title className='text-center'>Table {table.tableId}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="text-center" style={{
                      backgroundColor: table.status ? 'red' : 'rgb(99, 194, 80)'
                    }}>Status: {a}</ListGroup.Item>
                  </ListGroup>
                  { 
                     a = table.status &&
                    <div className='d-flex justify-content-between' style={{ marginTop: '2em' }}>

                    <Button onClick={() => getReceipt(table.tableId)} variant="primary" className>Get Receipt</Button>
                    <Button onClick={() => completePayment(table.tableId)} variant="success" className>Complete Payment</Button>
                    
                    

                  </div>

                  }
                  
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Receipt</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>

                </Card.Body>
              </Card>
            </Row>



          )
        })}
      </div>


    </div>

  )
}

export default TablesStatus