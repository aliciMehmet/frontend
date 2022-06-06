import React,{Component, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import { CustomerContext } from '../context/CustomerContext';

export class CustomerNavi extends Component

{
	static contextType = CustomerContext
    
	render()
    
	{
		const {customer,loginCustomer} =this.context;
        // const {customer} = useContext(CustomerContext)
		return(
			<Navbar style={{backgroundColor:'#4a8dd1'}} expand="lg">
                <div className='container'>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className='d-flex justify-content-center'>
                 <NavLink className="d-inline p-2 bg-dark text-white"
					to={`/customer?businessId=${customer.businessId}&tableId=${customer.tableId}`}>Menu</NavLink> 
					<NavLink className="d-inline p-2 bg-dark text-white"
					to={`/customerReceipt/`}>Get Receipt</NavLink>
					<NavLink className="d-inline p-2 bg-dark text-white"
					to="/callWaiter">Call A Waiter</NavLink>
					
				</Nav>
				</Navbar.Collapse>

                </div>

				
			</Navbar>
		)
	}
}
