import React, { useEffect, useState } from 'react'
import { Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import ProductService from '../../services/ProductService';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
function AddItem(props) {
    const location = useLocation()
    const { category } = location.state;
    const { businessId } = location.state

    const navigate = useNavigate();

    useEffect(() => {
        console.log(category)
        console.log(businessId)

    })

    const handleAddItem = (e) => {
        e.preventDefault();
        console.log(props.category)


        let item = {
            businessId: businessId,
            name: e.target.ItemName.value,
            category: category,
            price: e.target.ItemPrice.value,
            stock: e.target.ItemStock.value
        };
        
        console.log(item);
        let businessService = new BusinessService();
        businessService.addItem(item).then(result => {
            toast.success("Item added successfully");
            navigate("/sdfsdf");

        })

    }


    return (
        <div className='container'>
            <div className='row '>
                Add Item
            </div>
            <Form onSubmit={(e) => handleAddItem(e)}>
                <Form.Group controlId="ItemName">
                    <Form.Label>
                        Item Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="ItemName"
                        required
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
                    />

                </Form.Group>

                <Form.Group controlId="ItemStock">
                    <Form.Label>
                        Item Stock
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="ItemStock"
                        required
                    />

                </Form.Group>


                <Form.Group><Button variant="primary" type="submit">
                    Add
                </Button></Form.Group>


            </Form>


        </div>

    )
}
export default AddItem
