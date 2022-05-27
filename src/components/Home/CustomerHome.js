import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { CustomerContext } from '../../context/CustomerContext';
import { ItemContext } from '../../context/ItemContext';
import ProductService from '../../services/ProductService';
import Category from '../Category';

function CustomerHome() {

    function getQueryVariable(variable)
{
        var query = window.location.search.substring(1);
        console.log(query)
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
         }
         return(false);
}

    

    const [products,setProducts] = useState([])
    const [businessId,setBusinessId] = useState(0)
    const [tableId,setTableId] = useState(0)
    const [categories,setCategories] = useState([])
    const [socket, setSocket] = useState(null);


    const {addProducts} = React.useContext(ItemContext) 
    const {loginCustomer} = React.useContext(CustomerContext) 

    useEffect(() => {
        setBusinessId(getQueryVariable("businessId")); 
        setTableId(getQueryVariable("tableId"));

        let customer = {
            "tableId":tableId
        }

        loginCustomer(customer)

       !socket && setSocket( new WebSocket('ws://localhost:8080/websocket'))

        var obj = {
            "command":"SEATTABLE",
            "cafeId":businessId,
            "tableId":tableId
          }
        
        socket && socket.readyState == 1 &&  socket.send(JSON.stringify(obj));

        console.log(socket)

        let productService = new ProductService();
        productService.getAllProducts(businessId).then(result => {
            if(result.data != null){
               // setProducts(result.data.data)
               
              setCategories(Object.keys(result.data.data))
              setProducts(result.data.data)
              Object.keys(result.data.data).forEach(key =>{
                  for(var i = 0; i < result.data.data[key].length; i++){
                    addProducts(result.data.data[key][i])
                  }
                
              })
            }
        })

            
    }, [socket]);

  
    return(
        <div>
            {categories.map(a => {
                 return <Category category={a} products = {products} key={a} />
              })}
        </div>
    )
    
  
}

export default CustomerHome