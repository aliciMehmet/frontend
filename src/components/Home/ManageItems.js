import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import ProductService from '../../services/ProductService';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Denem() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const { user } = React.useContext(AuthContext)

  const updateItem = (e, item) => {
    e.preventDefault();

    item.name = e.target.ItemName.value
    item.price = e.target.ItemPrice.value
    item.stock = e.target.ItemStock.value

    let businessService = new BusinessService();
    businessService.updateItem(item).then(result => toast.success("Item updated successfully"))
    console.log(item)
  }

  useEffect(() => {
    let businessService = new BusinessService();
    businessService.getAllProducts(user.token).then(result => {
      if (result.data != null) {

        setCategories(Object.keys(result.data.data))
        setProducts(result.data.data)


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

                  <Form onSubmit={(e) => updateItem(e, item)}>
                    <Form.Group controlId="ItemName">
                      <Form.Label>
                        Item Name
                      </Form.Label>
                      <Form.Control
                      defaultValue={item.name}
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
                      defaultValue={item.price}
                        type="text"
                        name="ItemPrice"
                        required
                        placeholder={item.price}
                      />

                    </Form.Group>

                    <Form.Group controlId="ItemStock">
                      <Form.Label>
                        Item Stock
                      </Form.Label>
                      <Form.Control
                      defaultValue={item.stock}
                        type="text"
                        name="ItemStock"
                        required
                        placeholder={item.stock}
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