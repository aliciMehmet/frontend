import React from 'react'
import { AuthContext } from '../context/AuthContext'
import Login from "./Login";


function About() {
  const {user} = React.useContext(AuthContext)
  
  if(user == null){
    console.log("null")
    return <Login />
  }
  else if(user.role == "WAITER"){
    return <div>Waiter</div>
  }
  else if(user.role == "ADMIN"){
    return <div>Admin</div>
  }
else {
  return <div>ne oluyor lan</div>
}

}
export default About