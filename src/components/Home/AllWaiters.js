import React, { useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import BusinessService from '../../services/BusinessService';

export default function AllWaiters() {

  const { user } = React.useContext(AuthContext)
  const getEmployee=()=>{
    let businessService = new BusinessService();


    businessService.getEmployee(user.token,"WAITER").then(result => {
      if (result.data != null) {
        
        console.log(result.data)


      }})}
      useEffect(() => {
        getEmployee();
    }, []);

  return (
    <div>AllWaiters</div>
  )
}
