import React,{createContext, useState} from "react";

export const ItemContext = createContext()

const ItemContextProvider = (props) => {
    const [products,setProducts] = useState([])

    const addProducts = (newProducts) =>{
        setProducts(prevState => [...prevState, newProducts]);
        console.log("products : ",products)
    }

    return (
        <ItemContext.Provider value={{products,addProducts}} >
            {props.children}
        </ItemContext.Provider>
    )
}


export default ItemContextProvider