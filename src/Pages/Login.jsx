import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

    let navigate = useNavigate()

  return (

    <div className='h-screen bg-black/90 flex items-center justify-center '>
      <div className='flex flex-col items-center text-white'>
        <div>🎶</div>
        <h1 className='text-5xl text-center font-bold'>Welcome back</h1>
        <form className='w-full' >

            <br /> <br /><label htmlFor="email" className=''>Email address</label><br />
            <input id='email' type="email" placeholder='name@domain.com' className=' w-full border-2 mt-2 border-gray-500 rounded-md p-2' />
            <button className='w-full bg-green-500 p-2 rounded-4xl mt-5 text-black font-medium text-xl cursor-pointer hover:bg-green-400 hover:scale-105'>continue</button>
            
        </form>

            <h1 className='text-center py-5'>or</h1>
            <button className='border border-gray-500 rounded-2xl text-center p-2 w-full font-medium cursor-pointer hover:scale-105 hover:border-white'>Continue with phone number</button>
            <button className='border border-gray-500 rounded-2xl text-center p-2 w-full font-medium cursor-pointer hover:scale-105 hover:border-white mt-3'>Continue with Google</button>
            <button className='border border-gray-500 rounded-2xl text-center p-2 w-full font-medium cursor-pointer hover:scale-105 hover:border-white mt-3'>Continue with Facebook</button>
            <button className='border border-gray-500 rounded-2xl text-center p-2 w-full font-medium cursor-pointer hover:scale-105 hover:border-white mt-3'>Continue with phone Apple</button>

            <h1 className='mt-10 text-gray-400 font-medium'>Don't have an account ?</h1>
            <button onClick={()=> navigate("/register")} className='font-medium cursor-pointer hover:scale-105'>Sign up</button>

      </div>
      
    </div>
  )
}

export default Login
