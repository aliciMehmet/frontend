import axios from 'axios'


export default class ProductService{
    getAllProducts(businessId){
        return axios.get("http://localhost:8080/customer/getAllProducts",{
            params:{
                cafeId:businessId
            }
        })
    }

    makeOrder(businessId,tableId,itemId,count){
        return axios.post("http://localhost:8080/customer/makeOrder",{
            
                businessId:businessId,
                tableId:tableId,
                itemId:itemId,
                count:count
            
        })
    }
}
