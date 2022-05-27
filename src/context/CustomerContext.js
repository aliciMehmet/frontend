import React,{createContext, useState} from "react";

export const CustomerContext = createContext()

const CustomerContextProvider = (props) => {
    const [customer,setCustomer] = useState(null)

    const loginCustomer = (customer) =>{
        console.log("login user'a girdi")
        setCustomer(customer)
    }

    

    return (
        <CustomerContext.Provider value={{customer,loginCustomer}} >
            {props.children}
        </CustomerContext.Provider>
    )
}


export default CustomerContextProvider