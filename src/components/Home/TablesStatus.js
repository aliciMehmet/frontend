import React, { useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import Home from '../Home';
import "./TablesStatus.css"

function TablesStatus() {
    const {user} = React.useContext(AuthContext)
    const [tables,setTables] = useState([])

    useEffect(() => {
        let businessService = new BusinessService();
        businessService.getTablesStatus(user.token).then(result => {
          console.log(result.data.data)
          setTables(result.data.data)

        })
      }, []);
  return (
    <div id='table_container'>
      {tables.map(table => {
        return (
          <div style={{
            backgroundColor: table.status ? 'red' : 'rgb(99, 194, 80)'
          }} className='table'>{table.tableId}</div>
        )
      })}
    </div>
  )
}

export default TablesStatus