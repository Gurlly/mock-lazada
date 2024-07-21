
import React from 'react'
import { useCart } from '../hooks/useCart';

import { IoStarSharp } from "react-icons/io5";
import { BsFillCartPlusFill } from "react-icons/bs";

const ItemCard = ({item}) => {

    const { addToCart } = useCart();

  return (
    <>
        <div 
        className="flex flex-col group bg-white border shadow-sm overflow-hidden hover:shadow-lg transition" 
        href="/">
            <div className="relative pt-[100%] overflow-hidden">
                <img 
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                src={item.src}
                alt="Item 1" />
            </div>
            <div className="p-3 md:p-4">
                <h3 className="font-semibold text-laz-text truncate">
                    {item.name}
                </h3>
                <p className="my-1 text-lg text-laz-orange font-semibold">
                    &#8369; {item.price}
                </p>
                {/** Ratings */}
                <div className="flex items-center justify-between">
                    <div className='flex'>
                        {
                            [...Array(5)].map((_, index) => (
                                <button
                                key={index}
                                type="button"
                                className={`inline-flex justify-center items-center text-2xl rounded-full ${
                                    index < item.ratings ? 'text-laz-rating' : 'text-laz-gray hover:text-yellow-400'
                                }`}
                                >
                                    <IoStarSharp size={22} />
                                </button>
                            ))
                        }
                    </div>
                    <BsFillCartPlusFill size={18} className='text-laz-banner cursor-pointer' onClick={() => addToCart(item)}/>
                </div>  
            </div>
        </div>
    </>
  )
}

export default ItemCard