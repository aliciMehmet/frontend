import React from 'react'
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import { Modal, Button, Row, Col, Form, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Navigate, Link, useLocation, useNavigate } from 'react-router-dom';


export default function AddUser() {

    const { user } = React.useContext(AuthContext)


    const handleAddUser = (e) => {
        e.preventDefault();
        


        let newuser = {
            
            username: e.target.UserName.value,
            password: e.target.UserPassword,
            businessId: user.businessId,
            role: e.target.UserRole.value,
        };
        
        console.log(newuser);
        let businessService = new BusinessService();
        businessService.addUser(newuser).then(result => {
            toast.success("User added successfully");
            Navigate("/manageEmployees");

        })

    }


  return (
    <div className='container d-flex justify-content-center '>
            <div className='row '>
               
            </div>
            <Card>
            <Card.Title className='text-center'>Add Item</Card.Title>  
            <Card.Body>
            <Form onSubmit={(e) => handleAddUser(e)}>
                <Form.Group controlId="UserName">
                    <Form.Label>
                        User Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="UserName"
                        required
                    />


                </Form.Group>
                <Form.Group controlId="UserPassword">
                    <Form.Label>
                        User Password
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="UserPassword"
                        required
                    />

                </Form.Group>

                <Form.Group controlId="UserRole">
                    <Form.Label>
                        User Role
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="UserRole"
                        required
                    />

                </Form.Group>


                <Form.Group><Button variant="primary" type="submit">
                    Add
                </Button></Form.Group>


            </Form>

            </Card.Body>
            

            </Card>
            


        </div>

  )
}
