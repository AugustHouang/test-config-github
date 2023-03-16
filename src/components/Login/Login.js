import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button';
import { UserAuth } from '../Context API/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = async()=>{
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    if(user!=null){
      navigate('/dashboard')
    }
  },[user])
  return (
    <div>
     <h1>Login</h1>
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
    </div>
  )
}