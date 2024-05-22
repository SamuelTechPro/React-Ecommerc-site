
import React, { useState } from 'react'

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




const Main2 = () => {
    let Products = [
        {
            img: glass,
            title: "Glass",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 40
        },
        {
            img: keyboard,
            title: "Black keyboard",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 990
        },
        {
            img: watch1,
            title: "Golden watch",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 500
        },
        {
            img: mouse,
            title: "Black Mouse",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 30
        },
        {
            img: laptop,
            title: "accer laptop",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 880
        },
        {
            img: watch2,
            title: "Gucci Watch",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 990
        },
        {
            img: desktop,
            title: "One plus Laptop",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 40
        },
        {
            img: desktop2,
            title: "First Star desktop",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 666
        },
        {
            img: glass2,
            title: "Eye covering goggle",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 40
        },
        {
            img: desktop,
            title: "One plus Laptop",
            desc: "Lorem ipsum dolor sit amet consectetur",
            price: 40
        },
        ]

        const [filteredProducts, setFilteredProducts] = useState(Products)
        const searchHandler = (e)=> {
            const filteredArray = Products.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
            if(filteredArray.length !=0){
                setFilteredProducts(filteredArray);
            }
        }





  return (
    <div className='w-full relative' >
      <div className='sticky top-0 z-10'>
            <div className='header flex justify-between item-center p-4 bg-white ' >
                <h1 className='text-3xl font-bold' >The Apex Shop</h1>
                <div className='search flex justify-between items-center px-5 py-2 bg-gray-100 rounded '>
                    <input type='text' placeholder='search product' className='bg-transparent outline-0'onChange={searchHandler}  />
                    <button onClick={() => searchHandler()}  ><CiSearch /></button>
                </div>
            </div>
            <div className=' w-full flex justify-between  px-2 py-10 categories'>
                <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Watches</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Laptop</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Monitor</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Mouse</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Keyboard</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Glasses</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Laptop</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Laptop</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Laptop</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Laptop</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Laptop</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Watches</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Laptop</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Monitor</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Mouse</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-full drop-shadow-lg'>
                    <p>Keyboard</p>
                </div>
            </div>
      </div>

      <div className='products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20'>
        {filteredProducts && filteredProducts.map((product,idx) => {
            return(
                <div key={idx} className='product h-[300px] bg-white drop-shadow-2xl p-2 border'>
                <img src={product.img} alt='' className='w-full h-[60%] object-cover p-2' />
                <div className='m-2 bg-gray-100 p-2'>
                    <h1 className='text-2xl font-semibold'>{product.title}</h1>
                    <p className='text-sm'>{product.desc}</p>
                        <div className='flex justify-between items-center '>
                            <p className='text-xl font-bold'>${product.price}</p>
                            <CiShoppingCart size={"1.4rem"} />
                        </div>
                </div>
            </div>
            )
        })}
    
      </div>
    </div>
  )
}

export default Main2
