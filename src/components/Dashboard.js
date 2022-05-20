import React from 'react'
import { AuthContext } from '../context/AuthContext'

function Dashboard() {
   const {logoutUser} =  React.useContext(AuthContext)
const logout = () => {
    logoutUser()
}

  return (
    <div onClick={() => logout()}>LOGOUT</div>
  )
}

export default Dashboard