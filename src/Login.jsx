import React from 'react'

function Login() {
  return (
    <div className="login">
      <form action="">
        <h1>Login Here</h1>
        <div>
       <input type="text" name="" id="" required/>
       <label htmlFor="">Email</label>
        </div>
        <div>
         <input type="password" name="" id="" required/>
         <label htmlFor="">Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
