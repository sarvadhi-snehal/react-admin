import React from 'react'

const LoginForm = () => {
    return (
        <form className="text-start">
        <div className="mb-3" controlId="formBasicEmail">
          <label >Email</label>
          <input className="border-0 border-bottom border-primary" type="email" placeholder="Enter email" />
         
        </div>
  
        <div className="mb-3" controlId="formBasicPassword">
          <label>Password</label>
          <input className="border-0 border-bottom border-primary" type="password" placeholder="Password" />
        </div>
  
        <button id="gradiant-bg" className="border-0 rounded-3 w-100 " variant="primary" type="submit">
          Submit
        </button>
      </form>
    )
}

export default LoginForm
