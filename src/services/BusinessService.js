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

    getWaitingOrders(token){
        return axios.get("http://localhost:8080/admin/getWaitingOrders",{
            params:{
                token:token
            }
        })
    }
    deleteUser(userId){
        return axios.post("http://localhost:8080/admin/deleteUser",{
            params:{
                userId:userId
            }
        })
    }
    addUser(user){
        return axios.post("http://localhost:8080/admin/addUser",
        user
         
     )
    }
    getUserById(id){
        return axios.get("http://localhost:8080/admin/getUserById",{
            params:{
                id:id
            }
        }
       
         
     )
    }
    getReceipt(token,tableId){
        return axios.get("http://localhost:8080/admin/getReceipt",{
            params:{
                token:token,
                tableId:tableId
            }
        })
    }

    completePayment(token,tableId){
        return axios.get("http://localhost:8080/admin/completePayment",{
            params:{
                token:token,
                tableId:tableId
            }
        })
    }
    
    
}
