import React, { useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import KitchenHome from './Home/KitchenHome';
import Login from "./Login";
import WaiterHome from './Home/WaiterHome';

function Home() {

  const {user} = React.useContext(AuthContext)


  if(user == null){
    console.log("null")
    return <Login />
  }
  else if(user.role == "WAITER"){
     return <WaiterHome user={user} />
  }
  else if(user.role == "ADMIN"){
    return <div>Admin</div>
  }
else if(user.role === "KITCHEN"){
  return <KitchenHome user={user} />
}
}

export default Home