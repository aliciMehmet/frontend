import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import { CustomerContext } from '../../context/CustomerContext';
import { ItemContext } from '../../context/ItemContext';
import ProductService from '../../services/ProductService';
import Category from '../Category';
import { CustomerNavi } from '../CustomerNavi';
import useWebSocket from 'react-use-websocket';


function CustomerHome() {

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    console.log(query)
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
  }

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading ,setLoading] = useState(true)

  const { addProducts } = React.useContext(ItemContext)
  const { loginCustomer } = React.useContext(CustomerContext)
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
        "command": "SEATTABLE",
        "tableId": getQueryVariable("tableId"),
        "cafeId": getQueryVariable("businessId")
      }
      sendMessage(JSON.stringify(obj))
    },
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {

    let customer = {
      "businessId": getQueryVariable("businessId"),
      "tableId": getQueryVariable("tableId")
    }

    loginCustomer(customer)
    setLoading(false)

    let productService = new ProductService();
    productService.getAllProducts(getQueryVariable("businessId")).then(result => {
      console.log(result.data)
      if (result.data != null) {
        setCategories(Object.keys(result.data.data))
        setProducts(result.data.data)
        console.log(categories)
        Object.keys(result.data.data).forEach(key => {
          for (var i = 0; i < result.data.data[key].length; i++) {
            addProducts(result.data.data[key][i])
          }

        })
      }
    })

  }, []);


  return (
    <div >
     { !isLoading && <CustomerNavi />}
      {

        categories.map(a => {
          return (

            <div>
              <h1 className='text-center' style={{ marginTop: '1em' }}>{a}'s</h1>
              {products[a].map(product => {
                return (

                  <div className='row d-flex justify-content-center'>
                    <Card style={{ width: '23rem', marginTop: '2em' }}>
                      <Card.Header></Card.Header>
                      <Card.Body>
                        <Card.Title className='text-center'>{product.name}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <div className='d-flex justify-content-center' style={{ marginTop: '2em' }}>

                          <Link to={"detail/" + product.id} key={product.id}>
                            <Button variant="primary" className>Order</Button>
                          </Link>

                        </div>

                      </Card.Body>
                    </Card>

                  </div>


                )

              })}

            </div>

          )
        })}

    </div>
  )
}

export default CustomerHome