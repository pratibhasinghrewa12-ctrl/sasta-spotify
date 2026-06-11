import React from 'react'
import { useNavigate } from 'react-router'

const Register = () => {

    let navigate = useNavigate()

  return (

    <div className='h-screen bg-black/90 flex items-center justify-center '>
      <div className='flex flex-col items-center text-white'>
        <div>🎶</div>
        <h1 className='text-5xl text-center font-bold'>Sign up to <br />start listening</h1>
        <form className='w-full' >

            <br /> <br /><label htmlFor="email" className=''>Email address</label><br />
            <input id='email' type="email" placeholder='name@domain.com' className=' w-full border-2 mt-2 border-gray-500 rounded-md p-2' />
            <button className='w-full bg-green-500 p-2 rounded-4xl mt-5 text-black font-medium text-medium cursor-pointer hover:bg-green-400'>Next</button>
            
        </form>

            <h1 className='text-center py-5'>or</h1>
            <button className='border border-gray-500 rounded-2xl text-center p-2 w-full font-medium cursor-pointer hover:scale-105 hover:border-white'>Sign up with phone number</button>
            <button className='border border-gray-500 rounded-2xl text-center p-2 w-full font-medium cursor-pointer hover:scale-105 hover:border-white mt-3'>Sign up with Google</button>
            <button className='border border-gray-500 rounded-2xl text-center p-2 w-full font-medium cursor-pointer hover:scale-105 hover:border-white mt-3'>Sign up with phone Apple</button>

            <h1 className='mt-10 text-gray-400 font-medium'>Already have an account ?</h1>
            <button onClick={()=> navigate("/")} className='font-medium cursor-pointer hover:scale-105'>Log in</button>

      </div>
      
    </div>
  )
}

export default Register
