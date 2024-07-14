import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

export default function Register() {

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate("/add");
    }
  },[])

  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  async function signUp()
  {
    let item = {password,email}
    console.warn(item)
// We assuming this api
    let result = await fetch("https://reqres.in/api/login",{
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application.json'
      }
    })
    result = await result.json()
    // console
    
    localStorage.setItem("use-info",JSON.stringify(result))
    navigate("/add")
  }
  return (
    <>
    <Header/>
   
    <div className = "col-sm-6 offset-sm-3 text-center ">
      
    <h1 className='text-center mt-5'>Register Page</h1>
    <input className="form-control mt-5" type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' />
    <input className="form-control mt-5" type="text" value = {email} onChange={(e)=> setEmail(e.target.value)} placeholder='email'/>
    <input className="form-control mt-5" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password' />
    

    <button onClick={signUp} className='btn btn-primary  rounded mt-5 '> Login </button>
    
    </div>
    
    </>
  )
}
