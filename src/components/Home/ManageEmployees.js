import { Business } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import { BusinessNavi } from '../BusinessNavi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';



export default function ManageEmployees() {
    const { user } = React.useContext(AuthContext)

    const [waiters, setWaiters] = useState([])
    const [kitchen, setKitchen] = useState([])

    const deleteUser = (userr) => {

        if (window.confirm('Are you sure?')) {
            let businessService = new BusinessService();
            businessService.deleteUser(userr).then(result => toast.success("User deleted successfully"))

        }
    }

    useEffect(() => {
        let businessService = new BusinessService();
        businessService.getEmployee(user.token, "WAITER").then(result => {
            if (result.data != null) {

                console.log(result.data.data)
                setWaiters(result.data.data)



            }
        })

        businessService.getEmployee(user.token, "KITCHEN").then(result => {
            if (result.data != null) {

                console.log(result.data)
                setKitchen(result.data.data)



            }
        })
    }, []);

    return (
        <div>
            <BusinessNavi />
            <div>
                <br></br>
                <h1 className='text-center'>Waiters</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Business ID</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                waiters.map(
                                    (us) =>
                                        <tr key={us.id}>
                                            <td>{us.id}</td>
                                            <td>{us.username}</td>


                                            <td>{us.businessId}</td>
                                            <td>{us.role}</td>

                                            <td><Button onClick={() => deleteUser(us)} variant="danger" className>Delete</Button></td>
                                            {/* <td><button className="btn btn-warning" onClick={() => this.deleteUser(us.id)}>Delete</button></td> */}
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>

            <div>
                <br></br>
                <h1 className='text-center'>Kitchen</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Business ID</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                kitchen.map(
                                    (us) =>
                                        <tr key={us.id}>
                                            <td>{us.id}</td>
                                            <td>{us.username}</td>


                                            <td>{us.businessId}</td>
                                            <td>{us.role}</td>
                                            <td><Button onClick={() => deleteUser(us.id)} variant="danger" className>Delete</Button></td>



                                            {/* <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td> */}
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row d-flex justify-content-center" >
                        <Link to="/addUser">
                            <button style={{ marginBottom: "50px" }} className='btn btn-primary align-center'>Add an employee</button>
                        </Link>


                    </div>
                </div>
            </div>

        </div>
    )
}
