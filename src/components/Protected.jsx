import React,{useState,useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



export default function Protected(props) {
  let Cmp = props.Cmp;
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('user-info')){
        navigate("/register")
    }
  },[])
  return (
    <div>
       <Cmp/>
       </div>
  )
}
