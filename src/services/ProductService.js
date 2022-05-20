import axios from 'axios'


export default class ProductService{
    getAllProducts(businessId){
        return axios.get("http://localhost:8080/customer/getAllProducts",{
            params:{
                cafeId:businessId
            }
        })
    }

    makeOrder(businessId,itemName,count){
        return axios.post("http://localhost:8080/customer/makeOrder",{
            
                businessId:1,
                itemName:itemName,
                count:count
            
        })
    }
}
