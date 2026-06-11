import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Pages/Login'
import AuthLayout from '../layout/AuthLayout'
import Register from '../Pages/Register'
import MainLayout from '../layout/MainLayout'
import Home from '../Pages/Home'

const AppRoutes = () => {

  return (

    <div> 

        <Routes>

            <Route path='/' element={<AuthLayout/>}>

                <Route path='' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
            
            </Route>

            <Route path='/home' element={<MainLayout/>}>

                <Route path='' element={<Home/>}/>




            </Route>

            



        </Routes>
      
    </div>
  )
}

export default AppRoutes
