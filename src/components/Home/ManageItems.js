import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import ProductService from '../../services/ProductService';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { BusinessNavi } from '../BusinessNavi';

function Denem() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const { user } = React.useContext(AuthContext)




  

  const deleteItem = (e, item) => {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      console.log(item.id);
      let businessService = new BusinessService();
      businessService.deleteItem(item).then(result => toast.success("Item deleted successfully"))

    }

    return;
  }

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
      <BusinessNavi/>

      <div className='container'>
        {categories.length > 0 && categories.map(a => {
          return (
            <div  className='row' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h1 style={{ textAlign: "center", margin: "2% 0" }}>{a}</h1>
              <div className='d-flex justify-content-center'> <Link to="/addItem" state={{ businessId:products[a][0].businessId, category: a }}>
              <button style={{  marginBottom: "50px" }} className='btn btn-primary align-center'>Add item for this category</button>
              </Link></div> 
              
              
              {products[a] && products[a].map(item =>
                <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "5%" }}>

                  <Form onSubmit={(e) => updateItem(e, item)}>
                    <Form.Group className='d-flex container' controlId="ItemName">
                      <Form.Label className=''>
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
                    <Form.Group className='d-flex' controlId="ItemPrice">
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

                    <Form.Group className='d-flex m-auto' controlId="ItemStock">
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

                    <div className='row justify-content-center'>
                    <div className='col-3'><Form.Group className=''><Button variant="primary" type="submit">
                      Update
                    </Button></Form.Group></div>
                    <div className='col-3'>
                    <td><button className="btn btn-warning" onClick={(e) => deleteItem(e, item)}>Delete</button></td>
                    </div>

                    </div>
                      
                    
                    
                    
                    

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