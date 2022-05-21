import axios from 'axios'


export default class BusinessService{
    getAllProducts(token){
        return axios.get("http://localhost:8080/admin/getAllProducts",{
            params:{
                token:token
            }
        })
    }

    
}
