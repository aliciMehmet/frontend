import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class WaiterNavi extends Component
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
					to="/">Ready Orders</NavLink>
					<NavLink className="d-inline p-2 bg-dark text-white"
					to="/callWaiter">Call A Waiter</NavLink>
					
					
				</Nav>
				</Navbar.Collapse>

                </div>

				
			</Navbar>
		)
	}
}
