import React, { useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';

export default function OnlineWaiters() {
  const { user } = React.useContext(AuthContext)


    useEffect(() => {
        getWaiters();
    }, []);

    const getWaiters=()=>{
        let businessService = new BusinessService();
    
    
        businessService.getWaiters(user.token).then(result => {
          if (result.data != null) {
            
            console.log(result.data)
    
    
          }})}
  return (
    <div>OnlineWaiters</div>
  )
}
