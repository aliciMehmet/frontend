import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import BusinessService from '../../services/BusinessService';
import ProductService from '../../services/ProductService';
import "./ManageItem.css"

function Denem() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const { user } = React.useContext(AuthContext)

  const [name,setName] = useState('')

  const updateItem = (name,itemId) => {
    console.log("name : ",name)
    console.log("itemId : ",itemId)
  }

  useEffect(() => {
    let businessService = new BusinessService();
    businessService.getAllProducts(user.token).then(result => {
      if (result.data != null) {

        setCategories(Object.keys(result.data.data))
        console.log("result.data.data : ", result.data.data)
        console.log("categories : ", categories)
        setProducts(result.data.data)

        console.log("all products : ", products)

      }
    })
  }, []);


  return (
    <div>
      
    <div>
      {categories.length > 0 && categories.map(a => {
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ textAlign: "center", margin: "5% 0" }}>{a}</h1>
            {products[a] && products[a].map(item =>
              <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "5%" }}>
                <div>
                  <div>Item name</div>
                  <Input placeholder={item.name}></Input>
                </div>
                <div>
                  <div>Item Price</div>
                  <Input placeholder={item.price}></Input>
                </div>
                <button onClick={() => updateItem()} style={{borderRadius:"16px"}}>Update</button>
              </div>
            )}

          </div>
        )
      })}

    </div>
  
    </div>
  )
}

export default Denem