import React, { useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import BusinessHome from './Home/BusinessHome';
import KitchenHome from './Home/KitchenHome';
import Login from "./Login";
import WaiterHome from './Home/WaiterHome';
import { BusinessNavi } from './BusinessNavi';

function Home() {

  const {user} = React.useContext(AuthContext)

 
  if(user == null){
    console.log("null")
    return <Login />
  }
  else if(user.role == "WAITER"){
     return ( 
     <div>
        <BusinessNavi/> 
        <WaiterHome user={user} />
     </div> 
     )
  }
  else if(user.role == "ADMIN"){
    return( 
        <div>
          <BusinessNavi/>
          <BusinessHome user={user} />
        </div>


    ) 
  }
else if(user.role === "KITCHEN"){
  return <KitchenHome user={user} />
}
}

export default Home