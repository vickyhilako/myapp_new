import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//const API= "https://dummyjson.com/users";


function Signup() {
  const [data,setdata]=useState([])

  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const register=()=>{};
    useEffect(()=>{
      fetch("https://dummyjson.com/auth/login",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' 
      },
        body:JSON.stringify({
  
          username:"kminchelle",
          password:"0lelplR"
  
        }),
       
        }).then((res)=>res.json()

        )
          .then((data)=>console.log(data))
          .catch((err)=>console.log(err, "network Issue"))
       },[]);
  
 

  const handleChange = (e) => {
    //  console.log(e.target.name);
  
    setInfo((prev)=>({
      ...prev,
      [e.target.name]:e.target.value,
     

         
    }),
    console.log(info));

  };
 return (
    <div className="signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-info">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h5 className="text-center">Welcome {info.name} </h5>
          <h3 className="text-center">Sign Up </h3>
          <div className="mb-2">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email Id"> Email</label>
            <input
              type="email"
              placeholder="Enter Email Id"
              name="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              name="confirm_password"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary">Sign Up</button>
          </div>

          <p className="text-end mt-2">
            Already Registered{" "}
            <Link to="/" className="ms-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
