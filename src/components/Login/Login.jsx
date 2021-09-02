import GoogleSignin from "./GoogleLogin";
import LoginForm from "./LoginForm";
import React from 'react'

const Login = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-between flex-column  vh-100 ">
    <div className="mb-auto mt-5 pt-5  w-75">
      <p>Welcome</p>
      <LoginForm />
      <p className="mt-5">Or</p>
      <GoogleSignin />
    </div>
  </div>
  )
}

export default Login
