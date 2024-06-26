



import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import {NavLink} from "react-router-dom"



const Order = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center' >
    <div className='space-y-5 flex flex-col justify-center'>
      <h1 className='text-xl font-semibold'>You don't any Order products</h1>
      <NavLink to='/'>
      <button className='bg-gray-800 text-white px-5 py-2 rounded-m drop-shadow-xl flex items-center space-x-2'>
        <span>Back to Shop</span>
        <BsArrowLeft />
      </button>
      </NavLink>
    </div>
  </div>
  )
}

export default Order

