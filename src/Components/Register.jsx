import React,{ useEffect, useState } from 'react'
import glogo from "../Assets/images/google.svg"
import bgimg from "../Assets/images/image.jpg"
import { Link } from "react-router-dom";


function Register() {
    const [data,setdata]=useState([])

    const [info, setInfo] = useState({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    const handleChange = (e) => { 
        setInfo((prev)=>({
          ...prev,
          [e.target.name]:e.target.value,
             
        }),
        console.log(info),
        console.log(data)
        );
    
      };

    const register= async()=>{

        try {
            const response = await fetch("https://dummyjson.com/auth/login",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
            },
            body:JSON.stringify({
  
                username:"kminchelle",
                password:"0lelplR"
        
              }),
            
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log(data);

    } catch (error){
        console.log(error)
    }
};


useEffect(()=>{
    register();

   
},[]);

    // useEffect(()=>{
    //     fetch("https://dummyjson.com/auth/login",{
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' 
    //   },
    //     body:JSON.stringify({
  
    //       username:"kminchelle",
    //       password:"0lelplR"
  
    //     }),
       
    //     }).then((res)=>res.json()

    //     )
      
    //      .then((data)=>console.log(data))
    //       .catch((err)=>console.log(err, "network Issue"))
    //    },[]);

    //   localStorage.setItem("token",data.token);
    //    console.log(data.token);




  return (


    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Create Your Account</span>
          <span className="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
          <div className="py-4">
            <span classNameName="mb-2 text-md">Name</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              placeholder='Enter your name'
              id="name"
              onChange={handleChange}
            />
          </div>

          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder='Enter your email'
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              placeholder='Enter your password'
              name="password"
              id="password"
              
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              onChange={handleChange}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Confirm Password</span>
            <input
              type="confirmpassword"
              name="confirmpassword"
              id="confirmpassword"
              placeholder='Enter your confirm password'
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              onChange={handleChange}
            />
          </div>


          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign Up
          </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <img src={glogo} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            I'have already account?
            <Link to="/login" className="font-bold text-cyan-600">
              Sign In
            </Link>
          </div>
          
        </div>
    
        <div className="relative">
          <img
            src= {bgimg}
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* <!-- text on image  --> */}
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl"
              >We've been uesing Untitle to kick"<br />start every new project
              and can't <br />imagine working without it."
            </span>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Register
