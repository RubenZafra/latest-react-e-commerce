import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {

  const users = [
    {
      username: "Ruben", 
      password: "1234"
    }
  ]

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleUserInput = ({target}) => {
    const {value} = target
    setUser(value)
  }
  
  const handlePassInput = ({target}) => {
    const {value} = target
    setPass(value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(users.find(item => item.username === user) && users.find(item => item.password === pass)){
      loginSuccess(user, pass)
    } else {
      loginError('Invalid Username/Password');
    }
  }

  const {authState, loginSuccess, loginError, logout} = useContext(AuthContext)


    
  return (
    <div className='h-screen flex items-center justify-center'>
      <form className='flex items-center gap-8 border-b border-red-300'>
        <label htmlFor="user">User:</label>
        <input id="user"type="text" value={user} onChange={handleUserInput}/>
        <label htmlFor="pass">Password:</label>
        <input type="password" name="" id="pass" value={pass} onChange={handlePassInput}/>
        <button onClick={handleSubmit} className='border bg-red-300 rounded-md p-4' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login