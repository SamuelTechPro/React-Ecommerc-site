
import React from 'react'
import { CiSearch, CiShoppingCart } from "react-icons/ci"
import watch1 from "../asset/watch1.jpg"
import watch2 from "../asset/watch2.jpg"
import desktop from "../asset/desktop.jpg"
import desktop2 from "../asset/desktop2.jpg"
import glass from "../asset/glass.jpg"
import glass2 from "../asset/glass2.jpeg"
import keyboard from "../asset/keyboard.jpg"
import laptop from "../asset/laptop.jpg"
import mouse from "../asset/mouse.jpg"


const Main = () => {
  return (
      <div className='w-full relative'>
          <div className='sticky top-0 z-10'>
            <div className='header flex justify-between items-center p-4 bg-white'>
              <h1 className='text-3xl font-bold'>The Apex Shop</h1>
              <div className='search flex justify-between items-center px-5 py-2 bg-gray-100 rounded'>
                  <input type='text' placeholder='Search product' className='bg-transparent outline-0' />
                  <button><CiSearch /></button>
              </div>
            </div>
            
            <div className='categories w-full flex space-x-8 px-2 py-10'>
              <div className='bg-black text-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Watches</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Laptop</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Monitor</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Mouses</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Glasses</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Keyboard</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Laptop</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Laptop</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Laptop</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Laptop</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Laptop</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Mouse</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Watches</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Laptop</p>
              </div>
              <div className='bg-white px-5 py-3 rounded-full drop-shadow-xl'>
                  <p>Monitors</p>
              </div>
            </div>
          </div>
            <div className='products grid grid-cols-2 xl:grid-cols-2 lg:rid-cols-3 gap-9 p-4 z-20 '>
                <div className='product h-[300px] bg-white drop-shadow-2xl p-2 border '>
                  <img src={watch2}  className='w-full h-[60%] object-cover p-2' />
                  <div>
                    <h1 className='text-xl font semibold' >Sun Glasses</h1>
                    <h1 className='text-sm'>Black sun glasses</h1>
                    <div>
                      <p className='text-xl font-bold'>$50.00</p>
                      <CiShoppingCart size={'1.4rem'} />
                    </div>
                  </div>
                </div>
            </div>
      </div>
   
  )
}

export default Main
