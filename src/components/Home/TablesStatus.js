import React, { useEffect, useState } from 'react'
import { Card, ListGroup, Row } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import { BusinessNavi } from '../BusinessNavi';
import Home from '../Home';


function TablesStatus() {
  const { user } = React.useContext(AuthContext)
  const [tables, setTables] = useState([])
  let a;

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
          a=table.status ? 'Occupied':"Available";
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
                  <div className='d-flex justify-content-center' style={{ marginTop: '2em' }}>




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

export default TablesStatus