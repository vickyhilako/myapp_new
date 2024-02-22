import React from 'react'
const {Route,Link,Navigate, require}=require ('react-router-dom')    

const PrivateRoute=({children})=> {
const token=localStorage.getItem('token')
if (token) {
    return children
    
}
  return Navigate
  
}

export default PrivateRoute
