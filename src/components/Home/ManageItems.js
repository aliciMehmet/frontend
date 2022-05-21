import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import ProductService from '../../services/ProductService';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

function Denem() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const { user } = React.useContext(AuthContext)

  const [name, setName] = useState('')

  const updateItem = (e, itemId) => {
    e.preventDefault();

    console.log("name : ", e.target.ItemName.value)
    console.log("itemPrice : ", e.target.ItemPrice.value)
    console.log(itemId)
  }

  useEffect(() => {
    let businessService = new BusinessService();
    businessService.getAllProducts(user.token).then(result => {
      if (result.data != null) {

        setCategories(Object.keys(result.data.data))
        console.log("result.data.data : ", result.data.data)
        console.log("categories : ", categories)
        setProducts(result.data.data)

        console.log("all products : ", products)

      }
    })
  }, []);


  return (
    <div>

      <div>
        {categories.length > 0 && categories.map(a => {
          return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h1 style={{ textAlign: "center", margin: "5% 0" }}>{a}</h1>
              {products[a] && products[a].map(item =>
                <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "5%" }}>

                  <Form onSubmit={(e) => updateItem(e, item.id)}>
                    <Form.Group controlId="ItemName">
                      <Form.Label>
                        Item Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="ItemName"
                        required
                        placeholder={item.name}
                      />


                    </Form.Group>
                    <Form.Group controlId="ItemPrice">
                      <Form.Label>
                        Item Price
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="ItemPrice"
                        required
                        placeholder={item.price}
                      />

                    </Form.Group>


                    <Form.Group><Button variant="primary" type="submit">
                      Update
                    </Button></Form.Group>

                  </Form>

                </div>
              )}

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Denem