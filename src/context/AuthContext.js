import React,{createContext, useState} from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [user,setUser] = useState(null)

    const loginUser = (user) =>{
        console.log("login user'a girdi")
        setUser(user)
    }

    const logoutUser = () =>{
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user,loginUser,logoutUser}} >
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider