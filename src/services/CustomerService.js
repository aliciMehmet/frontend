import axios from 'axios'


export default class CustomerService {
    getReceipt(businessId,tableId){
        return axios.get("http://localhost:8080/customer/getReceipt",{
            params:{
                businessId:businessId,
                tableId:tableId
            }
        })
    }

    
    callWaiter(businessId,tableId){
        return axios.get("http://localhost:8080/customer/callWaiter",{
            params:{
                businessId:businessId,
                tableId:tableId
            }
        })
    }
}
