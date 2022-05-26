import axios from 'axios'


export default class BusinessService{
    getAllProducts(token){
        return axios.get("http://localhost:8080/admin/getAllProducts",{
            params:{
                token:token
            }
        })
    }

    getTablesStatus(token){
        return axios.get("http://localhost:8080/admin/getTablesStatus",{
            params:{
                token:token
            }
        })
    }

    updateItem(item){
        return axios.post("http://localhost:8080/admin/updateItem",
           item
            
        )
    }

    deleteItem(item){
        return axios.post("http://localhost:8080/admin/deleteItem",
        item
         
     )
    }
    addItem(item){
        return axios.post("http://localhost:8080/admin/addItem",
        item
         
     )
    }
    getWaiters(token){
        return axios.get("http://localhost:8080/admin/getOnlineWaiters",{
            params:{
                token:token
            }
        })
    }
    getEmployee(token,role){
        return axios.get("http://localhost:8080/admin/getEmployee",{
            params:{
                token:token,
                role:role
            }
        })
    }
    getAllOrders(token){
        return axios.get("http://localhost:8080/admin/getAllOrders",{
            params:{
                token:token
            }
        })
    }
    
}
