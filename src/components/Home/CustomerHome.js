import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { CustomerContext } from '../../context/CustomerContext';
import { ItemContext } from '../../context/ItemContext';
import ProductService from '../../services/ProductService';
import Category from '../Category';
import useWebSocket from 'react-use-websocket';

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

    const socketUrl = 'ws://localhost:8080/websocket';

    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
      } = useWebSocket(socketUrl, {
        onOpen: () => {
            let obj = {
                "command":"SEATTABLE",
                "tableId":getQueryVariable("tableId"),
                "cafeId":getQueryVariable("businessId")
            }
            sendMessage(JSON.stringify(obj))
        },
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
      });


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

        let productService = new ProductService();
        productService.getAllProducts(businessId).then(result => {
            if(result.data != null){
               // setProducts(result.data.data) 
               
             categories.length == 0 && setCategories(Object.keys(result.data.data))
              setProducts(result.data.data)
              console.log(result.data.data)
              Object.keys(result.data.data).forEach(key =>{
                  for(var i = 0; i < result.data.data[key].length; i++){
                    addProducts(result.data.data[key][i])
                  }
                
              })
            }
        })

            
    }, [categories]);

  
    return(
        <div>
            {categories.map(a => {
                 return <Category category={a} products = {products} key={a} />
              })}
        </div>
    )
    
  
}

export default CustomerHome