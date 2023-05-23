import React,{useState} from "react";
import "./login.css";
import axios from "axios";
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) =>{

   // const history = useHistory()
   const navigate = useNavigate();
    const[user,setUser] = useState({
        email:"",
        password:"",
    })
    
    const handleChange = e =>{
        const{name, value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    } 
    const login = () => {
        const { email, password } = user;
      
        axios
          .post("http://localhost:9002/login", { email, password })
          .then((res) => {
            alert(res.data.message);
            setLoginUser(res.data.user)
            navigate("/");
            // Handle the response data accordingly
          })
          .catch((error) => {
            alert(error.response.data.message);
            // Handle the error response
          });
      };
      
    // const login = ()=>{
    //     axios.post("http://localhost:9002/",user)
    //     .then(res => console.log(res))
    // }

    return(
        <div className="login">
            {/* {console.log(user)} */}
        <h1>Login</h1>   
        <input type="text"  name="email" value={user.email} onChange={handleChange} placeholder="Enter your email"></input>
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
        <div className="button" onClick={login}>Login</div>
        <div>or</div>
        {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
        <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    )
}
export default Login;