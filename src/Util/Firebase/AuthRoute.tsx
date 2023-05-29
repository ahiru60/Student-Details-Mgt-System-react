import React, { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { useNavigate } from "react-router-dom";

export function AuthRoute (props:any){
  const {children} = props
  const auth = getAuth()
  const[loading,setLoading] = useState(false)

  useEffect(()=>{
    AuthCheck()
  },[auth])

  const AuthCheck = onAuthStateChanged(auth,(user)=>{
    if(user){
      setLoading(false)
    }
    else{
      console.log("unauthorized login")
      window.location.replace("./login")
    }
  })
  if(loading) return  <p>Loading....</p>
  return (<>{children}</>)
};