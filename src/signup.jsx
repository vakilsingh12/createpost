import React from 'react'

function Login() {
  return (
    <div className="login">
      <form action="">
        <h1>SignUp</h1>
        <div>
       <input type="text" name="email" id="" required/>
       <label htmlFor="">Email</label>
        </div>
        <div>
         <input type="password" name="password" id="" required/>
         <label htmlFor="">Password</label>
        </div>
        <div>
         <input type="password" name="cpassword" id="" required/>
         <label htmlFor="">Confirm Password</label>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Login
