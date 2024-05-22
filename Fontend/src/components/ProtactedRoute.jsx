import React, { Children } from 'react'
import {Outlet, Navigate } from 'react-router-dom'

const ProtactedRoute = ({Children}) => {
  const isAuthenticated = localStorage.getItem('token')!== null;
  if(!isAuthenticated){
    
  }
  console.log("🚀 ~ ProtactedRoute ~ isAuthenticated:", isAuthenticated)
  return (
    // how to protect a route in react js ? 
      
    isAuthenticated ? <Outlet/> : <Navigate  to="login" />
  )
}

export default ProtactedRoute