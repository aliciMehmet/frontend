import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class KitchenNavi extends Component
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
					to="/">Home</NavLink>
					
					
					
				</Nav>
				</Navbar.Collapse>

                </div>

				
			</Navbar>
		)
	}
}
