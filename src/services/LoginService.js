import axios from 'axios'

const LoginService = {
    login : (username,password) => {
        let promise = new Promise((myResolve,myReject) => {
            axios.post("http://localhost:8080/login",{
                username:username,
                password:password
    
            }).then(data =>{
                myResolve(data.data)
            }).catch(err =>{
                myReject(err)
            })
        })
        console.log("login cagrıldı");
       
        return promise
    }
}

export default LoginService