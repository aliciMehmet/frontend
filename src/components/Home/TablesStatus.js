import React, { useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import Home from '../Home';

function TablesStatus() {
    const {user} = React.useContext(AuthContext)
    const [tables,setTables] = useState(new Map())

    useEffect(() => {
        let businessService = new BusinessService();
        businessService.getTablesStatus(user.token).then(result => {

          if (result.data != null) {
            let map = new Map()
            Object.keys(result.data.data).forEach(key =>{
                map.set(key, result.data.data[key])
            })

            setTables(map)

          }
        })
      }, []);
  return (
    <div>
    {tables.map((value,key,map) => {
      return  <Home />
         
      
         
    })}
    </div>
  )
}

export default TablesStatus