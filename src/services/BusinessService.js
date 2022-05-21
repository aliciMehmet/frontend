import axios from 'axios'


export default class BusinessService{
    getAllProducts(token){
        return axios.get("http://localhost:8080/admin/getAllProducts",{
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
    
}
