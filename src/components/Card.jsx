import React from 'react'

export default function Card(props) {

  const {product} = props

  return (
    <div className='flex flex-col items-center text-center border-2 p-7 rounded-md duration-200 hover:shadow-sm hover:shadow-emerald-500 sm:w-1/2  md:w-1/4 lg:w-1/6  '>
         <img className='h-[150px] object-fill mb-4' src={product.image} alt="" />
        <div className='mb-4'>
            <h4 className='text-lg font-semibold h-[30px]'>{product.title.split(" ").slice(0,3).join(" ")}</h4>
            <h5 className='text-md text-slate-600 font-thin'>{product.category}</h5>
        </div>
         <div className='flex items-center gap-3 mb-3'>
             <div className='flex gap-1 items-center'>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <p className='text-green-600 font-bold'>{product.rating.rate}</p>
            </div>
          <div>
            <p className='text-md font-semibold'>{product.price}£</p>
          </div>
         </div>
         <button className='py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-800 duration-200'>Add to cart </button>
      </div>
  )
}
