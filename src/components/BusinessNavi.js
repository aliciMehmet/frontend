import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';




export class BusinessNavi extends Component
{
	render()
	{
		return(
			<Navbar bg="dark" expand="lg">
                <div className='container'>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className='d-flex justify-content-center'>
					<NavLink className="d-inline p-2 bg-dark text-white"
					to="/manageItems">Manage Items</NavLink>
					<NavLink className="d-inline p-2 bg-dark text-white"
					to="/onlineWaiters">Online Waiters</NavLink>
					
					<NavLink className="d-inline p-2 bg-dark text-white"
					to="/tablesStatus">Tables Status</NavLink>
					<NavLink className="d-inline p-2 bg-dark text-white"
					to="/manageEmployees">Manage Employees</NavLink>
					<NavLink className="d-inline p-2 bg-dark text-white"
					to="/allOrders">All Orders</NavLink>
				</Nav>
				</Navbar.Collapse>

                </div>

				
			</Navbar>
		)
	}
}
